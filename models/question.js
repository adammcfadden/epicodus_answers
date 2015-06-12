App.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr()
  // answers: hasMany('answer', {async: true})
});
