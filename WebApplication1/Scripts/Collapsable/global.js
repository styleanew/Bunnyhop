$(document).ready(function () {
    KeyListener.init();

    $("#login").bind("click", function () {
        $("#findNocBox").hide();
        $("#loginBox").slideToggle();
    });

    if (typeof ($("#banner h2").val()) !== 'undefined' && $("#banner h2").text() == "") {
        $("#prev").bind("click", function () { stepBanner('prev'); }).show();
        $("#next").bind("click", function () { stepBanner('next'); }).show();
        randomBanner();
    }

    $("div.expandCollapse.open").children("h2").children("a").toggleClass("expandCollapseOpen").parent().next("ul").slideToggle();

    $("div.expandCollapse h2").bind("click", function (e) {
        e.preventDefault();
        $(this).children("a").blur().toggleClass("expandCollapseOpen").parent().next("ul").slideToggle();
    });

    $("a.lnkModal").live("click", function (e) {
        e.preventDefault();
        var modalPageUrl = $(this).attr("href");
        var iframeAttributes = $(this).attr("rel");
        var tempWidth = "";
        var tempHeight = "";
        var tempOverlayClose = "";

        if (typeof (iframeAttributes) != "undefined") {
            iframeAttributes = iframeAttributes.split(";");
            tempWidth = parseAttributes(iframeAttributes, "=", "width");
            tempHeight = parseAttributes(iframeAttributes, "=", "height");
            tempOverlayClose = parseAttributes(iframeAttributes, "=", "overlayClose");
        }
        var iframeWidth = tempWidth == "" ? "600" : tempWidth;
        var iframeHeight = tempHeight == "" ? "400" : tempHeight;
        var iframeOverlayClose = tempOverlayClose == "" ? true : (tempOverlayClose === 'false') ? false : true;

        $('<iframe name="contactTips" id="contactTips" style="display: none;" src="' + modalPageUrl + '" width="' + iframeWidth + '" height="' + iframeHeight + '" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"></iframe>').modal({
            opacity: 80,
            overlayCss: { backgroundColor: "#333" },
            overlayClose: iframeOverlayClose
        });
    });
});

function parseAttributes(attributes, delimiter, key) {
    var tempValue = "";
    for (i = 0; i < attributes.length; i++) {
        var tempAttribute = attributes[i].split(delimiter);
        if (tempAttribute.length > 0) {
            if (tempAttribute[0] == key && tempAttribute.length == 2) {
                tempValue = tempAttribute[1];
                break;
            }
        }
    }
    return tempValue;
}

$("a.btnMore").bind("click", function (event) {
    event.preventDefault();
    $(this).parent().hide();
    $(this).parent().next(".moreText").slideDown();
});

$("a.btnMoreClose").bind("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().slideUp(500, function () {
        $(this).prev("p").show();
    })
});

KeyListener = {
    init: function () {
        $('#page').bind('keypress', function (e) {
            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
            var target = e.target.tagName.toLowerCase();
            if (key === 13 && (target === 'input' || target === 'select')) {
                e.preventDefault();

                var parentFieldset = $(e.target).parents('fieldset[class^="submit"]');
                var button = parentFieldset.find('input[type="submit"]');
                button.trigger('click');
            }
        });
    }
};

