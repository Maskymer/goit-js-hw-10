import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as p,i as m}from"./assets/vendor-A92OCY9B.js";const u=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let c=null,d=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<new Date?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):n.disabled=!1}};p(u,C);n.addEventListener("click",T);n.disabled=!0;function T(){n.disabled=!0,u.disabled=!0,d=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(d),l(0,0,0,0),u.disabled=!1,m.success({title:"Success",message:"Countdown finished!",position:"topRight"});return}const{days:o,hours:s,minutes:i,seconds:a}=q(t);l(o,s,i,a)},1e3)}function l(e,t,o,s){S.textContent=r(e),b.textContent=r(t),g.textContent=r(o),D.textContent=r(s)}function q(e){const a=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
