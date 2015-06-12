App.QuestionController = Ember.ObjectController.extend({
  notEditing: true,
  actions: {
    edit: function(){
      this.set('notEditing', false)
    },
    save: function(){
      this.set('question', this.get('question')),
      this.set('author', this.get('author')),
      this.set('description', this.get('description'))
      this.set('notEditing', true)
    }
  }
});
