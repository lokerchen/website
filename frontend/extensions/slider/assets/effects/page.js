// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_page(e,t,i){var n=jQuery,o=e.angle||17,d=n(this),s=n("<div>").addClass("ws_effect ws_page").css({position:"absolute",width:"100%",height:"100%",top:"0%",overflow:"hidden"}),a=i.find(".ws_list");s.hide().appendTo(i),this.go=function(i,p){function u(){s.find("div").stop(1,1),s.hide(),s.empty()}u(),a.hide();var r=n("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":9}).append(n(t.get(i)).clone()).appendTo(s),h=n("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",outline:"1px solid transparent","z-index":10,"transform-origin":"top left","backface-visibility":"hidden"}).append(n(t.get(p)).clone()).appendTo(s);s.show(),e.responsive<3&&(r.find("img").css("width","100%"),h.find("img").css("width","100%"));var c=h,f=(c.width(),c.height(),!document.addEventListener);wowAnimate(c,{rotate:0},{rotate:o},f?0:2*e.duration/3,"easeOutOneBounce",function(){wowAnimate(c,{top:0},{top:"100%"},(f?2:1)*e.duration/3)}),wowAnimate(r,{top:"-100%"},{top:"-30%"},f?0:e.duration/2,function(){wowAnimate(r,{top:"-30%"},{top:0},(f?2:1)*e.duration/2,"easeOutBounce",function(){c.hide(),u(),d.trigger("effectEnd")})})}}jQuery.extend(jQuery.easing,{easeOutOneBounce:function(e,t){var i=.8,n=.2,o=i*i;return 1e-4>t?0:i>t?t*t/o:1-n*n+(t-i-n)*(t-i-n)},easeOutBounce:function(e,t,i,n,o){return(t/=o)<1/2.75?7.5625*n*t*t+i:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+i:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+i:n*(7.5625*(t-=2.625/2.75)*t+.984375)+i}});