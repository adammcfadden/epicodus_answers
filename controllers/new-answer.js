App.NewAnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    save: function() {
    var newAnswer = this.store.createRecord('answer',{
      answer: this.get('answer'),
      author: this.get('authorName'),
    });
    newAnswer.save();

    var question = this.get('controllers.question.model');
    question.get('answers').pushObject(newAnswer);
    question.save();

    this.transitionToRoute('question', question.id)


    this.set('answer', null)
    this.set('authorName', null)
    }
  }
});
