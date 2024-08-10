// main.js

// 點擊開始
document.getElementById("click_to_start").addEventListener("click", () => {
    loadMain();
    // loadScene(0);
});

// 渲染場景外觀
// let main_style = false;

function loadMain() {
    // 顯示加載
    load_indicator(true);
    // 渲染主場內容
    const gameContainer = document.getElementById("game_container");
    gameContainer.innerHTML = "";
    const background = createDiv("background");
    const screen = createDiv("screen");
    const screen_border = createDiv("screen_border");
    const screen_bg = createDiv("screen_bg");
    const screen_ui = createDiv("screen_ui");
    const scene = createDiv("scene");
    const scene_ux = createDiv("scene_ux");
    const scene_bg = createDiv("scene_bg");
    screen_bg.appendChild(scene);
    scene.append( scene_bg, scene_ux);
    screen.append(screen_border, screen_bg, screen_ui);
    gameContainer.append(background, screen);
    // 渲染主場樣式
    const style = document.getElementById("main-style");
    style.href = `src/views/main.scss`;
    // 移除加載
    load_indicator(false);
    loadScene(1);
};

// 更換場景器
function loadScene(scene_num) {
    // 顯示加載
    load_indicator(true);

    // 動態載入CSS文件
    const style = document.getElementById("scene-style");
    style.href = `src/views/scene${scene_num}.scss`;

    // 動態載入JS文件
    const script = document.createElement('script');
    script.type = "module";
    script.src = `src/model/scene${scene_num}.js`;
    
    script.onload = () => {
        // 移除加載
        load_indicator(false);

        // const gameContainer = document.getElementById("game_container");
        // gameContainer.innerHTML = `<div id="scene-${scene_num}"></div>`;
        
        // 確保場景內容加載後再插入到DOM
        setTimeout(() => {
            // const sceneElement = document.getElementById(`scene-${scene_num}`);
            // if (sceneElement) {
            //     sceneElement.innerHTML = `<h2>Welcome to Scene ${scene_num}</h2><p>Scene ${scene_num} content goes here.</p>`;
            // } else {
            //     console.error(`Element #scene-${scene_num} not found.`);
            // }
        }, 0);

        // 添加下一個場景按鈕
        // if (scene_num < 3) {
        //     const nextButton = document.createElement("button");
        //     nextButton.id = `load-scene-${scene_num + 1}`;
        //     nextButton.textContent = `Load Scene ${scene_num + 1}`;
        //     nextButton.addEventListener("click", () => {
        //         loadScene(scene_num + 1);
        //     });
        //     gameContainer.appendChild(nextButton);
        // } else {
        //     gameContainer.innerHTML += "<p>All scenes loaded!</p>";
        // }
    };
    
    script.onerror = () => {
        // 處理腳本加載錯誤
        load_indicator(false);
        alert(`Failed to load Scene ${scene_num}`);
    };
    // 添加腳本
    document.body.appendChild(script);
};

// 加載神器
function load_indicator(show) {
    const indicator = document.getElementById("initializator");
    if (show) {
        indicator.style.display = "block";
    } else {
        indicator.style.display = "none";
    }
};

// 物件神器
function createDiv(nameId, nameClass, text) {
    const itemModel = document.createElement("div");
    if (nameId) { itemModel.id = nameId; }
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    return itemModel;
};


