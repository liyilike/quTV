/* 手机端跳转js */
if (window.location.toString().indexOf('pref=padindex') != -1) {} else {
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    if (window.location.href.indexOf("?mobile") < 0) {
      try {
        if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          window.location.href = "http://www.qutvb.com/mobile/index-iphone.html";
        } else if (/iPad/i.test(navigator.userAgent)) {
          window.location.href = "http://www.qutvb.com/mobile/index-iphone.html"
        } else {
          window.location.href = "http://www.qutvb.com/"
        }
      } catch (e) {}
    }
  }
}

/* http跳转https */
if (document.location.protocol != "http:") {
  location.href = location.href.replace(/^https:/, "http:");
}

/* 顶部的动画滚动 */
NProgress.start();
NProgress.inc();
NProgress.inc();


/* vod的视频播放 */
function getTemp() {
  var last = "";
  var temp = "24861";
  var myArr = new Array("a", "b", "q", "d", "u", "f", "v", "h", "t", "j");
  for (var i = 0; i < temp.length; i++) {
    last = last + myArr[temp.substr(i, 1)]
  }
  return last
}


function strencode(str) {
  var bytes = CryptoJS.AES.decrypt(str, getTemp());
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}



var player;

function setPlay(address, type) {
  address = strencode(address);
  type = strencode(type);
  if (type == "iframe") {
    $("#video2").attr("src", address);
    $("#video").hide();
    $("#video2").show();
    player.remove()
  } else {

    $("#video").show();
    $("#video2").hide();
    $("#video2").attr("src", "");
   
    player = cyberplayer("video").setup({
      height: 480,
      width: "100%",
      primary: 'html5',
      file: address,
      autostart: true,
      stretching: "uniform",
      repeat: true,
      controlbar: {
        barLogo: false
      },
      volume: 100,
      controls : "over",
      starttime: 0,
      ak: "d076842cb15b44a5b49ac06fe8be792e"
    });
    // player.onError(function (event) {
    //   $("#video2").attr("src", '//www.qutvb.com/error.html');
    //   $("#video").hide();
    //   $("#video2").show();
    //   player.remove()
    // });

    player.onError(function (event) {
      player.remove();

      player = cyberplayer("video").setup({
        height: 480,
        width: "100%",
        primary: 'flash',
        file: address,
        autostart: true,
        stretching: "uniform",
        repeat: true,
        controlbar: {
          barLogo: false
        },
        volume: 100,
        controls : "over",
        starttime: 0,
        ak: "d076842cb15b44a5b49ac06fe8be792e"
      });

      player.onError(function (event) {
      $("#video2").attr("src", '//www.qutvb.com/error.html');
      $("#video").hide();
      $("#video2").show();
      player.remove()
      });

    });

  }
};

/* ck播放器函数不能删除 监听元数据
function loadedHandler() {
  player.addListener('error', errorHandler);
}

function errorHandler() {
  $("#video2").attr("src", '//www.qutvb.com/error.html');
  $("#video").hide();
  $("#video2").show();
  player = new ckplayer(null);
}

 */