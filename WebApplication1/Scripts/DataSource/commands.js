function onPushDialog(self, options) {
    /// <summary>Used to open the push dialog (from the return of the getPushDialog action)</summary>
    /// <param name="self" type="Object">the original caller of the command</param>
    /// <param name="options" type="Object">the dialog options default + from server</param>

    var pushOptions = options;
    pushOptions.onCancel = function (event, param) {
        $.getJSON(window.basePath + "Push/FinishBeforePush", {
            credentialk: options.Key
        });
    };
    pushOptions.onOK = function (event, param) {
        //the user validated the selection dialog (with studies to push and nodes)
        //call the push and display the progress here

        var nodes = param.controls.nodeList.getSelectedValues(undefined, "Id");
        $.getJSON(window.basePath + "Push/pushToNodes",
            //when the user can reselect the studies in the dialog use this : JSON.stringify({ SelectedStudies : mystudyList.getValue()}),
                {
                    nodes: nodes, credentialk: options.Key
                },
            function (data) {
                //we prepare the data with specific code regarding the multiple progress bars
                self.launchProgressDialog(data, Push);
            },//the screen will be blocked while we are waiting from the server reply
                {
                    Synchronous: true
                });
        return true;
    };
    $.dialogs.PushDialog(pushOptions);
};