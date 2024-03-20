var items = document.querySelectorAll('#i2ook');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){
const t=this.querySelectorAll(".hamburger1"),e=this.querySelectorAll(".navbar-collapse");for(let n=0;n<t.length;n++)t[n].addEventListener("click",function(){t[n].classList.toggle("active"),e[n].classList.toggle("show")})
}.bind(items[i]))();
          }var props = {"ivsahr":{"classactive":"tab-active","selectortab":"aria-controls"}};
          var ids = Object.keys(props).map(function(id) { return '#'+id }).join(',');
          var els = document.querySelectorAll(ids);
          for (var i = 0, len = els.length; i < len; i++) {
            var el = els[i];
            (function(t){var e,n,r=this,o=t.classactive,i=t.selectortab,s=window,a=s.history,l=s._isEditor,c="[role=tab]",u=document,p=u.body,d=u.location,h=p.matchesSelector||p.webkitMatchesSelector||p.mozMatchesSelector||p.msMatchesSelector,f=function(t,e){for(var n=t||[],r=0;r<n.length;r++)e(n[r],r)},g=function(t){return t.getAttribute(i)},m=function(t,e){return t.querySelector(e)},v=function(){return r.querySelectorAll(c)},y=function(t,e){return!l&&(t.tabIndex=e)},b=function(t){f(v(),function(t){t.className=t.className.replace(o,"").trim(),t.ariaSelected="false",y(t,"-1")}),f(r.querySelectorAll("[role=tabpanel]"),function(t){return t.hidden=!0}),t.className+=" "+o,t.ariaSelected="true",y(t,"0");var e=g(t),n=e&&m(r,"#".concat(e));n&&(n.hidden=!1)},w=m(r,".".concat(o).concat(c));(w=w||(n=(d.hash||"").replace("#",""))&&m(r,(e=i,"".concat(c,"[").concat(e,"=").concat(n,"]")))||m(r,c))&&b(w),r.addEventListener("click",function(t){var e=t.target,n=h.call(e,c);if(n||(e=function(t){var e;return f(v(),function(n){e||n.contains(t)&&(e=n)}),e}(e))&&(n=1),n&&!t.__trg&&e.className.indexOf(o)<0){t.preventDefault(),t.__trg=1,b(e);var r=g(e);try{a&&a.pushState(null,null,"#".concat(r))}catch(t){}}})}.bind(el))(props[el.id]);
          }