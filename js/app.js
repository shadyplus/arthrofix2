"use strict";var resultWrapper=document.querySelector(".spin-result-wrapper"),wheel=document.querySelector(".wheel-img");function spin(){wheel.classList.contains("rotated")||(wheel.classList.add("super-rotation"),setTimeout((function(){resultWrapper.style.display="block"}),8000),setTimeout((function(){$(".spin-wrapper").slideUp(),$("#boxes").slideUp(),$(".order_block").slideDown(),start_timer()}),8200),wheel.classList.add("rotated"))}$(".close-popup, .pop-up-button").click((function(b){b.preventDefault(),$(".spin-result-wrapper").fadeOut();$("body,html").animate({scrollTop:$("#scroll").offset().top},400)}));var intr,time=600;function start_timer(){intr=setInterval(tick,1000)}function tick(){time-=1;var c=Math.floor(time/60),d=time-60*c;0==c&&0==d&&clearInterval(intr),d=d>=10?d:"0"+d,$("#min").html("0"+c),$("#sec").html(d)}$('a[href="#scroll"]').on("touchend, click",function(b){b.preventDefault();$("body,html").animate({scrollTop:$("#scroll").offset().top},800)});