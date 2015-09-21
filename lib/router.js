FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render('layout', { top: "header", main: "resultsList" });
    }
});