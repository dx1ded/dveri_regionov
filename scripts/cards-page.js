(()=>{var t={572:()=>{var t=document.querySelector(".burger"),e=document.querySelector("#burger-toggle");e.addEventListener("click",(function(){t.classList.toggle("burger--active")}))}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var u=e[o]={exports:{}};return t[o](u,u.exports,r),u.exports}(()=>{"use strict";var t,e,o,n,u=function(){return JSON.parse(localStorage.getItem("cart"))};r(572);e=null===(t=u())||void 0===t?void 0:t.length,o=document.querySelector("#cart-item"),n=o.querySelector("span"),e?(o.setAttribute("data-is-not-empty",""),n.textContent=e):(o.removeAttribute("data-is-not-empty",""),n.textContent="")})()})();