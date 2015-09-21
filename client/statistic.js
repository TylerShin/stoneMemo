Template.statistic.onCreated(function () {
    var self = this;
    self.pagination = new ReactiveVar(10);
    self.autorun(function () {
        self.subscribe('results', self.pagination.get());
    });
});
