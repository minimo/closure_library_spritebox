goog.provide('hoge.App');
goog.require('goog.ui.SpriteBox');

hoge.App = function(){
  this.initialize_();
}

hoge.App.prototype.initialize_ = function(){
  var he = new goog.ui.SpriteBox();

  var options  = [
    [
      {
        'src': 'assets/plane_01_01.png',
        'width': 16,
        'height': 16,
        'alt': "testskin1"
      },
      "Red ship"
    ],
    [
      {
        'src': 'assets/plane_01_02.png',
        'width': 16,
        'height': 16,
        'alt': "testskin2"
      },
      "Blue ship"
    ],
    [
      {
        'src': 'assets/plane_01_03.png',
        'width': 16,
        'height': 16,
        'alt': "testskin3"
      },
      "Test ship"
    ],
    [
      {
        'src': 'assets/plane_01_04.png',
        'width': 16,
        'height': 16,
        'alt': "testskin4"
      },
      "Test ship4"
    ],
    [
      {
        'src': 'assets/plane_01_04.png',
        'width': 16,
        'height': 16,
        'alt': "testskin4"
      },
      "Test ship4"
    ]
  ];
  var count = 0;
  options.forEach(function(e) {
    e[0].isNewLine = false;
//    if (count == 1) e[0].isNewLine = true;
    if (count == 2) e[0].isNewLine = true;
    var item = new goog.ui.SpriteBoxItem(e);
    he.addItem(item);
    count++;
  });

  he.render(document.body);
};

new hoge.App();