goog.provide('hoge.App');
goog.require('goog.ui.SpriteBox');

hoge.App = function(){
  this.initialize_();
}

hoge.App.prototype.initialize_ = function(){
  var bodyElement = document.createElement("body");
  document.body = bodyElement;

  var he = new goog.ui.SpriteBox();
  he.render(document.body);
};

new hoge.App();