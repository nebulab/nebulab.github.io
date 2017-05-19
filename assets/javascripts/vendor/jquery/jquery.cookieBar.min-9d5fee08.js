/*!
 * jQuery Cookiebar Plugin
 * https://github.com/carlwoodhouse/jquery.cookieBar
 *
 * Copyright 2012, Carl Woodhouse
 * Disclaimer: if you still get fined for not complying with the eu cookielaw, it's not our fault.
 */
!function(e){e.fn.cookieBar=function(o){var n=e.extend({closeButton:"none",secure:!1,path:"/",domain:""},o);return this.each(function(){var i=e(this);i.hide(),"none"==n.closeButton&&(i.append('<a class="cookiebar-close">Continue</a>'),n=e.extend({closeButton:".cookiebar-close"},o)),"hide"!=e.cookie("cookiebar")&&i.show(),i.find(n.closeButton).click(function(){return i.hide(),e.cookie("cookiebar","hide",{path:n.path,secure:n.secure,domain:n.domain,expires:30}),!1})})},e.cookieBar=function(o){e("body").prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>'),e(".cookie-message").cookieBar(o)}}(jQuery),/*!
 * Dependancy:
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
function(e){e.cookie=function(o,n,i){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(n))||null===n||void 0===n)){if(i=e.extend({},i),(null===n||void 0===n)&&(i.expires=-1),"number"==typeof i.expires){var t=i.expires,r=i.expires=new Date;r.setDate(r.getDate()+t)}return n=String(n),document.cookie=[encodeURIComponent(o),"=",i.raw?n:encodeURIComponent(n),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}i=n||{};for(var c,a=i.raw?function(e){return e}:decodeURIComponent,s=document.cookie.split("; "),u=0;c=s[u]&&s[u].split("=");u++)if(a(c[0])===o)return a(c[1]||"");return null}}(jQuery);