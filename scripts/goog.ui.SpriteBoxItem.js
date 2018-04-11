
//自クラスの名称宣言
goog.provide('goog.ui.SpriteBoxItem');

//依存クラス宣言
goog.require('goog.ui.Component');
goog.require('goog.events.EventHandler');

//コンストラクタ
goog.ui.SpriteBoxItem = function(param, opt_label, opt_domHelper){
  goog.ui.Component.call(this, opt_domHelper); //基底クラスのコンストラクタ呼び出し
  this.param_ = param;
  this.eh_ = new goog.events.EventHandler(this);
  this.initialize_();
}

//goog.ui.Componentから継承
goog.inherits(goog.ui.SpriteBoxItem, goog.ui.Component);

//クラス初期化
goog.ui.SpriteBoxItem.prototype.initialize_ = function(){
};

//DOMの構築（必須）
goog.ui.SpriteBoxItem.prototype.createDom = function(){
  //大元のDivを作成
  var rootDiv = this.dom_.createElement('span');
  this.decorateInternal(rootDiv);
};

goog.ui.SpriteBoxItem.prototype.decorateInternal = function(element){
  //closureのuiコンポーネントはDOMのルートを保存しておく必要がある 
  this.setElementInternal(element);

  //イメージ出力
  var img = this.dom_.createElement('img');
  img.setAttribute("id", this.param_[1] || "menuItem");
  img.setAttribute("src", this.param_[0].src);
  img.setAttribute("width", "32");
  img.setAttribute("height", "32");
  element.appendChild(img);

  //無理やりな改行処理
  if (this.param_[0].isNewLine == true) element.appendChild(this.dom_.createElement('br'));
};

goog.ui.SpriteBoxItem.prototype.enterDocument = function(){
  goog.base(this, "enterDocument");
  this.eh_.listen(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
};

goog.ui.SpriteBoxItem.prototype.exitDocument = function(){
  goog.base(this, "exitDocument");
  this.eh_.unlisten(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
};

goog.ui.SpriteBoxItem.prototype.disposeInternal = function(){
  goog.base(this, "disposeInternal");
  this.eh_.dispose();
};

goog.ui.SpriteBoxItem.prototype.onDivClicked_ = function(event){
  alert(this.param_[0].src);
};

