const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scene1-BWUv06qN.js","assets/scene1-C18S4ghm.css","assets/scene2-fKVVfcwI.js","assets/scene2-XqSxj_uZ.css"])))=>i.map(i=>d[i]);
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=r(n);fetch(n.href,e)}})();const L="modulepreload",x=function(o){return"/page6/"+o},E={},b=function(s,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),c=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));n=Promise.all(r.map(d=>{if(d=x(d),d in E)return;E[d]=!0;const _=d.endsWith(".css"),f=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const t=document.createElement("link");if(t.rel=_?"stylesheet":L,_||(t.as="script",t.crossOrigin=""),t.href=d,c&&t.setAttribute("nonce",c),document.head.appendChild(t),_)return new Promise((m,u)=>{t.addEventListener("load",m),t.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}return n.then(()=>s()).catch(e=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=e,window.dispatchEvent(c),!c.defaultPrevented)throw e})},C="/page6/assets/09ChillyRain-Cfp-r9cP.wav",v=new Audio(C);document.getElementById("click_to_start").addEventListener("click",()=>{P()});const a={now_scene:0,now_end:0,qte:"進入範圍時 按下按鈕",success:"成功！",failed:"沒按到！",use:"使用",pop:{item:"獲得! 請於包包內查看",door:"不適這扇門"},end:{0:["設定","分享","重玩這關"],1:"結局一 他醒了",2:"結局二",3:"結局三"},item:{0:{name:"地圖",bg:"bag_map",type:"map"},1:{name:"暗門鑰匙",bg:"bag_key_0",type:"key",door:"s2-1-3",next:2},2:{name:"後門鑰匙",bg:"bag_key_1",type:"key",door:"s2-close-2",next:8}}};function P(){g(!0);const o=document.getElementById("game_container");o.innerHTML="";const s=l("background"),r=l("screen"),i=l("set_btn"),n=l("screen_border"),e=l("screen_bg"),c=l("screen_ui"),d=l("scene"),_=l("scene_ux"),f=l("scene_bg"),t=l("end_div"),m=l("end_content"),u=l("end_share"),p=l("end_retry");t.append(m,u,p),e.appendChild(d),d.append(f,_),r.append(n,e,c,t,i),o.append(s,r),r.style.background="black",t.style.zIndex=-1,m.textContent=a.end[0][0],u.textContent=a.end[0][1],p.textContent=a.end[0][2],k(),u.onclick=function(){navigator.share&&navigator.share({title:"前往Google",text:"走吧?走吧!",url:"https://keycode-76.github.io/page6/"}).then(()=>console.log("成功！")).catch(y=>console.log("發生錯誤",y))},a.now_scene=1,w()}function h(o){const s=document.querySelector("#set_btn"),r=document.querySelector("#scene_bg"),i=document.querySelector("#end_div"),n=document.querySelector("#end_content");r.className="",i.style.zIndex=1,s.style.zIndex=0,n.textContent=a.end[o],v.currentTime=0,v.play()}function w(){g(!0);const o=document.querySelector("#scene_bg"),s=document.querySelector("#end_div");let r="";switch(a.now_scene){case 1:a.now_end===0?(r=b(()=>import("./scene1-BWUv06qN.js"),__vite__mapDeps([0,1])),o.className="image_loader"):h(a.now_end);break;case 2:a.now_end===0?(r=b(()=>import("./scene2-fKVVfcwI.js"),__vite__mapDeps([2,3])),o.className="image_loader"):h(a.now_end);break;default:h(3);break}Promise.all([r,b(()=>import("./controller-UyYKGz7B.js"),[])]).then(([i,n])=>{const{s_data:e,s_lines:c,s_close:d,s_note:_,s_init:f}=i,{user:t,new_scene:m,end_retry:u,next_scene_btn:p}=n;f(e,c,t.golbal_arr.bag),t.scene_arr=e,t.line_arr=c,t.close_arr=d,t.note_arr=_,t.golbal_arr=a,t.wall=1,t.line_id=0,o.addEventListener("animationend",y=>{y.animationName==="image_loader"&&(o.className="",g(!1),m(0,e))}),u.addEventListener("click",()=>{a.now_scene-=1,a.now_end=0,s.style.zIndex=-1,g(!1),w(),v.pause()}),p.addEventListener("click",()=>{a.now_scene+=1,g(!1),w()})}).catch(i=>{console.error("Failed to load script:",i)})}function g(o){const s=document.getElementById("initializator");o?s.style.display="block":s.style.display="none"}function k(){const o=window.innerWidth,s=window.innerHeight,r=document.querySelector("#screen");o*1.9<s?r.className="screen_portrait":r.className="screen_landscape"}window.addEventListener("resize",k);function l(o,s,r){const i=document.createElement("div");return o&&(i.id=o),i}
