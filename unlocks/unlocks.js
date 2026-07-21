'use strict'
var canvas = document.getElementById("unlocksCanvas");
var ctx = canvas.getContext("2d");
let sprites = new Image();
sprites.src = './unlocks/unlocksAssets.png';
sprites.addEventListener('load', loadsprites, false);

/*
since whoever made js is too lazy to add in a file import function
AND im too lazy to implement that myself heres a small guide to the
rest of this file:

search for "TANK UNLOCK LIST" to find the tank definitions
search for "ACHIEVEMENTS LIST" to find the achievement definitions
search for "THE ACTUAL FUCKING CODE" to find... do i need to explain
*/

let tankunlocks = [ // TANK UNLOCK LIST
  {
	'id': '~',
	'shape': 0,
	'guns': [
      {
        'a': 45, // angle
        'c': '#A7A7AF', // set to #A7A7AF by default, only specified here so i can ctrl c ctrl v lmao
        'p': [ // points
          [-6,8],
          [6,8],
          [6*1.2,14],
          [-6*1.2,14],
        ]
      },
      {
        'a': -45,
        'p': [
          [-6,8],
          [6,8],
          [6*1.2,14],
          [-6*1.2,14],
        ]
      },
    ],
    'name': 'Zmomvmzibwz', // name ciphered to make cheating annoying lmao get fucked
    'drawoffset': [-5,0], // forwards, sideways
    'size': 60, // 100 is entire slot
    'unlockmethods': [
      'Pick up a flash drive dropped by MD-1',
    ],
    'upgradepaths': [
      'Director > Overseer', // basic is automatically added at the start of the upgrade path, tank itself is automatically added in front of it
    ],
    'isHidden': false, // if true, draw tank as a question mark and hide unlock methods if not unlocked
  },
  {
	'id': '!',
	'shape': 0,
	'guns': [
      {
        'p': [
          [-5.25*1.15,15],
          [5.25*1.15,15],
          [5.25,20],
          [-5.25,20],
        ]
      },
      {
        'p': [
          [-6.0375*1.3,0],
          [6.0375*1.3,0],
          [6.0375,15],
          [-6.0375,15],
        ]
      },
      {
        'c': '#8D6ADF',
        'p': [
          [-4.5,15],
          [4.5,15],
          [0,30],
        ]
      },
      {
        'p': [
          [-4.5*1.3,0],
          [4.5*1.3,0],
          [4.5,24],
          [-4.5,24],
        ]
      },
      {
        'c': '#8D6ADF',
        'p': [
          [-4.5,0],
          [4.5,0],
          [0,15],
        ]
      },
    ],
    'name': 'Vmjcti Aitdw',
    'drawoffset': [-20,0],
    'size': 40,
    'unlockmethods': [
      'Pick up a flash drive dropped by Nebula',
    ],
    'upgradepaths': [
      'Sniper > Rifle',
    ]
  },
  {
	'id': '@',
	'shape': 0,
	'guns': [
      {
        'c': '#FFFFFF',
        'p': [
          [-4.5,13],
          [4.5,13],
          [0,18],
        ]
      },
      {
        'p': [
          [-6,8],
          [6,8],
          [6*1.2,14],
          [-6*1.2,14],
        ]
      },
      {
        'a': 15,
        'c': '#FFFFFF',
        'p': [
          [-6,6],
          [6,6],
          [6*1.2,12],
          [-6*1.2,12],
        ]
      },
      {
        'a': -15,
        'c': '#FFFFFF',
        'p': [
          [-6,6],
          [6,6],
          [6*1.2,12],
          [-6*1.2,12],
        ]
      },
      {
        'p': [
          [-6.5,8],
          [6.5,8],
          [6.5*0.5,13],
          [-6.5*0.5,13],
        ]
      },
    ],
    'name': 'Ilpmaqdm',
    'drawoffset': [-10,0],
    'size': 60,
    'unlockmethods': [
      'Get 10 kills as Breaker',
    ],
    'upgradepaths': [
      'Director > Breaker',
    ]
  },
  {
	'id': '#',
	'shape': 0,
	'guns': [
      {
        'a': -20,
        'p': [
          [-4-2,0],
          [4-2,0],
          [4-2,19],
          [-4-2,19],
        ]
      },
      {
        'a': 20,
        'p': [
          [-4+2,0],
          [4+2,0],
          [4+2,19],
          [-4+2,19],
        ]
      },
      {
        'p': [
          [-4,0],
          [4,0],
          [4,22],
          [-4,22],
        ]
      },
      {
        'a': -20+120,
        'p': [
          [-4-2,0],
          [4-2,0],
          [4-2,19],
          [-4-2,19],
        ]
      },
      {
        'a': 20+120,
        'p': [
          [-4+2,0],
          [4+2,0],
          [4+2,19],
          [-4+2,19],
        ]
      },
      {
        'a': 120,
        'p': [
          [-4,0],
          [4,0],
          [4,22],
          [-4,22],
        ]
      },
      {
        'a': -20-120,
        'p': [
          [-4-2,0],
          [4-2,0],
          [4-2,19],
          [-4-2,19],
        ]
      },
      {
        'a': 20-120,
        'p': [
          [-4+2,0],
          [4+2,0],
          [4+2,19],
          [-4+2,19],
        ]
      },
      {
        'a': -120,
        'p': [
          [-4,0],
          [4,0],
          [4,22],
          [-4,22],
        ]
      },
    ],
    'name': 'Jmvb Bzqxtm',
    'drawoffset': [0,0],
    'size': 40,
    'unlockmethods': [
      'Play with the phrase "BT" in your name as its own seperate word',
    ],
    'upgradepaths': [
      'Twin > Double Twin',
      'Twin > Triple Shot',
    ],
    'isHidden': true,
  },
  {
	'id': '$',
	'shape': 0,
	'guns': [
      {
        'p': [
          [-2.5,25],
          [2.5,25],
          [0,40],
        ]
      },
      {
        'a': 90,
        'c': '#00e00b',
        'p': [
          [-4.5-21.37,5],
          [4.5-21.37,5],
          [(4.5*2.15)-21.37,9],
        ]
      },
      {
        'a': -90,
        'c': '#00e00b',
        'p': [
          [-4.5+21.37,5],
          [4.5+21.37,5],
          [(-4.5*2.15)+21.37,9],
        ]
      },
      {
        'p': [
          [-4.25,0],
          [4.25,0],
          [4.25,29.5],
          [-4.25,29.5],
        ]
      },
      {
        'p': [
          [-4.25*1.6,8],
          [4.25*1.6,8],
          [4.25,13],
          [-4.25,13],
        ]
      },
      {
        'a': 180+15,
        'p': [
          [-3.75+4,7],
          [3.75+4,7],
          [(3.75*0.6)+4,14],
          [(-3.75*0.6)+4,14],
        ]
      },
      {
        'a': 180-15,
        'p': [
          [-3.75-4,7],
          [3.75-4,7],
          [(3.75*0.6)-4,14],
          [(-3.75*0.6)-4,14],
        ]
      },
    ],
    'name': 'Akzmelzqdmz',
    'drawoffset': [-20,0],
    'size': 30,
    'unlockmethods': [
      'Obtain 5 achievements',
    ],
    'upgradepaths': [
      'Sniper > Assassin',
      'Director/Twin > Cruiser',
      'Director/Machine Gun > Fungus',
    ]
  },
  {
	'id': '%',
	'shape': 1,
	'guns': [
      {
        'c': '#726F6F',
        't': 'arc',
        'p': [0,0,15] // x,y,radius
      },
      {
        'a': 60,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        'a': 60+120,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        'a': 60+240,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        'a': 0,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        'a': 120,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        'a': 240,
        'p': [
          [-6*(3.5/20),0],
          [6*(3.5/20),0],
          [6*(3.5/20),34*(3.5/20)],
          [-6*(3.5/20),34*(3.5/20)],
        ]
      },
      {
        't': 'arc',
        'p': [0,0,3.5]
      },
      {
        'p': [
          [-7,8.5],
          [7,8.5],
          [7*0.8,17.5],
          [-7*0.8,17.5],
        ]
      },
      {
        'c': '#726F6F',
        'p': [
          [-4.875,6],
          [4.875,6],
          [4.875*0.71282051282,15],
          [-4.875*0.71282051282,15],
        ]
      },
      {
        'a': 150,
        'p': [
          [-4+1,8],
          [4+1,8],
          [4+1,16],
          [-4+1,16],
        ]
      },
      {
        'a': 210,
        'p': [
          [-4-1,8],
          [4-1,8],
          [4-1,16],
          [-4-1,16],
        ]
      },
    ],
    'name': 'Itxpi Abiz',
    'drawoffset': [-3,0],
    'size': 50,
    'unlockmethods': [
      'Pick up a flash drive dropped by Gamma Star',
    ],
    'upgradepaths': [
      'Flank Guard > Tri-Angle',
      'Pounder > Destroyer',
    ]
  },
  {
	'id': '^',
	'shape': 2,
	'guns': [
      {
        'p': [
          [-6.5,0],
          [6.5,0],
          [6.5,16],
          [-6.5,16],
        ]
      },
      {
        'a': 180,
        'p': [
          [-6.5,0],
          [6.5,0],
          [6.5,16],
          [-6.5,16],
        ]
      },
      {
        'a': 90,
        'p': [
          [-6*1.3,8],
          [6*1.3,8],
          [6*1.3*1.2,8+(5*1.3)],
          [-6*1.3*1.2,8+(5*1.3)],
        ]
      },
      {
        'a': 270,
        'p': [
          [-6*1.3,8],
          [6*1.3,8],
          [6*1.3*1.2,8+(5*1.3)],
          [-6*1.3*1.2,8+(5*1.3)],
        ]
      },
    ],
    'name': 'Dqzwql',
    'drawoffset': [0,0],
    'size': 22.5,
    'unlockmethods': [
      'Pick up a flash drive dropped by a Prion',
    ],
    'upgradepaths': [
      'Director > Spawner',
      'Director > Underseer',
      'Flank Guard',
    ],
  },
  {
	'id': '&',
	'shape': 0,
	'guns': [
      {
        'p': [
          [-7,0],
          [7,0],
          [7,36.75],
          [-7,36.75],
        ]
      },
      {
        'p': [
          [-7*1.3,4.5],
          [7*1.3,4.5],
          [7,12],
          [-7,12],
        ]
      },
      {
        'c': '#ffe3c3',
        'p': [
          [-8.25,15.5],
          [8.25,15.5],
          [8.25,16.5],
          [-8.25,16.5],
        ]
      },
      {
        'c': '#ffe3c3',
        'p': [
          [-8.25,20],
          [8.25,20],
          [8.25,21],
          [-8.25,21],
        ]
      },
      {
        'c': '#ffe3c3',
        'p': [
          [-8.25,24.5],
          [8.25,24.5],
          [8.25,25.5],
          [-8.25,25.5],
        ]
      },
      {
        'c': '#ffe3c3',
        'p': [
          [-8.25,29],
          [8.25,29],
          [8.25,30],
          [-8.25,30],
        ]
      },
      {
        'c': '#ffe3c3',
        'p': [
          [-8.25,33.5],
          [8.25,33.5],
          [8.25,34.5],
          [-8.25,34.5],
        ]
      },
    ],
    'name': 'Zmoctca',
    'drawoffset': [-25,0],
    'size': 37.5,
    'unlockmethods': [
      'Obtain 10 achievements',
    ],
    'upgradepaths': [
      'Pounder > Destroyer',
      'Sniper > Assassin',
    ]
  },
]
let achievements = [ // ACHIEVEMENTS LIST
  {
    'id': '~',
    'name': 'Qtrsetyr Mlnv',
    'description': 'Opqple l 10 hlgp xpotlezc clto'
  },
  {
    'id': '@',
    'name': 'Lcpyl Opqpynp',
    'description': 'Opqple l 20 hlgp xpotlezc clto'
  },
  {
    'id': '#',
    'name': 'Lyet-Xpotletzy',
    'description': 'Opqple l 30 hlgp xpotlezc clto'
  },
  {
    'id': '$',
    'name': 'Otdcprlcopc',
    'description': 'Lnstpgp l rclop zq D zy hlgp 10 zy l xpotlezc clto'
  },
  {
    'id': '%',
    'name': 'Qwlhwpdd Daplcsplo',
    'description': 'Lnstpgp l rclop zq D zy hlgp 20 zy l xpotlezc clto'
  },
  {
    'id': '^',
    'name': 'Pclotnlepo',
    'description': 'Lnstpgp l rclop zq D zy hlgp 30 zy l xpotlezc clto'
  },
  {
    'id': '&',
    'name': 'Tygldtzy Opytpo',
    'description': 'Lnstpgp l rclop zq D+ zy l xpotlezc clto'
  },
  {
    'id': '*',
    'name': 'Ozfmwp Eczfmwp',
    'description': 'Wfcp 2 mzddpd ezrpespc lyo vtww espx hteszfe ojtyr ty esp acznpdd'
  },
  {
    'id': '(',
    'name': 'Dappocfy',
    'description': 'Rpe 500v dnzcp htesty 7 xtyfepd lyo 15 dpnzyod zq wzdtyr dalhy tygfwypclmtwtej'
  },
  {
    'id': ')',
    'name': 'Afmwtn pypxj #1',
    'description': 'Rpe 1x dnzcp'
  },
  {
    'id': '-',
    'name': '3 Elyv Lcxj',
    'description': 'Mple Mldp Tyqtwecletzy htes zywj 3 (zc wpdd) zespc apzawp'
  },
  /*{
    'id': '_',
    'name': 'Nzcp Yfvp',
    'description': 'Vtww ly Piawzopc mj dszzetyr zyp zq ted atap mzxmd ez apcqzcx l yfvp'
  },*/
  {
    'id': '=',
    'name': 'Fdfcapc',
    'description': 'Opqple Spwgpepl'
  },
  {
    'id': '+',
    'name': 'V7G',
    'description': 'Opqple DEC-2'
  },
  {
    'id': '`',
    'name': 'Lgpclrp Nlatelwtde',
    'description': 'Opqple Rzwopy Dpyecj'
  },
  {
    'id': 'q',
    'name': 'Opqzcetqtpo',
    'description': 'Opqple Qzcetqtnletzy'
  },
  {
    'id': 'w',
    'name': 'Ypde Opdeczjpc',
    'description': 'Opqple esp Ypde Vppapc'
  },
  {
    'id': 'e',
    'name': 'N. Apaz glc. apaz',
    'description': 'Opqple Nfnfcmtel'
  },
  {
    'id': 'r',
    'name': 'Zfe zq Zcmte',
    'description': 'Opqple Leeclnezc TT'
  },
  {
    'id': 't',
    'name': '+NSLCRPMLNV',
    'description': 'Opqwpne zc alccj l Acpntdtzy Dytapc mfwwpe ld ptespc Opqwpnezc zc Opxzwtetzytde'
  },
  /*{
    'id': 'y',
    'name': 'Apypeclepo',
    'description': 'Vtww l mzdd mj atpcntyr te xfwetawp etxpd mj mzfyntyr l Acpntdtzy Dytapc mfwwpe zqq zq nztyd'
  },*/
  {
    'id': 'u',
    'name': 'Lcxd Clnp',
    'description': 'Ncplep lyj E3 Nzydecfnetgtde Hlcdsta htesty 1 xtyfep lyo 30 dpnzyod zq xtytyr l cznv'
  },
  {
    'id': 'i',
    'name': 'MWZZO TD QFPW',
    'description': 'Rpe 750v dnzcp htes lewplde 37 vtwwd mj esp etxp jzf cplns 750v'
  },
  {
    'id': 'o',
    'name': 'Dytaty\'d l rzzo uzm, xlep!',
    'description': 'Rpe 5 nzydpnfetgp sted zy pypxj elyvd ld Acpntdtzy Dytapc hteszfe xtddtyr'
  },
  {
    'id': 'p',
    'name': 'Tyozxtelmwp Elyv Datcte',
    'description': 'Mple Mldp Tyqtwecletzy qczx delce ez qtytds hteszfe ojtyr'
  },
  {
    'id': '[',
    'name': 'Rclotfd',
    'description': 'Opqple Epeclylfe'
  },
  {
    'id': ']',
    'name': 'Jzf\'ww ypgpc rpe xp lwtgp!',
    'description': 'Fdp Xzyzcltw\'d lmtwtej ez pglop oples qzc dpgpclw dpnzyod lqepc mptyr yplcwj vtwwpo'
  },
]
// THE ACTUAL FUCKING CODE
// caesar cipher algorithm taken from https://gist.github.com/EvanHahn/2587465
ctx.imageSmoothingEnabled = false
let uiloaded = false
let uitab = [
  0, // 0 for unlocks, 1 for achievements, 2 for data, 3 for tank, 4 for achievement
  0, // page OR tank/achievement index
  0, // memory for returning to main tabs from sub-tabs
]
let uislots = []
function switchToPage(page,targettab = uitab[0]) {
  let memory = 0
  if (targettab >= 3) memory = uitab[1]
  uitab = [targettab, page, memory]
  uislots = []
  switch(targettab) {
    case 0:
      if (1==1) {
        let indexes = []
        for (let i=6*page;i<(6*page)+6;i++) {
          if (tankunlocks.length > i) {
            indexes.push(i)
          }
        }
        if (indexes.length == 0) return
        for (let i=0;i<indexes.length;i++) {
          uislots.push([
            0,indexes[i],8+((111)*(i%3)),30+(111*Math.floor(i/3)),true
          ])
        }
      }
      return
    case 1:
      if (1==1) {
        let indexes = []
        for (let i=14*page;i<(14*page)+14;i++) {
          if (achievements.length > i) {
            indexes.push(i)
          }
        }
        if (indexes.length == 0) return
        for (let i=0;i<indexes.length;i++) {
          uislots.push([
            1,indexes[i],8+((167)*(i%2)),30+(31*Math.floor(i/2)),true
          ])
        }
      }
      return
    case 3:
      if (1==1) {
        uislots.push([
          0,page,8,30,false
        ])
      }
      return
  }
}
function loadsprites() {
  uiloaded = true
  if (localStorage.unlocks == null || localStorage.unlocks == '') {
    localStorage.unlocks = JSON.stringify([])
  } else {
    let a = JSON.parse(localStorage.unlocks)
    let b = []
    for (let c of a) {
      if (!b.includes(c)) b.push(c)
    }
    localStorage.unlocks = JSON.stringify(b)
  }
  if (localStorage.achiev == null || localStorage.achiev == '') {
    localStorage.achiev = JSON.stringify([])
  } else {
    let a = JSON.parse(localStorage.achiev)
    let b = []
    for (let c of a) {
      if (!b.includes(c)) b.push(c)
    }
    localStorage.achiev = JSON.stringify(b)
  }
  switchToPage(0,0)
}
let caesarShift = function (str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }
  // Make an output variable
  let output = "";
  // Go through each character
  for (let i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    let c = str[i];
    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      let code = str.charCodeAt(i);
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    // Append
    output += c;
  }
  // All done!
  return output;
};
function vigenere(str, key, mode) {
  let output = ''
  for (let i=0;i<str.length;i++) {
    let letter = str[i]
    let keyletter = parseInt(key[i%key.length], 36)-9
    output += caesarShift(letter, keyletter * (mode == 1 ? 1 : -1))
  }
  return output
}
let mixColors = (b, a, c = 0.5) => {
  if (0 === c) return b;
  if (1 === c) return a;
  let d = 1 - c;
  b = parseInt(b.slice(1), 16);
  a = parseInt(a.slice(1), 16);
  return "#" + ((b & 16711680) * d + (a & 16711680) * c & 16711680 |
    (b & 65280) * d + (a & 65280) * c & 65280 | (b & 255) * d + (a & 255) * c & 255).toString(16).padStart(6, "0")
  };
