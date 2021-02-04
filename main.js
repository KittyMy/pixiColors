const app = new PIXI.Application(700, 500, {
    transparent: true,
    antialias: true
  });
const defaultIcon = "url('img/cursor.png'), auto";
const background = PIXI.Sprite.from('img/im_done.jpg');
let fill = 0xBC8F8F;

document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

let buttons = document.querySelectorAll('button');
let scaleBtn_plus = document.getElementById('scale_plus'),
    scaleBtn_minus = document.getElementById('scale_minus');

let graphics = new PIXI.Graphics();

// Выборка кнопок с цветом
for (let i in buttons) {
    let id = buttons[i].id;
    buttons[i].onclick = function() {
        switch(id) {
            case 'default':
                fill = 0xBC8F8F;
                console.log(fill, 'Стандартный цвет');
                break;
            case 'yellow':
                fill = 0xFFFF00;
                console.log(fill, 'Желтый цвет');
                break;
            case 'blue':
                fill = 0x4169E1;
                console.log(fill, 'Синий цвет');
                break;
            case 'purple':
                fill = 0x9400D3;
                console.log(fill, 'Фиолетовый цвет');
                break;
            case 'green':
                fill = 0x008000;
                console.log(fill, 'Зеленый цвет');
                break;
            case 'clear':
                graphics.clear();
                console.log(fill, 'Очистил холст');
                break;  
        }
    };
}

// Замена стандартного курсора
app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
app.renderer.plugins.interaction.moveWhenInside = true;

background.width = app.screen.width;
background.height = app.screen.height;
background.interactive = true;
background.buttonMode = false;

background.anchor.set(0.5);
background.x = app.screen.width / 2;
background.y = app.screen.height / 2;

// Попискельная закраска
background.on('mousemove', function(evt) {
    graphics.beginFill(fill);
    graphics.drawRect(evt.data.global.x, evt.data.global.y, 32, 32);
    graphics.endFill();
});

// localStorage.setItem(canvasName, canvas.toDataURL());


// Увеличение картинки
scaleBtn_plus.onclick = function() {
    background.scale.x *= 1.25;
    background.scale.y *= 1.25;
};

// Уменьшение картинки
scaleBtn_minus.onclick = function() {
    background.scale.x /= 1.25;
    background.scale.y /= 1.25;
};

app.stage.addChild(background);
app.stage.addChild(graphics);