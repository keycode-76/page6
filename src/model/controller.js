// controller.js
export { user, 
    new_scene, new_line,
    render_ux, click_ux,
};
const user = {
    card:[],
    message:0,

    scene_arr:{},
    line_arr:[],
    close_arr:{},
    note_arr:[],

    last_id:0, // 上個id
    line_id:0, // 一段話id
    line_length:0, // 對話次數長度

    wall:1,
    scene:[], // 現在的場景所有標記
    line:[], // 現在場景所有話

    bag:[0,1,2],
    key:[],
    boss:3, // qte
    heart:3, // heart
};

const screen_ui = document.querySelector("#screen_ui");
const screen_bg = document.querySelector("#screen_bg");
const scene_ux = document.querySelector("#scene_ux");
const scene_bg = document.querySelector("#scene_bg");

const lines_div = createDiv("lines_div");
const lines_btn = createDiv("lines_btn");
const lines_txt = createDiv("lines_txt");
const jump_note = createDiv("jump_note");
const end_div = createDiv("end_div");
const end_content = createDiv("end_content");
const end_retry = createDiv("end_retry");


// ________________ 畫面對話組 _________________ //

const new_scene = (id, other) => {
    // 初始化
    scene_bg.innerHTML = "";
    scene_ux.innerHTML = "";
    screen_ui.innerHTML = "";
    
    // 普通 scene, bg and line渲染
    if(other) { user.scene = other[id];}
    else { user.scene = user.scene_arr[id];}
    scene_bg.className = user.scene.bg;
    if(user.line_arr[id]) { user.line_length = user.line_arr[id].length; }

    switch (user.scene.type) {
        case "anim": // 結束動畫
            document.addEventListener("animationend", (event) => {
                if (event.animationName === user.scene.bg) {
                    scene_bg.className = "";
                    new_scene(user.scene.next);
                }
            });
            break;
        case "line": // 按下對話鈕
            new_line(id);
            break;
        case "close": // 只有back
            user.line_length = 0;
            new_line(id);
            break;
        case "view": // 點point
            user.last_id = id;
            new_line(id);
            break;
        case "room": // 其中一個wall點point
            scene_bg.className = `${user.scene.bg}-${user.wall}`;
            if (user.line_arr[id][user.wall]) {
                user.line_length = user.line_arr[id][user.wall].length;
                new_line(user.wall, user.line_arr[id]);
            } else {
            new_line(id);
            }
            break;
        case "qte": // 對戰完
            new_line(id);
            break;
        default:
            break;
    }
};
const new_line = (id, other) => {
    // 初始化
    screen_ui.innerHTML = ""; // 容器位置
    if (other) { // 目前只有note and wall
        user.line = other[id];
        user.line_length = 1;
    } else { user.line = user.line_arr[id]; }

    // 前往下則對話
    if (user.line_length > 0) {
        lines_txt.textContent = user.line[user.line_id];
        lines_div.innerHTML = "";
        lines_div.append(lines_txt, lines_btn);
        screen_ui.appendChild(lines_div); // 容器位置
        user.line_id+=1;
    } else { // 可以操作了
        user.line_id = 0;
        switch (user.scene.type) {
            case "line": // 去下一頁
                new_scene(user.scene.next);
                break;
            case "close": // 上頁按鈕
                render_btn_return();
                break;
            case "view": // 加入ux
                delete user.line_arr[id];
                render_ux();
                render_btn_bag_only();
                break;
            case "room": // 加入ux，左右
                delete user.line_arr[id][user.wall];
                render_ux();
                render_btn_LR();
                break;
            case "qte": // 加入對戰
                render_heart(); // 一次
                startQTE(); // 多次
                render_btn_qte();
                break;
            default:
                break;
        }
        // console.log("yes", user.line_id)
    }
};
// ________________ ux點擊組 _________________ //

const render_ux = () => {
    let uxs_arr = user.scene.ux;
    if (user.scene.type === "room" ) {
        uxs_arr = user.scene.ux[user.wall-1];
    } 
    uxs_arr.forEach((ux_arr) => {
        // 包裡已有該物品就跳過
        if (user.bag.includes(ux_arr.item)) return; 

        const trigger = document.createElement("div");
        trigger.className = "btns_ux"; // 添加 class
        scene_ux.appendChild(trigger); // 容器位置
        trigger.style.left = ux_arr.x + "vh";
        trigger.style.top = ux_arr.y + "vh";
        trigger.style.width = ux_arr.w + "vh";
        trigger.style.height = ux_arr.h + "vh";
        trigger.style.background = "blue";
        trigger.addEventListener("click", (event) => {
            click_ux(event, ux_arr);
        });
    });
    
};
const click_ux = (event, ux_arr) => {
    switch (ux_arr.type) {
        case "line":
            new_line(ux_arr.note, user.note_arr);
            break;
        case "close":
            new_scene(ux_arr.close, user.close_arr);
            break;
        case "item":
            user.bag.push(ux_arr.item);
            event.target.style.display = "none";
            break;
        case "next":
            new_scene(ux_arr.next);
            break;
    }
};

