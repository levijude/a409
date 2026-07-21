if (localStorage.getItem('uid') == null) localStorage.setItem('uid', Date.now().toString(36))
if (localStorage.getItem('keybindsJSON') == null) localStorage.setItem('keybindsJSON', '{}')
//if (localStorage.getItem('audioVolume') == null) localStorage.setItem('audioVolume', '0.5')
if (localStorage.getItem('data') == null || JSON.parse(localStorage.data)['bidefeats'] == null) localStorage.data = JSON.stringify({
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
let funnyvariablethatexistsiguess = false // dont set this to true unless you know what you're doing. this doesnt do anything it just clogs up the console with random shit
/*let currentvolumemult = 1 // no touchy through console pls
function setVolume(val, type = 'global') { // todo: finish this shit
  switch (type) {
    default:
    case 'global':
      break
    case 'music':
      break
    case 'sound':
      break
  }
}*/

~ function() {
    'use strict';
    var L = L || {};
    L.scope = {};
    L.checkStringArgs = function(r, m, u) {
        if (null == r) throw new TypeError("The 'this' value for String.prototype." + u + " must not be null or undefined");
        if (m instanceof RegExp) throw new TypeError("First argument to String.prototype." + u + " must not be a regular expression");
        return r + ""
    };
    L.ASSUME_ES5 = !1;
    L.ASSUME_NO_NATIVE_MAP = !1;
    L.ASSUME_NO_NATIVE_SET = !1;
    L.SIMPLE_FROUND_POLYFILL = !1;
    L.defineProperty = L.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(r, m, u) {
        r != Array.prototype && r != Object.prototype && (r[m] = u.value)
    };
    L.getGlobal = function(r) {
        return "undefined" != typeof window && window === r ? r : "undefined" != typeof global && null != global ? global : r
    };
    L.global = L.getGlobal(this);
    L.polyfill = function(r, m) {
        if (m) {
            var u = L.global;
            r = r.split(".");
            for (var a = 0; a < r.length - 1; a++) {
                var e = r[a];
                e in u || (u[e] = {});
                u = u[e]
            }
            r = r[r.length - 1];
            a = u[r];
            m = m(a);
            m != a && null != m && L.defineProperty(u, r, {
                configurable: !0,
                writable: !0,
                value: m
            })
        }
    };
    L.stringPadding = function(r, m) {
        r = void 0 !== r ? String(r) : " ";
        return 0 < m && r ? r.repeat(Math.ceil(m / r.length)).substring(0, m) : ""
    };
    L.polyfill("String.prototype.padStart", function(r) {
        return r ? r : function(m, u) {
            var a = L.checkStringArgs(this, null, "padStart");
            return L.stringPadding(u, m - a.length) + a
        }
    }, "es8", "es3");
    L.owns = function(r, m) {
        return Object.prototype.hasOwnProperty.call(r, m)
    };
    L.polyfill("Object.entries", function(r) {
        return r ? r : function(m) {
            var u = [],
                a;
            for (a in m) L.owns(m, a) && u.push([a, m[a]]);
            return u
        }
    }, "es8", "es3");
    L.polyfill("Object.values", function(r) {
        return r ? r : function(m) {
            var u = [],
                a;
            for (a in m) L.owns(m, a) && u.push(m[a]);
            return u
        }
    }, "es8", "es3");
    L.polyfill("Array.prototype.includes", function(r) {
        return r ? r : function(m, u) {
            var a = this;
            a instanceof String && (a = String(a));
            var e = a.length;
            u = u || 0;
            for (0 > u && (u = Math.max(u + e, 0)); u < e; u++) {
                var K = a[u];
                if (K === m || Object.is(K, m)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    (function(r) {
        function m(a) {
            if (u[a]) return u[a].exports;
            var e = u[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            r[a].call(e.exports, e, e.exports, m);
            e.l = !0;
            return e.exports
        }
        var u = {};
        m.m = r;
        m.c = u;
        m.d = function(a, e, K) {
            m.o(a, e) || Object.defineProperty(a, e, {
                enumerable: !0,
                get: K
            })
        };
        m.r = function(a) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        };
        m.t = function(a, e) {
            e & 1 && (a = m(a));
            if (e & 8 || e & 4 && "object" === typeof a && a && a.__esModule) return a;
            var K = Object.create(null);
            m.r(K);
            Object.defineProperty(K, "default", {
                enumerable: !0,
                value: a
            });
            if (e & 2 && "string" != typeof a)
                for (var w in a) m.d(K, w, function(e) {
                    return a[e]
                }.bind(null, w));
            return K
        };
        m.n = function(a) {
            var e = a && a.__esModule ? function() {
                return a["default"]
            } : function() {
                return a
            };
            m.d(e, "a", e);
            return e
        };
        m.o = function(a, e) {
            return Object.prototype.hasOwnProperty.call(a, e)
        };
        m.p = "";
        return m(m.s = 0)
    })([function(r, m, u) {
        function a() {
            window.dataLayer.push(arguments)
        }

        function e(b) {
          if (typeof b == 'number') {
            switch (b) {
                case 0:
                    return l.teal;
                case 1:
                    return l.lgreen;
                case 2:
                    return l.orange;
                case 3:
                    return l.yellow;
                case 4:
                    return l.lavender;
                case 5:
                    return l.pink;
                case 6:
                    return l.vlgrey;
                case 7:
                    return l.lgrey;
                case 8:
                    return l.guiwhite;
                case 9:
                    return l.black;
                case 10:
                    return l.blue;
                case 11:
                    return l.green;
                case 12:
                    return l.red;
                case 13:
                    return l.gold;
                case 14:
                    return l.purple;
                case 15:
                    return l.magenta;
                case 16:
                    return l.grey;
                case 17:
                    return l.dgrey;
                case 18:
                    return l.white;
                case 19:
                    return l.guiblack;
                case 20:
                    return 150 > Date.now() % 300 ? l.blue : l.red;
                case 21:
                    return 150 > Date.now() % 300 ? l.blue : l.grey;
                case 22:
                    return 150 > Date.now() % 300 ? l.grey : l.blue;
                case 23:
                    return 150 > Date.now() % 300 ? l.red : l.grey;
                case 24:
                    return 150 > Date.now() % 300 ? l.grey : l.red;
                case 30:
                    return "#d21fff"; //Purple
                case 31:
                    return "#226ef6"; //Saturated Blue
                case 32:
                    return "#ff1000"; //Saturated Red
                case 33:
                    return "#ff9000"; //Orange
                case 34:
                    return "#00e00b"; //Bright Green
                case 35:
                    return "#ffd300"; //Dark Yellow
                case 36:
                    return "#ae4f00"; //Light Brown
                case 37:
                    return "#f6f4c6"; //Pastel Bright Yellow
                case 38:
                    return "#e7a807"; //Yellowish Orange
                case 39:
                    return "#db4d00"; //Reddish Orange
                case 40:
                    return "#4d0000"; //Brown
                case 41:// Aquamarine
                    return "#74d2b3"; //Aquamarine
                case 42:
                    return "#b6fff4"; //Cyan
                case 43:
                    return "#74f6e8"; //Cyan-ish
                case 44:
                    return "#00ced1"; //Cool Blue
                case 45:
                    return "#f67482"; //Reddish Pink
                case 46:
                    return "#ffc0d3"; //Bright pink base
                case 47:
                    return "#fed7e9"; //Bright Pink
                case 48:
                    return "#fd9bca"; //Pink
                case 49:
                    return "#90335d"; //Dark Purple
                case 50:
                    return "#9bfdce"; //Bright Green-Blue
                case 51:
                    return "#74f6e8"; //Bright Blue-Green
                case 52:
                    return "#fd9bca"; //Bright Pink 2: Electric Boogaloo
                case 53:
                    return "#ffffff"; //le uncreative color
                case 54:
                    return "#ffff99"; //Bright Yellow
                case 55:
                    return "#9999ff"; //Bright Blue
                case 56: // frickery
                    return X(l.grey, l.red, 1 / 3); // Ugly Purplish Grey
                case 57:
                    return "#FF8000"; //Orange 2: Electric Boogaloo
                case 58:
                    return 100 > Date.now() % 300 ? l.red : 200 > Date.now() % 300 ? l.green : l.blue;
                case 59:
                    return e(59) // Cursed Color (crashes Firefox legit)
                case 60:
                    return e(61) // Cursed Color 2:
                case 61:
                    return e(60) //  Electric Boogaloo
                case 62: //Seizure
                    let random = 0
                    random = Math.random()
                    console.log(random)
                    if (random < 0.1) {
                      return l.teal
                    } else {
                      if (random < 0.2) {
                        return l.lgreen
                      } else {
                        if (random < 0.3) {
                          return l.orange
                        } else {
                          if (random < 0.4) {
                            return l.yellow
                          } else {
                            if (random < 0.5) {
                              return l.lavender
                            } else {
                              if (random < 0.6) {
                                return l.pink
                              } else {
                                if (random < 0.7) {
                                  return l.vlgrey
                                } else {
                                  if (random < 0.8) {
                                    return l.lgrey
                                  } else {
                                    if (random < 0.9) {
                                      return l.guiwhite
                                    } else {
                                      return l.black
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                case 63:
                    return 300 > Date.now() % 900 ? l.red : 600 > Date.now() % 900 ? l.green : l.blue;
                case 64: 
                    return X(l.grey, l.blue, 1 / 3); // Blue Grey
                case 65:
                    return 300 > Date.now() % 600 ? '#ae00ff' : '#ff00f2';
                case 66: //red to orange
                    return X(l.red, '#FF8000', Date.now() % 300 / 299);
                case 67:
                    return 300 > Date.now() % 600 ? '#ff00f2' : '#ae00ff';
                // colors 68 through 75 are used in flint's animation
                case 68:
                    return X(l.dgrey, l.red, 1 / 9); // flint 1
                case 69:
                    return X(l.dgrey, l.red, 2 / 9); // flint 2
                case 70:
                    return X(l.dgrey, l.red, 3 / 9); // flint 3
                case 71:
                    return X(l.dgrey, l.red, 4 / 9); // flint 4
                case 72:
                    return X(l.dgrey, l.red, 5 / 9); // flint 5
                case 73:
                    return X(l.dgrey, l.red, 6 / 9); // flint 6
                case 74:
                    return X(l.dgrey, l.red, 7 / 9); // flint 7
                case 75:
                    return X(l.dgrey, l.red, 8 / 9); // flint 8
                case 76:
                    return 150 > Date.now() % 300 ? '#00e1ff' : '#0ea0cc';
                case 77:
                    return "#86a5bd";
                case 78:
                    return "#9c6a25"; //better brown
                case 79:
                    return X(l.grey, l.gold, 1 / 3);
                case 80:
                    return 100 > Date.now() % 200 ? '#000000' : '#ff0000';
                default:
                    return "#ff0000" //oh no, the saturated red has come
            }
          } else if (typeof b == 'string') {
                return b
          }
        
        
        }

        function K(b) {
            let d = D.graphical.neon ? l.white : l.black;
            return D.graphical.darkBorders ? d : X(b, d, l.border)
        }

        function w(b) {
            switch (b) {
                case "bas1":
                case "bap1":
                case "dom1":
                case "dbc1":
                case "mbc1":
                    return l.blue;
                case "bas2":
                case "bap2":
                case "dom2":
                case "dbc2":
                case "mbc2":
                    return l.green;
                case "bas3":
                case "bap3":
                case "dom3":
                case "dbc3":
                case "mbc3":
                    return l.red;
                case "bas4":
                case "bap4":
                case "dom4":
                case "dbc4":
                case "mbc4":
                    return l.pink;
                case "domx":
                case "dom0":
                case "dbc0":
                case "mbc0":
                    return l.yellow;
                case "port":
                    return g.globalAlpha = 1, l.black;
                case "edge":
                    return X(l.white, l.guiblack, 1 / 3);
                case "dor1":
                case "edom":
                case "domi":
                    return l.vlgrey;
                //case "nest":
                //    return l.lavender; cant see where crasher spawns
                case "crsh":
                case "hill":
                    return l.orange;
                case "wter":
                    return '#00d0ff'
                case "bi00":
                case "bi03":
                case "bi04":
                case "bi05":
                    return '#4d535e'
                case "bi01":
                    return '#8fa1c2'
                case "bi02":
                    return '#4a0000'
                case "pmp1":
                    return X(l.white, l.blue, 1 / 3);
                case "pmp2":
                    return X(l.white, l.green, 1 / 3);
                case "icet":
                    return '#99d7e5';
                case "iceh":
                    return '#627aa8';
                default:
                    return l.white
            }
        }

        function n(b, q, isGrd = false, grdSet = [0,0,0,0,0,'#000000', 0], brdCol = false) {
            D.graphical.neon ? (b.fillStyle = K(q), b.strokeStyle = q) : (b.fillStyle =
                q, b.strokeStyle = K(q))
            if (isGrd == true) {
                let grd = b.createLinearGradient(
                grdSet[3]+((Math.cos(grdSet[0]+grdSet[6])*grdSet[1])*grdSet[2]),
                grdSet[4]+((Math.sin(grdSet[0]+grdSet[6])*grdSet[1])*grdSet[2]),
                grdSet[3]-((Math.cos(grdSet[0]+grdSet[6])*grdSet[1])*grdSet[2]),
                grdSet[4]-((Math.sin(grdSet[0]+grdSet[6])*grdSet[1])*grdSet[2]),
                )
                grd.addColorStop(0, q);
                grd.addColorStop(1, gcol);
                b.fillStyle = grd
            }
            if (brdCol != false) b.strokeStyle = e(brdCol)
        }

        function F(b, q = Q[b].color) {
            let c = Q[b];
            return {
                time: 0,
                index: b,
                x: c.x,
                y: c.y,
                vx: 0,
                vy: 0,
                size: c.size,
                realSize: c.realSize,
                color: q,
                render: {
                    status: {
                        getFade: () => 1,
                        getColor: () => "#FFFFFF",
                        getBlend: () => 0,
                        health: {
                            get: () => 1
                        },
                        shield: {
                            get: () => 1
                        }
                    }
                },
                facing: c.facing,
                shape: c.shape,
                name: c.name,
                score: 0,
                tiggle: 0,
                layer: c.layer,
                guns: {
                    length: c.guns.length,
                    getPositions: () => Array(c.guns.length).fill(0),
                    update: () => {}
                },
                turrets: c.turrets.map(b => {
                    let d = F(b.index);
                    d.realSize = d.realSize / d.size * c.size * b.sizeFactor;
                    d.size = c.size * b.sizeFactor;
                    d.angle = b.angle;
                    d.offset = b.offset;
                    d.direction = b.direction;
                    d.facing = b.direction + b.angle;
                    return d
                })
            }
        }

        function U(d, q, c, h = !1) {
            let a = ra();
            c += D.graphical.borderChunk;
            return h ? (a *= 2, d > -b.screenWidth / a - c && d < b.screenWidth / a + c && q > -b.screenHeight / a - c && q < b.screenHeight / a + c) : d > -c && d < b.screenWidth / a + c && q > -c && q < b.screenHeight / a + c
        }

        function k(b, q, c = 3) {
            let d = Date.now(),
                a = b,
                y = b;
            return {
                set: c => {
                    b !== c && (y = a, b = c, d = Date.now())
                },
                get: () => {
                    let h = (Date.now() - d) / 1E3;
                    return a = h < q ? y + (b - y) * Math.pow(h /
                        q, 1 / c) : b
                }
            }
        }

        function H(b) {
            try {
                var d = b.replace(/\s+/g, "");
                2 == d.length % 4 ? d += "==" : 3 == d.length % 4 && (d += "=");
                let h = atob(d);
                d = "Unknown Theme";
                let a = "";
                var c = h.indexOf("\x00");
                if (-1 === c) return null;
                d = h.slice(0, c) || d;
                h = h.slice(c + 1);
                c = h.indexOf("\x00");
                if (-1 === c) return null;
                a = h.slice(0, c) || a;
                h = h.slice(c + 1);
                let q = h.charCodeAt(0) / 255;
                h = h.slice(1);
                let f = Math.floor(h.length / 3);
                if (2 > f) return null;
                c = [];
                for (let b = 0; b < f; b++) {
                    let d = h.charCodeAt(3 * b),
                        f = h.charCodeAt(3 * b + 1),
                        a = h.charCodeAt(3 * b + 2);
                    c.push("#" + (d << 16 | f << 8 |
                        a).toString(16).padStart(6, 0))
                }
                return {
                    name: d,
                    author: a,
                    content: {
                        teal: c[0],
                        lgreen: c[1],
                        orange: c[2],
                        yellow: c[3],
                        lavender: c[4],
                        pink: c[5],
                        vlgrey: c[6],
                        lgrey: c[7],
                        guiwhite: c[8],
                        black: c[9],
                        blue: c[10],
                        green: c[11],
                        red: c[12],
                        gold: c[13],
                        purple: c[14],
                        magenta: c[15],
                        grey: c[16],
                        dgrey: c[17],
                        white: c[18],
                        guiblack: c[19],
                        paletteSize: f,
                        border: q
                    }
                }
            } catch (h) {}
            try {
                let c = JSON.parse(b);
                if ("object" !== typeof c) return null;
                let {
                    name: d = "Unknown Theme",
                    author: a = "",
                    content: f
                } = c;
                for (let b of [f.teal, f.lgreen, f.orange, f.yellow, f.lavender,
                        f.pink, f.vlgrey, f.lgrey, f.guiwhite, f.black, f.blue, f.green, f.red, f.gold, f.purple, f.magenta, f.grey, f.dgrey, f.white, f.guiblack
                    ])
                    if (!b.match(/^#[0-9a-fA-F]{6}$/)) return null;
                return {
                    isJSON: !0,
                    name: "string" === typeof d && d || "Unknown Theme",
                    author: "string" === typeof a && a || "",
                    content: f
                }
            } catch (h) {}
            return null
        }

        function v(b) {
            let {
                name: d = "Unknown Theme",
                author: c = "",
                content: h
            } = b;
            ({
                border: b
            } = h);
            b = d + "\x00" + c + "\x00" + String.fromCharCode(1 <= b ? 255 : 0 > b ? 0 : Math.floor(256 * b));
            for (let c of [h.teal, h.lgreen, h.orange, h.yellow,
                    h.lavender, h.pink, h.vlgrey, h.lgrey, h.guiwhite, h.black, h.blue, h.green, h.red, h.gold, h.purple, h.magenta, h.grey, h.dgrey, h.white, h.guiblack
                ]) {
                let d = parseInt(c.slice(1), 16);
                b += String.fromCharCode(d >> 16, d >> 8 & 255, d & 255)
            }
            return btoa(b).replace(/=+/, "")
        }

        function p() {
            if (!Ba) {
                Ba = !0;
                if (b.mobile) {
                    var d = document.body;
                    d.requestFullscreen ? d.requestFullscreen() : d.msRequestFullscreen ? d.msRequestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
                    d = window.navigator.standalone ||
                        window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches;
                    b.mobile && !d && fa.push({
                        text: "Add the game to home screen to always enable fullscreen!",
                        status: 2,
                        alpha: 0,
                        time: Date.now(),
                        extratime: 0
                    })
                }
                J.submitToLocalStorage("optScreenshotMode");
                D.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
                J.submitToLocalStorage("optFancy");
                D.graphical.pointy = !document.getElementById("optNoPointy").checked;
                J.submitToLocalStorage("optNoPointy");
                //D.graphical.sharp = document.getElementById("optPointy").checked;
               // J.submitToLocalStorage("optPointy");
                D.graphical.fancyAnimations = !document.getElementById("optFancy").checked;
                J.submitToLocalStorage("optShield");
                D.graphical.shieldbars = document.getElementById("optShield").checked;
                J.submitToLocalStorage("optPrediction");
                D.lag.newPrediction = document.getElementById("optPrediction").checked;
                J.submitToLocalStorage("optAutoLevel");
                b.autoLevel = document.getElementById("optAutoLevel").checked;
                J.submitToLocalStorage("optNoMusic");
                D.audio.noMusic = document.getElementById("optNoMusic").checked;
                J.submitToLocalStorage("optNoSound");
                D.audio.noSound = document.getElementById("optNoSound").checked;
                J.submitToLocalStorage("optBorders");
                b.mobile && J.submitToLocalStorage("optMobile");
                switch (document.getElementById("optBorders").value) {
                    case "normal":
                        D.graphical.darkBorders =
                            D.graphical.neon = !1;
                        break;
                    case "dark":
                        D.graphical.darkBorders = !0;
                        D.graphical.neon = !1;
                        break;
                    case "glass":
                        D.graphical.darkBorders = !1;
                        D.graphical.neon = !0;
                        break;
                    case "neon":
                        D.graphical.darkBorders = D.graphical.neon = !0
                }
                J.submitToLocalStorage("optColors");
                d = document.getElementById("optColors").value;
                if ("custom" === d) {
                    let b = H(document.getElementById("optCustom").value);
                    b && (Ca.custom = b.content, b.isJSON && (document.getElementById("optCustom").value = v(b)))
                }
                J.submitToLocalStorage("optCustom");
                window.hereYaGoCuzImTooLazy =
                    l = Ca[d] || l;
                d = document.getElementById("playerNameInput");
                J.submitToLocalStorage("playerNameInput");
                b.playerName = z.name = d.value;
                b.playerKey = "z" === b.server.id ? Da : Ea;
                b.screenWidth = window.innerWidth;
                b.screenHeight = window.innerHeight;
                document.getElementById("startMenuWrapper").style.top = "-600px";
                document.getElementById("gameAreaWrapper").style.opacity = 1;
                if (!b.socket) {
                    d = "https:" === location.protocol ? 1 : -1;
                    let a = `${1===(b.server.secure||d)?"https":"http"}://${b.server.at}/mockups.json`,
                        c = () => J.pullJSON(a).then(b => {
                            Q = b
                        }).catch(b => {
                            console.error(b);
                            setTimeout(() => c(), 5E3)
                        });
                    c();
                    b.socket = Va()
                }
                ba.init(b.mobile ? document.getElementById("optMobile").value : "desktop", b.socket);
                setInterval(() => Fa.iterate(b.socket.cmd.getMotion()), 1E3 / 30);
                document.getElementById("gameCanvas").focus();
                b.animLoopHandle || Ga();
                b.isInGame = !0
            }
        }

        function G(d, a) {
            g.fillStyle = d;
            g.globalAlpha = a;
            g.fillRect(0, 0, b.screenWidth, b.screenHeight);
            g.globalAlpha = 1
        }

        function I(b, a, c, h, t = !1) {
            t ? g.strokeRect(b, a, c, h) : g.fillRect(b, a, c, h)
        }

        function sa(b, a, c, h = !1) {
            g.beginPath();
            g.arc(b, a, c, 0, 2 * Math.PI, !1);
            h ? g.stroke() : g.fill()
        }

        function ta(b, a, c, h) {
            g.beginPath();
            g.lineTo(Math.round(b) + .5, Math.round(a) + .5);
            g.lineTo(Math.round(c) + .5, Math.round(h) + .5);
            g.stroke()
        }

        function O(b, a, c, h, t) {
            g.beginPath();
            g.lineTo(b, c);
            g.lineTo(a, c);
            g.lineWidth = h;
            g.strokeStyle = t;
            g.stroke()
        }

        function Wa(d, a, c, h, t) {
            if (!(.05 > t)) {
                var q = c.render.status.getFade();
                q *= q;
                g.globalAlpha = q;
                var f = c.size * h;
                h = Q[c.index];
                h = f / h.size * h.realSize;
                if (c.drawsHealth) {
                    let b = c.render.health.get(),
                        y = c.render.shield.get();
                    if (1 >
                        b || 1 > y) {
                        let c = a + 1.1 * h + 15;
                        g.globalAlpha = t * t * q;
                        D.graphical.shieldbars ? (O(d - f, d + f, c, 6 + D.graphical.barChunk, l.black), y ? (O(d - f, d - f + 2 * f * b, c + 1.5, 3, l.lgreen), g.globalAlpha *= .7, O(d - f, d - f + 2 * f * y, c - 1.5, 3, l.teal)) : O(d - f, d - f + 2 * f * b, c, 4, l.lgreen)) : (O(d - f, d + f, c, 3 + D.graphical.barChunk, l.black), O(d - f, d - f + 2 * f * b, c, 3, l.lgreen), y && (g.globalAlpha *= .3 + .3 * y, O(d - f, d - f + 2 * f * y, c, 3, l.teal)));
                        g.globalAlpha = q
                    }
                }
                if (c.nameplate && c.id !== A.playerid || 2 <= b.debugShowId) null == c.render.textobjs && (c.render.textobjs = [B(), B()]), q = c.name, b.debugShowId &&
                    (q = q ? q + ` [${c.id}]` : `[${c.id}]`), f = l.guiwhite, q.startsWith("\u200b") && (q = q.slice(1), q.length && (f = X(l.yellow, f, .125))), g.globalAlpha = t, c.render.textobjs[0].draw(q, d, a - h - 30, 16, f, "center"), c.render.textobjs[1].draw(J.handleLargeNumber(c.score, !0), d, a - h - 16, 8, f, "center"), g.globalAlpha = 1
            }
        }

        function Ga() {
            b.animLoopHandle = requestAnimationFrame(Ga);
            z.renderv += (z.view - z.renderv) / 30;
            g.lineCap = "round";
            g.lineJoin = "round";
            b.gameStart && !b.disconnected && (b.time = Date.now() - M - Y, 1E3 < b.time - Ha && (Ha = b.time, N.rendertime =
                va, va = 0, N.updatetime = wa, wa = 0), N.lag = b.time - z.time);
            b.gameStart && 0 < Q.length ? Xa(ra()) : b.disconnected || Ya();
            b.died && Za();
            b.disconnected && $a();
            (b.died || b.disconnected) && ca.drawCanvas(g)
        }
        Object.values || (Object.values = function(b) {
            return Object.keys(b).map(d => b[d])
        });
        Object.entries || (Object.entries = function(b) {
            return Object.keys(b).map(d => [d, b[d]])
        });
        let b = u(1),
            J = u(2),
            {
                blockAdBlock: ab
            } = u(3),
            ca = u(4);
        window.dataLayer = window.dataLayer || [];
        a("js", new Date);
        a("config", "UA-120544149-1");
        let qa = !1,
            xa = null;
        ab.on(!0,
            () => {
                document.getElementById("referral-fallback").style.display = "block";
                qa = !0;
                a("event", "yes_adblock", {
                    event_category: "adblock_detection",
                    non_interaction: !0
                })
            }).on(!1, () => {
            a("event", "no_adblock", {
                event_category: "adblock_detection",
                non_interaction: !0
            })
        });
        //(window.localStorage && window.localStorage.adForce ? "aip" === window.localStorage.adForce : .1 <= Math.random()) ? (aiptag.cmd.display.push(function() {
        //    aipDisplayTag.display("arras-io_336x280")
        //}), window.adServiceMode = "aip") : ((adsbygoogle = window.adsbygoogle || []).push({}), window.adServiceMode = "google");// this line occasionally causes an error
        var D = {
            graphical: {
                screenshotMode: !1,
                borderChunk: 6,
                barChunk: 5,
                mininumBorderChunk: 3,
                compensationScale: 1.114,
                inversedRender: !0,
                darkBorders: !1,
                fancyAnimations: !0,
                colors: "normal",
                pointy: !0,
                //shape: !1,
                fontSizeBoost: 1,
                shieldbars: !1,
                neon: !1
            },
            gui: {
                expectedMaxSkillLevel: 9
            },
            lag: {
                memory: 60,
                newPrediction: !1
            },
            audio: {
                noMusic: false,
                noSound: false
            }
        };
        b.config = D;
        let X = (b, a, c = .5) => {
            if (0 === c) return b;
            if (1 === c) return a;
            let d = 1 - c;
            b = parseInt(b.slice(1), 16);
            a = parseInt(a.slice(1), 16);
            return "#" + ((b & 16711680) * d + (a & 16711680) * c & 16711680 |
                (b & 65280) * d + (a & 65280) * c & 65280 | (b & 255) * d + (a & 255) * c & 255).toString(16).padStart(6, "0")
        };
        var Q = [];
        b.clickables = (() => {
            const b = class {
                    constructor() {
                        this.h = this.w = this.y = this.x = 0;
                        this.active = !1
                    }
                    set(b, d, a, q) {
                        this.x = b;
                        this.y = d;
                        this.w = a;
                        this.h = q;
                        this.active = !0
                    }
                    check(b) {
                        let c = Math.round(b.x - this.x);
                        b = Math.round(b.y - this.y);
                        return this.active && 0 <= c && 0 <= b && c <= this.w && b <= this.h
                    }
                    hide() {
                        this.active = !1
                    }
                },
                a = class {
                    constructor(c) {
                        this.data = [];
                        for (let d = 0; d < c; d++) this.data.push(new b)
                    }
                    place(c, ...d) {
                        for (; c >= this.data.length;) this.data.push(new b);
                        this.data[c].set(...d)
                    }
                    hide() {
                        for (let b of this.data) b.hide()
                    }
                    check(b) {
                        return this.data.findIndex(c => c.check(b))
                    }
                };
            return {
                stat: new a(10),
                upgrade: new a(24),//here?
                hover: new a(1),
                skipUpgrades: new a(1)
            }
        })();
        b.statHover = !1;
        const ya = class {
                constructor(b) {
                    this.dataLength = b;
                    this.elements = {}
                }
                update(b, a = 0) {
                    var c = b[a++];
                    for (var d = 0; d < c; d++) delete this.elements[b[a++]];
                    c = b[a++];
                    for (d = 0; d < c; d++) {
                        let c = b[a++],
                            d = b.slice(a, a + this.dataLength);
                        a += this.dataLength;
                        this.elements[c] = d
                    }
                    return a
                }
                entries() {
                    return Object.entries(this.elements).map(([b,
                        a
                    ]) => ({
                        id: +b,
                        data: a
                    }))
                }
            },
            bb = class {
                constructor(b = 250) {
                    this.speed = b;
                    this.map = {};
                    this.lastUpdate = Date.now()
                }
                update(b) {
                    this.lastUpdate = Date.now();
                    for (let [b, c] of Object.entries(this.map)) c.now ? (c.old = c.now, c.now = null) : delete this.map[b];
                    for (let d of b) this.map[d.id] ? this.map[d.id].now = d : this.map[d.id] = {
                        old: null,
                        now: d
                    }
                }
                get() {
                    let b = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
                        a = 1 - b;
                    return Object.values(this.map).map(({
                        old: c,
                        now: d
                    }) => d ? c ? {
                        type: d.type,
                        id: d.id,
                        x: b * d.x + a * c.x,
                        y: b * d.y + a * c.y,
                        color: d.color,
                        size: b * d.size + a * c.size,
                        alpha: 1
                    } : {
                        type: d.type,
                        id: d.id,
                        x: d.x,
                        y: d.y,
                        color: d.color,
                        size: d.size,
                        alpha: b
                    } : {
                        type: c.type,
                        id: c.id,
                        x: c.x,
                        y: c.y,
                        color: c.color,
                        size: c.size,
                        alpha: a
                    })
                }
            },
            cb = class {
                constructor(b) {
                    this.score = k(0, 10);
                    this.update(b)
                }
                update(b) {
                    this.name = b.name;
                    this.bar = b.bar;
                    this.color = b.color;
                    this.index = b.index;
                    this.score.set(b.score);
                    this.old = !1
                }
                publish() {
                    let b = Q[this.index];
                    return {
                        image: F(this.index, this.color),
                        position: b.position,
                        barColor: e(this.bar),
                        label: this.name ? this.name + " - " + b.name : b.name,
                        score: this.score.get()
                    }
                }
            },
            db = class {
                constructor() {
                    this.entries = {}
                }
                get() {
                    let b = [],
                        a = 1;
                    for (let c of Object.values(this.entries)) {
                        let d = c.publish();
                        b.push(d);
                        d.score > a && (a = d.score)
                    }
                    b.sort((b, a) => a.score - b.score);
                    return {
                        data: b,
                        max: a
                    }
                }
                update(b) {
                    b.sort((b, c) => c.score - b.score);
                    for (let b of Object.values(this.entries)) b.old = !0;
                    for (let a of b) this.entries[a.id] ? this.entries[a.id].update(a) : this.entries[a.id] = new cb(a);
                    for (let [b, c] of Object.entries(this.entries)) c.old && delete this.entries[b]
                }
            };
        var la = [],
            Ia = new ya(5),
            Ja = new ya(3),
            Ka =
            new ya(5),
            La = new bb(200),
            Ma = new db,
            ua = 0,
            fa = b.messages = [],
            N = b.metrics = {
                latency: [],
                lag: 0,
                rendertime: 0,
                updatetime: 0,
                lastlag: 0,
                rendergap: 0,
                lastuplink: 0
            },
            Ha = 0,
            va = 0,
            wa = 0,
            ha = [
                ["norm"]
            ],
            A = {
                getStatNames: b => {
                    switch (b) {
                        case 1:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Engine Acceleration;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 2:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Respawn Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 3:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Max Drone Count;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 4:
                            return "Body Damage;Max Health;Swarm Speed;Swarm Health;Swarm Penetration;Swarm Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 5:
                            return "Body Damage;Max Health;Placement Speed;Trap Health;Trap Penetration;Trap Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 6:
                            return "Body Damage;Max Health;Weapon Speed;Weapon Health;Weapon Penetration;Weapon Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 7:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Jump Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 8:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Minion Production Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 9:
                            return "Body Damage;Max Health;Pull Strength;Bullet Health;Bullet Penetration;Bullet Damage;Beam Density;Movement Speed;Shield Regeneration;Shield Capacity".split(";")
                        case 10:
                            return "Body Damage;Max Health;Spore Speed;Spore Health;Spore Penetration;Spore Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 11:
                            return "Body Damage;Max Health;Bulwark Speed;Bulwark Health;Bulwark Range;Bulwark Damage;Bulwark Reformation Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        default:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";")
                    }
                },
                skills: [{
                        amount: 0,
                        color: "purple",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "pink",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "blue",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "lgreen",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "red",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "yellow",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "green",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "teal",
                        cap: 1,
                        softcap: 1
                    },
                    {
                        amount: 0,
                        color: "gold",
                        cap: 1,
                        softcap: 1
                    }, {
                        amount: 0,
                        color: "orange",
                        cap: 1,
                        softcap: 1
                    }
                ],
                points: 0,
                upgrades: [],
                playerid: -1,
                __s: (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        h = k(0, 10);
                    return {
                        setScore: d => {
                            d ? (h.set(d), a > h.get() && (a = c = 0)) : (b = 3, a = c = 0, h = k(0, 10))
                        },
                        update: () => {
                            b = Math.ceil(1.8 * Math.pow(c + 1, 1.8) - 2 * c + 1) || 0;
                            if (h.get() >= a + b) a += b, c++;
                            else if (h.get() < a) {
                                var d = c - 1;
                                a -= Math.ceil(1.8 * Math.pow(d + 1, 1.8) - 2 * d + 1) || 0;
                                c--
                            }
                        },
                        getProgress: () => b ? Math.min(1, Math.max(0, (h.get() - a) / b)) : 0,
                        getScore: () => h.get(),
                        getLevel: () => c
                    }
                })(),
                type: 0,
                fps: 0,
                color: 0,
                accel: 0,
                party: 0
            };
        b.clearUpgrades = () => {
            A.upgrades = []
        };
        var ra = () => Math.max(b.screenWidth / z.renderv, b.screenHeight / z.renderv / 9 * 16);
        b.canUpgrade = !1;
        b.canSkill = !1;
        b.message = "";
        b.time = 0;
        var R = window.localStorage || {};
        R.password && -1 === R.password.toString().indexOf("$") && (R.password = "", delete R.password);
        let Ea = R.password || null,
            Da = null,
            Na = parseInt(R.privilege),
            Oa = Number.isNaN(Na) ? Ea ? 1 : 0 : Na,
            eb = () => {
                var a = b.servers.filter(b => null != b.visible && b.visible <= Oa && b.prefer);
                let q = Infinity,
                    c = [];
                for (let d of a)[, a] = d.code.split("-"),
                    a = Math.abs(((b.codeTable[1][a][1] - b.timezone) % 24 + 36) % 24 - 12), a < q ? (c = [d], q = a) : a === q && c.push(d);
                return c[Math.floor(Math.random() * c.length)]
            };
        b.server = (a => {
            a.startsWith("#") && (a = a.slice(1));
            let [, d, c] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
            if (d) b.partyLink = +c || 0;
            else {
                var h = {};
                for (var t of a.split("&")) {
                    var y = t.split("=");
                    a = y.shift();
                    y = y.join("=") || !0;
                    h[a] = y
                }
                h.private && (t = h.private, t.includes(";") && (a = t.split(";"), t = a.shift(), h.key = a.join(";")), h.host = t);
                if (h.host) {
                    let {
                        region: a,
                        mode: c,
                        host: y,
                        key: t
                    } = h;
                    h = `z-${a||"unknown"}-${c||"p"}-${y.toLowerCase().replace(/(\.[^\.]+)?\.[^\.]+$/,"").replace(/[^a-z0-9\-]/,"-")}`;
                    b.servers[0].code = h;
                    b.servers[0].at = y;
                    d = "z";
                    Da = t || null
                } else return null
            }
            return b.servers.find(b => b.id === d) || null
        })(location.hash) || b.servers.find(b => b.id === R.gameMode) || eb();
        let fb = a => {
                var d = b.codeTable[2];
                let c = [],
                    h = [];
                var t = 0;
                for (let b of d)
                    for (let q of b)
                        if (q.id === a.charAt(t)) {
                            t++;
                            d = Object.assign({}, q);
                            if ("word" === q.dynamic) {
                                var y = +a.charAt(t++),
                                    f = a.slice(t, t + y);
                                d.to = f.charAt(0).toUpperCase() +
                                    f.slice(1);
                                t += y
                            } else if ("words" === q.dynamic) {
                                y = +a.charAt(t++);
                                f = [];
                                for (let b = 0; b < y; b++) {
                                    var e = a.charAt(t++);
                                    if ("d" === e) f.push("-");
                                    else if ("s" === e) f.push(" ");
                                    else {
                                        e = +e;
                                        let b = a.slice(t, t + e);
                                        f.push(b.charAt(0).toUpperCase() + b.slice(1));
                                        t += e
                                    }
                                }
                                d.to = f.join("")
                            }
                            q.remove && h.push(q.remove);
                            c.push(d);
                            break
                        } if (0 === c.length) return "Unknown";
                a = c[c.length - 1];
                a.end && (a.to = a.end);
                for (a = 0; a + 1 < c.length; a++) c[a].delay && !c[a + 1].delay && (t = c[a], c[a] = c[a + 1], c[a + 1] = t, a++);
                c = c.filter(({
                    id: b
                }) => !h.includes(b));
                return c.map(b =>
                    b.to).join(" ")
            },
            na = document.getElementById("serverSelector").parentNode.parentNode,
            gb = document.getElementById("serverSelector"),
            ia;
        for (let a of b.servers) {
            if ((null == a.visible || a.visible > Oa) && b.server !== a) continue;
            let [d, c, h] = a.code.split("-"), t = document.createElement("tr");
            t.appendChild(document.createElement("td")).textContent = b.codeTable[0][d];
            t.appendChild(document.createElement("td")).textContent = b.codeTable[1][c][0];
            t.appendChild(document.createElement("td")).textContent = fb(h);
            a.featured && t.classList.add("featured");
            t.onclick = () => {
                ia.classList.remove("selected");
                ia = t;
                ia.classList.add("selected");
                b.server = a;
                b.partyLink = 0;
                R.gameMode = a.id;
                location.hash = "#" + a.id;
                na.scrollTop < t.offsetTop - 50 ? na.scrollTop = t.offsetTop - 50 : na.scrollTop > t.offsetTop - 10 && (na.scrollTop = t.offsetTop - 10)
            };
            gb.appendChild(t);
            b.server === a && (ia = t, ia.classList.add("selected"), setTimeout(() => {
                na.scrollTop = t.offsetTop - 30
            }))
        }
        let hb = (() => {
                let b = !1,
                    a = document.getElementById("startMenuSlidingTrigger"),
                    c = document.getElementById("optionArrow"),
                    h = document.getElementById("viewOptionText"),
                    t = document.getElementsByClassName("sliderHolder")[0],
                    y = document.getElementsByClassName("slider"),
                    f = () => {
                        c.style.transform = c.style.webkitTransform = b ? "translate(2px, -2px) rotate(45deg)" : "rotate(-45deg)";
                        h.innerText = b ? "close options" : "view options";
                        b ? t.classList.add("slided") : t.classList.remove("slided");
                        y[0].style.opacity = b ? 0 : 1;
                        y[2].style.opacity = b ? 1 : 0
                    };
                a.onclick = () => {
                    b = !b;
                    f()
                };
                return () => {
                    b || (b = !0, f())
                }
            })(),
            za = document.getElementById("patchNotes"),
            Qa = (b, a) => {
                var c = b.shift();
                if (c) {
                    c = c.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [c, c, null];
                    var d = c[1] ? {
                        Update: "update",
                        Announcement: "update",
                        Poll: "poll",
                        "Event Poll": "event-poll",
                        "Gamemode Poll": "event-poll",
                        Event: "event",
                        Gamemode: "event",
                        "Balance Update": "balance-update",
                        "Balance Update Details": "balance",
                        Balance: "balance",
                        Patch: "patch",
                        Hidden: "hidden"
                    } [c[1]] : null;
                    if ("hidden" !== d) {
                        var t = document.createElement("div");
                        d && t.classList.add(d);
                        var y = document.createElement("b"),
                            f = [c[1]];
                        if (c[2]) {
                            var e = new Date(c[2] + "T00:00:00Z");
                            if (e > Date.now()) return;
                            f.push(e.toLocaleDateString("default", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "UTC"
                            }))
                        }
                        c[3] && f.push(c[3]);
                        y.innerHTML = f.join(" - ");
                        t.appendChild(y);
                        if ("poll" === d || "event-poll" === d) {
                            let [a, h, n] = b.shift().split(",").map(b => b.trim());
                            var q = "table" === n;
                            let w = "radio" === n,
                                V = Math.ceil((new Date(h.trim()) - Date.now()) / 36E5);
                            y.appendChild(document.createElement("br"));
                            c = document.createElement("small");
                            c.appendChild(document.createTextNode(0 < V ? "closing in " + V + " hour" + (1 === V ? "" : "s") : "closed"));
                            let W = document.createElement("a");
                            W.href =
                                "javascript:;";
                            W.innerText = "view all results";
                            q && c.appendChild(W);
                            let p = document.createElement("a");
                            p.href = "javascript:;";
                            p.innerText = "reset";
                            p.style.display = "none";
                            w && c.appendChild(p);
                            y.appendChild(c);
                            t.appendChild(document.createElement("br"));
                            y = document.createElement("table");
                            y.className = q ? "poll-table" : "poll-list";
                            c = document.createElement("tbody");
                            d = (() => {
                                let b = [],
                                    c = [],
                                    f = (new Promise(b => {
                                        let a = !1;
                                        za.addEventListener("scroll", () => {
                                            if (!a) {
                                                var c = za.getBoundingClientRect(),
                                                    f = t.getBoundingClientRect();
                                                0 >= f.height || f.top > c.bottom + c.height || f.bottom < c.top - c.height || (a = !0, b())
                                            }
                                        })
                                    })).then(() => fetch("http://ext.arras.io:2020/poll/" + a + "/status")).then(b => b.json()).then(b => {
                                        if (!b.ok) throw Error("Poll does not exist!");
                                        c = b.options
                                    });
                                W.onclick = () => {
                                    W.remove();
                                    let a = b.map(b => parseInt(b.title, 10)).sort((b, a) => b - a),
                                        c = "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(" ");
                                    for (let d of b) {
                                        var f = parseInt(d.title, 10);
                                        d.className = "count";
                                        d.innerHTML = 1E3 <= f ? (f / 1E3).toFixed(1) + "<span>k</span>" : 0 <= f ?
                                            f : "?";
                                        f = Math.floor((a.indexOf(f) + .5) / a.length * c.length);
                                        d.style.color = c[f]
                                    }
                                };
                                p.onclick = () => {
                                    d.checked = !1;
                                    d.onchange();
                                    d = null;
                                    p.style.display = "none"
                                };
                                let d = null,
                                    h = 0;
                                return y => {
                                    let t = b => (y ? y + " - " : "") + b + " vote" + (1 === b ? "" : "s"),
                                        e = h++,
                                        q = document.createElement("label");
                                    q.className = "container";
                                    let g = document.createElement("input");
                                    g.tabIndex = -1;
                                    g.type = w ? "radio" : "checkbox";
                                    g.disabled = !0;
                                    w && (g.name = "radio-" + a);
                                    f.then(() => {
                                        let {
                                            voted: b,
                                            votes: f
                                        } = c[e] || {
                                            voted: !1,
                                            votes: 0
                                        };
                                        g.checked = b;
                                        w && b && (d = g, p.style.display =
                                            "inline");
                                        g.disabled = 0 >= V;
                                        let h = f - b;
                                        g.onchange = () => {
                                            fetch("http://ext.arras.io:2020/poll/" + a + "/set/" + e + "/" + g.checked);
                                            let b = h + (g.checked ? 1 : 0);
                                            y ? l.nodeValue = t(b) : q.title = t(b);
                                            w && d && d !== g && g.checked && (d.checked = !1, d.onchange());
                                            d = g;
                                            p.style.display = "inline"
                                        };
                                        y ? l.nodeValue = t(f) : q.title = t(f)
                                    });
                                    let l;
                                    y && (l = document.createTextNode(y), q.appendChild(l));
                                    q.appendChild(g);
                                    let n = document.createElement("span");
                                    n.className = w ? "radio" : "checkmark";
                                    q.appendChild(n);
                                    b.push(q);
                                    return q
                                }
                            })();
                            for (var g of b) {
                                b = document.createElement("tr");
                                if (q)
                                    for (var l of g.split("|")) l = l.trim(), f = document.createElement("td"), "X" === l ? f.appendChild(d()) : (e = l.match(/^:*/)[0].length, f.colSpan = e + 1, f.innerHTML = l.slice(e)), b.appendChild(f);
                                else f = document.createElement("td"), f.appendChild(d(g)), b.appendChild(f);
                                c.appendChild(b)
                            }
                            y.appendChild(c);
                            t.appendChild(y)
                        } else {
                            g = document.createElement("ul");
                            for (q of b) l = document.createElement("li"), l.innerHTML = q, g.appendChild(l);
                            l = g.getElementsByTagName("a");
                            for (b = 0; b < l.length; b++) {
                                q = l[b];
                                if (!q.href) continue;
                                let a =
                                    q.href.lastIndexOf("#"); - 1 !== a && (a = q.href.slice(a + 1), "options-menu" === a ? l[b].onclick = function(b) {
                                    b.preventDefault();
                                    hb()
                                } : Pa[a] && (l[b].onclick = function(b) {
                                    b.preventDefault();
                                    Pa[a]()
                                }))
                            }
                            t.appendChild(g)
                        }
                        a && t.appendChild(document.createElement("hr"));
                        za.appendChild(t)
                    }
                }
            };
        fetch("changelog.md", {
            cache: "no-cache"
        }).then(b => b.text()).then(b => {
            let a = [];
            for (let c of b.split("\n")) 0 !== c.length && (b = c.charAt(0), "#" === b ? (Qa(a, !0), a = [c.slice(1).trim()]) : "-" === b ? a.push(c.slice(1).trim()) : a[a.length - 1] += " " + c.trim());
            Qa(a, !1)
        });
        let Pa = (() => {
            let b = document.getElementById("changelogSelector"),
                a = b.parentNode,
                c = b.firstElementChild,
                h = document.getElementById("patchNotes"),
                t = {};
            for (let d = 0; d < b.children.length; d++) {
                let f = b.children[d],
                    y = f.dataset.type;
                t[y] = f.onclick = () => {
                    if (f !== c) {
                        var d = c.dataset.type;
                        c.classList.remove("active");
                        f.classList.add("active");
                        h.classList.remove(d);
                        h.classList.add(y);
                        c = f;
                        a.scrollLeft = f.offsetLeft - b.offsetLeft + f.offsetWidth / 2 - a.offsetWidth / 2
                    }
                }
            }
            return t
        })();
        J.retrieveFromLocalStorage("playerNameInput");
        J.retrieveFromLocalStorage("optScreenshotMode");
        J.retrieveFromLocalStorage("optShield");
        J.retrieveFromLocalStorage("optFancy");
        J.retrieveFromLocalStorage("optColors");
        J.retrieveFromLocalStorage("optNoPointy");
        //J.retrieveFromLocalStorage("optPointy");
        J.retrieveFromLocalStorage("optBorders");
        J.retrieveFromLocalStorage("optAutoLevel", b.mobile);
        J.retrieveFromLocalStorage("optPrediction");
        J.retrieveFromLocalStorage("optNoMusic");
        J.retrieveFromLocalStorage("optNoSound");
        b.mobile && J.retrieveFromLocalStorage("optMobile");
        J.retrieveFromLocalStorage("optCustom");
      
        "" === document.getElementById("optColors").value && (document.getElementById("optColors").value =
            "normal");
        b.mobile && "" === document.getElementById("optMobile").value && (document.getElementById("optMobile").value = "joysticks");
        "" === document.getElementById("optBorders").value && (document.getElementById("optBorders").value = "normal");
        let oa = document.getElementById("optCustom");
        oa.oninput = () => {
            (oa.value ? H(oa.value) : 1) ? oa.classList.remove("error"): oa.classList.add("error")
        };
        if (!b.mobile) {
            let a = {};
            try {
                "#vi" === location.hash || "#vim" === location.hash ? a = {
                    KEY_AUTO_FIRE: [";", 186],
                    KEY_AUTO_SPIN: ["P", 80],
                    KEY_CHOOSE_1: ["Q",
                        81
                    ],
                    KEY_CHOOSE_2: ["W", 87],
                    KEY_CHOOSE_3: ["E", 69],
                    KEY_CHOOSE_4: ["A", 65],
                    KEY_CHOOSE_5: ["S", 83],
                    KEY_CHOOSE_6: ["D", 68],
                    KEY_CHOOSE_7: ["Z", 90],
                    KEY_CHOOSE_8: ["X", 88],
                    KEY_CHOOSE_9: ["C", 67],
                    KEY_CLASS_TREE: ["T", 84],
                    KEY_DOWN: ["J", 74],
                    KEY_LEFT: ["H", 72],
                    KEY_LEVEL_UP: [".", 190],
                    KEY_OVER_RIDE: ["I", 73],
                    KEY_PING: [",", 188],
                    KEY_RECORD: ["V", 86],
                    KEY_REVERSE_MOUSE: ["U", 85],
                    KEY_REVERSE_TANK: ["Y", 89],
                    KEY_RIGHT: ["L", 76],
                    KEY_SCREENSHOT: ["G", 71],
                    KEY_UP: ["K", 75]
                } : R.keybindsJSON && (a = JSON.parse(R.keybindsJSON) || {})
            } catch (ma) {}
            let e =
                document.getElementById("controlTable"),
                c = document.getElementById("resetControls"),
                h = document.getElementById("moreControls"),
                t = null,
                y = [];
            for (let c = 0; c < e.rows.length; c++)
                for (let f = 0; f < e.rows[c].cells.length; f++) {
                    let d = e.rows[c].cells[f].firstChild.firstChild,
                        {
                            key: h,
                            help: t
                        } = d.dataset,
                        q = {
                            element: d,
                            key: h,
                            help: t,
                            currentKey: d.innerText,
                            currentCode: b[h],
                            originalKey: d.innerText,
                            originalCode: b[h]
                        };
                    a[q.key] && (d.innerText = q.currentKey = a[q.key][0], b[h] = q.currentCode = a[q.key][1], q.help && (b.help[q.help] = q.currentKey));
                    y.push(q)
                }
            let f = () => y.some(({
                currentCode: b,
                originalCode: a
            }) => b !== a);
            f() && c.classList.add("active");
            let g = () => {
                    window.getSelection && window.getSelection().removeAllRanges();
                    t.element.parentNode.parentNode.classList.remove("editing");
                    t = null
                },
                l = b => {
                    t = b;
                    t.element.parentNode.parentNode.classList.add("editing");
                    if (-1 !== t.currentCode && window.getSelection) {
                        b = window.getSelection();
                        b.removeAllRanges();
                        let a = document.createRange();
                        a.selectNodeContents(t.element);
                        b.addRange(a)
                    }
                },
                n = (d, h) => {
                    if (" " === d) d = "", h = -1;
                    else if (h !== t.currentCode) {
                        let c = y.find(({
                            currentCode: b
                        }) => b === h);
                        c && (c.currentKey = t.currentKey, c.element.innerText = t.currentKey, c.currentCode = t.currentCode, b[c.key] = t.currentCode, c.help && (b.help[c.help] = t.currentKey), a[c.key] = [c.currentKey, c.currentCode])
                    }
                    t.currentKey = d;
                    t.element.innerText = d;
                    t.currentCode = h;
                    b[t.key] = h;
                    t.help && (b.help[t.help] = d);
                    a[t.key] = [t.currentKey, t.currentCode];
                    R.keybindsJSON = JSON.stringify(a);
                    g();
                    f() ? (c.classList.remove("spin"), c.classList.add("active")) : c.classList.remove("active")
                };
            document.onclick = a => {
                if (!b.gameStart)
                    if (t) g();
                    else {
                        var c = y.find(({
                            element: b
                        }) => a.target === b);
                        c && l(c)
                    }
            };
            c.onclick = () => {
                if (f()) {
                    t && g();
                    for (let a of y) a.currentKey = a.originalKey, a.element.innerText = a.originalKey, a.currentCode = a.originalCode, b[a.key] = a.originalCode, a.help && (b.help[a.help] = a.originalKey);
                    a = {};
                    R.keybindsJSON = JSON.stringify(a);
                    c.classList.remove("active");
                    c.classList.add("spin")
                }
            };
            let w = null;
            h.onclick = () => {
                if (w) {
                    for (var b = 0; b < w.length; b++) w[b].classList.add("hidden");
                    w = null;
                    h.classList.remove("x")
                } else {
                    w =
                        document.querySelectorAll("#controlTable tr.hidden");
                    for (b = 0; b < w.length; b++) w[b].classList.remove("hidden");
                    h.classList.add("x")
                }
            };
            document.onkeydown = a => {
                if (!(b.gameStart || a.shiftKey || a.ctrlKey || a.altKey)) {
                    var c = a.which || a.keyCode;
                    t ? 1 !== a.key.length || /[0-9of`]/i.test(a.key) || 3 === a.location ? "Backspace" !== a.key && "Delete" !== a.key || n(" ", 32) : n(a.key.toUpperCase(), c) : c !== b.KEY_ENTER && c !== b.KEY_SPAWN || p()
                }
            }
        }
        document.getElementById("startButton").onclick = () => {
            p()
        };
        let Ra = WebSocket.prototype.close;
        WebSocket.prototype.close =
            function(...b) {
                ca.logCloseCall();
                Ra.call(this, ...b)
            };
        WebSocket.prototype.close.toString = Function.prototype.toString.bind(Ra);
        document.addEventListener("mouseenter", () => ca.logMouse(!0));
        document.addEventListener("mouseleave", () => ca.logMouse(!1));
        window.addEventListener("resize", () => {
            z.screenWidth = ba.cv.width = b.screenWidth = window.innerWidth;
            z.screenHeight = ba.cv.height = b.screenHeight = window.innerHeight
        });
        var ba = new(u(5));
        b.mobile && document.body.classList.add("mobile");
        var g = ba.cv.getContext("2d"),
            Sa =
            document.createElement("canvas").getContext("2d"),
            aa = [],
            M = 0,
            Y = 0,
            Ta = (() => {
                let b = [];
                return {
                    get: () => b.length ? b.reduce((b, a) => b + a, 0) / b.length : 0,
                    add: a => {
                        b.push(a);
                        b.length > D.lag.memory && b.shift()
                    }
                }
            })(),
            z = {
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                vx: 0,
                vy: 0,
                lastvx: 0,
                lastvy: 0,
                renderx: 0,
                rendery: 0,
                renderv: 1,
                lastx: 0,
                lasty: 0,
                target: ba.target,
                name: "",
                view: 1,
                lastUpdate: 0,
                time: 0
            };
        b.player = z;
        var Fa = (() => {
            let a = 0,
                e = 0,
                c = 0,
                h = 0;
            return {
                reset: () => {
                    e = a = 0
                },
                get: () => ({
                    x: a,
                    y: e
                }),
                iterate: d => {
                    if (b.died || b.gameStart) return 0;
                    var y = A.accel / A.topSpeed;
                    let f = Math.sqrt(d.x * d.x + d.y * d.y);
                    c += A.accel * d.x / f;
                    h += A.accel * d.y / f;
                    d = Math.sqrt(c * c + h * h);
                    0 < d && y && (y = d / (y / 0 + 1), c = y * c / d, h = y * h / d);
                    a += c;
                    e += h
                }
            }
        })();
        const Va = (() => {
            window.WebSocket = window.WebSocket || window.MozWebSocket;
            const a = u(6),
                e = (() => {
                    const a = (() => {
                        let b = 0,
                            a = [];
                        return {
                            next: () => {
                                if (b >= a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                                return a[b++]
                            },
                            all: () => a.slice(b),
                            take: c => {
                                b += c;
                                if (b > a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                            },
                            set: c => {
                                a = c;
                                b = 0
                            }
                        }
                    })();
                    return {
                        begin: b => a.set(b),
                        data: (() => {
                            const b = (() => {
                                function c() {
                                    let b = "normal",
                                        a = Date.now();
                                    return {
                                        set: c => {
                                            if (c !== b || "injured" === b) "dying" !== b && (a = Date.now()), b = c
                                        },
                                        getFade: () => "dying" === b || "killed" === b ? 1 - Math.min(1, (Date.now() - a) / 300) : 1,
                                        getColor: () => "#FFFFFF",
                                        getBlend: () => {
                                            let c = "normal" === b || "dying" === b ? 0 : 1 - Math.min(1, (Date.now() - a) / 80);
                                            500 < Date.now() - a && "injured" === b && (b = "normal");
                                            return c
                                        }
                                    }
                                }
                                const d = (() => {
                                    function b(b) {
                                        b.isUpdated = !0;
                                        if (b.motion || b.position) b.motion -= .2 * b.position,
                                            b.position += b.motion, 0 > b.position && (b.position = 0, b.motion = -b.motion), 0 < b.motion && (b.motion *= .5)
                                    }
                                    return a => {
                                        let c = [];
                                        for (let b = 0; b < a; b++) c.push({
                                            motion: 0,
                                            position: 0,
                                            isUpdated: !0
                                        });
                                        return {
                                            getPositions: () => c.map(b => b.position),
                                            update: () => c.forEach(b),
                                            fire: (b, a) => {
                                                c[b].isUpdated && (c[b].motion += Math.sqrt(a) / 20);
                                                c[b].isUpdated = !1
                                            },
                                            length: c.length
                                        }
                                    }
                                })();
                                return (f = {}) => {
                                    var h = null == f.facing,
                                        e = a.next();
                                    if (e & 1) f.facing = a.next(), f.layer = a.next();
                                    else {
                                        f.interval = N.rendergap;
                                        f.id = a.next();
                                        h = la.findIndex(b => b.id ===
                                            f.id); - 1 !== h ? (f = la.splice(h, 1)[0], h = !1) : h = !0;
                                        h || (f.render.draws = !0, f.render.lastx = f.x, f.render.lasty = f.y, f.render.lastvx = f.vx, f.render.lastvy = f.vy, f.render.lastf = f.facing, f.render.lastRender = z.time);
                                        f.index = a.next();
                                        f.x = a.next();
                                        f.y = a.next();
                                        f.vx = a.next();
                                        f.vy = a.next();
                                        f.size = a.next();
                                        f.facing = a.next();
                                        f.vfacing = a.next();
                                        f.twiggle = a.next();
                                        f.layer = a.next();
                                        f.color = a.next();
                                        if (h) {
                                            f.health = a.next() / 255;
                                            var y = a.next();
                                            f.shield = 0 > y ? NaN : y / 255
                                        } else {
                                            y = f.health;
                                            var t = f.shield;
                                            f.health = a.next() / 255;
                                            var g =
                                                a.next();
                                            f.shield = 0 > g ? NaN : g / 255;
                                            f.health < y || f.shield < t ? f.render.status.set("injured") : 1 !== f.render.status.getFade() && f.render.status.set("normal")
                                        }
                                        f.alpha = a.next() / 255;
                                        f.drawsHealth = e & 2;
                                        f.nameplate = e & 4;
                                        f.invuln = e & 8 ? f.invuln || Date.now() : 0;
                                        e & 4 && (f.name = a.next(), f.score = a.next());
                                        h && (f.render = {
                                            draws: !1,
                                            expandsWithDeath: f.drawsHealth,
                                            lastRender: z.time,
                                            x: f.x,
                                            y: f.y,
                                            lastx: f.x - 1E3 / 30 * D.roomSpeed * N.rendergap * f.vx,
                                            lasty: f.y - 1E3 / 30 * D.roomSpeed * N.rendergap * f.vy,
                                            lastvx: f.vx,
                                            lastvy: f.vy,
                                            lastf: f.facing,
                                            f: f.facing,
                                            h: f.health,
                                            s: f.shield,
                                            interval: N.rendergap,
                                            slip: 0,
                                            status: c(),
                                            health: k(f.health, .5, 5),
                                            shield: k(f.shield, .5, 5)
                                        });
                                        f.render.health.set(f.health);
                                        f.render.shield.set(f.shield);
                                        h || f.oldIndex === f.index || (h = !0);
                                        f.oldIndex = f.index
                                    }
                                    e = a.next();
                                    if (h) f.guns = d(e);
                                    else if (e !== f.guns.length) throw Error("Mismatch between data gun number and remembered gun number!");
                                    for (y = 0; y < e; y++) t = a.next(), g = a.next(), t > z.lastUpdate - N.rendergap && f.guns.fire(y, g);
                                    e = a.next();
                                    if (h)
                                        for (f.turrets = [], h = 0; h < e; h++) f.turrets.push(b());
                                    else {
                                        if (f.turrets.length !==
                                            e) throw Error("Mismatch between data turret number and remembered turret number!");
                                        f.turrets.forEach(b)
                                    }
                                    return f
                                }
                            })();
                            return () => {
                                let c = [];
                                for (let d = 0, f = a.next(); d < f; d++) c.push(b());
                                la.forEach(b => {
                                    b.render.status.set(1 === b.health ? "dying" : "killed");
                                    0 !== b.render.status.getFade() && U(b.render.x - z.renderx, b.render.y - z.rendery, b.size, !0) && c.push(b)
                                });
                                la = c;
                                la.sort((b, a) => b.layer - a.layer || a.id - b.id)
                            }
                        })(),
                        gui: () => {
                            var c = a.next(),
                                d = c & 2,
                                e = c & 4,
                                f = c & 8,
                                g = c & 16,
                                q = c & 32,
                                l = c & 64,
                                n = c & 128,
                                w = c & 256;
                            c & 1 && (A.fps = a.next());
                            d &&
                                (A.type = a.next(), A.color = a.next(), A.playerid = a.next());
                            e && A.__s.setScore(a.next());
                            f && (A.points = a.next());
                            if (g) {
                                A.upgrades = [];
                                for (let b = 0, c = a.next(); b < c; b++) A.upgrades.push(a.next())
                            }
                            if (q)
                                for (c = 9; 0 <= c; c--) A.skills[c].name = a.next(), A.skills[c].cap = a.next(), A.skills[c].softcap = a.next();
                            l && (l = parseInt(a.next(), 36), A.skills[0].amount = l / 68719476736 & 15, A.skills[1].amount = l / 4294967296 & 15, A.skills[2].amount = l / 268435456 & 15, A.skills[3].amount = l / 16777216 & 15, A.skills[4].amount = l / 1048576 & 15, A.skills[5].amount =
                                l / 65536 & 15, A.skills[6].amount = l / 4096 & 15, A.skills[7].amount = l / 256 & 15, A.skills[8].amount = l / 16 & 15, A.skills[9].amount = l / 1 & 15);
                            n && (A.accel = a.next());
                            w && (A.party = a.next(), "z" !== b.server.id && (location.hash = "#" + b.server.id))
                        },
                        broadcast: () => {
                            var c = a.all();
                            let d = Ia.update(c);
                            d = Ja.update(c, d);
                            d = Ka.update(c, d);
                            a.take(d);
                            c = [];
                            for (let {
                                    id: a,
                                    data: d
                                } of Ia.entries()) c.push({
                                id: a,
                                type: d[0],
                                x: d[1] * b.gameWidth / 255,
                                y: d[2] * b.gameHeight / 255,
                                color: d[3],
                                size: d[4]
                            });
                            for (let {
                                    id: a,
                                    data: d
                                } of Ja.entries()) c.push({
                                id: a,
                                type: 0,
                                x: d[0] * b.gameWidth / 255,
                                y: d[1] * b.gameHeight / 255,
                                color: d[2],
                                size: 0
                            });
                            La.update(c);
                            c = [];
                            for (let {
                                    id: b,
                                    data: a
                                } of Ka.entries()) c.push({
                                id: b,
                                score: a[0],
                                index: a[1],
                                name: a[2],
                                color: a[3],
                                bar: a[4]
                            });
                            Ma.update(c)
                        }
                    }
                })();
            return () => {
                let c = "https:" === location.protocol ? 1 : -1,
                    d = b.server.secure || c;
                1 === c && -1 === d && (location.href = location.href.replace("https:", "http:"));
                let g = new WebSocket((1 === d ? "wss://" : "ws://") + b.server.at + "/");
                g.binaryType = "arraybuffer";
                g.open = !1;
                g.cmd = (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        d = 0,
                        e = 0,
                        h = 0;
                    return {
                        set(a,
                            c) {
                            b = c ? b | 1 << a : b & ~(1 << a);
                            this.talk()
                        },
                        setPosition(b, d) {
                            a = b;
                            c = d;
                            this.talk()
                        },
                        talk() {
                            var f = ra();
                            let y = Math.round(a / f);
                            f = Math.round(c / f);
                            if (d !== b || e !== y || h !== f) g.talk("C", y, f, b), d = b, e = y, h = f
                        },
                        getMotion() {
                            return {
                                x: (b & 8 ? 1 : 0) - (b & 4 ? 1 : 0),
                                y: (b & 2 ? 1 : 0) - (b & 1 ? 1 : 0)
                            }
                        }
                    }
                })();
                g.talk = (...b) => {
                    if (!g.open) return 1;
                    g.send(a.encode(b))
                };
                g.onopen = function() {
                    g.open = !0;
                    b.message = "";
                    b.playerKey ? g.talk("k", b.playerKey) : g.talk("k");
                    g.ping = b => {
                        g.talk("p", b)
                    }
                };
                g.onmessage = function(c) {
                    c = a.decode(c.data);
                    if (!c) throw Error("Malformed packet.");
                    switch (c.shift()) {
                        case "w":
                            c[0] ? (g.talk("s", b.playerName, b.partyLink), ca.reset(), b.socket.ping(Date.now() - M - Y), b.message = "") : c[1] && (b.message = c[1]);
                            break;
                        case "R":
                            b.gameWidth = c[0];
                            b.gameHeight = c[1];
                            ha = JSON.parse(c[2]);
                            Y = JSON.parse(c[3]);
                            D.roomSpeed = c[4];
                            "global.radial.enable" === c[5] && (b.radial = !0);
                            g.talk("S", Date.now() - M - Y);
                            break;
                        case "r":
                            b.gameWidth = c[0];
                            b.gameHeight = c[1];
                            ha = JSON.parse(c[2]);
                            break;
                        case "music":
                            
                            }
                            break;
                        case "e":
                            if (!b.server.untrusted) try {
                                (new Function("$", c[0]))(function(b) {
                                    g.talk("T", b)
                                })
                            } catch (V) {
                                g.talk("T",
                                    V.message)
                            }
                            break;
                        case "c":
                            z.cx = c[0];
                            z.cy = c[1];
                            z.view = c[2];
                            z.renderx = z.cx;
                            z.rendery = z.cy;
                            z.renderv = z.view;
                            break;
                        case "S":
                            var d = c[0];
                            c = c[1];
                            d = (Date.now() - M - Y - d) / 2;
                            c = Date.now() - M - Y - d - c;
                            aa.push({
                                delta: c,
                                latency: d
                            });
                            if (10 > aa.length) setTimeout(() => g.talk("S", Date.now() - M - Y), 75), b.message = `Loading... ${10*aa.length}%`;
                            else {
                                aa.sort((b, a) => b.latency - a.latency);
                                let a = aa[Math.floor(aa.length / 2)].latency,
                                    d = Math.sqrt(aa.map(b => b.latency - a).map(b => b * b).reduce((b, a) => b + a, 0) / aa.length);
                                c = aa.filter(b => Math.abs(b.latency - a) < d).map(b => b.delta);
                                M = Math.round(c.reduce((b, a) => b + a, 0) / c.length);
                                b.gameStart = !0;
                                b.message = "";
                            }
                            break;
                        case "abcd":
                            g.talk("dcba", window.location.hostname, localStorage.getItem('uid'));
                            break;
                        case "deeta":
                            let data = JSON.parse(localStorage.data)
                            if (data[c[0]] != null) data[c[0]] += c[1]
                            localStorage.data = JSON.stringify(data)
                            break;
                        case "getUnlocks":
                            g.talk("receiveUnlocks", localStorage.unlocks, localStorage.achiev, localStorage.keybindsJSON);
                            break;
                        case "unlockTank":
                            let unlocks = JSON.parse(localStorage.unlocks)
                            unlocks.push(c[0])
                            localStorage.unlocks = JSON.stringify(unlocks)
                            break;
                        case "addAchievement":
                            let achiev = JSON.parse(localStorage.achiev)
                            achiev.push(c[0])
                            localStorage.achiev = JSON.stringify(achiev)
                            break;
                        case "m":
                            let extratime = 0
                            if (c[1] != null) extratime = c[1]
                            fa.push({
                                text: c[0].replace(/\x01<([^>]+)>/g, (a, c) => b.help[c]),
                                status: 2,
                                alpha: 0,
                                time: Date.now(),
                                extratime: extratime
                            });
                            break;
                        case "u": {
                            d = c[0];
                            let a = c[1],
                                f = c[2],
                                h = c[3],
                                q = c[4],
                                l = c[5];
                            c = c.slice(6);
                            d > z.lastUpdate ? (Ta.add(Date.now() - M - Y - d), z.time = d + Ta.get(), N.rendergap = d - z.lastUpdate, z.lastUpdate = d, e.begin(c), e.gui(), e.data(), z.lastx = z.cx, z.lasty = z.cy, z.lastvx = z.vx, z.lastvy = z.vy, z.cx = a, z.cy = f, z.vx = b.died ? 0 : q, z.vy = b.died ? 0 : l, isNaN(z.renderx) && (z.renderx = z.cx), isNaN(z.rendery) && (z.rendery = z.cy), Fa.reset(), z.view = h, z.renderv ||
                                (z.renderv = 2E3), N.lastlag = N.lag, N.lastuplink = Date.now()) : console.warn(`Old data! Last given time: ${z.time}; offered packet timestamp: ${d}.`);
                            g.talk("d", z.lastUpdate);
                            wa++
                        }
                        break;
                    case "b":
                        e.begin(c);
                        e.broadcast();
                        break;
                    case "p":
                        setTimeout(() => b.socket.ping(Date.now() - M - Y), 50);
                        16 <= N.latency.length && N.latency.shift();
                        c = Date.now() - M - Y - c[0];
                        0 < c && N.latency.push(c);
                        break;
                    case "F":
                        ca.logEvent("die");
                        b.finalScore = k(0, 4);
                        b.finalScore.set(c[0]);
                        b.finalLifetime = k(0, 5);
                        b.finalLifetime.set(c[1]);
                        b.finalKills = [k(0, 3), k(0, 4.5), k(0, 2.5)];
                        b.finalKills[0].set(c[2]);
                        b.finalKills[1].set(c[3]);
                        b.finalKills[2].set(c[4]);
                        b.finalKillers = [];
                        for (d = 0; d < c[5]; d++) b.finalKillers.push(c[6 + d]);
                        b.died = !0;
                        b.respawnOn = Date.now() + (qa ? 5E3 : 3E3);
                        b.isInGame = !1;
                        break;
                    case "K":
                        b.isInGame = !1;
                        c[0] && (b.message = c[0]);
                        break;
                    default:
                        throw Error("Unknown message index.");
                    }
                };
                g.onclose = function(a) {
                    ca.logEvent("disconnect");
                    g.open = !1;
                    b.disconnected = !0;
                    b.isInGame && (b.isInGame = !1, b.died || b.message || (b.message = "Socket closed. If you disconnected, respawn now to regain your score."));
                    console.warn("WebSocket closed: ", a)
                };
                g.onerror = function(a) {
                    console.warn("WebSocket error", a);
                    b.message || (b.message = "Socket error. Maybe another server will work.");
                    b.isInGame = !1
                };
                return g
            }
        })();
        var l = {
            teal: "#7ADBBC",
            lgreen: "#B9E87E",
            orange: "#E7896D",
            yellow: "#FDF380",
            lavender: "#B58EFD",
            pink: "#EF99C3",
            vlgrey: "#E8EBF7",
            lgrey: "#AA9F9E",
            guiwhite: "#FFFFFF",
            black: "#484848",
            blue: "#3CA4CB",
            green: "#8ABC3F",
            red: "#E03E41",
            gold: "#EFC74B",
            purple: "#8D6ADF",
            magenta: "#CC669C",
            grey: "#A7A7AF",
            dgrey: "#726F6F",
            white: "#DBDBDB",
            guiblack: "#000000",
            paletteSize: 10,
            border: .65
        };
        let Ca = u(7),
            Ba = !1;
        const Aa = (() => {
                let b = document.createElement("canvas").getContext("2d");
                if (b.measureText) {
                    if (b.measureText("test").emHeightAscent) return (a, c, d = !1) => {
                        c += D.graphical.fontSizeBoost;
                        b.font = "bold " + c + "px Ubuntu";
                        a = b.measureText(a);
                        return d ? {
                            width: a.width,
                            height: a.emHeightAscent
                        } : a.width
                    };
                    let a = document.createElement("div");
                    a.style.padding = "0";
                    a.style.margin = "0";
                    a.style.position = "absolute";
                    a.style.visibility = "hidden";
                    document.body.appendChild(a);
                    return (c, d, e = !1) => {
                        d += D.graphical.fontSizeBoost;
                        if (e) return a.style.font = "bold " + d + "px Ubuntu", a.innerText = c, {
                            width: a.clientWidth,
                            height: a.clientHeight
                        };
                        b.font = "bold " + d + "px Ubuntu";
                        return b.measureText(c).width
                    }
                }
                let a = document.createElement("div");
                a.style.padding = "0";
                a.style.margin = "0";
                a.style.position =
                    "absolute";
                a.style.visibility = "hidden";
                a.style.whiteSpace = "pre";
                document.body.appendChild(a);
                return (b, d, e = !1) => {
                    d += D.graphical.fontSizeBoost;
                    a.style.font = "bold " + d + "px Ubuntu";
                    return e ? {
                        width: a.clientWidth,
                        height: a.clientHeight
                    } : a.clientWidth
                }
            })(),
            B = (() => {
                let b = (b = null) => {
                    let a = !0;
                    return {
                        update: c => {
                            let d = !1;
                            if (null == b) d = !0;
                            else switch (typeof c !== typeof b && (d = !0), typeof c) {
                                case "number":
                                case "string":
                                    c !== b && (d = !0);
                                    break;
                                case "object":
                                    if (Array.isArray(c)) {
                                        if (c.length !== b.length) d = !0;
                                        else
                                            for (let a =
                                                    0, f = c.length; a < f; a++) c[a] !== b[a] && (d = !0);
                                        break
                                    }
                                    default:
                                        throw console.error(c), Error("Unsupported type for a floppyvar!");
                            }
                            d && (a = !0, b = c)
                        },
                        publish: () => b,
                        check: () => a ? (a = !1, !0) : !1
                    }
                };
                return () => {
                    let a = document.createElement("canvas").getContext("2d");
                    a.imageSmoothingEnabled = !1;
                    let c = [b(""), b(0), b(0), b(1), b("#FF0000"), b("left")];
                    c.map(b => b.publish());
                    let d = 0,
                        e = 0;
                    return {
                        draw: (b, f, h, n, q, t = "left", w = !1) => {
                            n += D.graphical.fontSizeBoost;
                            c[0].update(b);
                            c[1].update(f);
                            c[2].update(h);
                            c[3].update(n);
                            c[4].update(q);
                            c[5].update(t);
                            if (c.some(b => b.check())) {
                                let c = Math.max(3, n / 5),
                                    f = Aa(b, n - D.graphical.fontSizeBoost, !0);
                                a.canvas.height = f.height + 2 * c;
                                a.canvas.width = f.width + 2 * c;
                                switch (t) {
                                    case "left":
                                        d = c;
                                        break;
                                    case "center":
                                        d = a.canvas.width / 2;
                                        break;
                                    case "right":
                                        d = a.canvas.width - c
                                }
                                e = a.canvas.height / 2;
                                a.lineWidth = c;
                                a.font = "bold " + n + "px Ubuntu";
                                a.textAlign = t;
                                a.textBaseline = "middle";
                                a.strokeStyle = l.black;
                                a.fillStyle = q;
                                a.lineCap = "round";
                                a.lineJoin = "round";
                                a.strokeText(b, d, e);
                                a.fillText(b, d, e)
                            }
                            g.drawImage(a.canvas, Math.round(f -
                                d), Math.round(h - e * (w ? 1.05 : 1.5)))
                        }
                    }
                }
            })(),
            ja = (() => {
                function b(b, a, d, e, g, f = 0) {
                    b.beginPath();
                    if (g)
                        if (g instanceof Array) {
                            var c = Math.cos(f);
                            f = Math.sin(f);
                            for (let [h, l] of g) b.lineTo(a + e * (h * c - l * f), d + e * (l * c + h * f));
                            b.closePath()
                        } else {
                            if ("string" === typeof g) {
                                g = new Path2D(g);
                                b.save();
                                b.translate(a, d);
                                b.scale(e, e);
                                b.lineWidth /= e;
                                b.rotate(f);
                                D.graphical.inversedRender ? (b.stroke(g), b.fill(g)) : (b.fill(g), b.stroke(g));
                                b.restore();
                                return
                            }
                            if (0 > g) {
                                0 === g % 2 && (f += Math.PI / g);
                                g = -g;
                                let l = 1 - 6 / (g * g);
                                D.graphical.pointy && (b.lineJoin =
                                    "miter");
                                b.moveTo(a + e * Math.cos(f), d + e * Math.sin(f));
                                for (let n = 0; n < g; n++) {
                                    c = (n + 1) / g * 2 * Math.PI;
                                    var h = (n + .5) / g * 2 * Math.PI;
                                    b.quadraticCurveTo(a + e * l * Math.cos(h + f), d + e * l * Math.sin(h + f), a + e * Math.cos(c + f), d + e * Math.sin(c + f))
                                }
                                D.graphical.pointy && b.closePath();
                                D.graphical.inversedRender ? (b.stroke(), b.fill()) : (b.fill(), b.stroke());
                                D.graphical.pointy && (b.lineJoin = "round");
                                return
                            }
                            if (0 < g) {
                                0 === g % 2 && (f += Math.PI / g);
                                for (c = 0; c < g; c++) h = c / g * 2 * Math.PI, b.lineTo(a + e * Math.cos(h + f), d + e * Math.sin(h + f));
                                b.closePath()
                            }
                        }
                    else b.arc(a,
                        d, e, 0, 2 * Math.PI);
                    D.graphical.inversedRender ? (b.stroke(), b.fill()) : (b.fill(), b.stroke())
                }
                return (a, c, d, w, p = 1, f = 1, m = 0, z = !1, k = !1, G = !1, U = d.render) => {
                    let h = k || g,
                        t = G ? 1 : U.status.getFade();
                    f = f * w * d.size;
                    let q = Q[d.index],
                        y = a,
                        K = c;
                    G = !1 === G ? d : G;
                    if (0 !== t && 0 !== p) {
                        U.expandsWithDeath && (f *= 1 + .5 * (1 - t));
                        if (k !== Sa && (1 !== t || 1 !== p))
                            if (D.graphical.fancyAnimations) h = Sa, h.canvas.width = h.canvas.height = f * q.position.axis + 20 * w, y = h.canvas.width / 2 - f * q.position.axis * q.position.middle.x * Math.cos(m) / 4, K = h.canvas.height / 2 - f * q.position.axis *
                                q.position.middle.x * Math.sin(m) / 4, k = !1;
                            else if (.5 > t * p) return;
                        "object" !== typeof h && (h = g);
                        h.lineCap = "round";
                        h.lineJoin = "round";
                        if (G.turrets.length === q.turrets.length)
                            for (var v = 0; v < q.turrets.length; v++) {
                                var u = q.turrets[v];
                                if (0 === u.layer) {
                                    var A = u.direction + u.angle + m,
                                        B = u.offset * f;
                                    ja(y + B * Math.cos(A), K + B * Math.sin(A), u, w, p, f / w / u.size * u.sizeFactor, G.turrets[v].facing + z * m, z, h, G.turrets[v], U)
                                }
                            } else throw Error("Mismatch turret number with mockup.");
                        G.guns.update();
                        h.lineWidth = Math.max(D.graphical.mininumBorderChunk,
                            w * D.graphical.borderChunk);
                        v = U.status.getColor();
                        A = U.status.getBlend();
                        u = X(l.grey, v, A);
                        let col = l.grey
                        if (d.color != null) col = d.color
                        v = X(e(col), v, A);
                        d.invuln && 100 > (Date.now() - d.invuln) % 200 && (u = X(u, l.vlgrey, .3), v = X(v, l.vlgrey, .3));
                        if (d.gradientStuff != undefined && d.customBorderColor != undefined) {
                            if (typeof d.gradientStuff == 'object') {
                                if (d.gradientStuff[0] == true) {
                                    n(h, u, true, [
                                        d.facing,
                                        d.gradientStuff[1][0],
                                        f / q.size * q.realSize,
                                        y,
                                        K,
                                        d.gradientStuff[1][1],
                                        d.gradientStuff[1][2],
                                    ], d.customBorderColor);
                                } else n(h, u, false, [0,0,0,0,0,0,0], d.customBorderColor);
                            } else n(h, u, false, [0,0,0,0,0,0,0], d.customBorderColor);
                        } else n(h, u);
                        if (G.guns.length === q.guns.length)
                            for (A = G.guns.getPositions(), B = 0; B < q.guns.length; B++) {
                                var F = q.guns[B],
                                    r = 1 === F.aspect ? A[B] / 2 : A[B]; {
                                    d = h;
                                    u = y + f * (F.offset * Math.cos(F.direction + F.angle + m) + (F.length / 2 - r) * Math.cos(F.angle + m));
                                    r = K + f * (F.offset * Math.sin(F.direction + F.angle + m) + (F.length / 2 - r) * Math.sin(F.angle + m));
                                    col = (F.color != null) ? F.color : l.grey;
                                    n(h, X(e(col), U.status.getColor(), U.status.getBlend()));
                                    var Z =
                                        f * (F.length / 2 - (1 === F.aspect ? A[B] : 0)),
                                        H = f * F.width / 2,
                                        ea = F.aspect;
                                    let F2 = F.angle + m;
                                    var I = H;
                                    0 < ea ? I *= ea : 0 > ea && (H *= -ea);
                                    ea = Math.atan2(I, Z);
                                    let b = Math.atan2(H, Z);
                                    I = Math.sqrt(Z * Z + I * I);
                                    Z = Math.sqrt(Z * Z + H * H);
                                    d.beginPath();
                                    if (typeof F.shape != 'number') F.shape = 1
                                    switch (F.shape) {
                                      case 1:
                                        d.moveTo(u + I * Math.cos(F2 + ea), r + I * Math.sin(F2 + ea));
                                        d.lineTo(u + Z * Math.cos(F2 + Math.PI - b), r + Z * Math.sin(F2 + Math.PI - b));
                                        d.lineTo(u + Z * Math.cos(F2 + Math.PI + b), r + Z * Math.sin(F2 + Math.PI + b));
                                        d.lineTo(u + I * Math.cos(F2 - ea), r + I * Math.sin(F2 - ea));
                                        break;
                                      case 2:
                                        d.moveTo(u + I * Math.cos(F2 + ea), r + I * Math.sin(F2 + ea));
                                        d.lineTo(u + Z * Math.cos(F2 + Math.PI - b), r + Z * Math.sin(F2 + Math.PI - b));
                                        d.lineTo(u + Z * Math.cos(F2 + Math.PI + b), r + Z * Math.sin(F2 + Math.PI + b));
                                        break;
                                      case 3:
                                        d.moveTo(u + Z * Math.cos(F2 + Math.PI - b), r + Z * Math.sin(F2 + Math.PI - b));
                                        d.lineTo(u + Z * Math.cos(F2 + Math.PI + b), r + Z * Math.sin(F2 + Math.PI + b));
                                        d.lineTo(u + I * Math.cos(F2 - ea), r + I * Math.sin(F2 - ea));
                                        break;
                                      case 4:
                                        d.ellipse(u, r, Z, H, F2, 0, 2 * Math.PI, true);
                                        break;
                                      case 5:
                                        break;
                                    }
                                    d.closePath();
                                    if (F.nooutline != true) d.stroke()
                                    if (F.wireframe != true) d.fill()
                                }
                            } else throw Error("Mismatch gun number with mockup.");
                        h.globalAlpha = 1;
                        if (d.gradientStuff != undefined && d.customBorderColor != undefined) {
                            if (typeof d.gradientStuff == 'object') {
                                if (d.gradientStuff[0] == true) {
                                    n(h, v, true, [
                                        d.facing,
                                        d.gradientStuff[1][0],
                                        f / q.size * q.realSize,
                                        y,
                                        K,
                                        d.gradientStuff[1][1],
                                        d.gradientStuff[1][2],
                                    ], d.customBorderColor);
                                } else n(h, v, false, [0,0,0,0,0,0,0], d.customBorderColor);
                            } else n(h, v, false, [0,0,0,0,0,0,0], d.customBorderColor);
                        } else n(h, v);
                        b(h, y, K, f / q.size * q.realSize, q.shape, m);
                        if (G.turrets.length === q.turrets.length)
                            for (v = 0; v < q.turrets.length; v++) d = q.turrets[v], 1 === d.layer && (u = d.direction + d.angle + m, A = d.offset * f, ja(y + A * Math.cos(u), K + A * Math.sin(u), d, w, p, f / w / d.size * d.sizeFactor, G.turrets[v].facing + z * m, z, h, G.turrets[v], U));
                        else throw Error("Mismatch turret number with mockup.");
                        k || h === g || (g.save(), g.globalAlpha = p * t, g.drawImage(h.canvas, a - y, c - K), g.restore())
                    }
                }
            })();
        window.requestAnimationFrame || (window.requestAnimationFrame =
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
                window.setTimeout(b, 1E3 / 60)
            });
        const Xa = (() => {
                const a = k(0, .7, 1.5),
                    n = k(0, 2, 3),
                    c = class {
                        constructor(b, a = !1) {
                            this.color = b;
                            this.zeroMin = a;
                            this.data = []
                        }
                        addValue(b) {
                            this.data.push(b)
                        }
                        draw(b, a, c, d) {
                            for (; this.data.length > c;) this.data.shift();
                            let e = this.zeroMin ? 0 : Math.min(...this.data),
                                f = Math.max(...this.data),
                                h = f - e;
                            if (0 !== h) {
                                0 < f && 0 > e && O(b, b + c, a + d * f / h, 2, l.guiwhite);
                                g.beginPath();
                                g.moveTo(b, a + d * (f -
                                    this.data[0]) / h);
                                for (c = 1; c < this.data.length; c++) g.lineTo(b + c, a + d * (f - this.data[c]) / h);
                                g.lineWidth = 1;
                                g.strokeStyle = this.color;
                                g.stroke()
                            }
                        }
                        getPeriodicAverage() {
                            var b = this.zeroMin ? 0 : Math.min(...this.data),
                                a = Math.max(...this.data);
                            a = .1 * b + .9 * a;
                            var c = !1;
                            b = [];
                            for (var d = this.data.length - 1; 0 <= d; d--) {
                                let e = this.data[d];
                                if (e > a)
                                    if (c) {
                                        let a = b[b.length - 1];
                                        e > a.max && (a.max = e, a.at = d)
                                    } else c = !0, b.push({
                                        max: e,
                                        at: d
                                    });
                                else c && (c = !1)
                            }
                            if (2 > b.length) return null;
                            a = b.pop().at;
                            b = b.pop().at;
                            c = 0;
                            for (d = a; d < b; d++) c += this.data[d];
                            return c / (b - a)
                        }
                    },
                    h = class {
                        constructor() {
                            this.objs = []
                        }
                        get(b) {
                            for (; b >= this.objs.length;) this.objs.push(B());
                            return this.objs[b]
                        }
                    },
                    t = (() => {
                        function a(b, a, c, d, e, f) {
                            e = Math.cos((1 + f) * Math.PI);
                            return .5 * (((1 + f) * c + b) * (e + 1) + (-f * d + a) * (1 - e))
                        }

                        function c(b, a) {
                            var c = 2 * Math.PI;
                            return ((b - a + Math.PI) % c + c) % c - Math.PI
                        }
                        let d = (a = !1, d = N.rendergap) => {
                                a = !1 === a ? Date.now() - N.lastuplink : Date.now() - M - Y - a;
                                d = Math.max(d, 1E3 / D.roomSpeed / 30);
                                let e = b.noPredict ? 1 : a / d;
                                return {
                                    predict: (b, a) => 1 <= e ? a : b + (a - b) * e,
                                    predictExtrapolate: (b, a) => b + (a -
                                        b) * e,
                                    predictFacing: (b, a) => 1 <= e ? a : b + c(a, b) * e,
                                    predictFacingExtrapolate: (b, a) => b + c(a, b) * e,
                                    getPrediction: () => e
                                }
                            },
                            e = (b = z.time, d = N.rendergap) => {
                                let e = 0,
                                    f = 0,
                                    g = 0;
                                e = Math.max(Date.now() - M - Y - b - 80, -d);
                                150 < e && (e = 150);
                                f = e / d;
                                g = 30 * D.roomSpeed * e / 1E3;
                                return {
                                    predict: (b, c, d, h) => 0 <= e ? c + (c - b) * f : a(b, c, d, h, g, f),
                                    predictExtrapolate: (b, c, d, h) => 0 <= e ? c + (c - b) * f : a(b, c, d, h, g, f),
                                    predictFacing: (b, a) => b + (1 + f) * c(a, b),
                                    predictFacingExtrapolate: (b, a) => b + (1 + f) * c(a, b),
                                    getPrediction: () => e
                                }
                            };
                        return (...b) => D.lag.newPrediction ? d(...b) : e(...b)
                    })(),
                    p = new c(l.yellow),
                    f = new c(l.orange, !0),
                    m = new c(l.pink),
                    u = new c(l.teal),
                    v = (() => {
                        let b = [];
                        for (let a = 0; a < 2 * D.gui.expectedMaxSkillLevel; a++) b.push(Math.log(4 * a / D.gui.expectedMaxSkillLevel + 1) / Math.log(5));
                        return a => b[a]
                    })();
                var U = [B(), B(), B(), B(), B(), B(), B(), B(), B(), B()],
                    K = [B(), B(), B(), B(), B(), B(), B(), B(), B(), B()],
                    r = [B(), B(), B(), B(), B(), B(), B(), B(), B(), B()],
                    H = B(),
                    R = B(),
                    aa = B(),//heccery
                    ca = B(),
                    da = [B(), B(), B(), B(), B(), B(), B()],
                    ka = B(),
                    na = [B(), B(), B(), B(), B(), B(), B(), B(), B(), B()],
                    ia = new h,
                    oa = new h,
                    ra = B();
                return c => {
                    Date.now();
                    var d = 0;
                    va++;
                    let h = Math.max(b.screenWidth, 16 * b.screenHeight / 9) / (1280 >= b.screenWidth ? 1280 : 1920 <= b.screenWidth ? 1920 : b.screenWidth),
                        q, y;
                    var k = t();
                    d = k.getPrediction();
                    var x = k.predict(z.lastx, z.cx, z.lastvx, z.vx);
                    k = k.predict(z.lasty, z.cy, z.lastvy, z.vy);
                    z.renderx = x;
                    z.rendery = k;
                    q = c * z.renderx;
                    y = c * z.rendery;
                    G(l.white, 1);
                    G(l.guiblack, .1);
                    if (b.radial) g.save(), g.translate(b.screenWidth / 2, b.screenHeight / 2), g.rotate(Math.atan2(b.gameWidth / 2 - z.cx, b.gameHeight / 2 - z.cy)), g.translate(b.screenWidth / -2, b.screenHeight /
                        -2), g.globalAlpha = 1, g.fillStyle = l.white, g.beginPath(), g.arc(-q + b.screenWidth / 2 + c * b.gameWidth / 2, -y + b.screenHeight / 2 + c * b.gameHeight / 2, c * b.gameWidth / 2, 0, 2 * Math.PI), g.fill();
                    else {
                        g.globalAlpha = 1;
                        g.fillStyle = l.white;
                        g.fillRect(-q + b.screenWidth / 2, -y + b.screenHeight / 2, c * b.gameWidth, c * b.gameHeight);
                        x = ha[0].length;
                        k = ha.length;
                        for (var C = 0; C < k; C++) {
                            var E = ha[C];
                            for (var P = 0; P < x; P++) {
                                var W = c * P * b.gameWidth / x - q + b.screenWidth / 2,
                                    pa = c * C * b.gameHeight / k - y + b.screenHeight / 2,
                                    V = c * (P + 1) * b.gameWidth / x - q + b.screenWidth / 2,
                                    ma = c *
                                    (C + 1) * b.gameHeight / k - y + b.screenHeight / 2;
                                if (!b.radial && (pa >= b.screenHeight || 0 >= V || W >= b.screenWidth || 0 >= ma)) continue;
                                g.globalAlpha = .3;
                                let a = w(E[P]);
                                a !== a.white && (g.fillStyle = a, g.fillRect(W, pa, V - W, ma - pa))
                            }
                        }
                    }
                    g.lineWidth = 1;
                    g.strokeStyle = l.guiblack;
                    g.globalAlpha = .04;
                    g.beginPath();
                    x = 30 * c;
                    if (b.radial) {
                        k = 30 * Math.ceil(Math.sqrt(b.screenWidth * b.screenWidth + b.screenHeight * b.screenHeight) / c / c / 60) * c;
                        for (C = (b.screenWidth / 2 - q) % x - k; C < b.screenWidth + k; C += x) g.moveTo(C, -k), g.lineTo(C, k + b.screenHeight);
                        for (C = (b.screenHeight /
                                2 - y) % x - k; C < b.screenHeight + k; C += x) g.moveTo(-k, C), g.lineTo(k + b.screenWidth, C)
                    } else {
                        for (k = (b.screenWidth / 2 - q) % x; k < b.screenWidth; k += x) g.moveTo(k, 0), g.lineTo(k, b.screenHeight);
                        for (k = (b.screenHeight / 2 - y) % x; k < b.screenHeight; k += x) g.moveTo(0, k), g.lineTo(b.screenWidth, k)
                    }
                    g.stroke();
                    g.globalAlpha = 1;
                    b.radial && g.restore();
                    z.x = z.y = null;
                    if (b.radial) {
                        g.save();
                        g.translate(b.screenWidth / 2, b.screenHeight / 2);
                        x = Math.atan2(b.gameWidth / 2 - z.cx, b.gameHeight / 2 - z.cy);
                        var M = Math.cos(x);
                        var S = Math.sin(x);
                        g.rotate(x)
                    }
                    la.forEach(function(a) {
                        if (a.render.draws) {
                            if (1 ===
                                a.render.status.getFade()) {
                                var d = t();
                                a.render.x = d.predict(a.render.lastx, a.x, a.render.lastvx, a.vx);
                                a.render.y = d.predict(a.render.lasty, a.y, a.render.lastvy, a.vy);
                                a.render.f = d.predictFacing(a.render.lastf, a.facing)
                            } else d = t(a.render.lastRender, a.interval), a.render.x = d.predictExtrapolate(a.render.lastx, a.x, a.render.lastvx, a.vx), a.render.y = d.predictExtrapolate(a.render.lasty, a.y, a.render.lastvy, a.vy), a.render.f = d.predictFacingExtrapolate(a.render.lastf, a.facing);
                            a.id === A.playerid && 0 === (a.twiggle & 1) &&
                                (a.render.f = Math.atan2(ba.target.y, ba.target.x), b.radial && (a.render.f -= Math.atan2(b.gameWidth / 2 - z.cx, b.gameHeight / 2 - z.cy)), a.twiggle & 2 && (a.render.f += Math.PI));
                            d = c * a.render.x - q;
                            var e = c * a.render.y - y;
                            b.radial ? a.id === A.playerid && (z.x = d + b.screenWidth / 2, z.y = e + b.screenHeight / 2) : (d += b.screenWidth / 2, e += b.screenHeight / 2, a.id === A.playerid && (z.x = d, z.y = e));
                            ja(d, e, a, c, a.id === A.playerid || b.showInvisible ? a.alpha ? .6 * a.alpha + .4 : .25 : a.alpha, 0 === Q[a.index].shape ? 1 : D.graphical.compensationScale, a.render.f, !1, !0)
                        }
                    });
                    b.radial &&
                        g.restore();
                    if (!D.graphical.screenshotMode)
                        for (var T of la) x = c * T.render.x - q, k = c * T.render.y - y, b.radial ? (C = M * k + S * x, x = M * x - S * k + b.screenWidth / 2, k = C + b.screenHeight / 2) : (x += b.screenWidth / 2, k += b.screenHeight / 2), Wa(x, k, T, c, T.id === A.playerid ? 1 : T.alpha);
                    if (!b.hideGui) {
                        M = (a, c) => {
                            b.screenWidth /= a;
                            b.screenHeight /= a;
                            g.scale(a, a);
                            c || (h *= a)
                        };
                        M(h, !0);
                        A.__s.update();
                        S = Ma.get();
                        T = S.max;
                        do {
                            if (!b.showTree) break;
                            x = Q.find(b => "Basic" === b.name);
                            if (!x || !x.upgrades) break;
                            let a = [],
                                c = [],
                                d = (b, e, f, {
                                    index: g,
                                    tier: h = 0
                                }) => {
                                    a.push({
                                        x: b,
                                        y: e,
                                        colorIndex: f,
                                        index: g
                                    });
                                    let {
                                        upgrades: l
                                    } = Q[g];
                                    switch (h) {
                                        case 3:
                                            return {
                                                width: 1, height: 1
                                            };
                                        case 2:
                                            return l.forEach((a, c) => d(b, e + 2 + c, c, a)), c.push([{
                                                x: b,
                                                y: e
                                            }, {
                                                x: b,
                                                y: e + 1 + l.length
                                            }]), {
                                                width: 1,
                                                height: 2 + l.length
                                            };
                                        case 1:
                                        case 0: {
                                            let a = b;
                                            f = l.map((f, g) => {
                                                let n = 2 * (f.tier - h);
                                                f = d(b, e + n, g, f);
                                                c.push([{
                                                    x: b,
                                                    y: e + (0 === g ? 0 : 1)
                                                }, {
                                                    x: b,
                                                    y: e + n
                                                }]);
                                                g + 1 === l.length && c.push([{
                                                    x: a,
                                                    y: e + 1
                                                }, {
                                                    x: b,
                                                    y: e + 1
                                                }]);
                                                b += f.width;
                                                return f
                                            });
                                            return {
                                                width: f.map(b => b.width).reduce((b, a) => b + a, 0),
                                                height: 2 + Math.max(...f.map(b => b.height))
                                            }
                                        }
                                    }
                                };
                            x = d(0, 0,
                                0, {
                                    index: x.index
                                });
                            k = Math.min(.9 * b.screenWidth / x.width, .9 * b.screenHeight / x.height);
                            g.globalAlpha = .5;
                            g.fillStyle = l.guiwhite;
                            I(0, 0, b.screenWidth, b.screenHeight);
                            C = k - 4;
                            g.strokeStyle = l.black;
                            g.lineWidth = 2;
                            g.beginPath();
                            for (let [a, d] of c) E = b.screenWidth / 2 + (d.x - x.width / 2) * k + 1 + .5 * C, P = b.screenHeight / 2 + (d.y - x.height / 2) * k + 1 + .5 * C, g.moveTo(Math.round(b.screenWidth / 2 + (a.x - x.width / 2) * k + 1 + .5 * C) + .5, Math.round(b.screenHeight / 2 + (a.y - x.height / 2) * k + 1 + .5 * C) + .5), g.lineTo(Math.round(E) + .5, Math.round(P) + .5);
                            g.stroke();
                            for (let {
                                    x: c,
                                    y: d,
                                    colorIndex: f,
                                    index: h
                                } of a) E = b.screenWidth / 2 + (c - x.width / 2) * k + 2, P = b.screenHeight / 2 + (d - x.height / 2) * k + 2, g.globalAlpha = 1, g.fillStyle = e(f + 10), I(E, P, C, C), g.globalAlpha = .2, g.fillStyle = e(f), I(E, P, C, .6 * C), g.fillStyle = l.black, I(E, P + .6 * C, C, .4 * C), g.globalAlpha = 1, W = -Math.PI / 4, pa = F(h, A.color), V = Q[h].position, ma = .8 * C / V.axis, ja(E + .5 * C - ma * V.middle.x * Math.cos(W), P + .5 * C - ma * V.middle.x * Math.sin(W), pa, .5, 1, ma / pa.size * 2, W, !0), g.strokeStyle = l.black, g.lineWidth = 2, I(E, P, C, C, !0)
                        } while (0);
                        b.mobile && "joysticks" === ba.control &&
                            (x = Math.min(.6 * b.screenWidth, .12 * b.screenHeight), g.globalAlpha = .3, g.fillStyle = "#ffffff", g.beginPath(), g.arc(1 * b.screenWidth / 6, 2 * b.screenHeight / 3, x, 0, 2 * Math.PI), g.arc(5 * b.screenWidth / 6, 2 * b.screenHeight / 3, x, 0, 2 * Math.PI), g.fill());
                        b.mobile && M(1.4);
                        x = b.screenWidth / 2;
                        k = 20;
                        b.mobile && (k += (b.canSkill ? (200 / 3 + 20) / 1.4 * a.get() : 0) + (b.canUpgrade ? 120 / 1.4 * n.get() : 0));
                        for (C = fa.length - 1; 0 <= C; C--) E = fa[C], P = E.text, null == E.textobj && (E.textobj = B()), null == E.len && (E.len = Aa(P, 14)), g.globalAlpha = .5 * E.alpha, O(x - E.len / 2, x + E.len /
                            2, k + 9, 18, l.black), g.globalAlpha = Math.min(1, E.alpha), E.textobj.draw(P, x, k + 9, 14, l.guiwhite, "center", !0), k += 22, 1 < E.status && (k -= 22 * (1 - Math.sqrt(E.alpha))), 1 < E.status ? (E.status -= .05, E.alpha += .05) : 0 === C && (6 < fa.length || 1E4 < Date.now() - E.time - E.extratime) && (E.status -= .05, E.alpha -= .05, 0 >= E.alpha && fa.shift());
                        g.globalAlpha = 1; // broadcasts fa = []
                        b.mobile && M(1 / 1.4);
                        if (!b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap);
                            a.set(0 + (b.canSkill || b.died || b.statHover));
                            b.clickables.stat.hide();
                            let c = 200,
                                d = c,
                                e = -20 - 2 * c + a.get() * (40 + 2 * c),
                                f = b.screenHeight - 20 - 15,
                                n = 11,
                                k = A.getStatNames(Q[A.type].statnames || -1);
                            A.skills.forEach(function(a) {
                                n--;
                                let q = k[n - 1],
                                    w = a.amount,
                                    t = l[a.color];
                                var p = a.softcap;
                                a = a.cap;
                                if (p) {
                                    c = d;
                                    let k = D.gui.expectedMaxSkillLevel;
                                    var m = p < a;
                                    p > k && (k = p);
                                    O(e + 7.5, e - 7.5 + c * v(p), f + 7.5, 12 + D.graphical.barChunk, l.black);
                                    O(e + 7.5, e + 7.5 + (c - 35) * v(p), f + 7.5, 12, l.grey);
                                    O(e + 7.5, e + 7.5 + (c - 35) * v(w), f + 7.5, 11.5, t);
                                    if (m)
                                        for (g.lineWidth = 1, g.strokeStyle = l.grey, m = p + 1; m < k; m++) ta(e + (c - 35) * v(m), f + 1.5, e + (c - 35) * v(m), f - 3 + 15);
                                    g.strokeStyle = l.black;
                                    g.lineWidth =
                                        1;
                                    for (m = 1; m < w + 1; m++) ta(e + (c - 35) * v(m), f + 1.5, e + (c - 35) * v(m), f - 3 + 15);
                                    c = d * v(k);
                                    p = w === a ? t : !A.points || p !== a && w === p ? l.grey : l.guiwhite;
                                    U[n - 1].draw(q, Math.round(e + c / 2) + .5, f + 7.5, 10, p, "center", !0);
                                    K[n - 1].draw("[" + n % 10 + "]", Math.round(e + c - 3.75) - 1.5, f + 7.5, 10, p, "right", !0);
                                    p === l.guiwhite && b.clickables.stat.place(n - 1, e * h, f * h, c * h, 15 * h);
                                    w && r[n - 1].draw(p === t ? "MAX" : "+" + w, Math.round(e + c + 4) + .5, f + 7.5, 10, t, "left", !0);
                                    f -= 19
                                }
                            });
                            b.clickables.hover.place(0, 0, f * h, .8 * c * h, .8 * (b.screenHeight - f) * h);
                            1 < A.points && H.draw("x" + A.points,
                                Math.round(e + c - 2) + .5, Math.round(f + 15 - 4) + .5, 20, l.guiwhite, "right")
                        }
                        x = 25;
                        k = (b.screenWidth - 330) / 2;
                        C = b.screenHeight - 20 - x;
                        qa || b.mobile || !b.died || (C -= 110);
                        g.lineWidth = 1;
                        O(k, k + 330, C + x / 2, x - 3 + D.graphical.barChunk, l.black);
                        O(k, k + 330, C + x / 2, x - 3, l.grey);
                        O(k, k + 330 * A.__s.getProgress(), C + x / 2, x - 3.5, l.gold);
                        ca.draw("Level " + A.__s.getLevel() + " " + Q[A.type].name, k + 165, C + x / 2, x - 4, l.guiwhite, "center", !0);
                        x = 14;
                        C -= x + 4;
                        O(k + 33, k + 297, C + x / 2, x - 3 + D.graphical.barChunk, l.black);
                        O(k + 33, k + 297, C + x / 2, x - 3, l.grey);
                        O(k + 33, k + 330 * (.1 + .8 * (T ?
                            Math.min(1, A.__s.getScore() / T) : 1)), C + x / 2, x - 3.5, l.green);
                        R.draw("Score: " + J.formatLargeNumber(A.__s.getScore()), k + 165, C + x / 2, x - 2, l.guiwhite, "center", !0);
                        g.lineWidth = 4;
                        aa.draw(z.name, Math.round(k + 165) + .5, Math.round(C - 10 - 4) + .5, 32, l.guiwhite, "center");
                        b.mobile && M(.8);
                        C = 200 / b.gameWidth * b.gameHeight;
                        x = b.screenWidth - 20;
                        k = b.screenHeight - 20;
                        E = (a, c, d, f, h) => {
                            if (!b.radial) {
                                let b = ha[0].length,
                                    e = ha.length,
                                    h = d / b,
                                    l = f / e;
                                for (let d = 0; d < e; d++) {
                                    let e = ha[d];
                                    for (let f = 0; f < b; f++) g.globalAlpha = .6, g.fillStyle = w(e[f]), I(a + f *
                                        h, c + d * l, h, l)
                                }
                            }
                            g.globalAlpha = .3;
                            g.fillStyle = X(l.grey, l.vlgrey);
                            b.radial ? I(a + d / 2, c + f / 2, d / 2) : I(a, c, d, f);
                            for (let f of La.get()) g.fillStyle = X(e(f.color), l.black, .3), g.globalAlpha = f.alpha, 2 === f.type ? I(a + (f.x - f.size) / b.gameWidth * d - .4, c + (f.y - f.size) / b.gameWidth * d - 1, 2 * f.size / b.gameWidth * d + .2, 2 * f.size / b.gameWidth * d + .2) : 1 === f.type ? sa(a + f.x / b.gameWidth * d, c + f.y / b.gameWidth * d, f.size / b.gameWidth * d + .2) : f.id !== A.playerid && sa(a + f.x / b.gameWidth * d, c + f.y / b.gameWidth * d, h);
                            g.fillStyle = l.black;
                            g.globalAlpha = 1;
                            sa(a + z.cx /
                                b.gameWidth * d, c + z.cy / b.gameWidth * d, h);
                            g.strokeStyle = l.black;
                            g.lineWidth = 3;
                            b.radial ? sa(a + d / 2, c + f / 2, d / 2, !0) : I(a, c, d, f, !0)
                        };
                        b.mobile ? (x -= 200, P = (b.canSkill ? (200 / 3 + 40) * a.get() : 0) + (b.canUpgrade ? 140 * n.get() : 0), E(20, 20 + P, 200, C, 4)) : (x -= 200, k -= C, E(x, k, 200, C, 2));
                        C = k - 10;
                        E = N.latency.reduce((b, a) => b + a, 0) / N.latency.length;
                        P = Math.sqrt(z.vx * z.vx + z.vy * z.vy);
                        b.showDebug && (I(x, k - 40, 200, 30), p.addValue(d), p.draw(x, k - 40, 200, 30), f.addValue(P), f.draw(x, k - 40, 200, 30), u.addValue(N.rendergap), u.draw(x, k - 40, 200, 30), m.addValue(E),
                            m.draw(x, k - 40, 200, 30), C -= 40);
                        D.graphical.screenshotMode ? da[6].draw("WHYAREYOUPLAYINGTHIS", x + 200, C - 2, 15, l.guiwhite, "right") : (b.showDebug ? (da[6].draw("WHYAREYOUPLAYINGTHIS", x + 200, C - 84 - 2, 15, l.guiwhite, "right"), k = f.getPeriodicAverage(), da[5].draw("Tank Speed: " + P.toFixed(2) + " gu/s" + (k && .005 <= k ? ` (${k.toFixed(2)} gu/s)` : ""), x + 200, C - 70, 10, l.guiwhite, "right"), da[4].draw("Prediction: " + d.toFixed(3), x + 200, C - 56, 10, l.guiwhite, "right"), da[3].draw("Update Rate: " + N.updatetime + "Hz", x + 200, C - 42, 10, l.guiwhite, "right")) : da[6].draw("OAPP",
                            x + 200, C - 42 - 2, 15, l.guiwhite, "right"), da[2].draw("Client Speed: " + N.rendertime + " FPS", x + 200, C - 28, 10, 10 < N.rendertime ? l.guiwhite : l.orange, "right"), da[1].draw("Server Speed: " + (100 * A.fps).toFixed(2) + "%", x + 200, C - 14, 10, 1 === A.fps ? l.guiwhite : l.orange, "right"), da[0].draw(E.toFixed(1) + " ms  " + b.server.code + " :" + b.server.type + ":", x + 200, C, 10, l.guiwhite, "right"));
                        b.mobile && M(1.25);
                        b.mobile && M(1.4);
                        if (!D.graphical.screenshotMode) {
                            for (d = b.screenWidth - 200 - 20, x = 48, b.mobile && (x += (b.canSkill ? 200 / 3 / 1.4 * a.get() : 0) + (b.canUpgrade && 40 + 114 * A.upgrades.length > 1.4 * d ? 100 / 1.4 * n.get() : 0)), 0 < S.data.length && ka.draw("Leaderboard", Math.round(d + 100) + .5, Math.round(x - 10) + .5, 18, l.guiwhite, "center"), k = 0; k < S.data.length && (!b.mobile || 6 > k); k++) {
                              C = S.data[k], O(d, d + 200, x + 7, 11 + D.graphical.barChunk, l.black),
                                O(d, d + 200, x + 7, 11, l.grey),
                                O(d, d + 200 * Math.min(1, C.score / T), x + 7, 10.5, C.barColor);
                                if (C.name != 'hjsduhjdshjkbduhjkcfhdjb') na[k].draw(C.label + ": " + J.handleLargeNumber(Math.round(C.score)), d + 100, x + 7, 9, l.guiwhite, "center", !0),
                                E = 14 / C.position.axis, ja(d - 21 - E * C.position.middle.x * .707, x + 7 + E * C.position.middle.x *.707, C.image, 1 / E, 1, E * E / C.image.size, -Math.PI / 4, !0),
                                x += 18;
                            }
                        }
                        b.mobile && M(1 / 1.4); {
                            b.canUpgrade = 0 < A.upgrades.length && !(b.mobile && b.died);
                            n.set(+b.canUpgrade);
                            let a = n.get();
                            b.clickables.upgrade.hide();
                            if (b.canUpgrade) {
                                let c = 40 * a - 20,
                                    f = 20,
                                    n = c,
                                    k = 0,
                                    w = f;
                                ua += .01;
                                let q = 0;
                                let upgradeMockupSize = 0.9
                                let upgradeNameSize = 7.5
                                let upgradeBoxSize = 0.9
                                if (funnyvariablethatexistsiguess) console.log('---------------------')
                                A.upgrades.forEach(d => {
                                    f > w && (w = f);
                                    k = c;
                                    b.clickables.upgrade.place(q, (c*upgradeBoxSize) * h, (f*upgradeBoxSize) * h, (100*upgradeBoxSize) * h, (100*upgradeBoxSize) * h);
                                    var t = e(q % 9 + 10),
                                        p = e(q % 9);
                                    if (9 <= q) {
                                        let b = (q + Math.floor(q / 9)) % 9;
                                        t = X(t, e(b + 10));
                                        p = X(p, e(b))
                                    }
                                    if (funnyvariablethatexistsiguess) console.log('t = ' + t + ', p = ' + p + ', q = ' + q + ', initial t = ' + ((q < 9) ? (q % 9 + 10) : (((q + Math.floor(q / 9)) % 9)+10)) + ', initial p = ' + ((q < 9) ? (q % 9) : ((q + Math.floor(q / 9)) % 9)))
                                    g.globalAlpha = .5; // if you see this dont mind me im just trying to figure out how the fuck upgrade box colors work i actually have no damn clue
                                    g.fillStyle = t;
                                    I(c*upgradeBoxSize, f*upgradeBoxSize, 100 * upgradeBoxSize, 100 * upgradeBoxSize);
                                    g.globalAlpha = .1;
                                    g.fillStyle =
                                        p;
                                    I(c*upgradeBoxSize, f*upgradeBoxSize, 100 * upgradeBoxSize, 60 * upgradeBoxSize);
                                    g.fillStyle = l.black;
                                    I(c*upgradeBoxSize, (f*upgradeBoxSize) + (60 * upgradeBoxSize), 100 * upgradeBoxSize, 40 * upgradeBoxSize);
                                    g.globalAlpha = 1;
                                    t = F(d, A.color);
                                    d = Q[d].position;
                                    p = 60 / d.axis;
                                    ja((c*upgradeBoxSize) + (50 - p * d.middle.x * Math.cos(ua)) * upgradeBoxSize, (f*upgradeBoxSize) + (50 * upgradeBoxSize) - p * d.middle.x * Math.sin(ua), t, 1, 1, (p / t.size)*upgradeMockupSize, ua, !0);
                                    false ? (ia.get(q).draw(t.name, (c*upgradeBoxSize) + (50 * upgradeBoxSize), (f*upgradeBoxSize) + (100 - 6) * upgradeBoxSize, upgradeNameSize, l.guiwhite, "center"), oa.get(q).draw("", (c*upgradeBoxSize) + (100 - 4) * upgradeBoxSize, (f*upgradeBoxSize) + (100 - 6) * upgradeBoxSize, upgradeNameSize, l.guiwhite, "right")) : ia.get(q).draw(t.name, (c*upgradeBoxSize) + (50 * upgradeBoxSize), (f*upgradeBoxSize) + (100 - 6) * upgradeBoxSize, upgradeNameSize, l.guiwhite, "center");
                                    g.strokeStyle = l.black;
                                    g.globalAlpha = 1;
                                    g.lineWidth =
                                        3;
                                    I(c*upgradeBoxSize, f*upgradeBoxSize, 100 * upgradeBoxSize, 100 * upgradeBoxSize, !0);
                                    q++;
                                    0 !== q % 7 || b.mobile ? c += 114 * a : (c = n, f += 114)
                                });
                                if (funnyvariablethatexistsiguess) console.log('---------------------')
                                /*A.upgrades.forEach(d => {
                                    f > w && (w = f);
                                    k = c;
                                    b.clickables.upgrade.place(q, c * h, f * h, 100 * h, 100 * h);
                                    var t = e(q % 9 + 10),
                                        p = e(q % 9);
                                    if (9 <= q) {
                                        let b = (q + Math.floor(q / 9)) % 9;
                                        t = X(t, e(b + 10));
                                        p = X(p, e(b))
                                    }
                                    g.globalAlpha = .5;
                                    g.fillStyle = t;
                                    I(c, f, 100, 100);
                                    g.globalAlpha = .1;
                                    g.fillStyle =
                                        p;
                                    I(c, f, 100, 60);
                                    g.fillStyle = l.black;
                                    I(c, f + 60, 100, 40);
                                    g.globalAlpha = 1;
                                    t = F(d, A.color);
                                    d = Q[d].position;
                                    p = 60 / d.axis;
                                    ja(c + 50 - p * d.middle.x * Math.cos(ua), f + 50 - p * d.middle.x * Math.sin(ua), t, 1, 1, p / t.size, ua, !0);
                                    d = (b.help[`KEY_CHOOSE_${q+1}`] || "").toLowerCase().trim();
                                    !b.mobile && d ? (ia.get(q).draw(t.name, c + 45, f + 100 - 6, 9.5, l.guiwhite, "center"), oa.get(q).draw("[" + d + "]", c + 100 - 4, f + 100 - 6, 9.5, l.guiwhite, "right")) : ia.get(q).draw(t.name, c + 50, f + 100 - 6, 9.5, l.guiwhite, "center");
                                    g.strokeStyle = l.black;
                                    g.globalAlpha = 1;
                                    g.lineWidth =
                                        3;
                                    I(c, f, 100, 100, !0);
                                    q++;
                                    0 !== q % 6 || b.mobile ? c += 114 * a : (c = n, f += 114)
                                });*/
                                d = Aa("Don't Upgrade", 11*upgradeBoxSize) + 10;
                                S = (k + 100 + 14 + n - 15) / 2;
                                T = w + 100 + 14;
                                O((S*upgradeBoxSize) - d / 2, (S*upgradeBoxSize) + d / 2, (T*upgradeBoxSize) + 7, (14*upgradeBoxSize) + D.graphical.barChunk, l.black);
                                O((S*upgradeBoxSize) - d / 2, (S*upgradeBoxSize) + d / 2, (T*upgradeBoxSize) + 7, 14*upgradeBoxSize, l.white);
                                ra.draw("Don't Upgrade", S*upgradeBoxSize, (T*upgradeBoxSize) + 7, upgradeNameSize*(12/9.5), l.guiwhite, "center", !0);
                                b.clickables.skipUpgrades.place(0, ((S - d / 2)*upgradeBoxSize) * h, (T*upgradeBoxSize) * h, d * h, 14 * h)
                            } else b.clickables.upgrade.hide(), b.clickables.skipUpgrades.hide()
                        }
                        if (b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap) && !b.canUpgrade;
                            a.set(0 + (b.canSkill || b.died));
                            let c = a.get();
                            b.clickables.stat.hide();
                            let d = 200 / 3,
                                f = 40 * c - 20,
                                e = 0,
                                n = A.getStatNames(Q[A.type].statnames || -1);
                            b.canSkill && (A.skills.forEach((a, k) => {
                                let q = a.softcap;
                                if (!(0 >= q)) {
                                    var w = a.amount,
                                        t = l[a.color];
                                    a = a.cap;
                                    var p = n[9 - k].split(/\s+/),
                                        m = Math.floor(p.length / 2),
                                        [y, v] = 1 === p.length ? [p, null] : [p.slice(0, m), p.slice(m)];
                                    g.globalAlpha = .5;
                                    g.fillStyle = t;
                                    I(f, 20, 100, 2 * d / 3);
                                    g.globalAlpha = .1;
                                    g.fillStyle = l.black;
                                    I(f, 20 + 2 * d / 3 * 2 / 3, 100, 2 * d / 3 / 3);
                                    g.globalAlpha = 1;
                                    g.fillStyle = l.guiwhite;
                                    I(f, 20 + 2 * d / 3, 100, 1 * d / 3);
                                    g.fillStyle =
                                        t;
                                    I(f, 20 + 2 * d / 3, 100 * w / q, 1 * d / 3);
                                    g.strokeStyle = l.black;
                                    g.lineWidth = 1;
                                    for (p = 1; p < a; p++) m = f + p / q * 100, ta(m, 20 + 2 * d / 3, m, 20 + d);
                                    w === a || !A.points || q !== a && w === q || b.clickables.stat.place(9 - k, f * h, 20 * h, 100 * h, d * h);
                                    v ? (U[k].draw(v, f + 50, 20 + .55 * d, d / 6, l.guiwhite, "center"), U[k].draw(y, f + 50, 20 + .3 * d, d / 6, l.guiwhite, "center")) : U[k].draw(y, f + 50, 20 + .425 * d, d / 6, l.guiwhite, "center");
                                    0 < w && r[k].draw(w >= q ? "MAX" : "+" + w, Math.round(f + 50) + .5, 20 + 1.3 * d, d / 4, t, "center");
                                    g.strokeStyle = l.black;
                                    g.globalAlpha = 1;
                                    g.lineWidth = 3;
                                    ta(f, 20 + 2 * d / 3, f + 100,
                                        20 + 2 * d / 3);
                                    I(f, 20, 100, d, !0);
                                    f += 114 * c;
                                    e++
                                }
                            }), 1 < A.points && H.draw("x" + A.points, Math.round(f) + .5, 40.5, 20, l.guiwhite, "left"))
                        }
                        M(1 / h, !0)
                    }
                }
            })(),
            Za = (() => {
                var a = B(),
                    e = B(),
                    c = B(),
                    g = B(),
                    n = B(),
                    k = B(),
                    f = B();
                let w = () => {
                        let a = [Math.round(b.finalKills[0].get()), Math.round(b.finalKills[1].get()), Math.round(b.finalKills[2].get())];
                        var c = a[0] + .5 * a[1] + 3 * a[2];
                        let d = (0 === c ? "\ud83c\udf3c" : 4 > c ? "\ud83c\udfaf" : 8 > c ? "\ud83d\udca5" : 15 > c ? "\ud83d\udca2" : 25 > c ? "\ud83d\udd25" : 50 > c ? "\ud83d\udca3" : 75 > c ? "\ud83d\udc7a" : 100 > c ? "\ud83c\udf36\ufe0f" :
                            "\ud83d\udcaf") + " ";
                        if (0 === c) return d + "A true pacifist";
                        c = [];
                        a[0] && c.push(a[0] + " kills");
                        a[1] && c.push(a[1] + " assists");
                        a[2] && c.push(a[2] + " visitors defeated");
                        return d + c.join(" and ")
                    },
                    p = () => b.finalKillers.length ? "\ud83d\udd2a Succumbed to " + b.finalKillers.map(b => J.addArticle(Q[b].name)).join(" and ") : "\ud83e\udd37 Well that was kinda dumb huh";
                return () => {
                    G(l.black, .25);
                    let d = b.screenWidth / 2,
                        h = b.screenHeight / 2 - 50;
                    var q = F(A.type, A.color);
                    let t = Q[A.type].position,
                        m = 140 / t.axis;
                    ja(b.screenWidth / 2 - m * t.middle.x *
                        .707 - 190 - 70, b.screenHeight / 2 - 35 + m * t.middle.x * .707 - 10, q, 1.5, 1, .5 * m / q.realSize, -Math.PI / 4, !0);
                    a.draw("lol you died", d, h - 80, 8, l.guiwhite, "center");
                    e.draw("Level " + A.__s.getLevel() + " " + Q[A.type].name, d - 170, h - 30, 24, l.guiwhite);
                    c.draw("Final score: " + J.formatLargeNumber(Math.round(b.finalScore.get())), d - 170, h + 25, 50, l.guiwhite);
                    g.draw("\u231a Survived for " + J.timeForHumans(Math.round(b.finalLifetime.get())), d - 170, h + 55, 16, l.guiwhite);
                    n.draw(w(), d - 170, h + 77, 16, l.guiwhite);
                    k.draw(p(), d - 170, h + 99, 16, l.guiwhite);
                    q = Math.ceil((b.respawnOn - Date.now()) / 1E3);
                    f.draw(0 < q ? `You may respawn in ${q} second${1===q?"":"s"}` : "joysticks" === ba.control ? "Tap to respawn!" : "Press enter to respawn!", d, h + 125, 16, l.guiwhite, "center")
                }
            })();
        window.onbeforeunload = () => b.isInGame && !b.died ? !0 : null;
        window.$createProfile = (() => {
            var b = B();
            B();
            return (a, c = -1, d = 200, n = -Math.PI / 4) => {
                let h = g.canvas.width,
                    f = g.canvas.height,
                    k = g.canvas.width = d;
                d = g.canvas.height = d; - 1 === c ? g.clearRect(0, 0, k, d) : (g.fillStyle = l.white, g.fillRect(0, 0, k, d), g.globalAlpha = .5,
                    g.fillStyle = e(c + 10), I(0, 0, k, d), g.globalAlpha = .1, g.fillStyle = e(c), I(0, 0, k, .6 * d), g.fillStyle = l.black, I(0, .6 * d, k, .4 * d), g.globalAlpha = 1);
                let q = F(a, A.color);
                a = Q[a].position;
                let w = .6 * k / a.axis;
                ja(.5 * k - w * a.middle.x * Math.cos(n), .5 * d - w * a.middle.x * Math.sin(n), q, 1, 1, w / q.size, n, !0); - 1 !== c && (b.draw(q.name, .9 * k / 2, d - 6, d / 8 - 3, l.guiwhite, "center"), g.strokeStyle = l.black, g.globalAlpha = 1, g.lineWidth = 3, I(0, 0, k, d, !0));
                c = g.canvas.toDataURL();
                g.canvas.width = h;
                g.canvas.height = f;
                return c
            }
        })();
        const Ya = (() => {
                var a = B(),
                    e = B(); 
                B();
                var c = [
                    ["Tip: You can view and edit your keybinds in the options menu.", "Tip: You can play on mobile by just going to https://levijude.github.io/409-test-im-not-copying-oapp-i-promise/ on your phone!"],
                    ["Tip: You can have the shield and health bar be separated by going to the options menu.", "Tip: If arras is having a low frame rate, you can try enabling low graphics in the options menu.", "Tip: You can make traps rounded with the classic trap setting in the options menu.", "Tip: You can create your own private server with the template in the link on the options menu.",
                        "Tip: You can create your own theme with the custom theme maker in the link on the options menu."
                    ],
                    ["Teaming in FFA is frowned upon, but when taken to the extremes, you can be punished.", "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.", "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban."],
                    [
                      "Precision Sniper can hit Exploder pipe bombs for a massive explosion.",
                      "Precision Sniper bullets can be ricocheted off of Marksman coins to turn them into piercing projectiles that can deal massive damage to bosses with the right setup.",
                      "Die to a yellow destroyer crasher when you see one. Do it.",
                      "Some bosses drop several Flash Drives upon death. Touching a Flash Drive will unlock an unlockable tank for future use.",
                      "Demolitionist can punch multiple blocks with 1 punch.",
                      "Demolitionist can punch Marksman coins to shoot them towards a nearby target, dealing massive damage and shortening the punch cooldown.",
                      "Demolitionist can punch *any* blocks, not just its own. It can also punch Traps.",
                      "Traps, Blocks and projectiles ricocheted off of Marksman coins deal extra damage to rammers.",
                      "Glacier's Frostbite effect not only slows down targets, but also makes them take extra damage.",
                      "Applying Glacier's Frostbite effect to burning targets can deal massive damage. It doesnt work the other way around however.",
                      "Adhesive's drones will not explode if killed while preparing to explode.",
                      "Prions take extra damage while on fire.",
                      "Extirpator rotates faster with faster reload, so its best to avoid putting too much points into reload to make using it easier.",
                      "You can take advantage of Monorail's speed while riding across nodes by placing a node near you, a node far ahead and riding them for a short speed boost in the direction you're going.",
                      "Precision Sniper becomes stronger the more shots you land accurately in a row.",
                      "Shift can be used as an alternative to Right Clicking.",
                      "Traps deal extra damage to rammers, and Drones deal extra damage to traps.",
                      "Shooting a Marksman coin into a bullet will buff the bullet more than if you were to shoot said bullet at a coin, however it will also make it take longer to regenerate the next coin.",
                      "Regulus has no cap as to how much it can charge its bullets, however charging for a long time will have diminishing returns.",
                      "Constructivist's mining bullets have a per-hit chance to mine something, meaning the more rocks they bounce off of the more resources they'll mine on average.",
                      "Shortening your flame as Blowtorch will make it deal more damage.",
                      "Retreater's thrusters are significantly more powerful than its main gun.",
                    ],
                    [
                      "It is rumoured that one day a grey rectangle from another dimension entered the arena. Nobody knows if thats actually true or not.",
                      "Helvetea rules over most of the polygons.",
                      "MD-1, MD-2 and MD-3 are the same entity from different time periods.",
                      "Mediators are the most technologically advanced polygons.",
                      "The Gammaccelerator, Hepton and Octancher are from another dimension.",
                      "There exists a void dimension which is connected to every dimension and is used by several entities to travel between dimensions.",
                      "Bots were created by the Mediators to spy on tanks.",
                      "Attack mode takes place in the far future.",
                      "Tanks and Polygons were at war for most of their existence.",
                      "The home dimension of the Gammaccelerator, Hepton and Octancher is long gone.",
                      "Elite Crashers are crashers that have been captured by the mediators and turned into killing machines.",
                      "The first Tank was created due to an oversized Egg fusing with a Square.",
                      "The first Tank was able to duplicate and evolve like a Polygon.",
                      "The first Mediators evolved from a group of triangles that isolated themselves from most other things.",
                      "Oversized polygons used to be very common before the tanks made most of them go extinct.",
                      "Alpha and Beta pentagons are the only oversized polygons that weren't driven to extinction by the tanks.",
                      "Everything in OAPP is mechanical.",
                      "MD-3 rules over all of the Mediators.",
                      "Eradicators were created by the Mediators as war machines in an attempt to wipe out the tanks and polygons.",
                      "Mediators are trained for long periods of time before they can participate in Mediator Raids.",
                      "The Nest Keeper is an ancient being that protects Beta and Alpha pentagons, and is the reason why they haven't gone extinct.",
                      "The origins of STR-1 and Nebula are unknown.",
                      "Bunsen and Instant were created by the tanks to fight off the Gammaccelerator, Hepton and Octancher when they first invaded.",
                      "The Heptagons accepted Hepton as their commander not long after it, the Gammaccelerator and Octancher invaded.",
                      "Somewhere in the void exists a highly uninhabitable rogue planet named Fieros with abnormally high amounts of chemicals and elements that are extremely rare elsewhere, with some not even existing naturally outside of it.",
                    ]
                ];
                c = c[Math.floor(Math.random() *
                    c.length)];
                let g = c[Math.floor(Math.random() * c.length)];
                return () => {
                    G(l.white, .5);
                    a.draw("Connecting...", b.screenWidth / 2, b.screenHeight / 2, 30, l.guiwhite, "center");
                    e.draw(b.message, b.screenWidth / 2, b.screenHeight / 2 + 30, 15, l.lgreen, "center");
                    if (g.length <= 100) {e.draw(g, b.screenWidth / 2, b.screenHeight / 2 + 75, 15, l.guiwhite, "center")
                    } else {
                      let words = g.split(" ")
                        let message = ""
                        let line = 0
                        if (words.length > 1) {
                          for (let i = 0; i<words.length; i++) {
                            message = message + words[i]
                            if (i < words.length - 1) {
                              message = message + ' '
                            } else if (message.length <= 130) {
                              e.draw(message, b.screenWidth / 2, b.screenHeight / 2 + 75 + (20*line), 15, l.guiwhite, "center")
                            }
                            if (message.length > 130) {
                              e.draw(message, b.screenWidth / 2, b.screenHeight / 2 + 75 + (20*line), 15, l.guiwhite, "center")
                              line++
                              message = ""
                            }
                          }
                        }
                    }
                }
            })(),
            $a = (() => {
                var a = B(),
                    e = B();
                return () => {
                    G(X(l.red, l.guiblack, .3), .25);
                    a.draw("\ud83d\udc80 Disconnected \ud83d\udc80", b.screenWidth / 2, b.screenHeight / 2, 30, l.guiwhite, "center");
                    e.draw(b.message, b.screenWidth /
                        2, b.screenHeight / 2 + 30, 15, l.orange, "center")
                }
            })();
        let Ua = b.mobile ? 0 : Math.max(0, 1 - Math.abs(Date.now() - new Date(2019, 11, 25)) / 20736E5);
        if (Ua) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [],
                g = () => {
                    a.width !== window.innerWidth && (a.width = window.innerWidth);
                    a.height !== window.innerHeight && (a.height = window.innerHeight);
                    e.clearRect(0, 0, a.width, a.height);
                    e.fillStyle = "#ffffff";
                    for (let b of c) {
                        b.x +=
                            5 / b.r + Math.random();
                        b.y += 12.5 / b.r + Math.random();
                        let c = 2 * Math.min(.4, .9 - b.y / a.height);
                        0 < c ? (e.globalAlpha = c, e.beginPath(), e.arc(b.x, b.y, b.r, 0, 2 * Math.PI), e.fill()) : b.gone = !0
                    }
                    .001 * a.width * Ua > Math.random() && c.push({
                        x: a.width * (1.5 * Math.random() - .5),
                        y: -50 - 100 * Math.random(),
                        r: 2 + Math.random() * Math.random() * 4
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(g)
                };
            setInterval(() => {
                c = c.filter(b => !b.gone)
            }, 2E3);
            g()
        }
        let ka = new Date,
            ib = "en-US" === navigator.language && -7 <= b.timezone && -4 >= b.timezone,
            plCheck = Intl.DateTimeFormat().resolvedOptions().timeZone == "Europe/Warsaw",
            ptCheck = Intl.DateTimeFormat().resolvedOptions().timeZone == "Europe/Lisbon" || Intl.DateTimeFormat().resolvedOptions().timeZone == "Atlantic/Madeira" || Intl.DateTimeFormat().resolvedOptions().timeZone == "Atlantic/Azores",
            jb = 6 === ka.getMonth() && 4 === ka.getDate(),
            kb = 11 === ka.getMonth() && 31 === ka.getDate() || 0 === ka.getMonth() && 3 >= ka.getDate(),
            basedDay = 7 === ka.getMonth() && 9 === ka.getDate(),
            basedDay2 = 9 === ka.getMonth() && (3 === ka.getDate() || 4 === ka.getDate()),
            hyperBasedDay = 2 === ka.getMonth() && 16 === ka.getDate(),
            plMCD = 4 === ka.getMonth() && 3 === ka.getDate(),
            ptRoI = 11 === ka.getMonth() && 1 === ka.getDate(),
            ptRD = 9 === ka.getMonth() && 5 === ka.getDate();
        if (!b.mobile && (jb && ib || kb || basedDay || hyperBasedDay || basedDay2 || (plMCD && plCheck) || (ptRoI && ptCheck) || (ptRD && ptCheck))) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [
                    [164, 14, 14],
                    [230, 80, 0],
                    [230, 119, 0],
                    [47, 127, 51],
                    [23, 78, 166],
                    [123, 31, 163]
                ],
                g = [],
                k = () => {
                    if (a.width !== window.innerWidth || a.height !== window.innerHeight) a.width = window.innerWidth, a.height = window.innerHeight, g.length = 0, e.clearRect(0,
                        0, a.width, a.height), e.fillStyle = "rgba(255, 255, 255, 0.01)", e.fillRect(0, 0, a.width, a.height), e.lineWidth = 2.5, e.lineCap = "round";
                    e.globalCompositeOperation = "destination-out";
                    e.fillStyle = "rgba(0, 0, 0, 0.15)";
                    e.fillRect(0, 0, a.width, a.height);
                    e.globalCompositeOperation = "lighter";
                    for (let b of g) {
                        var d = b.x,
                            f = b.y;
                        b.vy += .2;
                        b.x += b.vx;
                        b.y += b.vy;
                        b.vy *= .99;
                        b.vx *= .99;
                        b.time--;
                        var h = 0 < b.time ? b.primary ? 1 : 10 <= b.time ? 1 : b.time / 10 : 0;
                        if (0 < h) e.strokeStyle = `rgba(${b.color[0]}, ${b.color[1]}, ${b.color[2]}, ${h})`, e.beginPath(),
                            e.moveTo(d, f), e.lineTo(b.x, b.y), e.stroke();
                        else {
                            if (b.primary && !b.gone) {
                                d = Math.floor(5 * Math.random()) + 30;
                                f = .5 * Math.random() + 3;
                                h = 25 + 5 * Math.random();
                                for (let a of [c[Math.floor(Math.random() * c.length)], c[Math.floor(Math.random() * c.length)]])
                                    for (let c = 0; c < d; c++) {
                                        let e = (c + Math.random()) / d * Math.PI * 2,
                                            k = f + .5 * Math.random();
                                        g.push({
                                            color: a,
                                            x: b.x,
                                            y: b.y,
                                            vx: Math.cos(e) * k,
                                            vy: -.8 + Math.sin(e) * k,
                                            time: h + 2 * Math.random()
                                        })
                                    }
                            }
                            b.gone = !0
                        }
                    }
                    3E-5 * a.width > Math.random() && g.push({
                        color: c[Math.floor(Math.random() * c.length)],
                        x: a.width *
                            Math.random(),
                        y: a.height - 10,
                        vx: 4 * Math.random() - 2,
                        vy: 5 * Math.random() - 15,
                        time: 30 + 10 * Math.random(),
                        primary: !0
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(k)
                };
            setInterval(() => {
                g = g.filter(b => !b.gone)
            }, 2E3);
            k()
        }
    }, function(r) {
        const m = {
            openshift: (a, e) => `n-${a}-${e}.7e14.starter-us-west-2.openshiftapps.com`,
            glitch: a => `${a}.glitch.me`,
            heroku: a => `${a}.herokuapp.com`,
            digitalocean: a => `${a}.ondigitalocean.app`,
            arras: (a, e = 5E3) => `ip-${a}.arras.io:${e}`,
            arrasUnknown: (a, e = 5E3) => `ipu-${a}.arras.io:${e}`
        };
        var u = (new Date).getDate();
        const a =
            25 <= u ? 3 : 0;
        u = 25 <= u ? 0 : 3;
        const e = {
            help: {
                KEY_OVER_RIDE: "R",
                KEY_LEVEL_UP: "N",
                KEY_ABILITY: "F",
                KEY_CHOOSE_1: "Y",
                KEY_CHOOSE_2: "U",
                KEY_CHOOSE_3: "I",
                KEY_CHOOSE_4: "H",
                KEY_CHOOSE_5: "J",
                KEY_CHOOSE_6: "K"
            },
            KEY_AUTO_FIRE: 69,
            KEY_AUTO_SPIN: 67,
            KEY_OVER_RIDE: 82,
            KEY_LEVEL_UP: 78,
            KEY_ABILITY: 70,
            KEY_REVERSE_TANK: 86,
            KEY_REVERSE_MOUSE: 66,
            KEY_SCREENSHOT: 81,
            KEY_UPGRADE_MAX: 77,
            KEY_CLASS_TREE: 84,
            KEY_RECORD: 90,
            KEY_UP: 87,
            KEY_PING: 76,
            KEY_LEFT: 65,
            KEY_DOWN: 83,
            KEY_RIGHT: 68,
            KEY_CHOOSE_1: 89,
            KEY_CHOOSE_2: 85,
            KEY_CHOOSE_3: 73,
            KEY_CHOOSE_4: 72,
            KEY_CHOOSE_5: 74,
            KEY_CHOOSE_6: 75,
            KEY_CHOOSE_7: -1,
            KEY_CHOOSE_8: -1,
            KEY_CHOOSE_9: -1,
            KEY_ENTER: 13,
            KEY_SPAWN: 13,
            KEY_LEFT_ARROW: 37,
            KEY_UP_ARROW: 38,
            KEY_RIGHT_ARROW: 39,
            KEY_DOWN_ARROW: 40,
            KEY_UPGRADE_ATK: 49,
            KEY_UPGRADE_HTL: 50,
            KEY_UPGRADE_SPD: 51,
            KEY_UPGRADE_STR: 52,
            KEY_UPGRADE_PEN: 53,
            KEY_UPGRADE_DAM: 54,
            KEY_UPGRADE_RLD: 55,
            KEY_UPGRADE_MOB: 56,
            KEY_UPGRADE_RGN: 57,
            KEY_UPGRADE_SHI: 48,
            KEY_MOUSE_0: 32,
            KEY_MOUSE_1: 9,
            KEY_MOUSE_2: 16,
            KEY_FUCK_YOU: 192,
            KEY_KILL_YOURSELF: 79,
            KEY_HECCERY: 80,
            KEY_HECCERY2: 88,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            gameWidth: 0,
            gameHeight: 0,
            gameStart: !1,
            disconnected: !1,
            died: !1,
            showDebug: !1,
            showTree: !1,
            server: null,
            codeTable: [{
                    z: "Private",
                    local: "Local",
                    dvi: "DVI", // WHY
                    glitch: "Glitch", // THE
                    os: "OpenShift", // FUCK
                    heroku: "Heroku", // DO
                    linode: "Linode", // ALL
                    vultr: "Vultr", // OF
                    buyvm: "BuyVM", // THESE
                    extravm: "ExtraVM", // SUCK
                    hetzner: "Hetzner", // COMPLETE
                    ovh: "OVH", // GODDAMN
                    ecan: "ECAN", // FUCKING
                    digitalocean: "DigitalOcean", // GARBAGE?!?!?!?!?!?!?!?!?
                }, {
                    unknown: ["Unknown", null],
                    local: ["Local", null],
                    virginia: ["US East", -4],
                    montreal: ["US East", -4],
                    newyork: ["US East", -4],
                    oregon: ["US West", -7],
                    frankfurt: ["Europe", 2],
                    ireland: ["Europe", 2],
                    sv: ["US West", -7],
                    la: ["US West", -7],
                    germany: ["Europe", 2],
                    london: ["Europe", 1],
                    singapore: ["Asia", 8]
                },
                [
                    [{
                        id: "p",
                        to: "Private"
                    }],
                    [{
                        id: "e",
                        dynamic: "word"
                    }],
                    [{
                        id: "w",
                        dynamic: "words"
                    }],
                    [{
                        id: "o",
                        to: "Open"
                    }],
                    [{
                        id: "m",
                        to: "Maze",
                        delay: !0,
                        remove: "f"
                    }],
                    [{
                        id: "f",
                        to: "FFA"
                    }, {
                        id: "2",
                        to: "2 Team",
                        end: "2TDM"
                    }, {
                        id: "3",
                        to: "3 Team",
                        end: "3TDM"
                    }, {
                        id: "4",
                        to: "4 Team",
                        end: "4TDM"
                    }],
                    [{
                        id: "d",
                        to: "Domination"
                    }, {
                        id: "m",
                        to: "Mothership",
                        remove: "2"
                    }, {
                        id: "a",
                        to: "Assault",
                        remove: "2"
                    }, {
                        id: "s",
                        to: "Survival"
                    }, {
                        id: "T",
                        to: "Testing"
                    }, {
                        id: "A",
                        to: "Attack"
                    }, {
                        id: "ca",
                        to: "crasher apocalypse"
                    }, {
                        id: "b",
                        to: "Base Infiltration"
                    }, /*{
                        id: "!",
                        to: "2TDM/Domination"
                    },  {
                        id: "@",
                        to: "Attack/Base Infil."
                    },*/ ]
                ]
            ],
            timezone: (new Date).getTimezoneOffset() / -60,
            servers: [{
                    id: "z",
                    type: "0unk",
                    code: "z-unknown-pe6server",
                    at: "private",
                    untrusted: !0
                },
                {
                    visible: 2,
                    id: "x",
                    type: "0unk",
                    code: "local-local-e9localhost",
                    at: "localhost:8080",
                    secure: -1
                }, {
                    visible: 0,
                    id: "testing",
                    type: "testing",
                    code: "glitch-la-T",
                    at: m.glitch("oapp-official-server-template"),
                    //secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "ffa",
                    type: "ffa",
                    code: "digitalocean-newyork-f",
                    at: m.digitalocean("giga-test-fqe7u")
                }, {
                    visible: 0,
                    id: "2tdm",
                    type: "2tdm",
                    code: "glitch-la-2",
                    at: m.glitch("oapp-server3")
                }, {
                    visible: 0,
                    id: "dom",
                    type: "domination",
                    code: "glitch-la-d",
                    at: m.glitch("oapp-server4")
                },{
                    visible: 0,
                    id: "attack",
                    type: "attack",
                    code: "glitch-la-A",
                    at: m.glitch("oapp-server2")
                }, {
                    visible: 0,
                    id: "bi",
                    type: "bi",
                    code: "glitch-la-b",
                    at: m.glitch("oapp-server5")
                }/*, {
                    visible: 2,
                    id: "maze",
                    type: "maze",
                    code: "ecan-unknown-m",
                    at: "goku.ecansol.com:8080"
                }*/
            ].map((a, e) => ({
                data: a,
                i: e
            })).sort((a, e) => a.data.type < e.data.type ? -1 : a.i - e.i).map(({
                data: a
            }) => a),
            partyLink: 0,
            mobile: "ontouchstart" in document.body && /android|mobi/i.test(navigator.userAgent),
            showInvisible: !1
        };
        window.Arras = (a = !0) => a || e;
        r.exports = e
    }, function(r, m) {
        let u = window.localStorage || {};
        m.submitToLocalStorage = a => {
            u[a + "Value"] = document.getElementById(a).value || "";
            u[a +
                "Checked"] = document.getElementById(a).checked || "false";
            return !1
        };
        m.retrieveFromLocalStorage = (a, e = !1) => {
            document.getElementById(a).value = u[a + "Value"] || "";
            document.getElementById(a).checked = "true" === (u[a + "Checked"] || e.toString());
            return !1
        };
        m.handleLargeNumber = (a, e = !1) => e && 0 >= a ? "" : 1E3 > a ? a.toFixed(0) + "" : 1E6 > a ? (a / 1E3).toFixed(2) + "k" : 1E9 > a ? (a / 1E6).toFixed(2) + "m" : 1E12 > a ? (a / 1E9).toFixed(2) + "b" : 1E15 > a ? (a / 1E12).toFixed(2) + "t" : 1E18 > a ? (a / 1E15).toFixed(2) + "q" : "\u221e";
        m.timeForHumans = a => {
            function e(a, e) {
                a && (F =
                    F + ("" === F ? "" : ", ") + a + " " + e + (1 < a ? "s" : ""))
            }
            let m = a % 60;
            a = Math.floor(a / 60);
            let w = a % 60;
            a = Math.floor(a / 60);
            let n = a % 24;
            a = Math.floor(a / 24);
            let F = "";
            if (300 < a) return "eternity";
            e(a, "day");
            e(n, "hour");
            e(w, "minute");
            e(m, "second");
            "" === F && (F = "less than a second");
            return F
        };
        m.addArticle = a => /^\s*[aeiouAEIOU]/.test(a) ? "an " + a : "a " + a;
        m.formatLargeNumber = a => 1E18 > a ? a.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "\u221e";
        m.pullJSON = a => {
            if (window.fetch) return fetch(a, {
                cache: "no-cache"
            }).then(a => a.json());
            let e = new XMLHttpRequest;
            console.log("Loading JSON from " + a);
            e.responseType = "json";
            return new Promise((m, w) => {
                e.open("GET", a);
                e.onload = () => {
                    m(e.response);
                    console.log("JSON load complete.")
                };
                e.onerror = () => {
                    w(e.statusText);
                    console.log("JSON load failed.");
                    console.log(e.statusText)
                };
                e.send()
            })
        }
    }, function(r, m) {
        (function(u) {
            function a(a) {
                function e() {
                    setTimeout(function() {
                        !0 === w._options.checkOnLoad && (!0 === w._options.debug && w._log("onload->eventCallback", "A check loading is launched"), null === w._var.bait && w._creatBait(), setTimeout(function() {
                                w.check()
                            },
                            1))
                    }, 1)
                }
                this._options = {
                    checkOnLoad: !1,
                    resetOnEnd: !1,
                    loopCheckTime: 50,
                    loopMaxNumber: 5,
                    baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                    baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                    debug: !1
                };
                this._var = {
                    version: "3.2.1",
                    bait: null,
                    checking: !1,
                    loop: null,
                    loopNumber: 0,
                    event: {
                        detected: [],
                        notDetected: []
                    }
                };
                void 0 !== a && this.setOption(a);
                var w = this;
                void 0 !== u.addEventListener ?
                    u.addEventListener("load", e, !1) : u.attachEvent("onload", e)
            }
            a.prototype._options = null;
            a.prototype._var = null;
            a.prototype._bait = null;
            a.prototype._log = function(a, m) {
                console.log("[BlockAdBlock][" + a + "] " + m)
            };
            a.prototype.setOption = function(a, m) {
                if (void 0 !== m) {
                    var e = a;
                    a = {};
                    a[e] = m
                }
                for (var n in a) this._options[n] = a[n], !0 === this._options.debug && this._log("setOption", 'The option "' + n + '" he was assigned to "' + a[n] + '"');
                return this
            };
            a.prototype._creatBait = function() {
                var a = document.createElement("div");
                a.setAttribute("class",
                    this._options.baitClass);
                a.setAttribute("style", this._options.baitStyle);
                this._var.bait = u.document.body.appendChild(a);
                this._var.bait.offsetParent;
                this._var.bait.offsetHeight;
                this._var.bait.offsetLeft;
                this._var.bait.offsetTop;
                this._var.bait.offsetWidth;
                this._var.bait.clientHeight;
                this._var.bait.clientWidth;
                !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
            };
            a.prototype._destroyBait = function() {
                u.document.body.removeChild(this._var.bait);
                this._var.bait = null;
                !0 === this._options.debug &&
                    this._log("_destroyBait", "Bait has been removed")
            };
            a.prototype.check = function(a) {
                void 0 === a && (a = !0);
                !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") + " loop");
                if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
                this._var.checking = !0;
                null === this._var.bait && this._creatBait();
                var e = this;
                this._var.loopNumber = 0;
                !0 === a && (this._var.loop = setInterval(function() {
                        e._checkBait(a)
                    },
                    this._options.loopCheckTime));
                setTimeout(function() {
                    e._checkBait(a)
                }, 1);
                !0 === this._options.debug && this._log("check", "A check is in progress ...");
                return !0
            };
            a.prototype._checkBait = function(a) {
                var e = !1;
                null === this._var.bait && this._creatBait();
                if (null !== u.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 == this._var.bait.offsetHeight || 0 == this._var.bait.offsetLeft || 0 == this._var.bait.offsetTop || 0 == this._var.bait.offsetWidth || 0 == this._var.bait.clientHeight || 0 == this._var.bait.clientWidth) e = !0;
                if (void 0 !== u.getComputedStyle) {
                    var w = u.getComputedStyle(this._var.bait, null);
                    !w || "none" != w.getPropertyValue("display") && "hidden" != w.getPropertyValue("visibility") || (e = !0)
                }!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === e ? "positive" : "negative"));
                !0 === a && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber &&
                    this._stopLoop());
                if (!0 === e) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === a && (this._var.checking = !1);
                else if (null === this._var.loop || !1 === a) this._destroyBait(), this.emitEvent(!1), !0 === a && (this._var.checking = !1)
            };
            a.prototype._stopLoop = function() {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0;
                !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
            };
            a.prototype.emitEvent = function(a) {
                !0 === this._options.debug && this._log("emitEvent", "An event with a " +
                    (!0 === a ? "positive" : "negative") + " detection was called");
                a = this._var.event[!0 === a ? "detected" : "notDetected"];
                for (var e in a)
                    if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(e) + 1) + "/" + a.length), a.hasOwnProperty(e)) a[e]();
                !0 === this._options.resetOnEnd && this.clearEvent();
                return this
            };
            a.prototype.clearEvent = function() {
                this._var.event.detected = [];
                this._var.event.notDetected = [];
                !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
            };
            a.prototype.on =
                function(a, m) {
                    this._var.event[!0 === a ? "detected" : "notDetected"].push(m);
                    !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
                    return this
                };
            a.prototype.onDetected = function(a) {
                return this.on(!0, a)
            };
            a.prototype.onNotDetected = function(a) {
                return this.on(!1, a)
            };
            m.BlockAdBlock = a;
            m.blockAdBlock = new a({
                checkOnLoad: !0,
                resetOnEnd: !0
            })
        })(window)
    }, function(r) {
        const m = class {
            static now() {
                return Math.min(Math.floor(Date.now() / 2E3) - 757382400, 268435455)
            }
            constructor() {
                this.reset();
                setInterval(() => {
                    this.logOnLine(!!navigator.onLine)
                }, 2E3)
            }
            reset() {
                function a() {}
                this.startTime = m.now();
                this.event = {
                    die: 0,
                    disconnect: 0
                };
                this.mouse = {
                    status: !0,
                    updates: [0, 0, 0, 0, 0, 0, 0]
                };
                this.onLine = {
                    status: !!navigator.onLine,
                    updates: [0, 0, 0, 0]
                };
                this.consoleOpened = this.closeCall = !1;
                let e = new Image;
                Object.defineProperty(e, "id", {
                    get: () => {
                        this.consoleOpened = !0;
                        return ""
                    }
                });
                a.toString = () => {
                    this.consoleOpened = !0;
                    return "color:rgba(0,0,0,0)"
                };
                setTimeout(console.log.bind(null, "%c%s", a, e))
            }
            time() {
                return Math.min(m.now() -
                    this.startTime, 65535)
            }
            logEvent(a) {
                this.event[a] = this.time()
            }
            logMouse(a) {
                this.mouse.status !== a && (this.mouse.status = a, this.mouse.updates.shift(), this.mouse.updates.push(this.time()))
            }
            logOnLine(a) {
                this.onLine.status !== a && (this.onLine.status = a, this.onLine.updates.shift(), this.onLine.updates.push(this.time()))
            }
            logCloseCall() {
                this.closeCall = !0
            }
            toBits() {
                let a = [this.mouse.status, this.onLine.status, this.closeCall, this.consoleOpened];
                var e = this.startTime;
                for (let m = 0; 28 > m; m++) a.push(!!(e & 1)), e >>= 1;
                for (let m of [this.event.die,
                        this.event.disconnect, ...this.mouse.updates, ...this.onLine.updates, this.time()
                    ])
                    for (e = 0; 16 > e; e++) a.push(!!(m & 1)), m >>= 1;
                return a
            }
            drawCanvas(a) {
                let {
                    width: e,
                    height: m
                } = a.canvas, w = a.getImageData(0, 0, e, m), {
                    data: n
                } = w, F = this.toBits(), u = [];
                for (var k = 0; 16 > k; k++) {
                    var r = !1;
                    for (var v = 0; 16 > v; v++) F[k + 16 * v] && (r = !r);
                    u.push(r)
                }
                k = [];
                for (r = 0; 16 > r; r++) {
                    v = !1;
                    for (var p = 0; 16 > p; p++) F[p + 16 * r] && (v = !v);
                    k.push(v)
                }
                r = !0;
                for (v = 0; 256 > v; v++) F[v] && (r = !r);
                v = -Math.floor(8 * Math.random());
                for (p = v; p < e; p += 4)
                    for (let a = v; a < e; a += 4) {
                        let w =
                            Math.floor(p / 4) % 32,
                            m = Math.floor(a / 4) % 32;
                        17 < w || 17 < m || (33 !== w + m && (16 === w || 16 === m || (17 === w ? 17 === m ? r : k[m] : 17 === m ? u[w] : F[w + 16 * m])) ? (n[p + a * e << 2 | 0] |= 1, n[p + a * e << 2 | 1] |= 1, n[p + a * e << 2 | 2] &= -2, n[p + 1 + a * e << 2 | 0] |= 1, n[p + 1 + a * e << 2 | 1] |= 1, n[p + 1 + a * e << 2 | 2] &= -2, n[p + a * e + e << 2 | 0] |= 1, n[p + a * e + e << 2 | 1] |= 1, n[p + a * e + e << 2 | 2] &= -2, n[p + 1 + a * e + e << 2 | 0] |= 1, n[p + 1 + a * e + e << 2 | 1] |= 1, n[p + 1 + a * e + e << 2 | 2] &= -2) : (n[p + a * e << 2 | 0] &= -2, n[p + a * e << 2 | 1] &= -2, n[p + a * e << 2 | 2] |= 1, n[p + 1 + a * e << 2 | 0] &= -2, n[p + 1 + a * e << 2 | 1] &= -2, n[p + 1 + a * e << 2 | 2] |= 1, n[p + a * e + e << 2 | 0] &= -2, n[p + a * e +
                            e << 2 | 1] &= -2, n[p + a * e + e << 2 | 2] |= 1, n[p + 1 + a * e + e << 2 | 0] &= -2, n[p + 1 + a * e + e << 2 | 1] &= -2, n[p + 1 + a * e + e << 2 | 2] |= 1))
                    }
                a.putImageData(w, 0, 0)
            }
        };
        let u = new m;
        u.Tracker = m;
        r.exports = u
    }, function(r, m, u) {
        let a = u(1),
            e = u(4);
        class K {
            constructor() {
                this.target = {
                    x: 0,
                    y: 0
                };
                this.socket = null;
                this.cheating = this.statMaxing = !1;
                let e = document.getElementById("gameCanvas");
                e.width = a.screenWidth;
                e.height = a.screenHeight;
                this.cv = e
            }
            init(a, e) {
                this.control = a;
                this.socket = e;
                e = this.cv;
                "joysticks" === a ? (this.movementTouch = this.controlTouch = null, this.movementRight =
                    this.movementLeft = this.movementBottom = this.movementTop = !1, e.addEventListener("touchstart", a => this.touchStart(a), !1), e.addEventListener("touchmove", a => this.touchMove(a), !1), e.addEventListener("touchend", a => this.touchEnd(a), !1), e.addEventListener("touchcancel", a => this.touchEnd(a), !1)) : (e.addEventListener("mousedown", a => this.mouseDown(a), !1), e.addEventListener("mousemove", a => this.mouseMove(a), !1), e.addEventListener("mouseup", a => this.mouseUp(a), !1));
                e.addEventListener("keydown", a => this.keyboardDown(a),
                    !1);
                e.addEventListener("keyup", a => this.keyboardUp(a), !1);
                this.autoUpgrade()
            }
            autoUpgrade() {
                if (a.autoLevel) var e = 60,
                    n = setInterval(() => {
                        this.socket.talk("L");
                        0 >= --e && clearInterval(n)
                    }, 100)
            }
            emit(a) {
                this.socket.talk(a)
            }
            talk(a, e) {
                this.socket.talk(a, e)
            }
            spawn(a) {
                this.socket.talk("s", a, -1);
                e.reset();
                this.autoUpgrade()
            }
            set(a, e) {
                this.socket.cmd.set(a, e)
            }
            setPosition(a, e) {
                this.target.x = a;
                this.target.y = e;
                this.socket.cmd.setPosition(a, e)
            }
            keyboardDown(e) {
                if (this.cheating) this.talk("0", e.keyCode);
                else {
                    switch (e.keyCode) {
                        case a.KEY_SPAWN:
                            if (a.died &&
                                (a.respawnOn <= Date.now() || e.shiftKey) && (this.spawn(a.playerName), a.died = !1, !a.mobile)) {
                                window.aiptag.cmd.display.push(function() {
                                    window.aipDisplayTag.clear("arras-io_728x90")
                                });
                                var n = document.getElementById("respawn-banner");
                                n && (n.style.display = "none")
                            }
                            break;
                        case a.KEY_UP_ARROW:
                        case a.KEY_UP:
                            this.set(0, !0);
                            break;
                        case a.KEY_DOWN_ARROW:
                        case a.KEY_DOWN:
                            this.set(1, !0);
                            break;
                        case a.KEY_LEFT_ARROW:
                        case a.KEY_LEFT:
                            this.set(2, !0);
                            break;
                        case a.KEY_RIGHT_ARROW:
                        case a.KEY_RIGHT:
                            this.set(3, !0);
                            break;
                        case a.KEY_MOUSE_0:
                            this.set(4,
                                !0);
                            break;
                        case a.KEY_MOUSE_1:
                            this.set(5, !0);
                            break;
                        case a.KEY_MOUSE_2:
                            this.set(6, !0);
                            break;
                        case a.KEY_LEVEL_UP:
                            this.emit("L");
                            break;
                    }
                    if (!e.ctrlKey && !e.altKey) {
                        if (a.canSkill) {
                            n = this.statMaxing ? 16 : 1;
                            do switch (e.keyCode) {
                                case a.KEY_UPGRADE_ATK:
                                    this.talk("x", 0);
                                    break;
                                case a.KEY_UPGRADE_HTL:
                                    this.talk("x", 1);
                                    break;
                                case a.KEY_UPGRADE_SPD:
                                    this.talk("x", 2);
                                    break;
                                case a.KEY_UPGRADE_STR:
                                    this.talk("x", 3);
                                    break;
                                case a.KEY_UPGRADE_PEN:
                                    this.talk("x", 4);
                                    break;
                                case a.KEY_UPGRADE_DAM:
                                    this.talk("x",
                                        5);
                                    break;
                                case a.KEY_UPGRADE_RLD:
                                    this.talk("x", 6);
                                    break;
                                case a.KEY_UPGRADE_MOB:
                                    this.talk("x", 7);
                                    break;
                                case a.KEY_UPGRADE_RGN:
                                    this.talk("x", 8);
                                    break;
                                case a.KEY_UPGRADE_SHI:
                                    this.talk("x", 9)
                            }
                            while (--n)
                        }
                        if (!e.repeat) {
                            switch (e.keyCode) {
                                case a.KEY_AUTO_SPIN:
                                    this.talk("t", 0);
                                    break;
                                case a.KEY_AUTO_FIRE:
                                    this.talk("t", 1);
                                    break;
                                case a.KEY_OVER_RIDE:
                                    this.talk("t", 2);
                                    break;
                                case a.KEY_REVERSE_MOUSE:
                                    this.talk("t", 3);
                                    break;
                                /*case a.KEY_REVERSE_TANK:
                                    this.talk("t", 4);
                                    break;*/
                                case a.KEY_UPGRADE_MAX:
                                    this.statMaxing = !0;
                                    break;
                                case a.KEY_FUCK_YOU:
                                    this.cheating = !0;
                                    this.emit("0");
                                    break;
                                case a.KEY_KILL_YOURSELF:
                                    this.emit("Ability1");
                                    break;
                                case a.KEY_HECCERY:
                                    this.emit("Ability2");
                                    break;
                                case a.KEY_ABILITY:
                                    this.emit("Ability3");
                                    break;
                                case a.KEY_REVERSE_TANK:
                                    this.emit("Ability4");
                                    break;
                                case a.KEY_HECCERY2:
                                    this.emit("Ability5");
                                    break;
                                case a.KEY_PING:
                                    a.showDebug = !0;
                                    break;
                                case a.KEY_CLASS_TREE:
                                    a.showTree = !0;
                                    break;
                                case a.KEY_RECORD:
                                    if (this.cv.captureStream && window.MediaRecorder)
                                        if (this.videoRecorder) switch (this.videoRecorder.state) {
                                            case "inactive":
                                                a.messages.push({
                                                    text: "Recorder started!",
                                                    status: 2,
                                                    alpha: 0,
                                                    time: Date.now(),
                                                    extratime: 0
                                                });
                                                this.videoRecorder.start();
                                                break;
                                            case "recording":
                                                a.messages.push({
                                                    text: "Recorder stopped! Saving file...",
                                                    status: 2,
                                                    alpha: 0,
                                                    time: Date.now(),
                                                    extratime: 0
                                                }), this.videoRecorder.stop()
                                        } else {
                                            let e = [];
                                            this.videoRecorder = new MediaRecorder(this.cv.captureStream(60));
                                            this.videoRecorder.ondataavailable = a => e.push(a.data);
                                            this.videoRecorder.onstop = () => {
                                                let a = new Blob(e, {
                                                    type: this.videoRecorder.mimeType
                                                });
                                                e.length = 0;
                                                let k = URL.createObjectURL(a),
                                                    n = document.createElement("a");
                                                n.style.display = "none";
                                                n.setAttribute("download", "oapp.mp4");
                                                n.setAttribute("href", k);
                                                document.body.appendChild(n);
                                                setTimeout(() => {
                                                    URL.revokeObjectURL(k);
                                                    document.body.removeChild(n)
                                                }, 100);
                                                n.click()
                                            };
                                            a.messages.push({
                                                text: "Recorder initiated and started!",
                                                status: 2,
                                                alpha: 0,
                                                time: Date.now(),
                                                extratime: 0
                                            });
                                            this.videoRecorder.start()
                                        } else a.messages.push({
                                            text: "Media recorder not supported in this browser!",
                                            status: 2,
                                            alpha: 0,
                                            time: Date.now(),
                                            extratime: 0
                                        });
                                    break;
                                case a.KEY_SCREENSHOT:
                                    var m = this.cv.toDataURL();
                                    n = atob(m.split(",")[1]);
                                    m = m.split(",")[0].split(":")[1].split(";")[0];
                                    let w = new Uint8Array(n.length);
                                    for (let a = 0; a < n.length; a++) w[a] = n.charCodeAt(a);
                                    let k = URL.createObjectURL(new Blob([w], {
                                            type: m
                                        })),
                                        u = document.createElement("a");
                                    u.style.display = "none";
                                    u.setAttribute("download", "screenshot.png");
                                    u.setAttribute("href", k);
                                    document.body.appendChild(u);
                                    setTimeout(() => {
                                        URL.revokeObjectURL(k);
                                        document.body.removeChild(u)
                                    }, 100);
                                    u.click()
                            }
                        }
                    }
                }
            }
            keyboardUp(e) {
                switch (e.keyCode) {
                    case a.KEY_UP_ARROW:
                    case a.KEY_UP:
                        this.set(0, !1);
                        break;
                    case a.KEY_DOWN_ARROW:
                    case a.KEY_DOWN:
                        this.set(1, !1);
                        break;
                    case a.KEY_LEFT_ARROW:
                    case a.KEY_LEFT:
                        this.set(2, !1);
                        break;
                    case a.KEY_RIGHT_ARROW:
                    case a.KEY_RIGHT:
                        this.set(3, !1);
                        break;
                    case a.KEY_MOUSE_0:
                        this.set(4, !1);
                        break;
                    case a.KEY_MOUSE_1:
                        this.set(5, !1);
                        break;
                    case a.KEY_MOUSE_2:
                        this.set(6,
                            !1);
                        break;
                    case a.KEY_FUCK_YOU:
                        this.cheating = !1;
                        break;
                    case a.KEY_UPGRADE_MAX:
                        this.statMaxing = !1;
                        break;
                    case a.KEY_PING:
                        a.showDebug = !1;
                        break;
                    case a.KEY_CLASS_TREE:
                        a.showTree = !1
                }
                this.cheating && this.talk("0", -e.keyCode)
            }
            mouseDown(e) {
                switch (e.button) {
                    case 0:
                        e = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        let n = a.clickables.stat.check(e); - 1 !== n ? this.talk("x", n) : -1 !== a.clickables.skipUpgrades.check(e) ? a.clearUpgrades() : (e = a.clickables.upgrade.check(e), -1 !== e ? this.talk("U", e) : this.set(4, !0));
                        break;
                    case 1:
                        this.set(5, !0);
                        break;
                    case 2:
                        this.set(6, !0)
                }
            }
            mouseMove(e) {
                null !== a.player.x && this.setPosition(e.clientX - a.player.x, e.clientY - a.player.y);
                a.statHover = 0 === a.clickables.hover.check({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            mouseUp(a) {
                switch (a.button) {
                    case 0:
                        this.set(4, !1);
                        break;
                    case 1:
                        this.set(5, !1);
                        break;
                    case 2:
                        this.set(6, !1)
                }
            }
            touchStart(e) {
                e.preventDefault();
                if (a.died && a.respawnOn <= Date.now()) this.spawn(a.playerName), a.died = !1;
                else {
                    for (let w of e.changedTouches) {
                        var n = {
                            x: w.clientX,
                            y: w.clientY
                        };
                        let e = w.identifier;
                        var m = a.clickables.stat.check(n); -
                        1 !== m ? this.talk("x", m) : -1 !== a.clickables.skipUpgrades.check(n) ? a.clearUpgrades() : (m = a.clickables.upgrade.check(n), -1 !== m ? this.talk("U", m) : (n = n.x < this.cv.width / 2, null === this.movementTouch && n ? this.movementTouch = e : null !== this.controlTouch || n || (this.controlTouch = e, this.set(4, !0))))
                    }
                    this.touchMove(e)
                }
            }
            touchMove(a) {
                a.preventDefault();
                for (let n of a.changedTouches) {
                    var e = n.clientX;
                    a = n.clientY;
                    var m = n.identifier;
                    this.movementTouch === m ? (e -= 1 * this.cv.width / 6, a -= 2 * this.cv.height / 3, m = Math.sqrt(e * e + a * a), e /= m,
                        a /= m, -.3826834323650898 > a !== this.movementTop && this.set(0, this.movementTop = -.3826834323650898 > a), .3826834323650898 < a !== this.movementBottom && this.set(1, this.movementBottom = .3826834323650898 < a), -.3826834323650898 > e !== this.movementLeft && this.set(2, this.movementLeft = -.3826834323650898 > e), .3826834323650898 < e !== this.movementRight && this.set(3, this.movementRight = .3826834323650898 < e)) : this.controlTouch === m && this.setPosition(4 * (e - 5 * this.cv.width / 6), 4 * (a - 2 * this.cv.height / 3))
                }
            }
            touchEnd(a) {
                a.preventDefault();
                for (let e of a.changedTouches) a =
                    e.identifier, this.movementTouch === a ? (this.movementTouch = null, this.movementTop && this.set(0, this.movementTop = !1), this.movementBottom && this.set(1, this.movementBottom = !1), this.movementLeft && this.set(2, this.movementLeft = !1), this.movementRight && this.set(3, this.movementRight = !1)) : this.controlTouch === a && (this.controlTouch = null, this.set(4, !1))
            }
        }
        r.exports = K
    }, function(r, m) {
        let u = new Uint32Array(1),
            a = new Uint8Array(u.buffer),
            e = new Float32Array(u.buffer),
            K = new Uint16Array(1),
            w = new Uint8Array(K.buffer);
        m.encode =
            n => {
                let m = [];
                var r = [],
                    k = 0,
                    H = 15,
                    v = 0;
                for (var p of n) {
                    var G = 0;
                    if (0 === p || !1 === p) G = 0;
                    else if (1 === p || !0 === p) G = 1;
                    else if ("number" === typeof p) !Number.isInteger(p) || -4294967296 > p || 4294967296 <= p ? (G = 8, k += 4) : 0 <= p ? 256 > p ? (G = 2, k++) : 65536 > p ? (G = 4, k += 2) : 4294967296 > p && (G = 6, k += 4) : -256 <= p ? (G = 3, k++) : -65536 <= p ? (G = 5, k += 2) : -4294967296 <= p && (G = 7, k += 4);
                    else if ("string" === typeof p) {
                        G = !1;
                        for (let a = 0; a < p.length; a++)
                            if ("\u00ff" < p.charAt(a)) G = !0;
                            else if ("\x00" === p.charAt(a)) throw console.error("Null containing string", p), Error("Null containing string");
                        !G && 1 >= p.length ? (G = 9, k++) : G ? (G = 11, k += 2 * p.length + 2) : (G = 10, k += p.length + 1)
                    } else throw console.error("Unencodable data type", n), Error("Unencodable data type");
                    m.push(G);
                    if (G === H) v++;
                    else {
                        r.push(H);
                        if (1 <= v) {
                            for (; 19 < v;) r.push(14), r.push(15), v -= 19;
                            1 === v ? r.push(H) : 2 === v ? r.push(12) : 3 === v ? r.push(13) : 20 > v && (r.push(14), r.push(v - 4))
                        }
                        v = 0;
                        H = G
                    }
                }
                r.push(H);
                if (1 <= v) {
                    for (; 19 < v;) r.push(14), r.push(15), v -= 19;
                    1 === v ? r.push(H) : 2 === v ? r.push(12) : 3 === v ? r.push(13) : 20 > v && (r.push(14), r.push(v - 4))
                }
                r.push(15);
                1 === r.length % 2 && r.push(15);
                k = new Uint8Array((r.length >> 1) + k);
                for (H = 0; H < r.length; H += 2) k[H >> 1] = r[H] << 4 | r[H + 1];
                r = r.length >> 1;
                for (H = 0; H < m.length; H++) switch (v = n[H], m[H]) {
                    case 2:
                    case 3:
                        k[r++] = v;
                        break;
                    case 4:
                    case 5:
                        K[0] = v;
                        k.set(w, r);
                        r += 2;
                        break;
                    case 6:
                    case 7:
                        u[0] = v;
                        k.set(a, r);
                        r += 4;
                        break;
                    case 8:
                        e[0] = v;
                        k.set(a, r);
                        r += 4;
                        break;
                    case 9:
                        v = 0 === v.length ? 0 : v.charCodeAt(0);
                        k[r++] = v;
                        break;
                    case 10:
                        for (p = 0; p < v.length; p++) k[r++] = v.charCodeAt(p);
                        k[r++] = 0;
                        break;
                    case 11:
                        for (p = 0; p < v.length; p++) G = v.charCodeAt(p), k[r++] = G & 255, k[r++] = G >> 8;
                        k[r++] = 0;
                        k[r++] =
                            0
                }
                return k
            };
        m.decode = n => {
            n = new Uint8Array(n);
            if (15 !== n[0] >> 4) return null;
            var m = [],
                r = 15;
            let k = 0;
            for (var H = !0;;) {
                if (k >= n.length) return null;
                var v = n[k];
                H ? (v &= 15, k++) : v >>= 4;
                H = !H;
                if (12 === (v & 12)) {
                    if (15 === v) {
                        H && k++;
                        break
                    }
                    let a = v - 10;
                    if (14 === v) {
                        if (k >= n.length) return null;
                        v = n[k];
                        H ? (v &= 15, k++) : v >>= 4;
                        H = !H;
                        a += v
                    }
                    for (v = 0; v < a; v++) m.push(r)
                } else m.push(v), r = v
            }
            r = [];
            for (let p of m) switch (p) {
                case 0:
                    r.push(0);
                    break;
                case 1:
                    r.push(1);
                    break;
                case 2:
                    r.push(n[k++]);
                    break;
                case 3:
                    r.push(n[k++] - 256);
                    break;
                case 4:
                    w[0] = n[k++];
                    w[1] =
                        n[k++];
                    r.push(K[0]);
                    break;
                case 5:
                    w[0] = n[k++];
                    w[1] = n[k++];
                    r.push(K[0] - 65536);
                    break;
                case 6:
                    a[0] = n[k++];
                    a[1] = n[k++];
                    a[2] = n[k++];
                    a[3] = n[k++];
                    r.push(u[0]);
                    break;
                case 7:
                    a[0] = n[k++];
                    a[1] = n[k++];
                    a[2] = n[k++];
                    a[3] = n[k++];
                    r.push(u[0] - 4294967296);
                    break;
                case 8:
                    a[0] = n[k++];
                    a[1] = n[k++];
                    a[2] = n[k++];
                    a[3] = n[k++];
                    r.push(Number.isNaN(e[0]) ? -1 : e[0]);
                    break;
                case 9:
                    m = n[k++];
                    r.push(0 === m ? "" : String.fromCharCode(m));
                    break;
                case 10:
                    for (m = ""; H = n[k++];) m += String.fromCharCode(H);
                    r.push(m);
                    break;
                case 11:
                    for (m = ""; H = n[k++] | n[k++] <<
                        8;) m += String.fromCharCode(H);
                    r.push(m)
            }
            return r
        }
    }, function(r) {
        r.exports = {
            normal: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            },
            classic: {
                teal: "#8EFFFB",
                lgreen: "#85E37D",
                orange: "#FC7676",
                yellow: "#FFEB8E",
                lavender: "#B58EFF",
                pink: "#F177DD",
                vlgrey: "#CDCDCD",
                lgrey: "#999999",
                guiwhite: "#FFFFFF",
                black: "#525252",
                blue: "#00B0E1",
                green: "#00E06C",
                red: "#F04F54",
                gold: "#FFE46B",
                purple: "#768CFC",
                magenta: "#BE7FF5",
                grey: "#999999",
                dgrey: "#545454",
                white: "#C0C0C0",
                guiblack: "#000000",
                paletteSize: 10,
                border: .5
            },
            dark: {
                teal: "#8975B7",
                lgreen: "#0C491D",
                orange: "#C46748",
                yellow: "#B2B224",
                lavender: "#7D56C5",
                pink: "#B24FAE",
                vlgrey: "#1E1E1E",
                lgrey: "#3C3A3A",
                guiwhite: "#000000",
                black: "#E5E5E5",
                blue: "#379FC6",
                green: "#30B53B",
                red: "#FF6C6E",
                gold: "#FFC665",
                purple: "#9673E8",
                magenta: "#C8679B",
                grey: "#635F5F",
                dgrey: "#73747A",
                white: "#11110F",
                guiblack: "#FFFFFF",
                paletteSize: 10,
                border: .15
            },
            natural: {
                teal: "#76C1BB",
                lgreen: "#AAD35D",
                orange: "#E09545",
                yellow: "#FFD993",
                lavender: "#939FFF",
                pink: "#D87FB2",
                vlgrey: "#C4B6B6",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#373834",
                blue: "#4F93B5",
                green: "#00B659",
                red: "#E14F65",
                gold: "#E5BF42",
                purple: "#8053A0",
                magenta: "#B67CAA",
                grey: "#998F8F",
                dgrey: "#494954",
                white: "#A5B2A5",
                guiblack: "#000000",
                paletteSize: 10,
                border: .2
            },
            pumpkin: {
                teal: "#721970",
                lgreen: "#ff6347",
                orange: "#1b713a",
                yellow: "#fdf380",
                lavender: "#941100",
                pink: "#194417",
                vlgrey: "#1b713a",
                lgrey: "#aa9f9e",
                guiwhite: "#fed8b1",
                black: "#484848",
                blue: "#3ca4cb",
                green: "#76EEC6",
                red: "#F04F54",
                gold: "#1b713a",
                purple: "#1b713a",
                magenta: "#cc669c",
                grey: "#ffffff",
                dgrey: "#726f6f",
                white: "#ff9b58",
                guiblack: "#000000",
                paletteSize: 10,
                border: 3.3
            },
            forest: {
                teal: "#884AA5",
                lgreen: "#8C9B3E",
                orange: "#D16A80",
                yellow: "#97596D",
                lavender: "#499855",
                pink: "#60294F",
                vlgrey: "#DDC6B8",
                lgrey: "#7E949E",
                guiwhite: "#FFFFE8",
                black: "#665750",
                blue: "#807BB6",
                green: "#A1BE55",
                red: "#E5B05B",
                gold: "#FF4747",
                purple: "#BAC674",
                magenta: "#BA78D1",
                grey: "#998866",
                dgrey: "#529758",
                white: "#7DA060",
                guiblack: "#000000",
                paletteSize: 10,
                border: .7
            },
            midnight: {
                teal: "#2B9098",
                lgreen: "#4BAA5D",
                orange: "#345678",
                yellow: "#CDC684",
                lavender: "#89778E",
                pink: "#A85C90",
                vlgrey: "#CCCCCC",
                lgrey: "#A7B2B7",
                guiwhite: "#BAC6FF",
                black: "#091F28",
                blue: "#123455",
                green: "#098765",
                red: "#000013",
                gold: "#566381",
                purple: "#743784",
                magenta: "#B29098",
                grey: "#555555",
                dgrey: "#649EB7",
                white: "#444444",
                guiblack: "#000000",
                paletteSize: 10,
                border: .6
            },
            pastel: {
                teal: "#89BFBA",
                lgreen: "#B5D17D",
                orange: "#E5E0E0",
                yellow: "#B5BBE5",
                lavender: "#939FFF",
                pink: "#646DE5",
                vlgrey: "#B2B2B2",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#383835",
                blue: "#AEAEFF",
                green: "#AEFFAE",
                red: "#FFAEAE",
                gold: "#FFFFFF",
                purple: "#C3C3D8",
                magenta: "#FFB5FF",
                grey: "#CCCCCC",
                dgrey: "#A0A0B2",
                white: "#F2F2F2",
                guiblack: "#000000",
                paletteSize: 10,
                border: .35
            },
            space: {
                teal: "#4788F3",
                lgreen: "#AF1010",
                orange: "#FF0000",
                yellow: "#82F850",
                lavender: "#FFFFFF",
                pink: "#57006C",
                vlgrey: "#FFFFFF",
                lgrey: "#272727",
                guiwhite: "#000000",
                black: "#7F7F7F",
                blue: "#0E1B92",
                green: "#0AEB80",
                red: "#C2B90A",
                gold: "#3E7E8C",
                purple: "#285911",
                magenta: "#A9707E",
                grey: "#6F6A68",
                dgrey: "#2D0738",
                white: "#000000",
                guiblack: "#FFFFFF",
                paletteSize: 10,
                border: .25
            },
            nebula: {
                teal: "#38B06E",
                lgreen: "#22882E",
                orange: "#D28E7F",
                yellow: "#D5D879",
                lavender: "#E084EB",
                pink: "#DF3E3E",
                vlgrey: "#F0F2CC",
                lgrey: "#7D7D7D",
                guiwhite: "#C2C5EF",
                black: "#161616",
                blue: "#9274E6",
                green: "#89F470",
                red: "#E08E5D",
                gold: "#ECDC58",
                purple: "#58CBEC",
                magenta: "#EA58EC",
                grey: "#7E5713",
                dgrey: "#303030",
                white: "#555555",
                guiblack: "#EAEAEA",
                paletteSize: 10,
                border: .5
            },
            bleach: {
                teal: "#00FFFF",
                lgreen: "#00FF00",
                orange: "#FF3200",
                yellow: "#FFEC00",
                lavender: "#FF24A7",
                pink: "#FF3CBD",
                vlgrey: "#FFF186",
                lgrey: "#918181",
                guiwhite: "#F1F1F1",
                black: "#5F5F5F",
                blue: "#0025FF",
                green: "#00FF00",
                red: "#FF0000",
                gold: "#FFFA23",
                purple: "#3100FF",
                magenta: "#D4D3D3",
                grey: "#838383",
                dgrey: "#4C4C4C",
                white: "#FFFEFE",
                guiblack: "#080808",
                paletteSize: 10,
                border: .4
            },
            ocean: {
                teal: "#76EEC6",
                lgreen: "#41AA78",
                orange: "#FF7F50",
                yellow: "#FFD250",
                lavender: "#DC3388",
                pink: "#FA8072",
                vlgrey: "#8B8886",
                lgrey: "#BFC1C2",
                guiwhite: "#FFFFFF",
                black: "#12466B",
                blue: "#4200AE",
                green: "#0D6338",
                red: "#DC4333",
                gold: "#FEA904",
                purple: "#7B4BAB",
                magenta: "#5C246E",
                grey: "#656884",
                dgrey: "#D4D7D9",
                white: "#3283BC",
                guiblack: "#000000",
                paletteSize: 10,
                border: .3
            },
            badlands: {
                teal: "#F9CB9C",
                lgreen: "#F1C232",
                orange: "#38761D",
                yellow: "#E69138",
                lavender: "#B7B7B7",
                pink: "#78866B",
                vlgrey: "#6AA84F",
                lgrey: "#B7B7B7",
                guiwhite: "#A4C2F4",
                black: "#000000",
                blue: "#0C5A9E",
                green: "#6E8922",
                red: "#5B0000",
                gold: "#783F04",
                purple: "#591C77",
                magenta: "#20124D",
                grey: "#2F1C16",
                dgrey: "#999999",
                white: "#543517",
                guiblack: "#CFE2F3",
                paletteSize: 10,
                border: .4
            },
           outlinew: {
                    teal: "#000000",
                    lgreen: "#000000",
                    orange: "#000000",
                    yellow: "#000000",
                    lavender: "#000000",
                    pink: "#000000",
                    vlgrey: "#000000",
                    lgrey: "#000000",
                    guiwhite: "#000000",
                    black: "#FFFFFF",
                    blue: "#000000",
                    green: "#000000",
                    red: "#000000",
                    gold: "#000000",
                    purple: "#000000",
                    magenta: "#000000",
                    grey: "#000000",
                    dgrey: "#000000",
                    white: "#000000",
                    guiblack: "#000000",
                    paletteSize: 10,
                    border: 1
                },
            virtualboy: {
                teal: "#7A0000",
                lgreen: "#B90000",
                orange: "#E70000",
                yellow: "#FD0000",
                lavender: "#B50000",
                pink: "#EF0000",
                vlgrey: "#E80000",
                lgrey: "#AA0000",
                guiwhite: "#FF0000",
                black: "#480000",
                blue: "#3C0000",
                green: "#8A0000",
                red: "#E00000",
                gold: "#EF0000",
                purple: "#8D0000",
                magenta: "#CC0000",
                grey: "#A70000",
                dgrey: "#720000",
                white: "#1F0000",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            },
            solarizeddark: {
                teal: "#B58900",
                lgreen: "#2AA198",
                orange: "#CB4B16",
                yellow: "#657B83",
                lavender: "#EEE8D5",
                pink: "#D33682",
                vlgrey: "#E0E2E4",
                lgrey: "#073642",
                guiwhite: "#ffffff",
                black: "#000000",
                blue: "#268BD2",
                green: "#869600",
                red: "#DC322F",
                gold: "#B58900",
                purple: "#678CB1",
                magenta: "#A082BD",
                grey: "#839496",
                dgrey: "#073642",
                white: "#002B36",
                guiblack: "#000000",
                paletteSize: 10,
                border: .5
            },
            summer: {
                teal: "#46ec51",
                lgreen: "#d7f056",
                orange: "#ce6140",
                yellow: "#f0dc00",
                lavender: "#cbbfe3",
                pink: "#df68bf",
                vlgrey: "#d6deff",
                lgrey: "#d9bfbd",
                guiwhite: "#FFFFFF",
                black: "#656565",
                blue: "#42e9ff",
                green: "#e0ec32",
                red: "#ee2f33",
                gold: "#ffbf00",
                purple: "#9f65bd",
                magenta: "#c964c2",
                grey: "#d6d6f5",
                dgrey: "#726F6F",
                white: "#9bae3d",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            },
            ultrakill: {
                teal: "#ff6300",
                lgreen: "#ff0000",
                orange: "#856d63",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#7038ab",
                vlgrey: "#959963",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#0f0f0f",
                blue: "#5469ae",
                green: "#e8990d",
                red: "#a21500",
                gold: "#ba6567",
                purple: "#b4a18c",
                magenta: "#f0f0f0",
                grey: "#ffff00",
                dgrey: "#6b6b2c",
                white: "#401808",
                guiblack: "#000000",
                paletteSize: 10,
                border: .5
            },
            wowitoandbighilldampmode: {
                teal: "#00FFFF",
                lgreen: "#FFFF00",
                orange: "#FF0000",
                yellow: "#FFFF00",
                lavender: "#FF00FF",
                pink: "#FF23FF",
                vlgrey: "#FFFFFF",
                lgrey: "#FFFFFF",
                guiwhite: "#FFFFFF",
                black: "#000000",
                blue: "#00FFFF",
                green: "#00FF00",
                red: "#FF0000",
                gold: "#FFFF00",
                purple: "#0000FF",
                magenta: "#FF00FF",
                grey: "#FFFFFF",
                dgrey: "#000000",
                white: "#FFFFFF",
                guiblack: "#000000",
                paletteSize: 10,
                border: .5
            },
            gruvbox: {
                teal: "#83a598",
                lgreen: "#8ec07c",
                orange: "#d65d0e",
                yellow: "#d79920",
                lavender: "#d3869b",
                pink: "#d3869b",
                vlgrey: "#bdae93",
                lgrey: "#aa9f9e",
                guiwhite: "#ebddd2",
                black: "#000000",
                blue: "#458588",
                green: "#98971a",
                red: "#cc241d",
                gold: "#d79920",
                purple: "#417b58",
                magenta: "#b16186",
                grey: "#928374",
                dgrey: "#000000",
                white: "#282828",
                guiblack: "#000000",
                paletteSize: 10,
                border: .6
            },
            custom: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            }
        }
    }]);
}.call(this)
