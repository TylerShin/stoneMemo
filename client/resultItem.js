Template.resultItem.helpers({
    winOrNot: function () {
        if (Template.instance().data.matchResult) {
            return "승리"
        } else {
            return "패배"
        }
    },
    createdDate: function () {
        return moment(Template.instance().data.createdAt).format('YY-MM-DD HH:mm')
    }
});

Template.resultItem.events({
    'click [name="deleteBtn"]': function (e, tmpl) {
        var self = this;
        var conf = confirm("정말 삭제합니까?");
        if(conf){
            Meteor.call('deleteResult', self._id);
        } else {
            console.log("nono");
        }
    }
});