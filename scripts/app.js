goog.provide('hoge.App');
goog.require('goog.ui.SpriteBox');

hoge.App = function(){
  this.initialize_();
}

hoge.App.prototype.initialize_ = function(){
  var bodyElement = document.createElement("body");
  document.body = bodyElement;
//  bodyElement.innerHTML = '<div class="box"><img src= "assets/item_apple.png" alt=”img” width=”16″ height=”16″ /></div>';

  var he = new goog.ui.SpriteBox();
  he.render(document.body);
};

new hoge.App();