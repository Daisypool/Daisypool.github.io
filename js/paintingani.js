
let x = 0; 
let increasing = true;

function setup() {
    createCanvas(750, 750);
    loop();
  }
  function draw() {
    let bgcolor = color(50, 55, 58);
    background(bgcolor);
    noStroke();

    fill(color(219, 236, 223));
    circle(321, 291, 343 + x);

    fill(color(20,68,205));
    circle(321, 291, 323 + x);

    fill(color(20,20,20));
    circle(284, 257, 222 + x);

    fill(color(205, 144, 228, 190));
    circle(398, 168, 80 + x);

    fill(color(242, 219, 68));
    circle(79, 77, 30 + x);

    fill(color(249, 149, 213));
    circle(98, 149, 60 + x);

    fill(color(230, 55, 81));
    circle(653, 107, 22 + x);

    fill(color(252, 228, 129));
    circle(540, 130, 52 + x);

    fill(color(214, 191, 114));
    circle(613, 170, 29 + x);
    
    fill(color(253, 173, 28));
    circle(613, 170, 22 + x);

    fill(color(60, 108, 105, 200));
    circle(531, 236, 124 + x);

    fill(color(97, 185, 203));
    circle(531, 236, 38 + x);

    fill(color(22, 20, 30));
    circle(531, 236, 22 + x);

    fill(color(75, 119, 222, 190));
    circle(352, 336, 28 + x);

    fill(color(235, 218, 107));
    circle(173, 355, 16 + x);

    fill(color(24, 27, 32));
    circle(173, 355, 11 + x);

    fill(color(214, 174, 227));
    circle(257, 430, 10 + x);

    fill(color(34, 30, 31));
    circle(231, 434, 13 + x);

    fill(color(211, 87, 125));
    circle(231, 434, 8 + x);

    fill(color(220, 163, 33, 170));
    circle(429, 390, 101 + x);

    fill(color(158, 218, 168, 190));
    circle(400, 320, 62 + x);

    fill(color(205, 173, 50, 190));
    circle(375, 384, 65 + x);

    fill(color(74, 180, 224, 190));
    circle(427, 472, 84 + x);

    fill(color(172, 184, 219, 200));
    circle(319, 447, 69 + x);

    fill(color(19, 12, 19));
    circle(302, 483, 10 + x);

    fill(color(245, 214, 222, 200));
    circle(464, 405, 38 + x);

    fill(color(30, 29, 37));
    circle(445, 418, 11 + x);

    fill(color(168, 197, 197));
    circle(665, 383, 25 + x);

    fill(color(21, 83, 222));
    circle(665, 383, 19 + x);

    fill(color(85, 164, 203));
    circle(104, 426, 90 + x);

    fill(color(47, 33, 55));
    circle(104, 426, 82 + x);

    fill(color(188, 163, 192));
    circle(104, 426, 75 + x);

    fill(color(17, 15, 26));
    circle(115, 411, 26 + x);

    fill(color(204, 41, 75));
    circle(181, 503, 57 + x);

    fill(color(250, 236, 69, 220));
    circle(152, 494, 57 + x);

    fill(color(200, 103, 59));
    circle(225, 474, 55 + x);

    fill(color(151, 91, 62, 150));
    circle(211, 506, 56 + x);

    fill(color(221, 174, 47, 220));
    circle(195, 440, 56 + x);

    fill(color(245, 152, 214));
    circle(110, 580, 20 + x);

    fill(color(42, 154, 220));
    circle(148, 611, 37 + x);

    fill(color(143, 156, 31));
    circle(101, 637, 17 + x);

    fill(color(22, 20, 26));
    circle(101, 637, 13 + x);

    fill(color(251, 184, 53));
    circle(376, 570, 29 + x);

    fill(color(194, 203, 224));
    circle(618, 531, 135 + x);

    fill(color(206, 171, 130, 200));
    circle(538, 503, 43 + x);

    fill(color(203, 175, 70, 200));
    circle(689, 530, 20 + x);

    fill(color(235, 215, 187));
    circle(580, 514, 46 + x);

    fill(color(137, 220, 224));
    circle(580, 514, 34 + x);

    fill(color(211, 27, 42));
    circle(623, 475, 14 + x);

    fill(color(24, 21, 22));
    circle(639, 477, 9 + x);

    fill(color(239, 218, 39));
    circle(593, 614, 18 + x);

    fill(color(202, 40, 72));
    circle(573, 659, 27 + x);

    fill(color(55, 141, 190));
    circle(656, 683, 22 + x);

    if (increasing) {
        x++; 
        if (x >= 150) {
            increasing = false; 
        }
    } else {
        x--; 
        if (x <= 0) {
            increasing = true; 
        }
    }

}

