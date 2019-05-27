/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
  

// Ховер
function mouseOver(event) {
    event.target.style.borderColor = 'black';
    event.target.style.backgroundColor = 'white';
}

// Ховер для placeholder
function mouseOverPlace(event) {
    event.target.previousElementSibling.style.borderColor = 'black';
    event.target.previousElementSibling.style.backgroundColor = 'white';
}

// Обратный ховеру эффект
function mouseOut(event) {
    if (!event.target.value) {
        event.target.style.borderColor = 'transparent';
        event.target.style.backgroundColor = 'transparent';
    }
}

// Фокус
function placeFocus(event) {
    var target = event.target;
    if (!event.target.value) {
        target.nextElementSibling.style.top = 5 + 'px';
        target.nextElementSibling.style.fontSize = 12 + 'px';
        target.nextElementSibling.style.transform = 'translateY(0)';
    }
}

// Обратный эффект 
function placeBlur(event) {
    var target = event.target;
    if (event.target.value) {
        target.nextElementSibling.style.top = 5 + 'px';
        target.nextElementSibling.style.fontSize = 12 + 'px';
        target.nextElementSibling.style.transform = 'translateY(0)';
        target.style.backgroundColor = 'white';
        target.style.borderColor = 'black';
    } else {
        target.nextElementSibling.style.top = 50 + '%';
        target.nextElementSibling.style.fontSize = 16 + 'px';
        target.nextElementSibling.style.transform = 'translateY(-50%)';
        target.style.backgroundColor = 'transparent';
        target.style.borderColor = 'transparent';
    }
}

// Таймер
function timer(year, month, day) {
    setInterval(function() {
        var days = document.getElementById('days'),
            daysValue = document.getElementById('days-value'),
            hours = document.getElementById('hours'),
            hoursValue = document.getElementById('hours-value'),
            minuts = document.getElementById('minuts'),
            minutsValue = document.getElementById('minuts-value'),
            seconds = document.getElementById('seconds'),
            secondsValue = document.getElementById('seconds-value'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year, month, day),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToHours = sec % 86400,
            secToMinuts = sec % 3600,
            daysResult = Math.floor(sec / 86400),
            hoursResult = Math.floor(secToHours / 3600),
            minutsResult = Math.floor(secToMinuts / 60),
            secondsResult = secToMinuts % 60;
        daysValue.innerHTML = decOfNum(daysResult, ['день', 'дня', 'дней']);
        hoursValue.innerHTML = decOfNum(hoursResult, ['час', 'часа', 'часов']);
        minutsValue.innerHTML = decOfNum(minutsResult, ['минута', 'минуты', 'минут']);
        secondsValue.innerHTML = decOfNum(secondsResult, ['секунда', 'секунды', 'секунд']);
        days.innerHTML = daysResult;
        hours.innerHTML = hoursResult;
        minuts.innerHTML = minutsResult;
        seconds.innerHTML = secondsResult;
    }, 1000)
}

timer(2019, 5, 25);

// Склонение времени
var decCache = [];
var decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) {
        decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    }
    return titles[decCache[number]];
}

// Появление и исчезновение кнопки вверх
var arrowUp = document.querySelector('.up');

window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;
    if (pageY > innerHeight) {
        arrowUp.style.visibility='visible';
        arrowUp.style.opacity='.8';
    } else {
        arrowUp.style.visibility='hidden';
        arrowUp.style.opacity='0';
    }
}

// Скролл вверх
arrowUp.addEventListener('click', toTop);

function toTop() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    if (pageY > 0) {
        window.scrollBy(0,-100);
        var timeOut = setTimeout('toTop()', 20);
    } else {
        clearTimeout(timeOut);
    }
    return false;
}

// Открытие и закрытие модального окна
var serv = document.querySelector('.services');
var popup = document.querySelector('.popup');
var body = document.body;

serv.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('services__item-btn')) {
        popup.style.display='flex';
        body.style.overflow='hidden';
    }
});

popup.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('popup') || 
        target.classList.contains('popup__exit-link') || 
        target.classList.contains('popup__exit')) {
            event.preventDefault();
            popup.style.display='none';
            body.style.overflow='auto';
    }
});

// Формы
var form = document.querySelector('.form');
var formPopup = document.querySelector('.form--popup');
var send = document.querySelector('.form__btn');
var sendPopup = document.querySelector('.form__btn--popup');
var popupSmall = document.querySelector('.popup-sm');

send.addEventListener('click', submit);
sendPopup.addEventListener('click', submitPopup);

function submit(event) {
    event.preventDefault();

    if (validate(form)) {
        var data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'main.php');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function () {});
        form.elements.name.value = '';
        form.elements.phone.value = '';
        popupSmall.style.display = 'flex';
        setTimeout(function () {
            popupSmall.style.display = 'none';
        }, 2000);
    }
}

function submitPopup(event) {
    event.preventDefault();

    if (validate(formPopup)) {
        var data = {
            name: formPopup.elements.name.value,
            phone: formPopup.elements.phone.value
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'main.php');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function () {});
        formPopup.elements.name.value = '';
        formPopup.elements.phone.value = '';
        popupSmall.style.display = 'flex';
        setTimeout(function () {
            popupSmall.style.display = 'none';
            popup.style.display = 'none';
            body.style.overflow = 'auto';
        }, 2500);
    }
}

// Валидация
function validate(form) {
    var valid = true;
    var elems = form.elements;
    var error = document.querySelector('.form__error');

    elems.name.style.borderColor = 'transparent';
    if (!elems.name.value) {
        elems.name.style.borderColor = '#E15433';
        valid = false;
    }

    error.style.display = 'none';
    elems.phone.style.borderColor = 'transparent';
    if (elems.phone.value.length < 11) {
        elems.phone.style.borderColor = '#E15433';
        error.style.display = 'block';
        valid = false;
    }

    return valid;
}

// Скролл до услуг
$("a").on('click', function(event) {
    if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 2000, function(){

            window.location.hash = hash;
          });
    }
  });