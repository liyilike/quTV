/* 切换播放地址的地址 */
$(document).ready(function () {
  $("li").click(function () {
    var data = $(this).attr("data-player");
    var arr = data.split('$');
    setPlay(arr[0], arr[1]);
  });
});

/* list那个切换的js */
    (function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "))}catch(j){return}try{return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setDate(u.getDate()+r)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)!==undefined){f.cookie(j,"",f.extend({},i,{expires:-1}));return true}return false}}));function killErrors(){return true}var domain="http://www.haoqu.net/";function J_getUrl(d,c){var c,e,a,b;c=c?c:window.location.href;e=c.indexOf(d+"=");if(e==-1){return""}a=e+d.length+1;b=c.indexOf("&",a);(b==-1)&&(b=c.length);return unescape(c.substring(a,b))}var player={width:"100%",width2:"634",height:"480"};function openWindow(a,b){var a,d=(window.screen.availHeight-30-player.heigh)/2,c=(window.screen.availWidth-10-player.width)/2;if(arguments.length==1){window.open(a,"_blank","height="+player.height+",width="+player.width2+",top="+d+",left="+c+",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")}else{if(arguments.length==2){window.open(a,"_blank")}}}$(function(){function a(c){var b=$.cookie(c);if(b){return 1}else{return 0}}(function(c){var b=setTimeout(function(){c("#uyan_frame .loading").remove()},500)})(jQuery);(function(h){var b,j=h.cookie("history"),g,e,k,d=h('<ul class="history-list"></ul>');b=a("history");function l(){return j.split(",")}function i(){if(!b){h(".history-bx").append('<p style="color:#888;line-height:32px;text-align:center">\u6682\u65e0\u64ad\u653e\u8bb0\u5f55...</p>')}else{g=l();h.each(g,function(m,q){var p=q.split("$"),o='<li class="history-item" data-item="'+m+'"><h5><a class="name" href="'+p[0]+'">'+p[1]+'</a></h5><label><a class="url" href="'+p[0]+'" class="see">\u7ee7\u7eed\u89c2\u770b</a></label><a class="del" href="javascript: void(0);" title="\u5220\u9664">\u5220\u9664</a></li>';d.prepend(o)});h(".history-bx").append(d)}}i();function f(){if((typeof pageUrl=="undefined")||pageUrl==""){return false}var n=pageUrl+"$"+channelName;if(!b){h.cookie("history",n,{expires:1000,path:"/"})}else{g=l();k=j.indexOf(n)>-1;if(k){for(var o=0,m=g.length;o<m;o++){if(g[o]==n){g.splice(o,1)}}g.push(n);e=g.join(",")}else{if(g.length>3){g.shift();j=g.join(",")}e=j+","+n}h.cookie("history",e,{expires:1000,path:"/"})}}f();function c(q,r){if(q=="all"){h.removeCookie("history",{path:"/"});h(".history-list .history-item").remove()}else{if(q=="single"){var o=r.closest(".history-item").find(".name").text(),n=r.closest(".history-item").find(".url").attr("href"),s=n+"$"+o;for(var p=0,m=g.length;p<m;p++){if(g[p]==s){g.splice(p,1)}}e=g.join(",");h.cookie("history",e,{expires:1000,path:"/"});r.closest(".history-item").remove()}}}h(".nav-history .J_empty").on("click",function(){c("all")});h(".nav-history").on("click",".del",function(){var m=h(this);c("single",m)})})(jQuery);(function(b){b("body").on("click","[data-type='win']",function(){var d=b(this),c=d.attr("data-url");if(c.indexOf("fullScreen")>0){openWindow(c,true)}else{openWindow(c)}})})(jQuery);$(".J_drop-sya").each(function(){var d=$(this);var c=d.find(".drop-trigger");var b=d.find(".drop-panel");c.on("click",function(e){if(d.hasClass("drop-open")){d.removeClass("drop-open")}else{d.addClass("drop-open")}})});$(".J_drop-syb").each(function(){var e=$(this),c=e.find(".drop-trigger"),f=null,d=e.find(".J_close"),b=e.find(".drop-panel");d.click(function(){b.stop(true,true).slideUp("fast");e.removeClass("drop-openb")});c.bind({mouseenter:function(){clearTimeout(f);e.addClass("drop-openb");b.stop(true,true).slideDown("fast")},mouseleave:function(){f=setTimeout(function(){b.stop(true,true).slideUp("fast");e.removeClass("drop-openb")},300)}});b.bind({mouseenter:function(){clearTimeout(f)},mouseleave:function(){f=setTimeout(function(){b.stop(true,true).slideUp("fast");e.removeClass("drop-openb")},300)}})});(function(e){var d=e(".stopPropagation"),c=d.find(".drop-trigger"),b=d.find(".drop-panel");c.bind("click",function(f){f.stopPropagation()});b.bind("click",function(f){f.stopPropagation()});e(document).bind("click",function(f){if(d.hasClass("drop-open")){d.removeClass("drop-open")
}})})(jQuery);(function(b){b(".J_tab-sya").each(function(){var d=b(this),e=d.find(".tab-panel"),c=d.attr("data-event")||"mouseenter";d.find(".tab-item").each(function(f){var g=b(this);g.bind(c,function(){if(g.hasClass("select")){return false}g.siblings().removeClass("select");g.addClass("select");e.addClass("hide");e.eq(f).removeClass("hide")})})})})(jQuery);(function(e){var d=e(".J_smile"),h=e(".smile-bx .bd"),i=d.find(".warn"),c=d.find(".tab-panel "),g=e(".smile-bx .J_random"),b,f=d.find(e("[data-content]"));if(d.length){f.each(function(){e(this).text(e(this).attr("data-content")).removeAttr("data-content")});d.appendTo(h);setTimeout(function(){i.slideUp("slow")},5000);g.click(function(){b=(Math.random()*4);c.addClass("hide");c.eq(b).removeClass("hide")})}})(jQuery);(function(e){var d=e(".play-bx .bus-paster"),g=11,c=null;d.find(".bus-loading").html('<span class="loading-txt">\u8bf7\u7a0d\u540e\uff0c\u89c6\u9891\u6b63\u5728\u52a0\u8f7d\u4e2d...</span><span class="loading-time">\u5e7f\u544a\u5269\u4f59<i class="J_paster-timer">'+g+'</i>\u79d2</span><span class="J_jump">\u3010\u8df3\u8fc7\u5e7f\u544a\u3011</span>'),timerNode=d.find(".J_paster-timer"),jumpBtn=d.find(".J_jump");function f(){d.hide()}function b(){if(g==1){clearInterval(c);f();return false}g-=1;timerNode.text(g)}if(d.length){jumpBtn.on("click",function(){f()});c=setInterval(function(){b()},1000)}})(jQuery)});$(function(){});function ShowMore(sid){if(sid==1){$("#jies1").hide();$("#jies2").show()}else{$("#jies1").show();$("#jies2").hide()}};


