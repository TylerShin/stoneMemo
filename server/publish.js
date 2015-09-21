Meteor.publish('results', function(page) {
    return Results.find({user_id: this.userId}, {sort: {createdAt: -1}, limit: page });
});