const app = new PIXI.Application();
const defaultIcon = "url('img/cursor.png'), auto";
const background = PIXI.Sprite.from('img/im_done.jpg');
let graphics = new PIXI.Graphics();
let fill = 0xBC8F8F;

document.body.appendChild(app.view);

let buttons = document.querySelectorAll('button');


    for (let i in buttons) {
        let id = buttons[i].id;
        buttons[i].onclick = function() {
            console.log(id, 'this');
            switch(id) {
                case 'yellow':
                    // graphics.lineStyle(1, 0xFFFF00, 1)
                    // graphics.beginFill(0xFFFF00)
                    graphics.dirty++;
                    fill = 0xFFFF00;
                    console.log(fill, 'yellow');
                    break;
                case 'blue':
                    fill = 0x4169E1;
                    console.log(blue, 'blue');
                    break;
                case 'purple':
                    fill = 0x9400D3;
                    console.log(blue, 'blue');
                    break;
                case 'green':
                    fill = 0x008000;
                    console.log(blue, 'blue');
                    break;
            }
        }
    }


app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
// app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
app.renderer.plugins.interaction.moveWhenInside = true;


background.width = app.screen.width;
background.height = app.screen.height;
background.interactive = true;
background.buttonMode = false;


   
    background.on('mousemove', function(evt) {
    
        console.log('asd');
        // graphics.clear();
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