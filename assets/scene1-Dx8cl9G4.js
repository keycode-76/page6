const e={0:["測試view的點點有沒有用"],1:["測試wall 1 有沒有用"],2:["測試wall 2 有沒有用"],3:["測試wall 3 有沒有用"],4:["測試wall 4 有沒有用"],5:["close有用!"]},t=[{id:0,type:"close",bg:"s1-close-1",ux:[{x:0,y:0,w:10,h:10,type:"line",note:5}]}],n={1:["line"],2:["這是view"],3:{1:["room1","快去點點看"],3:["room3"],4:["room4"]},4:["來囉","qte凱使囉"],6:["qte獲勝"]},s=[{id:0,type:"anim",bg:"s1-0",next:1},{id:1,type:"line",bg:"s1-1",next:2},{id:2,type:"view",bg:"s1-2",ux:[{x:0,y:0,w:10,h:10,type:"line",note:0},{x:10,y:10,w:10,h:10,type:"item",item:0},{x:20,y:20,w:10,h:10,type:"close",close:0},{x:30,y:30,w:10,h:10,type:"next",next:3}]},{id:3,type:"room",bg:"s1-3",ux:[[{x:0,y:0,w:10,h:10,type:"line",note:1}],[{x:0,y:0,w:20,h:20,type:"line",note:2}],[{x:0,y:0,w:30,h:30,type:"line",note:3}],[{x:0,y:0,w:35,h:35,type:"next",next:4}]]},{id:4,type:"qte",mod:"run",bg:"s1-4",win:6,user:3,boss:3},{id:5,type:"end",bg:"s1-5",next:4},{id:6,type:"line",bg:"s1-6",next:7},{id:7,type:"qte",mod:"fight",bg:"s1-7",win:9,user:3,boss:3}];export{t as s1_close,s as s1_data,n as s1_lines,e as s1_note};
