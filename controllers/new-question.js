App.NewQuestionController = Ember.ObjectController.extend({
  actions: {
    save: function(){
    var newQuestion = this.store.createRecord('question',{
      question: this.get('question'),
      author: this.get('author'),
      description: this.get('description')
    });
    newQuestion.save();
    this.transitionToRoute('questions')

    this.set('question', null)
    this.set('author', null)
    this.set('descrition', null)
    }
  }
});
