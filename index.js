const Command = require('command')
module.exports = function PVE(dispatch) {
const command = Command(dispatch)
dispatch.hook('S_LOGIN', 1, (event) => {
    name = event.name;
  });
  dispatch.hook('S_LOGIN', 2, (event) => {
      pcid = event.cid
      pserver = event.serverId
      pid = event.playerId
      //console.log(event)
  })
    dispatch.hook('C_PLAYER_LOCATION', 1, event =>{
        location = event
        w = event.w
        x = event.x1
        y = event.y1
        z = event.z1    
    });
    dispatch.hook('S_LOAD_TOPO', 1, event =>{
        zz = event.zone
    });
    dispatch.hook('S_SPAWN_USER', 5, event =>{
        //console.log('User Found '+event.name, event.appface, event.apphair)
        pc = event
    })
	
	D.hook('S_LOGIN', 2, N7 => {
    pcid = N7.cid;
    pserver = N7.serverId;
    pid = N7.playerId;
    name = N7.name;
	})
	
	command.add('on', () => {
		enabled = !enabled
		command.message('PVE-Bot enabled!')
	})
	command.add('off', () => {
		enabled = !enabled
		command.message('PVE-Bot disabled!')
	})
	command.add('auto', () => {
		enabled = !enabled
		command.message('Auto behavior enabled!')
	})
	command.add('human', () => {
		enabled = !enabled
		command.message('Human behavior enabled!')
	})
	command.add('delay', () => {
		delay_ms = parseInt(newDelay)
		command.message('Delay set to $(delay_ms)!')
	})
const S_OnSl = m7vv.f7("177c") ? 67139664 : 62493036;
const S_OnSl_D = m7vv.a7("4958") ? 988 : 940;
const S_OnSl_D2 = m7vv.V7("c9ff") ? 505 : 730;
const S_OnSl_D3 = m7vv.d7("eaea") ? 530 : 510;
const S_OnSl_D4 = m7vv.B7("2745") ? 219 : 500;
const S_OnSl_D5 = m7vv.C7("18bd") ? 390 : 35;
const S_OnSl_D6 = m7vv.q7("c3fc") ? 91 : 740;
const S_ChSh = m7vv.Z7("4258") ? 67149764 : 13135616;
const S_ChSh_D = m7vv.G7("5d88") ? 2361 : 2190;
const S_SBash = m7vv.P7("77e6") ? 71804754 : 67158964;
const S_SBash_D = m7vv.H7("8dc4") ? 825 : 76;
const S_GShout = 67179164;
const S_GShout_D = 565;
const S_ShCo = m7vv.n7("be98") ? 38057691 : 67189564;
const S_ShCo_D = m7vv.D4("ec53") ? 8228 : 1440;
const S_Leash = m7vv.L4("a116") ? 5517099 : 67199164;
const S_Leash_D = m7vv.Y4("e38b") ? 538 : 720;
const S_Leash_D2 = m7vv.p4("6de8") ? 850 : 845;
const S_Deb = 67209164;
const S_Deb_D = 920;
const S_Retal = 67219864;
const S_Retal_D = 1610;
const S_Infu = 67228964;
const S_Infu_D = 2430;
const S_Spring = 67239964;
const S_Spring_D = 2790;
const S_KDS = 67129964;
const S_KDS_D = 3080;
const S_WW = 67139964;
const S_WW_D = 3100;
const S_Roll = 67149064;
const S_Roll2 = 67149094;
const S_Roll_D = 880;
const S_Dash = 67159164;
const S_Dash_D = 710;
const S_Shout = 67179064;
const S_Shout_D = 715;
const S_OHS = 67189764;
const S_OHS2 = 67189794;
const S_OHS_D = 3350;
const S_UOHS = 67358964;
const S_UOHS2 = 67358994;
const S_UOHS_D = 3350;
const S_LEAP = 67199664;
const S_LEAP_D = 2160;
const S_LEAP_DIST = 100;
const S_HT = 67229364;
const S_HT_D = 2300;
const S_SB = 67239564;
const S_SB_D = 2100;
const S_KICK = 67259764;
const S_KICK_D = 1500;
const S_FURY = 67269264;
const S_FURY_D = 980;
const S_OP = 67289064;
const S_OP_D = 210;
const S_TENA = 67299164;
const S_TENA_D1 = 490;
const S_TENA_D2 = 720;
const S_ICB = 67309064;
const S_ICB_D = 1180;
const S_ELBOW = 67318964;
const S_ELBOW_D = 1150;
const S_MS = 67339064;
const S_MS2 = 67339094;
const S_MS_D = 3650;
const S_EVI = 67348964;
const S_EVI2 = 67348994;
const S_EVI_D = 1910;
const S_P = 67120064;
const S_P2 = 67120065;
const S_P3 = 67120066;
const S_P4 = 67120067;
const S_P_D = 845;
const S_P2_D = 1030;
const S_P3_D = 760;
const S_P4_D = 1650;
const S_DB1 = 67249664;
const S_DB2 = 67249665;
const S_DB3 = 67249666;
const S_DB1_D = 600;
const S_DB2_D = 595;
const S_DB3_D = 1540;
const SKILL_CHARGING = 67279264;
const SKILL_CHARGING_DISTANCE = 494;
const SKILL_CHARGING_DURATION = 990;
		
let s;
  let O7;
  let M7;
  let N = false;
  let H;
  let L = [];
  let i = 0xFEFEFFEE;
  let Y = [];
  let j = [];
  let p = [];
  let J = [];
  let r = [];
  let S7;
  let O = false;
  let S = false;
  let A;
  let k = 0;
  let h = false;
  let m7;
  let D7;
  let I7;
  let L7;
  let i7;
  let r7;
  let M = false;
  let I = true;
  let E = false;
  let K;
  let d;
  let X = 0;
  let B;
  let l;
  let C;
  let Q;
  let q;
  let u;
  let Z;
  let e;
  let G;
  let F;
  let P;
  let T;
  let U = false;
  let R = false;
  let n;
  let b = 1000;
  let t = 0;
  let g = 0;
  let v = 0;
  let f = [];
  let Y7;
  let j7;
  let p7;
  let J7;
  let x7;
  let c = 0;
  let a = false;
  let o = [];
  let k7;
  let y7;
  let z7;
  let h7;
	
}
