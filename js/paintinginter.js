function sketch1(p) {
    p.setup = function () {
      p.createCanvas(750, 750);
      p.background(50, 55, 58);
    };
    p.draw = function () {
      p.noStroke();
  
      p.fill(p.color(219, 236, 223));
      p.circle(321, 291, 343);
  
      p.fill(p.color(20,68,205));
      p.circle(321, 291, 323);
  
      p.fill(p.color(20,20,20));
      p.circle(284, 257, 222);
  
      p.fill(p.color(205, 144, 228, 190));
      p.circle(398, 168, 80);
  
      p.fill(p.color(242, 219, 68));
      p.circle(79, 77, 30);
  
      p.fill(p.color(249, 149, 213));
      p.circle(98, 149, 60);
  
      p.fill(p.color(230, 55, 81));
      p.circle(653, 107, 22);
  
      p.fill(p.color(252, 228, 129));
      p.circle(540, 130, 52);
  
      p.fill(p.color(214, 191, 114));
      p.circle(613, 170, 29);
      
      p.fill(p.color(253, 173, 28));
      p.circle(613, 170, 22);
  
      p.fill(p.color(60, 108, 105, 200));
      p.circle(531, 236, 124);
  
      p.fill(p.color(97, 185, 203));
      p.circle(531, 236, 38);
  
      p.fill(p.color(22, 20, 30));
      p.circle(531, 236, 22);
  
      p.fill(p.color(75, 119, 222, 190));
      p.circle(352, 336, 28);
  
      p.fill(p.color(235, 218, 107));
      p.circle(173, 355, 16);
  
      p.fill(p.color(24, 27, 32));
      p.circle(173, 355, 11);
  
      p.fill(p.color(214, 174, 227));
      p.circle(257, 430, 10);
  
      p.fill(p.color(34, 30, 31));
      p.circle(231, 434, 13);
  
      p.fill(p.color(211, 87, 125));
      p.circle(231, 434, 8);
  
      p.fill(p.color(220, 163, 33, 170));
      p.circle(429, 390, 101);
  
      p.fill(p.color(158, 218, 168, 190));
      p.circle(400, 320, 62);
  
      p.fill(p.color(205, 173, 50, 190));
      p.circle(375, 384, 65);
  
      p.fill(p.color(74, 180, 224, 190));
      p.circle(427, 472, 84);
  
      p.fill(p.color(172, 184, 219, 200));
      p.circle(319, 447, 69);
  
      p.fill(p.color(19, 12, 19));
      p.circle(302, 483, 10);
  
      p.fill(p.color(245, 214, 222, 200));
      p.circle(464, 405, 38);
  
      p.fill(p.color(30, 29, 37));
      p.circle(445, 418, 11);
  
      p.fill(p.color(168, 197, 197));
      p.circle(665, 383, 25);
  
      p.fill(p.color(21, 83, 222));
      p.circle(665, 383, 19);
  
      p.fill(p.color(85, 164, 203));
      p.circle(104, 426, 90);
  
      p.fill(p.color(47, 33, 55));
      p.circle(104, 426, 82);
  
      p.fill(p.color(188, 163, 192));
      p.circle(104, 426, 75);
  
      p.fill(p.color(17, 15, 26));
      p.circle(115, 411, 26);
  
      p.fill(p.color(204, 41, 75));
      p.circle(181, 503, 57);
  
      p.fill(p.color(250, 236, 69, 220));
      p.circle(152, 494, 57);
  
      p.fill(p.color(200, 103, 59));
      p.circle(225, 474, 55);
  
      p.fill(p.color(151, 91, 62, 150));
      p.circle(211, 506, 56);
  
      p.fill(p.color(221, 174, 47, 220));
      p.circle(195, 440, 56);
  
      p.fill(p.color(245, 152, 214));
      p.circle(110, 580, 20);
  
      p.fill(p.color(42, 154, 220));
      p.circle(148, 611, 37);
  
      p.fill(p.color(143, 156, 31));
      p.circle(101, 637, 17);
  
      p.fill(p.color(22, 20, 26));
      p.circle(101, 637, 13);
  
      p.fill(p.color(251, 184, 53));
      p.circle(376, 570, 29);
  
      p.fill(p.color(194, 203, 224));
      p.circle(618, 531, 135);
  
      p.fill(p.color(206, 171, 130, 200));
      p.circle(538, 503, 43);
  
      p.fill(p.color(203, 175, 70, 200));
      p.circle(689, 530, 20);
  
      p.fill(p.color(235, 215, 187));
      p.circle(580, 514, 46);
  
      p.fill(p.color(137, 220, 224));
      p.circle(580, 514, 34);
  
      p.fill(p.color(211, 27, 42));
      p.circle(623, 475, 14);
  
      p.fill(p.color(24, 21, 22));
      p.circle(639, 477, 9);
  
      p.fill(p.color(239, 218, 39));
      p.circle(593, 614, 18);
  
      p.fill(p.color(202, 40, 72));
      p.circle(573, 659, 27);
  
      p.fill(p.color(55, 141, 190));
      p.circle(656, 683, 22);
    };

    p.mouseClicked = function(){
        p.fill(p.color(p.random(10, 255), p.random(10, 255), p.random(10, 255)));
        p.circle(p.mouseX, p.mouseY, p.random(20, 100));
    };
  }
  
  
  new p5(sketch1);