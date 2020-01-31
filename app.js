let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    i = 0,
    aimX = null,
    aimY = null,
    currentX = null,
    currentY = null;
ctx

// window.addEventListener(какой ивент, что будет сделано, как произойдет ивент);
window.addEventListener('resize', SetCanvasSize);
// window.addEventListener('resize', draw);
window.addEventListener('load', SetCanvasSize);
// window.addEventListener('load', draw);

// функция под названием SetCanvasSize (сами придумали) происходит на событии, делает канвас респонсив;
function SetCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// fetch('https://okkkk-1a3c3.firebaseio.com/images.json')
//     .then(response => response.json())
//     .then(result => {

//         // console.dir(result);
//         images = result.map(src => {
//             let img = document.createElement('img');
//             img.src = src;
//             // console.dir("333")
//             return img;
//         })
//         console.dir(images);
//         draw();
//     })

const result = ["blue-heart.png", "purple-heart.png", "white-heart.png", "img.png"]

const images = result.map(src => {
    let img = document.createElement('img');
    img.src = src;
    return img;
})
// console.dir(images);
draw();

function draw() {
    if (currentX) {
        ctx.drawImage(img, currentX - img.width / 2, currentY - img.height / 2, img.width, img.height);
    }
    currentX = currentX + (aimX - currentX) * 0.05; // 0.05
    currentY = currentY + (aimY - currentY) * 0.05;
    img = images[i];
    requestAnimationFrame(draw);
}

document.addEventListener('mousemove', (e) => {
    // console.dir(e)

    aimX = e.pageX;
    aimY = e.pageY;

    if (currentX == null) {
        currentX = e.pageX;
        currentX = e.pageY;
    }
})

function makeGreeting(name) {
    return "Hello, " + name
}


// greet(name);
// greet("Katya");
var greetingForNastya = makeGreeting("Nastya");

// var vitya = true
// vitya = ["sss", 'skdl;ajasd']


canvas.addEventListener('click', () => {
    i++;
    if (i == images.length) { // двойное равно – условия
        i = 0;
    }
})