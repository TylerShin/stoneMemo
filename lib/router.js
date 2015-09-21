FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render('layout', { top: "header", main: "resultsList" });
    }
});
FlowRouter.route('/statistic', {
    action: function(params) {
        BlazeLayout.render('layout', { top: "header", main: "statistic" });
    }
});
