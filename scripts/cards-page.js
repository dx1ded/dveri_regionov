(()=>{var t={572:()=>{var t=document.querySelector(".burger"),e=document.querySelector("#burger-toggle");e.addEventListener("click",(function(){t.classList.toggle("burger--active")}))}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var u=e[o]={exports:{}};return t[o](u,u.exports,r),u.exports}(()=>{"use strict";var t,e,o,n=function(){return JSON.parse(localStorage.getItem("cart"))};r(572);t=n().length,e=document.querySelector("#cart-item"),o=e.querySelector("span"),t?(e.setAttribute("data-is-not-empty",""),o.textContent=t):(e.removeAttribute("data-is-not-empty",""),o.textContent="")})()})();