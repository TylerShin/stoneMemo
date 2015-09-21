Template.resultsList.onCreated(function () {
    var self = this;
    self.pagination = new ReactiveVar(10);
    self.autorun(function () {
        self.subscribe('results', self.pagination.get());
    });
});

Template.resultsList.helpers({
    matchResults: function () {
        return Results.find({}, {sort: {createdAt: -1}});
    },
    noMore: function () {
        if (Template.instance().pagination.get() === Results.find().count()) {
            return 'more';
        } else {
            return 'disabled';
        }
    }
});

Template.resultsList.events({
    'click [name="firePagination"]': function (e, tmpl) {
        console.log(e.target.textContent);
        if (e.target.textContent == "disabled") {
            console.log("더 이상 기록이 없습니다.");
        } else {
            var pageNow = tmpl.pagination.get();
            tmpl.pagination.set(pageNow + 5);
        }
    }
});