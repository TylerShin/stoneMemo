Meteor.methods({
   deleteResult: function(itemId) {
       Results.remove({_id: itemId});
   }
});