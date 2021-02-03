const app = new PIXI.Application();
const defaultIcon = "url('img/cursor.png'), auto";
const background = PIXI.Sprite.from('img/im_done.jpg');
let graphics = new PIXI.Graphics();
let fill = 0xBC8F8F;

document.body.appendChild(app.view);

function yellow() {
    graphics.clear();
    fill = 0xFFFF00;
}
function blue() {
    graphics.clear();
    fill = 0x4169E1;
}
function purple() {
    graphics.clear();
    fill = 0x9400D3;
}
function green() {
    graphics.clear();
    fill = 0x008000;
}

app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
// app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
app.renderer.plugins.interaction.moveWhenInside = true;


background.width = app.screen.width;
background.height = app.screen.height;
background.interactive = true;
background.buttonMode = false;


background.on('mousemove', function(evt) {
    graphics.beginFill(fill);
    graphics.drawRect(evt.data.global.x, evt.data.global.y, 32, 32);
    graphics.endFill();
    // graphics.interactive = true;
    // console.log('pointermove',evt.data.global.x, evt.data.global.y);
});
background.on('pointerdown', function(evt) {
    // console.log('down');
});
background.on('pointerup', function() {
   
});

app.stage.addChild(background);
app.stage.addChild(graphics);