function getBorderColor(b) {
  let d = '#484848';
  return mixColors(b, d, 0.65)
}
function degreesToRadians(input) {
    return input * Math.PI/180
}
function drawUnlockTank(index,x,y,angle,dark=false) {
  let drawTank = tankunlocks[index]
  ctx.lineWidth = 7.5/3
  for (let gun of drawTank.guns) {
    let type = 'points'
    if (gun.t != null) type = gun.t
    let angle2 = 0
    if (gun.a != null) angle2 = degreesToRadians(gun.a)
    switch (type) {
      default:
      case 'points':
        ctx.beginPath()
        ctx.moveTo(x
          +(Math.cos(angle)*drawTank.drawoffset[0])
          +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.cos(angle+angle2)*(gun.p[0][1]/20)*drawTank.size)
          +(Math.cos(angle+angle2+degreesToRadians(90))*(gun.p[0][0]/20)*drawTank.size)
        ,y
          +(Math.sin(angle)*drawTank.drawoffset[0])
          +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.sin(angle+angle2)*(gun.p[0][1]/20)*drawTank.size)
          +(Math.sin(angle+angle2+degreesToRadians(90))*(gun.p[0][0]/20)*drawTank.size)
        )
        if (gun.p.length > 1) {
          for (let i=1;i<gun.p.length;i++) {
            ctx.lineTo(x
              +(Math.cos(angle)*drawTank.drawoffset[0])
              +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
              +(Math.cos(angle+angle2)*(gun.p[i][1]/20)*drawTank.size)
              +(Math.cos(angle+angle2+degreesToRadians(90))*(gun.p[i][0]/20)*drawTank.size)
            ,y
              +(Math.sin(angle)*drawTank.drawoffset[0])
              +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
              +(Math.sin(angle+angle2)*(gun.p[i][1]/20)*drawTank.size)
              +(Math.sin(angle+angle2+degreesToRadians(90))*(gun.p[i][0]/20)*drawTank.size)
            )
          }
        }
        ctx.lineTo(x
          +(Math.cos(angle)*drawTank.drawoffset[0])
          +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.cos(angle+angle2)*(gun.p[0][1]/20)*drawTank.size)
          +(Math.cos(angle+angle2+degreesToRadians(90))*(gun.p[0][0]/20)*drawTank.size)
        ,y
          +(Math.sin(angle)*drawTank.drawoffset[0])
          +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.sin(angle+angle2)*(gun.p[0][1]/20)*drawTank.size)
          +(Math.sin(angle+angle2+degreesToRadians(90))*(gun.p[0][0]/20)*drawTank.size)
        )
        ctx.fillStyle = '#A7A7AF'
        if (gun.c != null) ctx.fillStyle = gun.c
        if (dark == true) ctx.fillStyle = '#000000'
        ctx.strokeStyle = getBorderColor(ctx.fillStyle)
        if (dark == true) ctx.strokeStyle = '#000000'
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        break;
      case 'arc':
        ctx.beginPath()
        ctx.arc(x
          +(Math.cos(angle)*drawTank.drawoffset[0])
          +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.cos(angle+degreesToRadians(90))*gun.p[0])
          +(Math.cos(angle)*gun.p[1])
        ,y
          +(Math.sin(angle)*drawTank.drawoffset[0])
          +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
          +(Math.sin(angle+degreesToRadians(90))*gun.p[0])
          +(Math.sin(angle)*gun.p[1])
        ,(gun.p[2]/20)*(drawTank.size/2), 0, 2*Math.PI, false)
        ctx.fillStyle = '#A7A7AF'
        if (gun.c != null) ctx.fillStyle = gun.c
        if (dark == true) ctx.fillStyle = '#000000'
        ctx.strokeStyle = getBorderColor(ctx.fillStyle)
        if (dark == true) ctx.strokeStyle = '#000000'
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        break;
    }
  }
  switch (drawTank.shape) {
    default:
    case 0:
      ctx.beginPath()
      ctx.arc(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,drawTank.size/2, 0, 2*Math.PI, false)
      ctx.fillStyle = '#3CA4CB'
      if (dark == true) ctx.fillStyle = '#000000'
      ctx.strokeStyle = getBorderColor(ctx.fillStyle)
      if (dark == true) ctx.strokeStyle = '#000000'
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
      break;
    case 1:
      ctx.beginPath()
      ctx.arc(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,drawTank.size/2, 0, 2*Math.PI, false)
      ctx.moveTo(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(drawTank.size/2)*0.585
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      )
      ctx.arc(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
      ,(drawTank.size/2)*0.585, 0, 2*Math.PI, false)
      ctx.fillStyle = '#3CA4CB'
      if (dark == true) ctx.fillStyle = '#000000'
      ctx.strokeStyle = getBorderColor(ctx.fillStyle)
      if (dark == true) ctx.strokeStyle = '#000000'
      ctx.fill("evenodd")
      ctx.stroke()
      ctx.closePath()
      break;
    case 2:
      ctx.beginPath()
      ctx.moveTo(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.cos(angle+degreesToRadians(45+(90*0)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.sin(angle+degreesToRadians(45+(90*0)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      )
      ctx.lineTo(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.cos(angle+degreesToRadians(45+(90*1)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.sin(angle+degreesToRadians(45+(90*1)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      )
      ctx.lineTo(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.cos(angle+degreesToRadians(45+(90*2)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.sin(angle+degreesToRadians(45+(90*2)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      )
      ctx.lineTo(x
        +(Math.cos(angle)*drawTank.drawoffset[0])
        +(Math.cos(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.cos(angle+degreesToRadians(45+(90*3)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      ,y
        +(Math.sin(angle)*drawTank.drawoffset[0])
        +(Math.sin(angle+degreesToRadians(90))*drawTank.drawoffset[1])
        +(Math.sin(angle+degreesToRadians(45+(90*3)))*(Math.sqrt(Math.PI)/2)*Math.sqrt(2)*(drawTank.size/2))
      )
      ctx.closePath()
      ctx.fillStyle = '#3CA4CB'
      if (dark == true) ctx.fillStyle = '#000000'
      ctx.strokeStyle = getBorderColor(ctx.fillStyle)
      if (dark == true) ctx.strokeStyle = '#000000'
      ctx.fill()
      ctx.stroke()
      break;
  }
}
function drawSlot(type,index,x,y) {
  let dark = true
  let isHidden = false
  if (type == 0) {
    if (JSON.parse(localStorage.unlocks).includes(tankunlocks[index].id)) dark = false
    if (dark == true && tankunlocks[index].isHidden != null) isHidden = tankunlocks[index].isHidden
    ctx.drawImage(sprites, 106*dark, 110, 106, 106, x, y, 106, 106)
    if (isHidden == false) {
      drawUnlockTank(index,x+53,y+53,Date.now()/2000,dark)
    } else {
      ctx.globalAlpha = 0.25+Math.abs(Math.sin(Date.now()/500)*0.75)
      ctx.drawImage(sprites, 212, 138, 44, 78, x+3+28, y+3+11, 44, 78)
      ctx.globalAlpha = 1
    }
  } else {
    if (JSON.parse(localStorage.achiev).includes(achievements[index].id)) dark = false
    ctx.drawImage(sprites, 0, 216+(26*dark), 161, 26, x, y, 161, 26)
    ctx.textAlign = 'center'
    if (dark == true) ctx.globalAlpha = 0.333
    ctx.fillText(caesarShift(achievements[index].name, -11), x+80, y+16)
    ctx.globalAlpha = 1
    ctx.textAlign = 'left'
  }
}
canvas.addEventListener('click', (event) => {
  let clickpos = [
    (event.clientX - (window.scrollX + document.querySelector('#unlocksCanvas').getBoundingClientRect().left))*(344/349), // X
    (event.clientY - (window.scrollY + document.querySelector('#unlocksCanvas').getBoundingClientRect().top))*(344/349) // Y
  ]
  if (clickpos[1] <= 25) {
    if (uitab[0] < 3) {
      if (clickpos[0] <= 210) {
        let tab = 1
        if (clickpos[0] <= 63) tab = 0
        if (clickpos[0] > 166) tab = 2
        switchToPage(0,tab)
      } else {
        let maxpage = Math.ceil(tankunlocks.length/6)-1
        if (uitab[0] == 1) maxpage = Math.ceil(achievements.length/14)-1
        if (clickpos[0] >= (344-8)-67 && clickpos[0] <= 344-61 && uitab[1] > 0) switchToPage(uitab[1]-1,uitab[0])
        if (clickpos[0] > 344-61+8 && clickpos[0] < (344-8)-11) {
          let input = prompt('Enter Page number.', uitab[1]+1)
          input = parseInt(input)
          if (typeof input == 'number' && isNaN(input) != true) {
            input--
            input = Math.min(maxpage, Math.max(0, Math.round(input))) // good luck breaking this
            switchToPage(input,uitab[0])
          }
        }
        if (clickpos[0] >= (344-8)-11 && clickpos[0] <= 344-5 && uitab[1] < maxpage) switchToPage(uitab[1]+1,uitab[0])
      }
    } else {
      switch (uitab[0]) {
        case 3:
          if (clickpos[0] <= 112) switchToPage(uitab[2], 0)
          break
        case 4:
          if (clickpos[0] <= 151) switchToPage(uitab[2], 1)
          break
      }
    }
  }
  if (uitab[0] == 2) {
    if (clickpos[0] >= (344-106)-8 && clickpos[0] <= 344-8) {
      if (clickpos[1] >= ((264-5)-12)-(29*3) && clickpos[1] <= (((264-5)-12)-(29*3))+26) { // export data
        let key = caesarShift('IAZWbBqDmBpZhjxVvDEOQgVmoTFMNVlodUjzNDiBDuheBOtzYFbwiBDpUezyeEzPsdqQnEkTcUMDTHREEWATCHESEWGnwiVmLHPZMchlqvVUWZdEyziQXoVZNHPSLNNwFpeNCsOWaIwpqFyTDOEIanHvXdaImX', -3)
        function downloadFile(filename, textData) {
          const node = Object.assign(document.createElement('a'), {
            href: `data:text/plain;charset=utf-8,${encodeURIComponent(textData)}`,
            download: filename,
            style: 'display: none'
          });
          document.body.appendChild(node);
          node.click();
          document.body.removeChild(node);
        }
        downloadFile('save.oapp', vigenere(JSON.stringify(localStorage), key, 1))
        alert('Data exported.')
      }
      if (clickpos[1] >= ((264-5)-12)-(29*2) && clickpos[1] <= (((264-5)-12)-(29*2))+26) { // import data
        let key = caesarShift('IAZWbBqDmBpZhjxVvDEOQgVmoTFMNVlodUjzNDiBDuheBOtzYFbwiBDpUezyeEzPsdqQnEkTcUMDTHREEWATCHESEWGnwiVmLHPZMchlqvVUWZdEyziQXoVZNHPSLNNwFpeNCsOWaIwpqFyTDOEIanHvXdaImX', -3)
        let savedata
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
          // getting a hold of the file reference
          var file = e.target.files[0]; 
          // setting up the reader
          var reader = new FileReader();
          reader.readAsText(file,'UTF-8');
          // here we tell the reader what to do when it's done reading...
          reader.onload = readerEvent => {
            let content = readerEvent.target.result; // this is the content!
            savedata = vigenere(content, key, 0)
            try {
              savedata = JSON.parse(savedata)
            } catch (error) {
              alert('Invalid file format (has to be .oapp file generated from exporting your data)')
              savedata = null
            }
            if (savedata != null) {
              for (let idk of Object.keys(savedata)) {
                localStorage[idk] = savedata[idk]
              }
              alert('Data imported.')
            }
          }
        }
        input.click();
      }
      if (clickpos[1] >= ((264-5)-12)-(29*1) && clickpos[1] <= (((264-5)-12)-(29*1))+26) { //  E V I S C E R A T E  data
        if (confirm('Are you sure? Wiping your data will reset all of your unlockable tanks, achievements and statistics.')) {
          if (confirm('Are you ABSOLUTELY sure you want to reset your data? This action is irreversible unless you exported your data prior.')) {
            let letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
            let makesure = ''
            for (let i=0;i<30;i++) makesure += letters[Math.min(letters.length-1, Math.floor(letters.length*Math.random()))]
            let input = prompt('Type out \"' + makesure + '\" if you are 100% sure you wish to clear your own data with no way of recovering it.')
            if (input == makesure) {
              let uid = localStorage.uid
              localStorage.clear()
              localStorage.uid = uid
              localStorage.unlocks = JSON.stringify([])
              localStorage.achiev = JSON.stringify([])
              localStorage.data = JSON.stringify({
                'playtime': 0,
                'kills': 0,
                'deaths': 0,
                'bosskills': 0,
                'domwins': 0,
                'domlosses': 0,
                'attackwins': 0,
                'attacklosses': 0,
                'biwins': 0,
                'bidefeats': 0,
              })
              alert('Data deleted.')
              window.location.reload()
            } else {
              alert('Data deletion cancelled.')
            }
          }
        }
      }
    }
  }
  for (let slot of uislots) {
    switch (uitab[0]) {
      case 0:
        if (clickpos[0] >= slot[2] && clickpos[0] < slot[2]+106 && clickpos[1] >= slot[3] && clickpos[1] < slot[3]+106 && slot[4] == true) {
          switchToPage(slot[1], 3)
        }
        break
      case 1:
        if (clickpos[0] >= slot[2] && clickpos[0] < slot[2]+161 && clickpos[1] >= slot[3] && clickpos[1] < slot[3]+26 && slot[4] == true) {
          switchToPage(slot[1], 4)
        }
        break
    }
  }
});
// draw loop
var unlockDrawLoop = (() => {
  ctx.clearRect(0, 0, 344, 264) // clear the canvas every frame
  ctx.font = '13.5px ubuntu'
  ctx.textAlign = 'left'
  ctx.imageSmoothingEnabled = false
  ctx.lineJoin = 'round'
  if (uiloaded == true) {
    ctx.drawImage(sprites, 0, uitab[0]*22, 344, 22, 0, 0, 344, 22)
    ctx.drawImage(sprites, 161, 216, 344-(84*(uitab[0]<2)), 3, 0, 22, 344-(84*(uitab[0]<2)), 3)
    if (uitab[0] < 2) ctx.drawImage(sprites, 177, 228, 4, 25, 344-84, 0, 4, 25)
    ctx.drawImage(sprites, 161, 216, 344, 12, 0, 264-12, 344, 12)
    if (uitab[0]<3) {
      ctx.fillStyle = '#FFFFFF'
      ctx.fillText('Unlocks', 4, 16)
      ctx.fillText('Achievements', 63+5, 16)
      ctx.fillText('Data', 166+4, 16)
      if (uitab[0] < 2) {
        ctx.drawImage(sprites, 169, 228, 8, 16, (344-8)-8, 3, 8, 16)
        ctx.drawImage(sprites, 161, 228, 8, 16, (344-8)-64, 3, 8, 16)
        ctx.textAlign = 'center'
        ctx.fillText(uitab[1]+1, (344-4.5)-36, 16)
        ctx.textAlign = 'left'
      } else {
        let data = JSON.parse(localStorage.data)
        let unlocks = JSON.parse(localStorage.unlocks)
        let achiev = JSON.parse(localStorage.achiev)
        let hiddenTanks = []
        let unlockedHiddens = 0
        for (let tank of tankunlocks) {
          if (tank.isHidden != null) {
            if (tank.isHidden == true) {
              hiddenTanks.push(tank.id)
              if (unlocks.includes(tank.id)) unlockedHiddens++
            }
          }
        }
        ctx.fillText('Playtime: ' + Math.round(data.playtime*10 / (data.playtime >= 60 ? 60 : 1))/10 + ' ' + ((data.playtime >= 60) ? 'hours' : 'minutes'), 4, 22+(14.5*1))
        ctx.fillText('Kills/Deaths: ' + data.kills + ' / ' + data.deaths, 4, 22+(14.5*2))
        ctx.fillText('Boss Kills: ' + data.bosskills, 4, 22+(14.5*3))
        ctx.fillText('Domination Wins/Losses: ' + data.domwins + ' / ' + data.domlosses, 4, 22+(14.5*4))
        ctx.fillText('Attack Wins/Losses: ' + data.attackwins + ' / ' + data.attacklosses, 4, 22+(14.5*5))
        ctx.fillText('BI Wins/Bases Defeated: ' + data.biwins + ' / ' + data.bidefeats, 4, 22+(14.5*6))
        ctx.fillText('Tanks Unlocked: ' + (unlocks.length-unlockedHiddens) + ' / ' + (tankunlocks.length-hiddenTanks.length), 4, 22+(14.5*7))
        ctx.fillStyle = '#4D4D4D'
        ctx.fillText('(Hidden Tanks Unlocked: ' + unlockedHiddens + ' / ' + hiddenTanks.length + ')', 4, 22+(14.5*8))
        ctx.fillStyle = '#FFFFFF'
        ctx.fillText('Achievements Obtained: ' + achiev.length + ' / ' + achievements.length, 4, 22+(14.5*9))
        let completion = (Math.round(10000*((((unlocks.length-unlockedHiddens)/(tankunlocks.length-hiddenTanks.length))*0.333)+((achiev.length/achievements.length)*0.667)))/100)
        if (unlocks.length == tankunlocks.length && achiev.length == achievements.length) completion = 101
        ctx.fillText('Completion Percentage: ' + completion + '%', 4, 22+(14.5*10))
        ctx.drawImage(sprites, 256, 164, 106, 26, (344-106)-8, ((264-5)-12)-(29*3), 106, 26)
        ctx.drawImage(sprites, 256, 164, 106, 26, (344-106)-8, ((264-5)-12)-(29*2), 106, 26)
        ctx.drawImage(sprites, 256, 190, 106, 26, (344-106)-8, ((264-5)-12)-(29*1), 106, 26)
        ctx.textAlign = 'center'
        ctx.fillText('Export Data', (344-53)-8, ((264-5)-12)-(29*3)+16)
        ctx.fillText('Import Data', (344-53)-8, ((264-5)-12)-(29*2)+16)
        ctx.fillStyle = '#FF0000'
        ctx.fillText('Wipe Data', (344-53)-8, ((264-5)-12)-(29*1)+16)
        ctx.textAlign = 'left'
        ctx.fillStyle = '#FFFFFF'
      }
    } else {
      switch (uitab[0]) {
        case 3: // tank
          if (1==1) {
            ctx.fillStyle = '#FFFFFF'
            ctx.strokeStyle = '#FFFFFF'
            ctx.lineWidth = 0.333
            ctx.fillText('Back to Unlocks', 4, 16)
            let locked = true
            if (JSON.parse(localStorage.unlocks).includes(tankunlocks[uitab[1]].id)) locked = false
            ctx.font = '20px ubuntu'
            if (locked == false) {
              ctx.fillText(caesarShift(tankunlocks[uitab[1]].name, -8), 8+106+4, 23+22)
              ctx.strokeText(caesarShift(tankunlocks[uitab[1]].name, -8), 8+106+4, 23+22)
            } else {
              ctx.fillText('???', 8+106+4, 23+22)
              ctx.strokeText('???', 8+106+4, 23+22)
            }
            ctx.font = '16.5px ubuntu'
            ctx.fillText('Unlock Method(s):', 8+106+4, 45+22)
            ctx.font = '13.5px ubuntu'
            let methodVerticalOffset = 0
            for (let method of tankunlocks[uitab[1]].unlockmethods) {
              let isHidden = false
              if (tankunlocks[uitab[1]].isHidden != null) isHidden = tankunlocks[uitab[1]].isHidden
              let ogOffset = methodVerticalOffset
              methodVerticalOffset++
              if (isHidden != true || locked == false) {
                let words = method.split(' ')
                let verticalOffset = 0
                let sentences = ['- ']
                for (let i=0;i<words.length;i++) {
                  if (sentences[verticalOffset].length+words[i].length > 33) {
                    verticalOffset++
                    methodVerticalOffset++
                    sentences.push('')
                  }
                  sentences[verticalOffset] += words[i] + ' '
                }
                for (let i=0;i<sentences.length;i++) {
                  ctx.fillText(sentences[i], 8+106+4, 57.5+22+(14.5*i)+(14.5*ogOffset))
                }
              } else {
                ctx.fillText('- ???', 8+106+4, 57.5+22+(14.5*ogOffset))
              }
            }
            methodVerticalOffset = 0
            ctx.font = '16.5px ubuntu'
            ctx.fillText('Upgrade Path(s):', 8, 132+22)
            ctx.font = '13.5px ubuntu'
            for (let path of tankunlocks[uitab[1]].upgradepaths) {
              let ogOffset = methodVerticalOffset
              methodVerticalOffset++
              if (locked == false) {
                let fullpath = 'Basic > ' + path + ' > ' + caesarShift(tankunlocks[uitab[1]].name, -8)
                let words = fullpath.split(' ')
                let verticalOffset = 0
                let sentences = ['- ']
                for (let i=0;i<words.length;i++) {
                  if (sentences[verticalOffset].length+words[i].length > 46) {
                    verticalOffset++
                    methodVerticalOffset++
                    sentences.push('')
                  }
                  sentences[verticalOffset] += words[i] + ' '
                }
                for (let i=0;i<sentences.length;i++) {
                  ctx.fillText(sentences[i], 8, 148.5+22+(14.5*i)+(14.5*ogOffset))
                }
              } else {
                ctx.fillText('- ???', 8, 148.5+22+(14.5*ogOffset))
              }
            }
          }
          break;
        case 4: // achievement
          if (1==1) {
            ctx.fillStyle = '#FFFFFF'
            ctx.strokeStyle = '#FFFFFF'
            ctx.lineWidth = 0.333
            ctx.fillText('Back to Achievements', 4, 16)
            let locked = true
            if (JSON.parse(localStorage.achiev).includes(achievements[uitab[1]].id)) locked = false
            let method = caesarShift(achievements[uitab[1]].description, -11)
            let isHidden = false
            if (achievements[uitab[1]].isHidden != null) isHidden = achievements[uitab[1]].isHidden
            let name = achievements[uitab[1]].name
            if (isHidden == true && locked == true) name = "???"
            ctx.font = '20px ubuntu'
            ctx.fillText(caesarShift(achievements[uitab[1]].name, -11), 4, 23+22)
            ctx.strokeText(caesarShift(achievements[uitab[1]].name, -11), 4, 23+22)
            ctx.font = '13.5px ubuntu'
            if (name != '???') {
              let words = method.split(' ')
              let verticalOffset = 0
              let sentences = ['']
              for (let i=0;i<words.length;i++) {
                if (sentences[verticalOffset].length+words[i].length > 54) {
                  verticalOffset++
                  sentences.push('')
                }
                sentences[verticalOffset] += words[i] + ' '
              }
              for (let i=0;i<sentences.length;i++) {
                ctx.fillText(sentences[i], 4, 45+22+(14.5*i))
              }
            } else {
              ctx.fillText('???', 4, 45+22+(14.5*ogOffset))
            }
          }
          break
      }
    }
    for (let slot of uislots) {
      drawSlot(slot[0],slot[1],slot[2],slot[3])
    }
  }
})
setInterval(unlockDrawLoop, 1000/30);
