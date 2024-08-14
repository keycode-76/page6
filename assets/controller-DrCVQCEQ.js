const e={golbal_arr:{},scene_arr:{},line_arr:[],close_arr:{},note_arr:[],last_id:0,line_id:0,line_length:0,wall:1,scene:[],line:[],bag:[0],key:{door:"",next:"",id:0},boss:0,heart:0,qte:0};e.bag;const u=document.querySelector("#screen"),g=document.querySelector("#screen_ui"),P=document.querySelector("#screen_bg"),R=document.querySelector("#scene_ux"),c=document.querySelector("#scene_bg"),E=a("set_btn"),w=a("pop_note"),se=a("next_scene_btn");u.appendChild(E);const L=a("end_div"),W=a("end_content"),U=a("end_share"),z=a("end_retry");L.append(W,U,z);const m=a("lines_div"),Y=a("lines_btn"),Q=a("lines_name"),b=(n,t)=>{var s;if(c.innerHTML="",R.innerHTML="",g.innerHTML="",t?e.scene=t[n]:e.scene=e.scene_arr[n],!!e.scene)switch(e.scene.bg&&(c.className=e.scene.bg),e.line_arr[n]&&(e.line_length=e.line_arr[n].length),e.scene.type){case"anim":j(),c.addEventListener("animationend",l=>{l.animationName===e.scene.bg&&e.scene.type==="anim"&&(c.className="",b(e.scene.next))});break;case"line":_(n);break;case"close":e.line_length=0,_(n);break;case"view":e.last_id=n,_(n);break;case"room":e.last_id=n,c.className=`${e.scene.bg}-${e.wall}`,(s=e.line_arr[n])!=null&&s[e.wall]?(e.line_length=e.line_arr[n][e.wall].length,_(e.wall,e.line_arr[n])):_(n);break;case"qte":c.className=`${e.scene.bg}-${e.qte}`,_(n);break;case"end":c.addEventListener("animationend",l=>{e.scene&&e.scene.type==="end"&&l.animationName===e.scene.bg&&(c.className="",c.innerHTML="",R.innerHTML="",g.innerHTML="",se.click())});break}},_=(n,t,s)=>{var l;if(g.innerHTML="",t?e.line=t[n]:e.scene.type==="room"||(e.line=e.line_arr[n]),e.line&&e.line_length>0)m.innerHTML="",m.textContent=e.line[e.line_id],s&&(Q.textContent=s,m.appendChild(Q)),m.appendChild(Y),g.appendChild(m),e.line_id+=1;else switch(e.line_id=0,e.scene.type){case"line":j(),b(e.scene.next);break;case"close":M(),be();break;case"view":e.line_arr[n]&&delete e.line_arr[n],M(),_e();break;case"room":(l=e.line_arr[n])!=null&&l[e.wall]&&delete e.line_arr[n][e.wall],M(),ge();break;case"qte":e.line_arr[n]&&delete e.line_arr[n],oe(),J(),he();break}},M=()=>{let n=e.scene.ux;e.scene.type==="room"&&(n=e.scene.ux[e.wall-1]),n.forEach(t=>{if(t.type==="item"&&e.bag.includes(t.is))return;const s=document.createElement("div");s.className="btns_ux",R.appendChild(s),s.style.left=t.x+"vh",s.style.top=t.y+"vh",s.style.width=t.w+"vh",s.style.height=t.h+"vh",t.bg?s.classList.add(t.bg):s.style.background="blue",s.addEventListener("click",l=>{ae(l,t)})})},ae=(n,t)=>{switch(t.type){case"note":e.line_length=e.note_arr[t.is].length,_(t.is,e.note_arr);break;case"close":b(t.is,e.close_arr);break;case"next":t.wall&&(e.wall=t.wall),b(t.is);break;case"item":e.bag.push(t.is),B("item",e.golbal_arr.item[t.is].name),n.target.style.display="none";break;case"npc":t.name,e.line_length=e.note_arr[t.is].length,_(t.is,e.note_arr,t.name);break}},j=()=>{if(e.scene.change)e.scene.change.forEach(n=>{n.wall?n.ux==="add"?e.scene_arr[n.id].ux[n.wall-1].push(n.add):(e.scene_arr[n.id].ux[n.wall-1][n.ux].type=n.type,e.scene_arr[n.id].ux[n.wall-1][n.ux].is=n.is):n.ux==="add"?e.scene_arr[n.id].ux.push(n.add):(e.scene_arr[n.id].ux[n.ux].type=n.type,e.scene_arr[n.id].ux[n.ux].is=n.is)});else return},B=(n,t)=>{switch(u.appendChild(w),n){case"item":w.textContent=`${t} ${e.golbal_arr.pop.item}`;break;case"door":w.textContent=e.golbal_arr.pop.door;break}};w.addEventListener("animationend",n=>{n.animationName==="show_anim"&&u.removeChild(w)});const X=a("qte_div"),G=a("qte_btn","ui_btns"),le=a("qte_bar"),A=a("qte_box"),f=a("qte_dot"),x=a("feedback","gmui_btns"),C=a("userHeart"),q=a("bossHeart");let ce=0;function oe(){e.qte=0,C.innerHTML="",q.innerHTML="",e.boss=e.scene.boss,e.heart=e.scene.user;for(let n=0;n<e.heart;n++){const t=a(0,"heart_icon");C.appendChild(t)}for(let n=0;n<e.boss;n++){const t=a(0,"boss_icon");q.appendChild(t)}}function J(){ce=Date.now(),f.className="qte_start_anim",x.textContent="Press to move on"}function re(){const t=window.getComputedStyle(f).transform;f.className="",f.style.transform=t}function ie(n,t){const s=n.getBoundingClientRect(),l=t.getBoundingClientRect();return s.left>=l.left&&s.right<=l.right}function de(){const n=document.querySelector("#qte_bar");ie(f,n)?(x.textContent=e.golbal_arr.success,e.boss-=1,e.qte+=1,e.scene.mode==="fight"&&(c.className=`${e.scene.bg}-heart`),O("boss",q,e.boss)):(x.textContent=e.golbal_arr.failed,e.heart-=1,e.scene.mode==="fight"&&(c.className=`${e.scene.bg}-boss`),O("heart",C,e.heart)),re()}function O(n,t,s){const l=t.querySelectorAll(`.${n}_icon`),d=l.length-s;if(d>0)for(let r=0;r<d;r++){const h=l[l.length-1-r];h.classList.add("heart_out_anim"),h.addEventListener("animationend",()=>{h.remove(),e.boss<1?(e.scene.reward&&(e.bag.push(e.scene.reward),B("item",e.golbal_arr.item[e.scene.reward].name)),b(e.scene.next)):e.heart<1?(u.appendChild(L),D(),E.style.zIndex=0,W.textContent=e.golbal_arr.end[e.scene.end]):(e.scene.mode==="run"?n==="boss"&&(c.className=`${e.scene.bg}-${e.qte}`):e.scene.mode==="fight"&&(c.className=`${e.scene.bg}-0`),J())})}else if(d<0)for(let r=0;r<Math.abs(d);r++){const h=a(n,`${n}-icon`);t.appendChild(h)}}z.addEventListener("click",()=>{D()});let $=!1;E.addEventListener("click",F(()=>{D()},300));const D=()=>{E.style.zIndex=11,$?u.removeChild(L):(u.appendChild(L),W.textContent=e.golbal_arr.end[0][0],U.textContent=e.golbal_arr.end[0][1],z.textContent=e.golbal_arr.end[0][2]),$=!$},K=a("btn_return","ui_btns"),y=a("btn_bag","ui_btns"),V=a("btn_left","ui_btns"),Z=a("btn_right","ui_btns");Y.addEventListener("click",F(()=>{e.line_length-=1,_(e.scene.id)},300));const _e=()=>{g.append(y)},be=()=>{g.append(K,y)};K.addEventListener("click",()=>{b(e.last_id)});const ge=()=>{g.append(V,Z,y)};V.addEventListener("click",()=>{e.wall>1?e.wall-=1:e.wall=4,b(e.scene.id)});Z.addEventListener("click",()=>{e.wall<4?e.wall+=1:e.wall=1,b(e.scene.id)});const he=()=>{A.appendChild(le),X.append(q,x,A,C,f,G),g.appendChild(X)};G.addEventListener("click",()=>de());const v=a("bag_div"),p=a("bag_slots","bag_slots_close"),o=a("bag_view"),N=a(0,"bag_slots_btn_close"),I=a("bag_key_btn");let S=!1,H=!1;y.addEventListener("click",F(()=>{S?P.removeChild(v):ee(),S=!S},300));const ee=()=>{v.innerHTML="",p.innerHTML="",o.innerHTML="",o.classList="",v.append(o,p,N),e.bag.forEach((n,t)=>{const s=a(e.golbal_arr.item[n].bg,"bag_icon");s.draggable=!0,ue(s,n),p.appendChild(s),s.addEventListener("click",()=>{o.innerHTML="",I.textContent=e.golbal_arr.use,o.className!==e.golbal_arr.item[n].bg?(o.className=e.golbal_arr.item[n].bg,e.golbal_arr.item[n].type==="key"&&(o.appendChild(I),e.key.door=e.golbal_arr.item[n].door,e.key.next=e.golbal_arr.item[n].next,e.key.id=n)):o.className=""})}),P.appendChild(v)};N.addEventListener("click",()=>{H?fe():pe()});I.addEventListener("click",()=>{c.className===e.key.door?(b(e.key.next),y.click(),e.bag=e.bag.filter(n=>n!==e.key.id)):B("door")});const fe=()=>{H=!1,o.style.height="100%",p.className="bag_slots_close",N.classList="bag_slots_btn_close"},pe=()=>{H=!0,o.style.height="0%",o.innerHTML="",o.classList="",p.className="bag_slots_open",N.classList="bag_slots_btn_open"};let i=null,k=null;function ue(n,t){n.addEventListener("touchstart",function(s){H&&(i=n,k=t)}),n.addEventListener("touchmove",function(s){if(!i)return;i.style.position="absolute";var l=s.targetTouches[0];const d=parseFloat(window.getComputedStyle(i).width),r=parseFloat(window.getComputedStyle(i).height);i.style.left=l.screenX-window.innerWidth/2+d*1.2+"px",i.style.top=l.screenY-window.innerHeight/2+r*1.2+"px"}),n.addEventListener("touchend",function(s){if(!i)return;const l=Math.floor((s.changedTouches[0].pageX-p.offsetLeft)/i.offsetWidth),d=Math.max(0,Math.min(e.bag.length-1,l)),r=e.bag[k];e.bag[k]=e.bag[d],e.bag[d]=r;const h=e.bag.filter((T,ne,te)=>T!==void 0&&T!==""&&te.indexOf(T)===ne);e.bag=h,ee(),i=null,k=null})}function a(n,t,s){const l=document.createElement("div");return n&&(l.id=n),t&&(l.className=t),l}function F(n,t=100){let s;return(...l)=>{clearTimeout(s),s=setTimeout(()=>n.apply(this,l),t)}}export{ae as click_ux,z as end_retry,_ as new_line,b as new_scene,se as next_scene_btn,M as render_ux,e as user};
