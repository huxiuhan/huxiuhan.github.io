(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(7237)}])},7237:function(d,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return L},default:function(){return M}});var e=a(1799),f=a(5893),g=a(3659),c=a(9008),h=a.n(c),i=a(7294);function j(a){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function k(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],d.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}function n(b,c){var a=c.get(b);if(!a)throw TypeError("attempted to get private field on non-instance");return a.get?a.get.call(b):a.value}var o={player:"lottie-player"},p="[lottieInteractivity]:",q=function(){var a,b,c;function d(){var i=this,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:o,f=c.actions,b=c.container,g=c.mode,a=c.player,h=m(c,["actions","container","mode","player"]);if(function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,d),r.set(this,{writable:!0,value:function(){if(i.player){var a=function(){i.player.addEventListener("enterFrame",n(i,B)),i.container.addEventListener("mouseenter",n(i,C)),i.container.addEventListener("mouseleave",n(i,D)),i.container.addEventListener("touchstart",n(i,C),{passive:!0}),i.container.addEventListener("touchend",n(i,D),{passive:!0})},b=function(){i.container.addEventListener("mouseenter",n(i,C)),i.container.addEventListener("mouseleave",n(i,D)),i.container.addEventListener("touchstart",n(i,C),{passive:!0}),i.container.addEventListener("touchend",n(i,D),{passive:!0})};i.stateHandler.set("loop",function(){i.actions[i.interactionIdx].loop?i.player.loop=parseInt(i.actions[i.interactionIdx].loop)-1:i.player.loop=!0,i.player.autoplay=!0}),i.stateHandler.set("autoplay",function(){i.player.loop=!1,i.player.autoplay=!0}),i.stateHandler.set("click",function(){i.player.loop=!1,i.player.autoplay=!1,i.container.addEventListener("click",n(i,s))}),i.stateHandler.set("hover",function(){i.player.loop=!1,i.player.autoplay=!1,i.container.addEventListener("mouseenter",n(i,s)),i.container.addEventListener("touchstart",n(i,s),{passive:!0})}),i.stateHandler.set("hold",b),i.stateHandler.set("pauseHold",b),i.transitionHandler.set("click",function(){i.container.addEventListener("click",n(i,u))}),i.transitionHandler.set("hover",function(){i.container.addEventListener("mouseenter",n(i,u)),i.container.addEventListener("touchstart",n(i,u),{passive:!0})}),i.transitionHandler.set("hold",a),i.transitionHandler.set("pauseHold",a),i.transitionHandler.set("repeat",function(){i.player.loop=!0,i.player.autoplay=!0,i.player.addEventListener("loopComplete",function a(){n(i,z).call(i,{handler:a})})}),i.transitionHandler.set("onComplete",function(){"loop"===i.actions[i.interactionIdx].state?i.player.addEventListener("loopComplete",n(i,y)):i.player.addEventListener("complete",n(i,y))}),i.transitionHandler.set("seek",function(){i.player.stop(),i.player.addEventListener("enterFrame",n(i,A)),i.container.addEventListener("mousemove",n(i,v)),i.container.addEventListener("touchmove",n(i,w),{passive:!1}),i.container.addEventListener("mouseout",n(i,x))})}}}),s.set(this,{writable:!0,value:function(){var a=i.actions[i.interactionIdx].forceFlag;a|| !0!==i.player.isPaused?a&&n(i,F).call(i,!0):n(i,F).call(i,!0)}}),t.set(this,{writable:!0,value:function(){0===i.clickCounter?(i.player.play(),i.clickCounter++):(i.clickCounter++,i.player.setDirection(-1*i.player.playDirection),i.player.play())}}),u.set(this,{writable:!0,value:function(){var a=i.actions[i.interactionIdx].forceFlag,b=i.actions[i.interactionIdx].state,c=i.actions[i.interactionIdx].transition;if("chain"===i.mode){if(i.actions[i.interactionIdx].count){var d=parseInt(i.actions[i.interactionIdx].count);if(i.clickCounter<d-1)return void(i.clickCounter+=1)}return i.clickCounter=0,(a||"click"!==c||"click"!==b)&&("hover"!==c||"hover"!==b)?i.nextInteraction():i.transitionHandler.get("onComplete").call(),i.container.removeEventListener("click",n(i,u)),void i.container.removeEventListener("mouseenter",n(i,u))}a|| !0!==i.player.isPaused?a&&i.player.goToAndPlay(0,!0):i.player.goToAndPlay(0,!0)}}),v.set(this,{writable:!0,value:function(a){n(i,I).call(i,a.clientX,a.clientY)}}),w.set(this,{writable:!0,value:function(a){a.cancelable&&a.preventDefault(),n(i,I).call(i,a.touches[0].clientX,a.touches[0].clientY)}}),x.set(this,{writable:!0,value:function(){n(i,I).call(i,-1,-1)}}),y.set(this,{writable:!0,value:function(){"loop"===i.actions[i.interactionIdx].state?i.player.removeEventListener("loopComplete",n(i,y)):i.player.removeEventListener("complete",n(i,y)),i.nextInteraction()}}),z.set(this,{writable:!0,value:function(b){var c=b.handler,a=1;i.actions[i.interactionIdx].repeat&&(a=i.actions[i.interactionIdx].repeat),i.playCounter>=a-1?(i.playCounter=0,i.player.removeEventListener("loopComplete",c),i.player.loop=!1,i.player.autoplay=!1,i.nextInteraction()):i.playCounter+=1}}),A.set(this,{writable:!0,value:function(){var a=i.actions[i.interactionIdx].frames;a&&i.player.currentFrame>=parseInt(a[1])-1&&(i.player.removeEventListener("enterFrame",n(i,A)),i.container.removeEventListener("mousemove",n(i,v)),i.container.removeEventListener("mouseout",n(i,x)),setTimeout(i.nextInteraction,0))}}),B.set(this,{writable:!0,value:function(){var a=i.actions[i.interactionIdx].frames;(a&&i.player.currentFrame>=a[1]||i.player.currentFrame>=i.player.totalFrames-1)&&(i.player.removeEventListener("enterFrame",n(i,B)),i.container.removeEventListener("mouseenter",n(i,C)),i.container.removeEventListener("mouseleave",n(i,D)),i.container.removeEventListener("touchstart",n(i,C),{passive:!0}),i.container.removeEventListener("touchend",n(i,D),{passive:!0}),i.player.pause(),i.holdStatus=!1,i.nextInteraction()),-1===i.player.playDirection&&a&&i.player.currentFrame<a[0]&&i.player.pause()}}),C.set(this,{writable:!0,value:function(){-1!==i.player.playDirection&&null!==i.holdStatus&&i.holdStatus||(i.player.setDirection(1),i.player.play(),i.holdStatus=!0)}}),D.set(this,{writable:!0,value:function(){"hold"===i.actions[i.interactionIdx].transition||"hold"===i.actions[i.interactionIdx].state||"hold"===i.actions[0].type?(i.player.setDirection(-1),i.player.play()):"pauseHold"!==i.actions[i.interactionIdx].transition&&"pauseHold"!==i.actions[i.interactionIdx].state&&"pauseHold"!==i.actions[0].type||i.player.pause(),i.holdStatus=!1}}),E.set(this,{writable:!0,value:function(){if(i.container.removeEventListener("click",n(i,u)),i.container.removeEventListener("click",n(i,s)),i.container.removeEventListener("mouseenter",n(i,u)),i.container.removeEventListener("touchstart",n(i,u)),i.container.removeEventListener("touchmove",n(i,w)),i.container.removeEventListener("mouseenter",n(i,s)),i.container.removeEventListener("touchstart",n(i,s)),i.container.removeEventListener("mouseenter",n(i,C)),i.container.removeEventListener("touchstart",n(i,C)),i.container.removeEventListener("mouseleave",n(i,D)),i.container.removeEventListener("mousemove",n(i,v)),i.container.removeEventListener("mouseout",n(i,x)),i.container.removeEventListener("touchend",n(i,D)),i.player)try{i.player.removeEventListener("loopComplete",n(i,y)),i.player.removeEventListener("complete",n(i,y)),i.player.removeEventListener("enterFrame",n(i,A)),i.player.removeEventListener("enterFrame",n(i,B))}catch(a){}}}),l(this,"jumpToInteraction",function(a){n(i,E).call(i),i.interactionIdx=a,i.interactionIdx<0?i.interactionIdx=0:i.interactionIdx,i.nextInteraction(!1)}),l(this,"nextInteraction",function(){var b=!(arguments.length>0&& void 0!==arguments[0])||arguments[0];i.oldInterctionIdx=i.interactionIdx,n(i,E).call(i),i.player.loop=!1;var a=i.actions[i.interactionIdx].jumpTo;a?a>=0&&a<i.actions.length?(i.interactionIdx=a,n(i,H).call(i,{ignorePath:!1})):(i.interactionIdx=0,i.player.goToAndStop(0,!0),n(i,H).call(i,{ignorePath:!1})):(b&&i.interactionIdx++,i.interactionIdx>=i.actions.length?i.actions[i.actions.length-1].reset?(i.interactionIdx=0,i.player.resetSegments(!0),i.actions[i.interactionIdx].frames?i.player.goToAndStop(i.actions[i.interactionIdx].frames,!0):i.player.goToAndStop(0,!0),n(i,H).call(i,{ignorePath:!1})):(i.interactionIdx=i.actions.length-1,n(i,H).call(i,{ignorePath:!1})):n(i,H).call(i,{ignorePath:!1})),i.container.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{oldIndex:i.oldInterctionIdx,newIndex:i.interactionIdx}}))}),F.set(this,{writable:!0,value:function(b){var a=i.actions[i.interactionIdx].frames;if(!a)return i.player.resetSegments(!0),void i.player.goToAndPlay(0,!0);"string"==typeof a?i.player.goToAndPlay(a,b):i.player.playSegments(a,b)}}),G.set(this,{writable:!0,value:function(){var a=i.actions[i.interactionIdx].path;if(!a){if("object"===j(i.enteredPlayer)&&"AnimationItem"===i.enteredPlayer.constructor.name){if(a=i.enteredPlayer,i.player===a)return void n(i,H).call(i,{ignorePath:!0})}else{var c=(a=i.loadedAnimation).substr(a.lastIndexOf("/")+1);if(c=c.substr(0,c.lastIndexOf(".json")),i.player.fileName===c)return void n(i,H).call(i,{ignorePath:!0})}}var d=i.container.getBoundingClientRect(),e="width: "+d.width+"px !important; height: "+d.height+"px !important; background: "+i.container.style.background;if(i.container.setAttribute("style",e),"object"!==j(i.enteredPlayer)||"AnimationItem"!==i.enteredPlayer.constructor.name){if("string"==typeof i.enteredPlayer){var b=document.querySelector(i.enteredPlayer);b&&"LOTTIE-PLAYER"===b.nodeName&&(i.attachedListeners||(b.addEventListener("ready",function(){i.container.style.width="",i.container.style.height=""}),b.addEventListener("load",function(){i.player=b.getLottie(),n(i,H).call(i,{ignorePath:!0})}),i.attachedListeners=!0),b.load(a))}else i.enteredPlayer instanceof HTMLElement&&"LOTTIE-PLAYER"===i.enteredPlayer.nodeName&&(i.attachedListeners||(i.enteredPlayer.addEventListener("ready",function(){i.container.style.width="",i.container.style.height=""}),i.enteredPlayer.addEventListener("load",function(){i.player=i.enteredPlayer.getLottie(),n(i,H).call(i,{ignorePath:!0})}),i.attachedListeners=!0),i.enteredPlayer.load(a));if(!i.player)throw Error("".concat(p," Specified player is invalid."),i.enteredPlayer)}else{if(!window.lottie)throw Error("".concat(p," A Lottie player is required."));i.stop(),i.container.innerHTML="","object"===j(a)&&"AnimationItem"===a.constructor.name?i.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,animationData:a.animationData,container:i.container}):i.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,path:a,container:i.container}),i.player.addEventListener("DOMLoaded",function(){i.container.style.width="",i.container.style.height="",n(i,H).call(i,{ignorePath:!0})})}i.clickCounter=0,i.playCounter=0}}),H.set(this,{writable:!0,value:function(a){var b=a.ignorePath,g=i.actions[i.interactionIdx].frames,c=i.actions[i.interactionIdx].state,d=i.actions[i.interactionIdx].transition,e=i.actions[i.interactionIdx].path,h=i.stateHandler.get(c),j=i.transitionHandler.get(d),k=i.actions[i.interactionIdx].speed?i.actions[i.interactionIdx].speed:1,f=i.actions[i.interactionIdx].delay?i.actions[i.interactionIdx].delay:0;b||!(e||i.actions[i.actions.length-1].reset&&0===i.interactionIdx)?setTimeout(function(){g&&(i.player.autoplay=!1,i.player.resetSegments(!0),i.player.goToAndStop(g[0],!0)),h?h.call():"none"===c&&(i.player.loop=!1,i.player.autoplay=!1),j&&j.call(),i.player.autoplay&&(i.player.resetSegments(!0),n(i,F).call(i,!0)),i.player.setSpeed(k)},f):n(i,G).call(i)}}),I.set(this,{writable:!0,value:function(b,c){if(-1!==b&& -1!==c){var d=i.getContainerCursorPosition(b,c);b=d.x,c=d.y}var a=i.actions.find(function(d){var a=d.position;if(a){if(Array.isArray(a.x)&&Array.isArray(a.y))return b>=a.x[0]&&b<=a.x[1]&&c>=a.y[0]&&c<=a.y[1];if(!Number.isNaN(a.x)&&!Number.isNaN(a.y))return b===a.x&&c===a.y}return!1});if(a){if("seek"===a.type||"seek"===a.transition){var e=(b-a.position.x[0])/(a.position.x[1]-a.position.x[0]),f=(c-a.position.y[0])/(a.position.y[1]-a.position.y[0]);i.player.playSegments(a.frames,!0),a.position.y[0]<0&&a.position.y[1]>1?i.player.goToAndStop(Math.floor(e*i.player.totalFrames),!0):i.player.goToAndStop(Math.ceil((e+f)/2*i.player.totalFrames),!0)}else"loop"===a.type?i.player.playSegments(a.frames,!0):"play"===a.type?(!0===i.player.isPaused&&i.player.resetSegments(),i.player.playSegments(a.frames)):"stop"===a.type&&(i.player.resetSegments(!0),i.player.goToAndStop(a.frames[0],!0))}}}),J.set(this,{writable:!0,value:function(){var c=i.getContainerVisibility(),a=i.actions.find(function(b){var a=b.visibility;return c>=a[0]&&c<=a[1]});if(a){if("seek"===a.type){var b=a.frames[0],d=2==a.frames.length?a.frames[1]:i.player.totalFrames-1;null!==i.assignedSegment&&(i.player.resetSegments(!0),i.assignedSegment=null),i.player.goToAndStop(b+Math.round((c-a.visibility[0])/(a.visibility[1]-a.visibility[0])*(d-b)),!0)}else if("loop"===a.type)i.player.loop=!0,(null===i.assignedSegment||i.assignedSegment!==a.frames|| !0===i.player.isPaused)&&(i.player.playSegments(a.frames,!0),i.assignedSegment=a.frames);else if("play"===a.type||"playOnce"===a.type){if("playOnce"===a.type&&!i.scrolledAndPlayed)return i.scrolledAndPlayed=!0,i.player.resetSegments(!0),void(a.frames?i.player.playSegments(a.frames,!0):i.player.play());"play"===a.type&&i.player.isPaused&&(i.player.resetSegments(!0),a.frames?i.player.playSegments(a.frames,!0):i.player.play())}else"stop"===a.type&&i.player.goToAndStop(a.frames[0],!0)}}}),this.enteredPlayer=a,"object"!==j(a)||"AnimationItem"!==a.constructor.name){if("string"==typeof a){var e=document.querySelector(a);e&&"LOTTIE-PLAYER"===e.nodeName&&(a=e.getLottie())}else a instanceof HTMLElement&&"LOTTIE-PLAYER"===a.nodeName&&(a=a.getLottie());if(!a)throw Error(p+"Specified player:"+a+" is invalid.")}"string"==typeof b&&(b=document.querySelector(b)),b||(b=a.wrapper),this.player=a,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=b,this.mode=g,this.actions=f,this.options=h,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.oldInterctionIdx=0,this.clickCounter=0,this.playCounter=0,this.stateHandler=new Map,this.transitionHandler=new Map}return a=d,b=[{key:"getContainerVisibility",value:function(){var a=this.container.getBoundingClientRect(),b=a.top,c=a.height;return(window.innerHeight-b)/(window.innerHeight+c)}},{key:"getContainerCursorPosition",value:function(b,c){var a=this.container.getBoundingClientRect(),d=a.top;return{x:(b-a.left)/a.width,y:(c-d)/a.height}}},{key:"initScrollMode",value:function(){this.player.stop(),window.addEventListener("scroll",n(this,J),!0)}},{key:"initCursorMode",value:function(){this.actions&&1===this.actions.length?"click"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",n(this,u))):"hover"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("mouseenter",n(this,u)),this.container.addEventListener("touchstart",n(this,u),{passive:!0})):"toggle"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",n(this,t))):"hold"===this.actions[0].type||"pauseHold"===this.actions[0].type?(this.container.addEventListener("mouseenter",n(this,C)),this.container.addEventListener("mouseleave",n(this,D)),this.container.addEventListener("touchstart",n(this,C),{passive:!0}),this.container.addEventListener("touchend",n(this,D),{passive:!0})):"seek"===this.actions[0].type&&(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",n(this,v)),this.container.addEventListener("touchmove",n(this,w),{passive:!1}),this.container.addEventListener("mouseout",n(this,x))):(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",n(this,v)),this.container.addEventListener("mouseleave",n(this,x)),n(this,I).call(this,-1,-1))}},{key:"initChainMode",value:function(){n(this,r).call(this),this.player.loop=!1,this.player.stop(),n(this,H).call(this,{ignorePath:!1})}},{key:"start",value:function(){var a=this;"scroll"===this.mode?this.player.isLoaded?this.initScrollMode():this.player.addEventListener("DOMLoaded",function(){a.initScrollMode()}):"cursor"===this.mode?this.player.isLoaded?this.initCursorMode():this.player.addEventListener("DOMLoaded",function(){a.initCursorMode()}):"chain"===this.mode&&(this.player.isLoaded?this.initChainMode():this.player.addEventListener("DOMLoaded",function(){a.initChainMode()}))}},{key:"redefineOptions",value:function(c){var e=c.actions,b=c.container,f=c.mode,a=c.player,g=m(c,["actions","container","mode","player"]);if(this.stop(),this.enteredPlayer=a,"object"!==j(a)||"AnimationItem"!==a.constructor.name){if("string"==typeof a){var d=document.querySelector(a);d&&"LOTTIE-PLAYER"===d.nodeName&&(a=d.getLottie())}else a instanceof HTMLElement&&"LOTTIE-PLAYER"===a.nodeName&&(a=a.getLottie());if(!a)throw Error(p+"Specified player:"+a+" is invalid.",a)}"string"==typeof b&&(b=document.querySelector(b)),b||(b=a.wrapper),this.player=a,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=b,this.mode=f,this.actions=e,this.options=g,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.clickCounter=0,this.playCounter=0,this.holdStatus=null,this.stateHandler=new Map,this.transitionHandler=new Map,this.start()}},{key:"stop",value:function(){if("scroll"===this.mode&&window.removeEventListener("scroll",n(this,J),!0),"cursor"===this.mode&&(this.container.removeEventListener("click",n(this,u)),this.container.removeEventListener("click",n(this,t)),this.container.removeEventListener("mouseenter",n(this,u)),this.container.removeEventListener("touchstart",n(this,u)),this.container.removeEventListener("touchmove",n(this,w)),this.container.removeEventListener("mousemove",n(this,v)),this.container.removeEventListener("mouseleave",n(this,x)),this.container.removeEventListener("touchstart",n(this,C)),this.container.removeEventListener("touchend",n(this,D))),"chain"===this.mode&&(this.container.removeEventListener("click",n(this,u)),this.container.removeEventListener("click",n(this,s)),this.container.removeEventListener("mouseenter",n(this,u)),this.container.removeEventListener("touchstart",n(this,u)),this.container.removeEventListener("touchmove",n(this,w)),this.container.removeEventListener("mouseenter",n(this,s)),this.container.removeEventListener("touchstart",n(this,s)),this.container.removeEventListener("mouseenter",n(this,C)),this.container.removeEventListener("touchstart",n(this,C)),this.container.removeEventListener("mouseleave",n(this,D)),this.container.removeEventListener("mousemove",n(this,v)),this.container.removeEventListener("mouseout",n(this,x)),this.container.removeEventListener("touchend",n(this,D)),this.player))try{this.player.removeEventListener("loopComplete",n(this,y)),this.player.removeEventListener("complete",n(this,y)),this.player.removeEventListener("enterFrame",n(this,A)),this.player.removeEventListener("enterFrame",n(this,B))}catch(a){}this.player&&(this.player.destroy(),this.player=null)}}],k(a.prototype,b),c&&k(a,c),d}(),r=new WeakMap,s=new WeakMap,t=new WeakMap,u=new WeakMap,v=new WeakMap,w=new WeakMap,x=new WeakMap,y=new WeakMap,z=new WeakMap,A=new WeakMap,B=new WeakMap,C=new WeakMap,D=new WeakMap,E=new WeakMap,F=new WeakMap,G=new WeakMap,H=new WeakMap,I=new WeakMap,J=new WeakMap,K=function(b){var a=new q(b);return a.start(),a},L=!0;function M(b){b.indexData;var c=b.indexContent,d=(0,i.useRef)(),j=(0,i.useRef)(),k=(0,i.useRef)();return i.useEffect(function(){a.e(807).then(a.bind(a,886)),d.current.addEventListener("load",function(a){K({mode:"cursor",player:"#github-lottie",actions:[{type:"hover",forceFlag:!1},]})}),j.current.addEventListener("load",function(a){K({mode:"cursor",player:"#linkedin-lottie",actions:[{type:"hover",forceFlag:!1},]})}),k.current.addEventListener("load",function(a){K({mode:"cursor",player:"#email-lottie",actions:[{type:"hover",forceFlag:!1},]})})}),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:"Hu Xiuhan - 0xStory"}),(0,f.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,f.jsxs)("header",{className:"site-header",children:[(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsx)("h1",{className:"hero",id:"hero-1",hint:"\u80E1\u4FEE\u6DB5",children:(0,f.jsxs)("a",{href:"/",children:[(0,f.jsx)("span",{className:"hb",children:"["}),(0,f.jsx)("span",{className:"sheng",children:"H"}),(0,f.jsx)("span",{className:"yun",children:"u"}),"\xa0",(0,f.jsx)("span",{className:"sheng",children:"X"}),(0,f.jsx)("span",{className:"yun",children:"iu"}),(0,f.jsx)("span",{className:"sheng",children:"h"}),(0,f.jsx)("span",{className:"yun",children:"an"}),(0,f.jsx)("span",{className:"hb",children:"]"})]})})}),(0,f.jsxs)("ul",{className:"nav",children:[(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"https://github.com/huxiuhan",title:"Github",children:(0,f.jsx)("lottie-player",{id:"github-lottie",ref:d,loop:!0,src:"/images/github-lottie.json",style:{width:"48px",height:"48px"}})})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"https://www.linkedin.com/in/xiuhanhu",title:"LinkedIn",children:(0,f.jsx)("lottie-player",{id:"linkedin-lottie",ref:j,loop:!0,src:"/images/linkedin-lottie.json",style:{width:"128px",height:"128px",margin:"-32px",transform:"translateY(40px)"}})})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"mailto:huxiuhan@gmail.com",title:"Email",children:(0,f.jsx)("lottie-player",{id:"email-lottie",ref:k,loop:!0,src:"/images/email-lottie.json",style:{width:"96px",height:"96px",margin:"-24px",transform:"translateY(22px)"}})})})]})]}),(0,f.jsx)("div",{className:"about",children:(0,f.jsxs)("div",{className:"wrapper",children:[(0,f.jsx)("h1",{children:" About "}),(0,f.jsxs)("p",{children:["Hello, welcome to my homepage. My name is Hu Xiuhan (family name first, \u80E1\u4FEE\u6DB5 in Chinese Characters). I name myself as ",(0,f.jsx)("a",{href:"https://0xStory.eth",children:"0xStory.eth"})," in web3 world, since I believe storytelling is most key factor for consensus."]}),(0,f.jsx)("p",{children:"I define myself as a technology enthusiast and a curious observer. I'm most interested in Computer Vision and Robotics, but I also enjoy programming generally. I started to write program when I was in middle school with Pascal and PHP. I love programming in Ruby and I wrote JavaScript most."}),(0,f.jsxs)("p",{children:["I was a M.S. student in Computer Science from Columbia University and an undergraduate from ",(0,f.jsx)("a",{href:"http://www.cis.pku.edu.cn/",children:"Machine Intelligence Department"}),", Peking University."]}),(0,f.jsx)("p",{children:"I was working on Nearby Friends and Video Publishing Experience as a full-time employee at Facebook (now Meta) during 2016 - 2018."}),(0,f.jsx)("p",{children:"I worked on Big Data Infra and Data Visualization at Alibaba, Hangzhou. My team was responsible for data-driven storytelling in 2019 Tmall Double-11 Shopping Festival."}),(0,f.jsxs)("p",{children:["Currently, I'm responsible for Digital Asset Management product infra at ",(0,f.jsx)("a",{href:"https://tezign.com",children:"Tezign"})," and leading innovative product initiatives such as Marketing Content Management and Analysis, partener with global leading brands such as Unilever, Shiseido, McDonald's etc."]})]})}),(0,f.jsx)("div",{className:"project-content",children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsx)(g.R,(0,e.Z)({},c))})}),(0,f.jsx)("footer",{className:"site-footer",children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsx)("a",{href:"/",children:(0,f.jsx)("h2",{className:"footer-heading",children:"Hu, Xiuhan \xa9 2022"})})})})]})}},9008:function(a,c,b){a.exports=b(5443)},2746:function(a,d,b){let c=b(5893);a.exports.c=c},3659:function(e,c,a){"use strict";a.d(c,{R:function(){return l}});var b={};a.r(b),a.d(b,{MDXContext:function(){return g},MDXProvider:function(){return k},useMDXComponents:function(){return i},withMDXComponents:function(){return h}});var d=a(7294),f=a(2746);let g=d.createContext({});function h(a){return function(b){let c=i(b.components);return d.createElement(a,{...b,allComponents:c})}}function i(a){let b=d.useContext(g);return d.useMemo(()=>"function"==typeof a?a(b):{...b,...a},[b,a])}let j={};function k({components:a,children:c,disableParentContext:e}){let b=i(a);return e&&(b=a||j),d.createElement(g.Provider,{value:b},c)}function l({compiledSource:e,frontmatter:l,scope:g,components:h={},lazy:a}){let[i,m]=(0,d.useState)(!a||"undefined"==typeof window);(0,d.useEffect)(()=>{if(a){let b=window.requestIdleCallback(()=>{m(!0)});return()=>window.cancelIdleCallback(b)}},[]);let j=(0,d.useMemo)(()=>{let a=Object.assign({opts:{...b,...f.c}},{frontmatter:l},g),d=Object.keys(a),h=Object.values(a),c=Reflect.construct(Function,d.concat(`${e}`));return c.apply(c,h).default},[g,e]);if(!i)return d.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let c=d.createElement(k,{components:h},d.createElement(j,null));return a?d.createElement("div",null,c):c}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-b))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(a){clearTimeout(a)})}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])