//Your JavaScript goes in here
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
var current=0;




var resMove = document.getElementById("resistanceMove");

var compass = document.getElementById("campass");

compass.style.display = "none";

function showcompass() {
  if (compass.style.display == "none") {
    compass.style.display = "block";
  } else if (compass.style.display == "block") {
    compass.style.display = "none";
  }
}

var theeta1 = 0;
var position = 0;
var realPosition = 0;
function tomoveCampass(id) {
  if (id === "movecompass") {
    position = document.getElementById(id).value;
    compass.setAttribute("transform", `matrix(0.24 0 0 0.24 37 ${position})`);

    if (position == 216) {
      realPosition = 0;
    }
    if (position == 196 || position == 236) {
      realPosition = 5;
    }
    if (position == 256 || position == 176) {
      realPosition = 10;
    }
    if (position == 276 || position == 156) {
      realPosition = 15;
    }
    if (position == 296 || position == 136) {
      realPosition = 20;
    }
    if (position == 316 || position == 116) {
      realPosition = 25;
    }
    if (position == 336 || position == 96) {
      realPosition = 30;
    }
    document.getElementById("compass-position").innerText = realPosition;

    theeta1 = Math.atan(
      (4 * 3.14 * 10 ** -7 * 0.55 * turn * radius ** 2) /
        (2 * (3.5 * 10 ** -5) * (realPosition ** 2 + radius ** 2) ** 1.5)
    );

    console.log(theeta1);
  }
}

var radius = 0;
function getRadius(id) {
  if (id == "radius") {
    radius = document.getElementById(id).value;
    document.getElementById("radius-display").innerText = radius + " " + "cm";
    tomoveCampass("movecompass");
    return radius;
  }
}

var turn = 0;
function getTurn(id) {
  if (id === "turn") {
    turn = document.getElementById(id).value;
    document.getElementById("coil-display").innerText = turn;
    tomoveCampass("movecompass");

    return turn;
  }
}

var resistance1 = 0;
var realResitance = 0;
function getResistance(id) {
  // let resistance=0;
  if (id === "resistance1") {
    resistance1 = document.getElementById(id).value;
    document.getElementById("resistance-1-display").innerText =
      realResitance + " " + "ohm";

    resMove.setAttribute(
      "transform",
      `matrix(-0.2973 0 0 0.2973 ${resistance1} 354)`
    );

    if (resistance1 == 337) {
      realResitance = 0;
    }
    if (resistance1 == 352) {
      realResitance = 10;
    }
    if (resistance1 == 367) {
      realResitance = 20;
    }
    if (resistance1 == 382) {
      realResitance = 30;
    }
    if (resistance1 == 397) {
      realResitance = 40;
    }
    if (resistance1 == 412) {
      realResitance = 50;
    }
    if (resistance1 == 427) {
      realResitance = 60;
    }
    if (resistance1 == 442) {
      realResitance = 70;
    }
    if (resistance1 == 457) {
      realResitance = 80;
    }
    if (resistance1 == 472) {
      realResitance = 90;
    }
    if (resistance1 == 487) {
      realResitance = 100;
    }
current=5/realResitance;
  
    document.getElementById("display-ammeter-svg").innerHTML = current+""+"A";
return current;
  }
}

// var theeta1=Math.atan(((turn)*(0.55)*(4*3.14*10**-7)(radius**2))/(2*3.5*10**-5)(((realPosition**2)+(radius**2))**1.5));

// table

let sn = 0;
var theeta2 = 0;
var theeta3 = 0;
var theeta4 = 0;
var theeta5 = 0;
var theeta6 = 0;
var theeta7 = 0;
var theeta8 = 0;
var mean = 0;
var Bx = 0;
var Bo = 0;
var tan = 0;
var tandegree = 0;
var theeta0 = 0;
var degree = 0;

let table = document.getElementById("table");
var count = 0;
const procedure = () => {
  sn = sn + 1;
  theeta1 = Math.atan(
    ((4 * 3.14 * 10 ** -7 * current * turn * radius ** 2) /
      (2 * (3.5 * 10 ** -5) * (realPosition ** 2 + radius ** 2) ** 1.5)) *
      100
  );
  theeta0 = (theeta1 * 180) / Math.PI;
  theeta2 = parseFloat(theeta1.toFixed(3));

  // theeta2=Number( theeta2).toFixed(3);
  theeta3 = parseFloat(
    (theeta1 + +generateRandomFloatInRange(0.01, 0.5)).toFixed(3)
  );
  // theeta3=Number(theeta3).toFixed(3);
  theeta4 = parseFloat(theeta1.toFixed(3));
  // theeta4=Number(theeta4).toFixed(3);
  theeta5 = parseFloat(theeta3.toFixed(3));
  // theeta5=Number(theeta5).toFixed(3);
  theeta6 = parseFloat(
    (theeta1 + +generateRandomFloatInRange(0.01, 0.1)).toFixed(3)
  );
  // theeta6=Number(theeta6).toFixed(3);
  theeta7 = parseFloat(theeta1.toFixed(3));
  // theeta7=Number(theeta7).toFixed(3);
  theeta8 = parseFloat(theeta1.toFixed(3));
  // theeta8=Number(theeta8).toFixed(3);
  mean = parseFloat(
    (theeta1 +
      +theeta2 +
      +theeta3 +
      +theeta4 +
      +theeta5 +
      +theeta6 +
      +theeta7 +
      +theeta8) /
      8
  );

  degree = (mean * 180) / Math.PI;
  tan = parseFloat(Math.tan(mean).toFixed(3));
  // tandegree=(tan*(180)/Math.PI)

  Bx = (3.5 * tan).toFixed(3);

  // tomoveCampass('movecompass');
  table.innerHTML += `<tr>
                <td id='r${count}c0' width=60px></td>
                <td id='r${count}c1' width=60px></td>
                <td id='r${count}c2' width=60px></td>
                <td id='r${count}c3' width=60px></td>
                <td id='r${count}c4' width=60px></td>
                <td id='r${count}c5' width=60px></td>
                <td id='r${count}c6' width=60px></td>
                <td id='r${count}c7' width=60px></td>
                <td id='r${count}c8' width=60px></td>
                <td id='r${count}c9' width=60px></td>
                <td id='r${count}c10' width=60px></td>
                <td id='r${count}c11' width=60px></td>
                <td id='r${count}c12' width=60px></td>
                <td id='r${count}c13' width=60px></td>
  </tr>`;
  var data = new Array();
  data.push(sn);
  data.push(realPosition);
  data.push(theeta1);
  data.push(theeta2);
  data.push(theeta3);
  data.push(theeta4);
  data.push(theeta5);
  data.push(theeta6);
  data.push(theeta7);
  data.push(theeta8);

  data.push(degree);
  data.push(tan);
  data.push(Bx);
  data.push(Bx);
  // console.log(data[0]);
  for (i = 0; i < data.length; i++) {
    document.getElementById("r" + count + "c" + i).innerHTML = data[i];
  }
  count++;
};

function generateRandomFloatInRange(min, max) {
  return Math.random() * (max - min + 1) + min;
}

let value6 = generateRandomFloatInRange(0.01, 1.0);
