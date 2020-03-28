var a = 0;

const colors = [
  '#FFFFFF',
  '#BBBBBB',
  '#BB0000',
  '#00BB00',

  '#3377DD',
  '#888888',
  '#FFBB00',
  '#BB00FF',

  '#BBFFBB',
  '#BBFF00',
  '#693215',
  '#DDAAFF',
  ];
var PT = [
  [7,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 8],
  [2,3, 0,0,0,0,0, 0,0,0,0,0, 5,1,7,7,7, 8],
  [2,3, 0,0,0,0,0, 0,0,0,0,0, 6,5,1,1,7, 8],
  [2,3, 4,4,4,4,4, 4,4,4,4,4, 6,5,5,1,7, 8],
  [2,3, 4,4,4,4,4, 4,4,4,4,4, 6,6,5,5,7, 8],
  [2,3, 9,4,4,4,4, 4,4,4,4,4, 6,6,6,6,5, 8],
  [2,3, 10,4,4,4,4, 4,11,11,11,4, 11,6,11,11,11, 11],
  ];
var labels = [
["H","","","","", "","","","","", "","","","","", "","","He"],
["Li","Be","","","","","","","","","","","B","C","N","O","F","Ne"],
["Na","Mg","","","","","","","","","","","Al","Si","P","S","Cl","Ar"],
["K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr"],
["Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe"],
["Cs","Ba","*","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn"],
["Fr","Ra","**","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]
  ];
var elements = [
["Hydrogen","","","","", "","","","","", "","","","","", "","","Helium"],
["Lithium","Beryllium","","","","","","","","","","","Boron","Carbon","Nitrogen","Oxygen","Flourine","Neon"],
["Sodium","Magnesium","","","","","","","","","","","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon"],
["Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton"],
["Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon"],
["Cesium","Barium","See lanthanides.","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon"],
["Francium","Radium","See actinides.","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"]
  ];
var bLabels = [
["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"],
["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]
  ];
var bElements = [
["Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium"],
["Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium"]
  ];
var types = [
  "", "Polyatomic Nonmetal", "Alkali Metal", "Alkaline Earth Metal", "Transition Metal", "Metalloid", "Post Transition Metal", "Diatomic Nonmetal", "Noble Gas", "Lanthanide", "Actinide", "Unknown"
  ];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  /*
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  */

  //print(fullscreen());
  var scaleFactor = min(windowHeight / 400, windowWidth / 400);
  scale(scaleFactor);
  background(255);
  textSize(12);
  stroke(0);
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 18; j++) {
        if (PT[i][j] !== 0) {
            textAlign(CENTER, CENTER); fill(colors[PT[i][j]]);
            rect(20+(j*20), 100+(i*20), 20, 20); fill(0);
            text(labels[i][j], 30+(j*20), 110+(i*20));
        }
    }
  }
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 15; j++) {
        textAlign(CENTER, CENTER); fill(colors[i+9]);
        rect(60+(j*20), 250+(i*20), 20, 20); fill(0);
        text(bLabels[i][j], 70+(j*20), 260+(i*20));
    }
  }
  textSize(34);
  text("The Periodic Table", 200, 20);
  textSize(22);
  text("of the Elements", 270, 50);
  textSize(18);
  text("Created by Ian G.", 200, 85);
  text("*", 50, 260);
  text("**", 50, 280);
  noStroke();
  var s = scaleFactor;
  if (mouseX>20*s && mouseX<380*s && mouseY>100*s && mouseY<240*s) {
    a = PT[floor((mouseY/s-100)/20)][floor((mouseX/s-20)/20)];
    fill(colors[a]); rect(-2, 300, 404, 40); fill(0);
    textAlign(LEFT, CENTER);
    text(labels[floor((mouseY/s-100)/20)][floor((mouseX/s-20)/20)], 20, 320);
    textAlign(RIGHT, CENTER);
    text(elements[floor((mouseY/s-100)/20)][floor((mouseX/s-20)/20)], 380, 320);
  }
  if (mouseX>60*s && mouseX<360*s && mouseY>250*s && mouseY<290*s) {
    a = floor((mouseY/s-250)/20) + 9;
    fill(colors[a]); rect(-2, 300, 404, 40); fill(0);
    textAlign(LEFT, CENTER);
    text(bLabels[floor((mouseY/s-250)/20)][floor((mouseX/s-60)/20)], 20, 320);
    textAlign(RIGHT, CENTER);
    text(bElements[floor((mouseY/s-250)/20)][floor((mouseX/s-60)/20)], 380, 320);
  }
  textAlign(CENTER, CENTER);
  fill(0);
  text(types[a], 200, 360);
}

var socket = io();

socket.on('log', function(msg){
  console.log("Server Log: " + msg);
  // Print log on screen
})

console.log('hello world!');
