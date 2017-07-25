var nocProducts;

$(document).ready(function () {
    $('.findNocproducts').kwicks({
        max: 541,
        min: 51,
        sticky: true
    });

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/NOC.asmx/GetProductData",
        data: "{}",
        dataType: "json",
        success: function (msg) {
            nocProducts = msg.d;
            var data = nocProducts["Rows"];
            initForms(data);
        }
    });

    $(".lnkMap").bind("click", function (e) {
        e.preventDefault();

        var map = $("#" + $(this).attr("href"));

        map.modal({
            opacity: 80,
            overlayCss: { backgroundColor: "#333" },
            overlayClose: true
        });
    })
});

function initForms(data) {
    $("ul.findNocproducts li").each(function (index) {
        var productId = $(this).attr("id").replace("product", "");
        var productData = null;
        var stateSelect = $("select[id^=state]", this);
        var countySelect = $("select[id^=county]", this);
        var btnGo = $("input[type='submit']", this);
        var productLI = $("#product" + productId);

        countySelect.append("<option value=''>Select a State Above</option>");

        productData = jQuery.grep(data, function (item, i) {
            if (item["Product"] == productId) {
                return item;
            }
        });

        var currentState = "";
        $.each(productData, function (index, product) {
            if (product.State != currentState) {
                if (currentState == "") {
                    stateSelect.append("<option value=''>Select a State</option>");
                    stateSelect.append("<option value='" + escape(product.State) + "'>" + product.State + "</option>");
                } else {
                    stateSelect.append("<option value='" + escape(product.State) + "'>" + product.State + "</option>");
                }
                currentState = product.State;
            }
        });

        stateSelect.bind("change", function () {
            if (stateSelect.val() != "") {
                showCounties(productData, stateSelect.val(), countySelect);

                productLI.find("div p.mapSmall").hide();
                var stateProductMap = $("#" + stateSelect.val().toLowerCase() + productId + "");
                if (stateProductMap.length > 0) {
                    stateProductMap.show();
                }
            }
        });
        btnGo.bind("click", function (event) {
            event.preventDefault();
            if (countySelect.val() != "") {
                location.href = countySelect.val();
            }
        });
    });
}

function showCounties(data, state, countySelect) {
    countySelect.children("option").each(function () {
        $(this).remove();
    });
    countySelect.append("<option value=''>Select a County</option>");

    var counties = jQuery.grep(data, function (item, i) {
        if (item["State"].toLowerCase() == unescape(state).toLowerCase()) {
            return item;
        }
    });
    $.each(counties, function (index, county) {
        countySelect.append("<option value='" + county.clientUrl + "'>" + county.DisplayCountyName + "</option>");
    });
}
