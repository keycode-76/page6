const E="data:audio/mpeg;base64,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",a="data:audio/mpeg;base64,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",s="data:audio/mpeg;base64,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",C="/page6/assets/door1-CGUW46fB.wav",n="/page6/assets/bag-TcpZ8Nwp.mp3",U="/page6/assets/bag_open-CAAhWnZM.mp3",G="/page6/assets/trans-DlUaoYPT.mp3",S="/page6/assets/sucess-C0BuqVm7.wav",t="/page6/assets/failed-BNPLxPO-.mp3",L="/page6/assets/horror-yAmnuXkU.wav",i="/page6/assets/scare_1-w1HnuWG-.mp3",B=new Audio(E),g=new Audio(s),V=new Audio(C),M=new Audio(n),w=new Audio(U),o=new Audio(G),c=new Audio(S),l=new Audio(t),I=new Audio(a),F=new Audio(i),Q=new Audio(L);Q.loop=!0;B.pause();g.pause();V.pause();M.pause();w.pause();o.pause();I.pause();const u=[Q,B,g,V,M,w,o,c,l,I,F],e=()=>{u.forEach(D=>{D.volume=A/5}),B.play(),q.textContent=A};let A=3;const p=document.querySelector("#volume_add"),y=document.querySelector("#volume_sub"),q=document.querySelector("#volume_text");q.textContent=A;p.addEventListener("click",()=>{A<5&&(A+=1,e())});y.addEventListener("click",()=>{A>0&&(A-=1,e())});export{Q as M,F as S,g as a,I as b,M as c,B as d,V as e,c as f,l as g,w as h};
