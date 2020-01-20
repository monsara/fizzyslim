"use strict";!function(e){e(function(){e(".styler").styler()})}(jQuery);var page=document.querySelector(".page"),orderForm=document.querySelector(".order-form"),openModalBtns=document.querySelectorAll('.button[data-action="open-modal"]');function handleOpenModal(e){e.preventDefault(),page.classList.add("show-modal"),window.addEventListener("keydown",handleModalEscPress)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}openModalBtns.forEach(function(e){e.addEventListener("click",handleOpenModal)}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=e($||require("jquery")):e(jQuery)}(function(I){function l(e,t){this.element=e,this.options=I.extend({},i,t);var s=this.options.locale;void 0!==this.options.locales[s]&&I.extend(this.options,this.options.locales[s]),this.init()}function K(e){if(!I(e.target).parents().hasClass("jq-selectbox")&&"OPTION"!=e.target.nodeName&&I("div.jq-selectbox.opened").length){var t=I("div.jq-selectbox.opened"),s=I("div.jq-selectbox__search input",t),i=I("div.jq-selectbox__dropdown",t);t.find("select").data("_"+o).options.onSelectClosed.call(t),s.length&&s.val("").keyup(),i.hide().find("li.sel").addClass("selected"),t.removeClass("focused opened dropup dropdown")}}var o="styler",i={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};l.prototype={init:function(){function A(){void 0!==D.attr("id")&&""!==D.attr("id")&&(this.id=D.attr("id")+M.idSuffix),this.title=D.attr("title"),this.classes=D.attr("class"),this.data=D.data()}var D=I(this.element),M=this.options,O=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),e=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(D.is(":checkbox")){var t=function(){var e=new A,t=I('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(t).prependTo(t),D.is(":checked")&&t.addClass("checked"),D.is(":disabled")&&t.addClass("disabled"),t.click(function(e){e.preventDefault(),D.triggerHandler("click"),t.is(".disabled")||(D.is(":checked")?(D.prop("checked",!1),t.removeClass("checked")):(D.prop("checked",!0),t.addClass("checked")),D.focus().change())}),D.closest("label").add('label[for="'+D.attr("id")+'"]').on("click.styler",function(e){I(e.target).is("a")||I(e.target).closest(t).length||(t.triggerHandler("click"),e.preventDefault())}),D.on("change.styler",function(){D.is(":checked")?t.addClass("checked"):t.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&t.click()}).on("focus.styler",function(){t.is(".disabled")||t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")})};t(),D.on("refresh",function(){D.closest("label").add('label[for="'+D.attr("id")+'"]').off(".styler"),D.off(".styler").parent().before(D).remove(),t()})}else if(D.is(":radio")){var s=function(){var e=new A,s=I('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(s).prependTo(s),D.is(":checked")&&s.addClass("checked"),D.is(":disabled")&&s.addClass("disabled"),I.fn.commonParents=function(){var e=this;return e.first().parents().filter(function(){return I(this).find(e).length===e.length})},I.fn.commonParent=function(){return I(this).commonParents().first()},s.click(function(e){if(e.preventDefault(),D.triggerHandler("click"),!s.is(".disabled")){var t=I('input[name="'+D.attr("name")+'"]');t.commonParent().find(t).prop("checked",!1).parent().removeClass("checked"),D.prop("checked",!0).parent().addClass("checked"),D.focus().change()}}),D.closest("label").add('label[for="'+D.attr("id")+'"]').on("click.styler",function(e){I(e.target).is("a")||I(e.target).closest(s).length||(s.triggerHandler("click"),e.preventDefault())}),D.on("change.styler",function(){D.parent().addClass("checked")}).on("focus.styler",function(){s.is(".disabled")||s.addClass("focused")}).on("blur.styler",function(){s.removeClass("focused")})};s(),D.on("refresh",function(){D.closest("label").add('label[for="'+D.attr("id")+'"]').off(".styler"),D.off(".styler").parent().before(D).remove(),s()})}else if(D.is(":file")){var i=function(){var e=new A,i=D.data("placeholder");void 0===i&&(i=M.filePlaceholder);var t=D.data("browse");void 0!==t&&""!==t||(t=M.fileBrowse);var l=I('<div class="jq-file"><div class="jq-file__name">'+i+'</div><div class="jq-file__browse">'+t+"</div></div>").attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(l).appendTo(l),D.is(":disabled")&&l.addClass("disabled");var s=D.val(),o=I("div.jq-file__name",l);s&&o.text(s.replace(/.+[\\\/]/,"")),D.on("change.styler",function(){var e=D.val();if(D.is("[multiple]")){e="";var t=D[0].files.length;if(0<t){var s=D.data("number");void 0===s&&(s=M.fileNumber),e=s=s.replace("%s",t)}}o.text(e.replace(/.+[\\\/]/,"")),""===e?(o.text(i),l.removeClass("changed")):l.addClass("changed")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}).on("click.styler",function(){l.removeClass("focused")})};i(),D.on("refresh",function(){D.off(".styler").parent().before(D).remove(),i()})}else if(D.is('input[type="number"]')){var l=function(){var e=new A,t=I('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),D.is(":disabled")&&t.addClass("disabled");var o,a,d,s=null,i=null;void 0!==D.attr("min")&&(o=D.attr("min")),void 0!==D.attr("max")&&(a=D.attr("max")),d=void 0!==D.attr("step")&&I.isNumeric(D.attr("step"))?Number(D.attr("step")):Number(1);var l=function(e){var t,s=D.val();I.isNumeric(s)||(s=0,D.val("0")),e.is(".minus")?t=Number(s)-d:e.is(".plus")&&(t=Number(s)+d);var i=(d.toString().split(".")[1]||[]).length;if(0<i){for(var l="1";l.length<=i;)l+="0";t=Math.round(t*l)/l}I.isNumeric(o)&&I.isNumeric(a)?o<=t&&t<=a&&D.val(t):I.isNumeric(o)&&!I.isNumeric(a)?o<=t&&D.val(t):!I.isNumeric(o)&&I.isNumeric(a)?t<=a&&D.val(t):D.val(t)};t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var e=I(this);l(e),s=setTimeout(function(){i=setInterval(function(){l(e)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(s),clearInterval(i)}).on("mouseup","div.jq-number__spin",function(){D.change().trigger("input")}),D.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))};l(),D.on("refresh",function(){D.off(".styler").closest(".jq-number").before(D).remove(),l()})}else if(D.is("select")){var o=function(){function T(t){var s=t.prop("scrollHeight")-t.outerHeight(),i=null,l=null;t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(e){i=e.originalEvent.detail<0||0<e.originalEvent.wheelDelta?1:-1,((l=t.scrollTop())>=s&&i<0||l<=0&&0<i)&&(e.stopPropagation(),e.preventDefault())})}function P(){for(var e=0;e<N.length;e++){var t=N.eq(e),s="",i="",l="",o="",a="",d="",r="",n="",c="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(o=' id="'+t.attr("id")+M.idSuffix+'"'),void 0!==t.attr("title")&&""!==N.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(r=" "+t.attr("class"),c=' data-jqfs-class="'+t.attr("class")+'"');var f=t.data();for(var h in f)""!==f[h]&&(d+=" data-"+h+'="'+f[h]+'"');i+r!==""&&(l=' class="'+i+r+'"'),s="<li"+c+d+l+a+o+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(n=" "+t.parent().attr("class")),s="<li"+c+d+' class="'+i+r+" option"+n+'"'+a+o+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+n+'">'+t.parent().attr("label")+"</li>"+s)),H+=s}}var N=I("option",D),H="";if(D.is("[multiple]")){if(e||O)return;!function(){var e=new A,t=I('<div class="jq-select-multiple jqselect"></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(t),P(),t.append("<ul>"+H+"</ul>");var s=I("ul",t),l=I("li",t),i=D.attr("size"),o=s.outerHeight(),a=l.outerHeight();void 0!==i&&0<i?s.css({height:a*i}):s.css({height:4*a}),o>t.height()&&(s.css("overflowY","scroll"),T(s),l.filter(".selected").length&&s.scrollTop(s.scrollTop()+l.filter(".selected").position().top)),D.prependTo(t),D.is(":disabled")?(t.addClass("disabled"),N.each(function(){I(this).is(":selected")&&l.eq(I(this).index()).addClass("selected")})):(l.filter(":not(.disabled):not(.optgroup)").click(function(e){D.focus();var t=I(this);if(e.ctrlKey||e.metaKey||t.addClass("selected"),e.shiftKey||t.addClass("first"),e.ctrlKey||e.metaKey||e.shiftKey||t.siblings().removeClass("selected first"),(e.ctrlKey||e.metaKey)&&(t.is(".selected")?t.removeClass("selected first"):t.addClass("selected first"),t.siblings().removeClass("first")),e.shiftKey){var s=!1,i=!1;t.siblings().removeClass("selected").siblings(".first").addClass("selected"),t.prevAll().each(function(){I(this).is(".first")&&(s=!0)}),t.nextAll().each(function(){I(this).is(".first")&&(i=!0)}),s&&t.prevAll().each(function(){if(I(this).is(".selected"))return!1;I(this).not(".disabled, .optgroup").addClass("selected")}),i&&t.nextAll().each(function(){if(I(this).is(".selected"))return!1;I(this).not(".disabled, .optgroup").addClass("selected")}),1==l.filter(".selected").length&&t.addClass("first")}N.prop("selected",!1),l.filter(".selected").each(function(){var e=I(this),t=e.index();e.is(".option")&&(t-=e.prevAll(".optgroup").length),N.eq(t).prop("selected",!0)}),D.change()}),N.each(function(e){I(this).data("optionIndex",e)}),D.on("change.styler",function(){l.removeClass("selected");var t=[];N.filter(":selected").each(function(){t.push(I(this).data("optionIndex"))}),l.not(".optgroup").filter(function(e){return-1<I.inArray(e,t)}).addClass("selected")}).on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}),o>t.height()&&D.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||s.scrollTop(s.scrollTop()+l.filter(".selected").position().top-a),40!=e.which&&39!=e.which&&34!=e.which||s.scrollTop(s.scrollTop()+l.filter(".selected:last").position().top-s.innerHeight()+2*a)}))}()}else!function(){var e=new A,t="",s=D.data("placeholder"),i=D.data("search"),l=D.data("search-limit"),o=D.data("search-not-found"),a=D.data("search-placeholder"),r=D.data("smart-positioning");void 0===s&&(s=M.selectPlaceholder),void 0!==i&&""!==i||(i=M.selectSearch),void 0!==l&&""!==l||(l=M.selectSearchLimit),void 0!==o&&""!==o||(o=M.selectSearchNotFound),void 0===a&&(a=M.selectSearchPlaceholder),void 0!==r&&""!==r||(r=M.selectSmartPositioning);var n=I('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);D.after(n).prependTo(n);var c=n.css("z-index");c=0<c?c:1;var d=I("div.jq-selectbox__select",n),f=I("div.jq-selectbox__select-text",n),h=N.filter(":selected");P(),i&&(t='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+a+'"></div><div class="jq-selectbox__not-found">'+o+"</div>");var u=I('<div class="jq-selectbox__dropdown">'+t+"<ul>"+H+"</ul></div>");n.append(u);var p=I("ul",u),v=I("li",u),m=I("input",u),g=I("div.jq-selectbox__not-found",u).hide();v.length<l&&m.parent().hide(),""===N.first().text()&&N.first().is(":selected")&&!1!==s?f.text(s).addClass("placeholder"):f.text(h.text());var b=0,y=0;if(v.css({display:"inline-block"}),v.each(function(){var e=I(this);e.innerWidth()>b&&(b=e.innerWidth(),y=e.width())}),v.css({display:""}),f.is(".placeholder")&&f.width()>b)f.width(f.width());else{var C=n.clone().appendTo("body").width("auto"),x=C.outerWidth();C.remove(),x==n.outerWidth()&&f.width(y)}b>n.width()&&u.width(b),""===N.first().text()&&""!==D.data("placeholder")&&v.first().hide();var w=n.outerHeight(!0),q=m.parent().outerHeight(!0)||0,_=p.css("max-height"),j=v.filter(".selected");if(j.length<1&&v.first().addClass("selected sel"),void 0===v.data("li-height")){var k=v.outerHeight();!1!==s&&(k=v.eq(1).outerHeight()),v.data("li-height",k)}var S=u.css("top");if("auto"==u.css("left")&&u.css({left:0}),"auto"==u.css("top")&&(u.css({top:w}),S=w),u.hide(),j.length&&(N.first().text()!=h.text()&&n.addClass("changed"),n.data("jqfs-class",j.data("jqfs-class")),n.addClass(j.data("jqfs-class"))),D.is(":disabled"))return n.addClass("disabled");d.click(function(){if(I("div.jq-selectbox").filter(".opened").length&&M.onSelectClosed.call(I("div.jq-selectbox").filter(".opened")),D.focus(),!O){var t=I(window),s=v.data("li-height"),i=n.offset().top,l=t.height()-w-(i-t.scrollTop()),e=D.data("visible-options");void 0!==e&&""!==e||(e=M.selectVisibleOptions);var o=5*s,a=s*e;0<e&&e<6&&(o=a),0===e&&(a="auto");var d=function(){u.height("auto").css({bottom:"auto",top:S});var e=function(){p.css("max-height",Math.floor((l-20-q)/s)*s)};e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),l<u.outerHeight()+20&&e()};!0===r||1===r?o+q+20<l?(d(),n.removeClass("dropup").addClass("dropdown")):(function(){u.height("auto").css({top:"auto",bottom:S});var e=function(){p.css("max-height",Math.floor((i-t.scrollTop()-20-q)/s)*s)};e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),i-t.scrollTop()-20<u.outerHeight()+20&&e()}(),n.removeClass("dropdown").addClass("dropup")):!1===r||0===r?o+q+20<l&&(d(),n.removeClass("dropup").addClass("dropdown")):(u.height("auto").css({bottom:"auto",top:S}),p.css("max-height",a),"none"!=_&&p.css("max-height",_)),n.offset().left+u.outerWidth()>t.width()&&u.css({left:"auto",right:0}),I("div.jqselect").css({zIndex:c-1}).removeClass("opened"),n.css({zIndex:c}),u.is(":hidden")?(I("div.jq-selectbox__dropdown:visible").hide(),u.show(),n.addClass("opened focused"),M.onSelectOpened.call(n)):(u.hide(),n.removeClass("opened dropup dropdown"),I("div.jq-selectbox").filter(".opened").length&&M.onSelectClosed.call(n)),m.length&&(m.val("").keyup(),g.hide(),m.keyup(function(){var e=I(this).val();v.each(function(){I(this).html().match(new RegExp(".*?"+e+".*?","i"))?I(this).show():I(this).hide()}),""===N.first().text()&&""!==D.data("placeholder")&&v.first().hide(),v.filter(":visible").length<1?g.show():g.hide()})),v.filter(".selected").length&&(""===D.val()?p.scrollTop(0):(p.innerHeight()/s%2!=0&&(s/=2),p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()/2+s))),T(p)}}),v.hover(function(){I(this).siblings().removeClass("selected")});v.filter(".selected").text();v.filter(":not(.disabled):not(.optgroup)").click(function(){D.focus();var e=I(this),t=e.text();if(!e.is(".selected")){var s=e.index();s-=e.prevAll(".optgroup").length,e.addClass("selected sel").siblings().removeClass("selected sel"),N.prop("selected",!1).eq(s).prop("selected",!0),t,f.text(t),n.data("jqfs-class")&&n.removeClass(n.data("jqfs-class")),n.data("jqfs-class",e.data("jqfs-class")),n.addClass(e.data("jqfs-class")),D.change()}u.hide(),n.removeClass("opened dropup dropdown"),M.onSelectClosed.call(n)}),u.mouseout(function(){I("li.sel",u).addClass("selected")}),D.on("change.styler",function(){f.text(N.filter(":selected").text()).removeClass("placeholder"),v.removeClass("selected sel").not(".optgroup").eq(D[0].selectedIndex).addClass("selected sel"),N.first().text()!=v.filter(".selected").text()?n.addClass("changed"):n.removeClass("changed")}).on("focus.styler",function(){n.addClass("focused"),I("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){n.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=v.data("li-height");""===D.val()?f.text(s).addClass("placeholder"):f.text(N.filter(":selected").text()),v.removeClass("selected sel").not(".optgroup").eq(D[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===D.val()?p.scrollTop(0):p.scrollTop(p.scrollTop()+v.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()+t),13==e.which&&(e.preventDefault(),u.hide(),n.removeClass("opened dropup dropdown"),M.onSelectClosed.call(n))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),d.click())}),K.registered||(I(document).on("click",K),K.registered=!0)}()};o(),D.on("refresh",function(){D.off(".styler").parent().before(D).remove(),o()})}else D.is(":reset")&&D.on("click",function(){setTimeout(function(){D.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var e=I(this.element);e.is(":checkbox")||e.is(":radio")?(e.removeData("_"+o).off(".styler refresh").removeAttr("style").parent().before(e).remove(),e.closest("label").add('label[for="'+e.attr("id")+'"]').off(".styler")):e.is('input[type="number"]')?e.removeData("_"+o).off(".styler refresh").closest(".jq-number").before(e).remove():(e.is(":file")||e.is("select"))&&e.removeData("_"+o).off(".styler refresh").removeAttr("style").parent().before(e).remove()}},I.fn[o]=function(t){var s,i=arguments;return void 0===t||"object"==_typeof(t)?(this.each(function(){I.data(this,"_"+o)||I.data(this,"_"+o,new l(this,t))}).promise().done(function(){var e=I(this[0]).data("_"+o);e&&e.options.onFormStyled.call()}),this):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var e=I.data(this,"_"+o);e instanceof l&&"function"==typeof e[t]&&(s=e[t].apply(e,Array.prototype.slice.call(i,1)))}),void 0!==s?s:this):void 0},K.registered=!1});