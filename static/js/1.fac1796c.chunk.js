(this.webpackJsonptodox=this.webpackJsonptodox||[]).push([[1],{136:function(t,e,n){"use strict";n.r(e);var o=n(41),i=n(42),a=function(){function t(e,n){var i=this,a=e.title,r=e.parent,s=e.description,d=void 0===s?null:s,l=e.reminder,c=void 0===l?null:l,u=e.deadline,f=void 0===u?null:u,h=e.notifTimeDelta,v=void 0===h?null:h,m=e.starred,p=void 0!==m&&m,w=e.done,g=void 0!==w&&w,b=e.status,x=void 0===b?0:b,y=e.id,I=void 0===y?null:y;if(Object(o.a)(this,t),null===a||null===r)throw Error("Cannot create a todo without a ".concat(a?"parent":"title"));window.database.get("lists",r).onsuccess=function(t){if(!t.target.result)throw Error('Cannot create a todo with a non-existent parent. (Provided parent "'.concat(r,'" was not found)'));i.title=a,i.parent=r,i.description=d,i.reminder=c,i.notifTimeDelta=v,i.deadline=f?f.getMonth?f:new Date(f):null,i.starred=p,i.done=g,i.status=x,i.id=I||i.genId(),"function"===typeof n&&n()}}return Object(i.a)(t,[{key:"genId",value:function(){for(var t="abcdefghijklmnpoqrstuvwxyzABCDEFGGHIJKLMNOPQRSTUVWXYZ1234567890_".split(""),e="",n=0;n<16;n++)e+=t[Math.floor(Math.random()*t.length)];return e}}]),t}(),r=function(){function t(e,n,i){var a=this,r=i.id,s=void 0===r?null:r,d=i.onerror,l=void 0===d?void 0:d;Object(o.a)(this,t),window.database?window.database.getByIndex("lists","name",e).onsuccess=function(t){if(t.target.result){if(!l)throw Error("The list ".concat(e," already exists. Please  choose a different name"));l("The list ".concat(e," already exists. Please  choose a different name"))}else a.name=e,a.id=s||a.genId(),a.members=[],n()}:(this.name=e,this.id=s||this.genId(),this.members=[],console.log(e),n())}return Object(i.a)(t,[{key:"genId",value:function(){for(var t="abcdefghijklmnpoqrstuvwxyzABCDEFGGHIJKLMNOPQRSTUVWXYZ1234567890_".split(""),e="",n=0;n<16;n++)e+=t[Math.floor(Math.random()*t.length)];return e}}]),t}();e.default={Todo:a,TodoList:r}}}]);
//# sourceMappingURL=1.fac1796c.chunk.js.map