// ________________ QTE _________________ //

const qte_div = createDiv("qte_div",);
const qte_btn = createDiv("qte_btn","ui_btns");
const qte_bar = createDiv("qte_bar",);
const qte_box = createDiv("qte_box",);
const qte_dot = createDiv("qte_dot", );
const feedback = createDiv("feedback", "gmui_btns");
const userHeart = createDiv("userHeart", );
const bossHeart = createDiv("bossHeart", );
let qte_start = 0;

function startQTE() {
    qte_start = Date.now();
    qte_dot.className = "qte_start_anim";
    feedback.textContent = `Press to move on`;
};
function stopQTE() {
    // 停止動畫
    const computedStyle = window.getComputedStyle(qte_dot);
    const transform = computedStyle.transform;
    const backgroundColor = computedStyle.backgroundColor;

    // 移除動畫類，並應用當前背景色和位置
    qte_dot.className = "";
    qte_dot.style.transform = transform;
    qte_dot.style.backgroundColor = backgroundColor;
};
function qte_in_range(dot, target) {
    const dotRect = dot.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    // 檢查 qte_dot 是否在 target 的範圍內
    return (
        dotRect.left >= targetRect.left &&
        dotRect.right <= targetRect.right
        // dotRect.top >= targetRect.top &&
        // dotRect.bottom <= targetRect.bottom
    );
};
function detect_qte() {
    const targetElement = document.querySelector("#qte_bar"); // 目標物件
//     stopQTE();  // 停止動畫並固定位置
//     const bg_color = window.getComputedStyle(qte_dot).backgroundColor;
//     if (bg_color === 'rgb(0, 0, 0)') {

    if (qte_in_range(qte_dot, targetElement)) {
        feedback.textContent = "成功！";
        if (user.boss-1 < 1) { 
            new_scene(user.scene.win)
        } else { 
            user.boss -= 1;
            lost_heart("boss", bossHeart, user.boss);
        }
    } else {
        feedback.textContent = "失敗！";
        if (user.heart-1 < 1) { 
            scene_bg.className = "";
            scene_ux.innerHTML = "";
            scene_ux.appendChild(end_div)
            end_div.append(end_content, end_retry);
            end_content.textContent = "結局一";
            end_retry.textContent = "重新開局";
        } else { 
            user.heart -= 1;
            lost_heart("heart", userHeart, user.heart);
        }
    }
    stopQTE();
};

function lost_heart(type, container, value_model) {
    const hearts_arr = container.querySelectorAll(`.${type}_icon`);
    const heart_value = hearts_arr.length - value_model;
    if (heart_value > 0) {
        // 移除多餘的 icon
        for (let i = 0; i < heart_value; i++) {
            const last_heart = hearts_arr[hearts_arr.length - 1 - i];
            last_heart.classList.add("heart_out_anim");

            // 動畫結束移除 icon
            last_heart.addEventListener("animationend", () => {
                last_heart.remove();
                startQTE();
            });
        }
    } else if (heart_value < 0) {
        // 增加缺少的 icon
        for (let i = 0; i < Math.abs(heart_value); i++) {
            const new_heart = createDiv(type, `${type}-icon`);
            container.appendChild(new_heart);
        }
    }
};
function render_heart() {
    userHeart.innerHTML = "";
    bossHeart.innerHTML = "";

    user.boss = user.scene.boss;
    user.heart = user.scene.user;
    for (let i = 0; i < user.heart; i++) {
        const heartElement = createDiv(0, "heart_icon");
        userHeart.appendChild(heartElement);
    }
    for (let e = 0; e< user.boss; e++) {
        const bossElement = createDiv(0, "boss_icon");
        bossHeart.appendChild(bossElement);
    }
};

lines_btn.addEventListener("click", debounce(() => {
    user.line_length -= 1;
    new_line(user.scene.id);
}, 300));


// ________________ 按鈕 _________________ //
const btn_return = createDiv("btn_return", "ui_btns");
const btn_bag = createDiv("btn_bag", "ui_btns");
const btn_left = createDiv("btn_left", "ui_btns");
const btn_right = createDiv("btn_right", "ui_btns");

const render_btn_bag_only = () => { screen_ui.append( btn_bag ); };
const render_btn_return = () => { screen_ui.append( btn_return, btn_bag );};
btn_return.addEventListener("click", () => { new_scene(user.last_id);});

const render_btn_LR = () => { screen_ui.append(btn_left, btn_right, btn_bag );};
btn_left.addEventListener("click", () => {
    if (user.wall>1) {
        user.wall-= 1;
    } else {
        user.wall = 4;
    }
    new_scene(user.scene.id);
});
btn_right.addEventListener("click", () => {
    if (user.wall<4) {
        user.wall+= 1;
    } else {
        user.wall = 1;
    }
    new_scene(user.scene.id);
});
const render_btn_qte = () => {
    qte_box.appendChild(qte_bar)
    qte_div.append(userHeart, bossHeart, feedback, qte_box, qte_dot, qte_btn )
    screen_ui.appendChild( qte_div );
};
qte_btn.addEventListener("click", () => detect_qte());
end_retry.addEventListener("click", () => { 
    user.wall = 1;
    new_scene(0, user.scene_arr); 
});

