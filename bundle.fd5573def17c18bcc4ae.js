(()=>{var t={335:(t,e,r)=>{var n={"./at_at.svg":403,"./c3po.svg":166,"./darth_vader.svg":477,"./death_star.svg":118,"./falcon.svg":745,"./r2d2.svg":568,"./stormtrooper.svg":822,"./tie_ln.svg":350,"./yoda.svg":559};function a(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=335},403:(t,e,r)=>{"use strict";t.exports=r.p+"0379613a4269155f45b3.svg"},166:(t,e,r)=>{"use strict";t.exports=r.p+"92e4eecf1c83293e3395.svg"},477:(t,e,r)=>{"use strict";t.exports=r.p+"9ae79499243776a4de6e.svg"},118:(t,e,r)=>{"use strict";t.exports=r.p+"3392ebef20e51148368e.svg"},745:(t,e,r)=>{"use strict";t.exports=r.p+"b33cd68d7fb870c59309.svg"},568:(t,e,r)=>{"use strict";t.exports=r.p+"a97a2e9fa184dcab972b.svg"},822:(t,e,r)=>{"use strict";t.exports=r.p+"61e5b40f641dff097d3f.svg"},350:(t,e,r)=>{"use strict";t.exports=r.p+"7d600c80a7f5f31bc337.svg"},559:(t,e,r)=>{"use strict";t.exports=r.p+"4c0ad8f5f10199effb77.svg"}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n={},a=function(){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.random();t(this,a),this.name=e,n[e]?this.img=n[e].cloneNode():(this.img=new Image,this.img.src=r(335)("./".concat(e,".svg")),n[e]=this.img)}var o,i;return o=a,i=[{key:"preload",value:function(){a.symbols.forEach((function(t){return new a(t)}))}},{key:"symbols",get:function(){return["at_at","c3po","darth_vader","death_star","falcon","r2d2","stormtrooper","tie_ln","yoda"]}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}}],null&&e(o.prototype,null),i&&e(o,i),a}();function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(e,r,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reelContainer=e,this.idx=r,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{transform:"translateY(-".concat(10*Math.floor(this.factor)/(3+10*Math.floor(this.factor))*100,"%)"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),n.forEach((function(t){return o.symbolContainer.appendChild(new a(t).img)}))}var e,r;return e=t,(r=[{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}},{key:"renderSymbols",value:function(t){for(var e=document.createDocumentFragment(),r=3;r<3+10*Math.floor(this.factor);r++){var n=new a(r>=10*Math.floor(this.factor)-2?t[r-10*Math.floor(this.factor)]:void 0);e.appendChild(n.img)}this.symbolContainer.appendChild(e)}},{key:"spin",value:function(){var t=this,e=new Promise((function(e){return t.animation.onfinish=e})),r=new Promise((function(e){return setTimeout(e,1e3*t.factor)}));return this.animation.play(),Promise.race([e,r]).then((function(){"finished"!==t.animation.playState&&t.animation.finish();for(var e=t.symbolContainer.children.length-3,r=0;r<e;r++)t.symbolContainer.firstChild.remove()}))}}])&&o(e.prototype,r),t}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),a.preload(),this.currentSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.nextSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.container=e,this.reels=Array.from(this.container.getElementsByClassName("reel")).map((function(t,e){return new i(t,e,r.currentSymbols[e])})),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",(function(){return r.spin()})),this.autoPlayCheckbox=document.getElementById("autoplay"),n.inverted&&this.container.classList.add("inverted")}var e,r;return e=t,(r=[{key:"spin",value:function(){var t=this;return this.onSpinStart(),this.currentSymbols=this.nextSymbols,this.nextSymbols=[[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()]],Promise.all(this.reels.map((function(e){return e.renderSymbols(t.nextSymbols[e.idx]),e.spin()}))).then((function(){return t.onSpinEnd()}))}},{key:"onSpinStart",value:function(){this.spinButton.disabled=!0,console.log("SPIN START")}},{key:"onSpinEnd",value:function(){var t=this;if(this.spinButton.disabled=!1,console.log("SPIN END"),this.autoPlayCheckbox.checked)return window.setTimeout((function(){return t.spin()}),200)}}])&&c(e.prototype,r),t}())(document.getElementById("slot"),{inverted:!1})})()})();