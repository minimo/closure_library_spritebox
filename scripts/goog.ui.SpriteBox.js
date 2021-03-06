//自クラスの名称宣言
goog.provide('goog.ui.SpriteBox');

//依存クラス宣言
goog.require('goog.ui.Component');
goog.require('goog.events.EventHandler');
goog.require('goog.ui.SpriteBoxItem');

//コンストラクタ
goog.ui.SpriteBox = function(options, opt_label, opt_domHelper){
  goog.ui.Component.call(this,opt_domHelper); //基底クラスのコンストラクタ呼び出し

  this.label_ = opt_label || 'Click Me';
  this.eh_ = new goog.events.EventHandler(this);

  this.initialize_();
}

//goog.ui.Componentから継承
goog.inherits(goog.ui.SpriteBox, goog.ui.Component);

//クラス初期化
goog.ui.SpriteBox.prototype.initialize_ = function(){
};

//DOMの構築（必須）
goog.ui.SpriteBox.prototype.createDom = function(){
  //大元のDivを作成
  var rootDiv = this.dom_.createElement('div');
  this.decorateInternal(rootDiv);
};

goog.ui.SpriteBox.prototype.decorateInternal = function(element){
  //closureのuiコンポーネントはDOMのルートを保存しておく必要がある 
  this.setElementInternal(element);
};

goog.ui.SpriteBox.prototype.enterDocument = function(){
  goog.base(this, "enterDocument");
  this.eh_.listen(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
};

goog.ui.SpriteBox.prototype.exitDocument = function(){
  goog.base(this, "exitDocument");
  this.eh_.unlisten(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
};

goog.ui.SpriteBox.prototype.disposeInternal = function(){
  goog.base(this, "disposeInternal");
  this.eh_.dispose();
};

goog.ui.SpriteBox.prototype.addItem = function(item) {
  this.addChild(item, true);
};
