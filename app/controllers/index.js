module.exports = {
  index: function *index(next) {
    this.body = "Welcome to Lego app!";
  },

  view: function *index(next) {
    yield this.render('index.ect', {
      title: 'Render view template'
    });
  },

  test: function *(next, id) {
    this.body = "Get param from contrller: " + this.params.id;
  }
};