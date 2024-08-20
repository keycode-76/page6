import{S as t}from"./sound-Gwtqw6iZ.js";let n=[0,1];const e="小男孩";let s={1:{2:["這是後門","需要鑰匙"],3:["粉色的門"]},5:["睡著了嗎"],6:["醒醒","給你鬆綁"],7:["沒事就好","帶你離開這裡"],9:{3:["別回頭看了","快點"]},11:["放下他!"]},i=[{id:0,type:"anim",bg:"s2-0",next:1},{id:1,type:"room",bg:"s2-1",ux:[[{x:1,y:49,w:25,h:6,type:"close",is:0},{x:1,y:58,w:25,h:6,type:"close",is:0}],[{x:32,y:44,w:13,h:4,type:"close",is:1},{x:32,y:49,w:13,h:4,type:"close",is:2},{x:1,y:25,w:8,h:50,type:"note",is:6},{x:10,y:16,w:21,h:44,type:"note",is:3}],[{x:15,y:12,w:35,h:68,type:"note",is:0}],[{x:47,y:60,w:6,h:6,type:"close",is:0},{x:47,y:68,w:6,h:6,type:"close",is:0}]]},{id:2,type:"anim",bg:"s2-door",next:3},{id:3,type:"view",bg:"s2-3",ux:[{x:17,y:56,w:6,h:6,type:"next",is:4},{x:14,y:69,w:25,h:6,type:"note",is:8}]},{id:4,type:"view",bg:"s2-4",ux:[{x:8,y:55,w:13,h:13,type:"next",is:5}]},{id:5,type:"view",bg:"s2-5",ux:[{x:15,y:40,w:18,h:18,type:"next",is:6}]},{id:6,type:"view",bg:"s2-6",ux:[{x:13,y:32,w:18,h:18,type:"npc",is:7,name:e},{x:25,y:58,w:7,h:7,type:"next",is:7}]},{id:7,type:"line",bg:"s2-7",next:1,wall:3,change:[{id:1,wall:3,ux:0,type:"note",is:5},{id:1,wall:2,ux:"add",add:{x:22,y:35,w:15,h:30,type:"npc",is:4,name:e,bg:"npc-0"}},{id:1,wall:2,ux:3,type:"close",is:3}]},{id:8,type:"anim",bg:"s2-door",next:9,wall:1},{id:9,type:"room",bg:"s2-9",ux:[[],[],[{x:31,y:41,w:13,h:36,type:"next",is:10}],[]]},{id:10,type:"anim",bg:"s2-10",next:11,sound:t},{id:11,type:"qte",bg:"s2-qte-2",mode:"fight",next:13,end:12,user:2,boss:3,bar:20},{id:12,type:"end",end:2,bg:"s2-qte-2-lose"},{id:13,type:"anim",bg:"s2-13",next:14},{id:14,type:"anim",bg:"s2-14",next:15},{id:15,type:"anim",bg:"s2-15",next:16},{id:16,type:"anim",bg:"s2-16",next:17},{id:17,type:"anim",bg:"s2-17",next:18},{id:18,type:"anim",bg:"s2-18",next:19},{id:19,type:"end",end:3,scene:3,bg:"s2-19"}];const x={0:["使用鑰匙"],1:["是空的"],2:["是菜刀"],3:["還不是出去的時候"],4:["這...門...鎖了"],5:["人已經出來了"],6:["現在還想者吃阿"],7:["...聽...過...這聲音"],8:["金屬的門"]},p=[{id:0,type:"close",bg:"s2-close-0",ux:[{x:8,y:42,w:38,h:22,type:"note",is:1}]},{id:1,type:"close",bg:"s2-close-1",ux:[{x:8,y:42,w:38,h:22,type:"note",is:2}]},{id:2,type:"close",bg:"s2-close-0",ux:[{x:21,y:41,w:15,h:15,type:"item",is:2,bg:"ux-0"}]},{id:3,type:"close",bg:"s2-close-2",ux:[{x:9,y:12,w:36,h:68,type:"note",is:0}]}],d=()=>{i=[{id:0,type:"anim",bg:"s2-0",next:1},{id:1,type:"room",bg:"s2-1",ux:[[{x:1,y:49,w:25,h:6,type:"close",is:0},{x:1,y:58,w:25,h:6,type:"close",is:0}],[{x:32,y:44,w:13,h:4,type:"close",is:1},{x:32,y:49,w:13,h:4,type:"close",is:2},{x:1,y:25,w:8,h:50,type:"note",is:6},{x:10,y:16,w:21,h:44,type:"note",is:3}],[{x:15,y:12,w:35,h:68,type:"note",is:0}],[{x:47,y:60,w:6,h:6,type:"close",is:0},{x:47,y:68,w:6,h:6,type:"close",is:0}]]},{id:2,type:"anim",bg:"s2-door",next:3},{id:3,type:"view",bg:"s2-3",ux:[{x:17,y:56,w:6,h:6,type:"next",is:4},{x:14,y:69,w:25,h:6,type:"note",is:8}]},{id:4,type:"view",bg:"s2-4",ux:[{x:8,y:55,w:13,h:13,type:"next",is:5}]},{id:5,type:"view",bg:"s2-5",ux:[{x:15,y:40,w:18,h:18,type:"next",is:6}]},{id:6,type:"view",bg:"s2-6",ux:[{x:13,y:32,w:18,h:18,type:"npc",is:7,name:e},{x:25,y:58,w:7,h:7,type:"next",is:7}]},{id:7,type:"line",bg:"s2-7",next:1,wall:3,change:[{id:1,wall:3,ux:0,type:"note",is:5},{id:1,wall:2,ux:"add",add:{x:22,y:35,w:15,h:30,type:"npc",is:4,name:e,bg:"npc-0"}},{id:1,wall:2,ux:3,type:"close",is:3}]},{id:8,type:"anim",bg:"s2-door",next:9,wall:1},{id:9,type:"room",bg:"s2-9",ux:[[],[],[{x:31,y:41,w:13,h:36,type:"next",is:10}],[]]},{id:10,type:"anim",bg:"s2-10",next:11,sound:t},{id:11,type:"qte",bg:"s2-qte-2",mode:"fight",next:13,end:12,user:2,boss:3,bar:20},{id:12,type:"end",end:2,bg:"s2-qte-2-lose"},{id:13,type:"anim",bg:"s2-13",next:14},{id:14,type:"anim",bg:"s2-14",next:15},{id:15,type:"anim",bg:"s2-15",next:16},{id:16,type:"anim",bg:"s2-16",next:17},{id:17,type:"anim",bg:"s2-17",next:18},{id:18,type:"anim",bg:"s2-18",next:19},{id:19,type:"end",end:3,scene:3,bg:"s2-19"}],s={1:{2:["這是後門","需要鑰匙"],3:["粉色的門"]},5:["睡著了嗎"],6:["醒醒","給你鬆綁"],7:["沒事就好","帶你離開這裡"],9:{3:["別回頭看了","快點"]},11:["放下他!"]}};export{p as s_close,i as s_data,d as s_init,n as s_item,s as s_lines,x as s_note};