/*!
 * DomAnimator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 * 注释动画
 */
var DomAnimator=(function(){var currentFrame=0;var frames=[];var nodes=[];var multiNode=!!!window.chrome;var interval=null;var defaultTime=500;var attached=false;var whiteSpaceString="\u00A0";function extend(target,source){for(var key in source){if(!(key in target)){target[key]=source[key]}}return target}function parseMultilineFrame(frame){if(multiNode){return swapWhitespace(frame)}else{return padString(frame.join("\n"))}}function parseSingleLineFrame(frame){if(multiNode){return swapWhitespace(frame.split("\n"))}else{return padString(frame)}}function swapWhitespace(array){var i=0;for(i;i<array.length;i++){array[i]=array[i].replace(/ /g,whiteSpaceString)}return array}function animate(time){if(!time){time=defaultTime}if(frames.length===0){console.log("I need frames to animate. You can add them with .addFrame( string )");return}if(attached===false){attachToDocument()}interval=setInterval(function(){renderFrame()},time)}function renderFrame(){var frameData=frames[currentFrame];if(multiNode){var i=0;for(i;i<nodes.length;i++){nodes[i].nodeValue=frameData[i]}}else{nodes[0].nodeValue=frameData}currentFrame=currentFrame+1;if(currentFrame===frames.length){currentFrame=0}}function attachToDocument(){var head=document.head;var parent=head.parentNode;if(multiNode){var i=0;var totalNodes=frames[0].length;for(i;i<totalNodes;i++){var node=document.createComment("");nodes.push(node);parent.insertBefore(node,head)}}else{var node=document.createComment("");nodes.push(node);parent.insertBefore(node,head)}}function stop(){clearInterval(interval)}function addFrame(frameData){if(!frameData){frameData="no frame data"}var frameType=typeof(frameData);if(frameType==="object"){frames.push(parseMultilineFrame(frameData))}else{if(frameType==="string"){frames.push(parseSingleLineFrame(frameData))}}}function padString(string){return"\n"+string+"\n"}function main(){}return extend(main,{addFrame:addFrame,animate:animate,stop:stop})});


/* 注释动画 */
var domAnimator = new DomAnimator();
domAnimator.addFrame('你为什么');
domAnimator.addFrame('要看源代码?');
domAnimator.addFrame('关注公众号: 全球作死搞笑视频');
domAnimator.addFrame('回复 源代码 这三字,赠送源码git地址');
domAnimator.animate(1500);


/* 滚动条头顶结束 */
setTimeout(function () {
  NProgress.done();
}, 1000);



/* cnzz统计 */
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273831335'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1273831335%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));

/*百度主动推送*/ 
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

/*360主动推送*/ 
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?fe9533e8f0c7742c637067ba8c7c9ac3":"https://jspassport.ssl.qhimg.com/11.0.1.js?fe9533e8f0c7742c637067ba8c7c9ac3";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();

/*百度统计*/ 
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a8a5f5e1b29f6dc7e020537106d7d287";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();