sfHover = function () {
    var sfEls = document.getElementById("topNav").getElementsByTagName("LI");
    for (var i = 0; i < sfEls.length; i++) {
        sfEls[i].onmouseover = function () {
            this.className += " sfhover";
            this.style.zIndex = 1000;
        }
        sfEls[i].onmouseout = function () {
            this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

var bannerQuotes = new Array;
//bannerQuotes[0] = new testimonial("govCA gov","There has never been a more important time to find cost-effective ways to connect our veterans and military service members with the critical services they need.","Arnold Schwarzenegger<br>Governor of California");
bannerQuotes[0] = new testimonial("govCT gov", "The new Network of Care Web site provides an invaluable resource for the residents of the State of Connecticut - especially to those in our communities who are looking for help, referrals, support or services.", "Michael Fedele<br>Lieutenant Governor of Connecticut");
bannerQuotes[1] = new testimonial("govOR gov", "The Network of Care represents a breakthrough solution for the elderly and people with disabilities and those who care for them.", "Ted Kulongoski<br>Governor of Oregon");
bannerQuotes[2] = new testimonial("govMD gov", "We are proud to be the first state in America to launch the Veterans Network of Care portal. We hope that other states follow our example and make veterans' health a leading priority.", "Anthony G. Brown<br>Lieutenant Governor of Maryland");
bannerQuotes[3] = new testimonial("govNE gov", "The Network of Care site provides unprecedented access to information and resources for those dealing with mental illness and substance-abuse issues in our state.", "Dave Heineman<br>Governor of Nebraska");
bannerQuotes[4] = new testimonial("aguirre", "The Network of Care has provided for the community of San Diego access to all one would ever want to know about mental health. This culturally responsive, Web-based resource is friendly to consumers and family members, which makes a concerted effort to 'demystify' mental health and to minimize jargon. The Network of Care has been San Diego's most impressive example of putting into action the rhetoric of No Wrong Door.", "ALFREDO AGUIRRE<br>LCSW, Director<br>County of San Diego");
bannerQuotes[5] = new testimonial("neff", "In my position as the Director of Operations at the Lorain County Board of Mental Health, it was my charge to bring the Network of Care for Mental Health online here locally. Since that time, we have been thrilled by both the immediate and sustained levels of hits and visitors to the site. It provides us with a powerful, flexible way to promote the services and treatment options that are available in our local community.", "CHARLES A. NEFF<br>Director of Operations<br>Lorain County, Ohio, Mental Health Board");
bannerQuotes[6] = new testimonial("smith", "The Network of Care has been a tremendous resource for both our staff and the folks we serve. The resources it places at our fingertips is amazing. It has been a great tool for seniors, the disabled, and their families to educate themselves, find resources and maximize options available to them. All of this helps them stay independent and live with dignity. We are tremendously pleased to be able to offer this to the people of San Diego.", "PAMELA SMITH<br>Director<br>County of San Diego CA, Aging & Independence Services");
bannerQuotes[7] = new testimonial("maue", "The site that Trilogy provides to counties for behavioral-health services is revolutionary, putting power and control in the hands of consumers and providers to address their own behavioral-health issues of themselves, their family members and their clients in a way heretofore unknown. This product reduces barriers, increases knowledge, and provides information instantaneously to the providers and recipients of care.", "CAROLYN MAUE<br>Executive Director<br>American College of Mental Health Administration");
bannerQuotes[8] = new testimonial("wengerd", "We had a fantastic, well-attended kickoff press conference. The County Board of Supervisors was in attendance and saw their project firsthand, coming to fruition. They have been very pleased with the rollout. Progress reports since the rollout have shown a dramatically increasing utilization curve since the second month. Collaboration between county agencies and our County Library has contributed to a very rich Web site accessible throughout the county.", "JERRY WENGERD<br>Director, Adult Services Fresno County, CA");
bannerQuotes[9] = new testimonial("refowitz", "First and foremost, from the perspective of a director, the Web site enabled the County Mental Health Department to give a comprehensive source of information to the community regarding program resources; information regarding mental health treatment; nature of the illnesses, and the ability to set up one's own advance directives... Without fail, stakeholders are blown away by the ease of use of the site.", "MARK REFOWITZ<br>Behavioral Health Director<br>Orange County, CA, Health Care Agency");
bannerQuotes[10] = new testimonial("scherra", "According to NAMI members the information is so readable, so understandable and so up to date that it is a wonderful replacement for the handouts that they previously used, which were often difficult to understand and outdated in a number of areas. It also allows people to ask questions about things that the Family to Family presenters may not know, but can look up immediately and be able to respond to.", "KAREN SCHERRA<br>Executive Director<br>Clermont County, Ohio, Mental Health and Recovery Board");
bannerQuotes[11] = new testimonial("shern", "I first learned of the Network of Care software when I was chairing the planning committee for the American College of Mental Health Administration annual Santa Fe Summit on Mental Health. The Summit focused on the transformation of the American mental-health system envisioned by the President's New Freedom Commission on Mental Health.", "DAVID L. SHERN<br>Dean and Professor<br>University of South Florida");
bannerQuotes[12] = new testimonial("vonhorn", "The Network of Care has been a tremendous resource for both our staff and the folks we serve. The resources it places at our fingertips are amazing. It has been a great tool for seniors, the disabled, and their families to educate themselves, find resources and maximize options available to them. All of this helps them stay independent and live with dignity. We are tremendously pleased to be able to offer this to the people of San Diego.", "RICHARD VAN HORN.President<br>Mental Health America of Los Angeles");

var currentBannerIndex = 0;
var maxIndex = bannerQuotes.length;

function randomBanner() {
    var bannerIndex = Math.floor(Math.random() * maxIndex);
    loadBanner(bannerIndex);
}

function stepBanner(direction) {
    if (direction == "prev") {
        currentBannerIndex--;
        if (currentBannerIndex < 0) {
            currentBannerIndex = maxIndex - 1;
        }
    } else {
        currentBannerIndex++;
        if (currentBannerIndex >= maxIndex) {
            currentBannerIndex = 0;
        }
    }
    loadBanner(currentBannerIndex);
}

function loadBanner(index) {
    if (isNaN(index) || index > maxIndex) {
        index = currentBannerIndex;
    } else {
        currentBannerIndex = index;
    }
    $("#banner").removeClass().addClass(bannerQuotes[index].className);
    $("#banner h2").text(bannerQuotes[index].quote);
    if (bannerQuotes[index].author != "") {
        $("#banner h2").append("<span> - " + bannerQuotes[index].author + "</span>");
    }
}

function testimonial(className, quote, author) {
    this.className = className;
    this.quote = quote;
    this.author = author;
}