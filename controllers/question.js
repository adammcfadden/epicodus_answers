App.QuestionController = Ember.ObjectController.extend({
  notEditing: true,
  actions: {
    edit: function(){
      this.set('notEditing', false)
    },
    delete: function(){
      if (confirm('Do you really want to delete this question?')) {
        if (confirm('But it\'s such a good question. Are you sure?')) {
          this.get('model').destroyRecord();
        }
      }

      this.transitionToRoute('questions')
    },
    save: function(){
      this.set('question', this.get('question')),
      this.set('author', this.get('author')),
      this.set('description', this.get('description')),
      this.set('notEditing', true)
    },
    showAnswer: function(answer) {
     this.set('currentAnswer', answer)
     $("#myModal").modal('show');
    },
    deleteAnswer: function(currentAnswer) {
      currentAnswer.destroyRecord();
      $("#myModal").modal('hide');
    }
  }
});
