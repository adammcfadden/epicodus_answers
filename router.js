App.Router.map(function() {
  this.resource('questions', {path: '/'}, function() {
    this.resource('new-question');
  });
  this.resource('question', {path: '/:question_id'});
});