// ________________ 包包物件 _________________ //
const bag_div = createDiv("bag_div");
const bag_slots = createDiv("bag_slots", "bag_slots_close");
const bag_view = createDiv("bag_view");
const bag_slots_btn = createDiv("bag_slots_btn");
const bag_use_btn = createDiv("bag_use_btn");

const bag_arr = {
    0: ["bag_map"],
    1: ["bag_key_0", "", ""],
    2: ["bag_key_1", "", ""],
};
let bag_show = false;
let bag_slots_show = false;

btn_bag.addEventListener("click", debounce(() => {
    if (bag_show) {
        screen_bg.removeChild(bag_div); // 隱藏 bag
    } else {
        render_bag(); // 顯示 bag
    }
    bag_show = !bag_show;
}, 300));

bag_slots_btn.addEventListener("click", () => {
    if (bag_slots_show) {
        bag_slots_close();
    } else {
        bag_slots_open();
    }
});

const render_bag = () => {
    bag_div.innerHTML = "";
    bag_slots.innerHTML = "";
    bag_div.append(bag_view, bag_slots, bag_slots_btn);

    for (let i = 0; i < Object.keys(bag_arr).length; i++) {
        const bagElement = createDiv(0, "bag_icon");
        bagElement.id = bag_arr[i][0];
        bagElement.draggable = true;
        detect_bag_drag(bagElement, i);
        bag_slots.appendChild(bagElement);
    }
    screen_bg.appendChild(bag_div);
};

const bag_slots_close = () => {
    bag_slots_show = false;
    bag_view.style.height = "100%";
    bag_slots.className = "bag_slots_close"
};

const bag_slots_open = () => {
    bag_slots_show = true;
    bag_view.style.height = "0%";
    bag_slots.className = "bag_slots_open"
};

let drag_item = null;
let drag_index = null;
let offsetX = 0;
let offsetY = 0;

// const bag_map = document.querySelector("#bag_map");
// const bag_key_0 = document.querySelector("#bag_key_0");
// const bag_key_1 = document.querySelector("#bag_key_1");
// bag_key_0.addEventListener("click", () => {
//     bag_view.appendChild(bag_use_btn);
//     user.key[0] = bag_arr[0][1]
//     user.key[1] = bag_arr[0][2]
// });
// bag_use_btn.addEventListener("click", () => {
//     if (user.scene.bg === user.key[0]) {
//         new_scene(user.key[1])
//     }
// });
function detect_bag_drag(element, index) {
    element.addEventListener('touchstart', function(e) {
        if (!bag_slots_show) return;  // 只有在 bag_slots_show 為 true 時啟用拖曳
        drag_item = element;
        drag_index = index;

        // 計算偏移量
        const rect = element.getBoundingClientRect();
        offsetX = e.targetTouches[0].clientX - rect.left;
        offsetY = e.targetTouches[0].clientY - rect.top;
    });

    element.addEventListener('touchmove', function(e) {
        if (!drag_item) return;
        const touchLocation = e.targetTouches[0];
        drag_item.style.position = 'absolute';
        
        drag_item.style.left = touchLocation.pageX + 'px';
        drag_item.style.top = touchLocation.pageY + 'px';
        console.log(`page X: ${touchLocation.pageX}, page Y: ${touchLocation.pageY}`);

    });

    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; // 鼠標相對於元素的 X 坐標
        const mouseY = e.clientY - rect.top;  // 鼠標相對於元素的 Y 坐標
        // drag_item.style.left = mouseX + 'px';
        // drag_item.style.top = mouseY + 'px';
        // console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
    });

    element.addEventListener('touchend', function(e) {
        if (!drag_item) return;
        const newIndex = Math.floor((e.changedTouches[0].pageX - bag_slots.offsetLeft) / drag_item.offsetWidth);
        const validNewIndex = Math.max(0, Math.min(Object.keys(bag_arr).length - 1, newIndex));
        
        // 交換 bag_arr 中的位置
        const temp = bag_arr[drag_index];
        bag_arr[drag_index] = bag_arr[validNewIndex];
        bag_arr[validNewIndex] = temp;
        
        render_bag();  // 重新渲染背包內容
        drag_item = null;
        drag_index = null;
    });
}


// ________________ 物件神器 _________________ //

function createDiv(nameId, nameClass, text) {
    const itemModel = document.createElement("div");
    if (nameId) { itemModel.id = nameId; }
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    return itemModel;
};

function debounce(callbackFunction, delayTime = 100) {
    let timerId;
    return (...functionArguments) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callbackFunction.apply(this, functionArguments), 
      delayTime);
    };
};

