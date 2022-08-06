// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  return {
    E: {
      showTicket: [ctc0, ctc1],
      showWinner: [ctc0, ctc2],
      ticketPulled: [ctc0, ctc1]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  const map1_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc3],
      4: [ctc0, ctc1, ctc3, ctc2],
      7: [ctc0, ctc1, ctc2, ctc0, ctc2],
      8: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc11 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v335 = stdlib.protect(ctc5, await interact.getToken(), {
    at: './index.rsh:30:58:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'getToken',
    who: 'A'
    });
  const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:30:58:application', stdlib.UInt_max, '0')];
  const v337 = v335[stdlib.checkedBigNumberify('./index.rsh:30:58:application', stdlib.UInt_max, '1')];
  const v340 = 'A';
  const v341 = stdlib.protect(ctc1, await interact.chooseNumber(v340), {
    at: './index.rsh:31:49:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'chooseNumber',
    who: 'A'
    });
  const v342 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:32:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'random',
    who: 'A'
    });
  const v343 = stdlib.digest(ctc6, [v342, v341]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v336, v337],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v346, v347], secs: v349, time: v348, didSend: v38, from: v345 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v346
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v38, from: v345 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v345, v346, v347, v343],
    evt_cnt: 1,
    funcNum: 1,
    lct: v348,
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:27:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'), v346]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v358], secs: v360, time: v359, didSend: v46, from: v357 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v346
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc4, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v358], secs: v360, time: v359, didSend: v46, from: v357 } = txn2;
  ;
  ;
  const v370 = stdlib.addressEq(v345, v357);
  stdlib.assert(v370, {
    at: './index.rsh:37:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  stdlib.protect(ctc0, await interact.showCommitment(v358), {
    at: './index.rsh:38:28:application',
    fs: ['at ./index.rsh:38:28:application call to [unknown function] (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:38:28:application call to "liftedInteract" (defined at: ./index.rsh:38:28:application)'],
    msg: 'showCommitment',
    who: 'A'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v345, v346, v347, v358],
    evt_cnt: 0,
    funcNum: 2,
    lct: v359,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v374, time: v373, didSend: v56, from: v372 } = txn3;
      
      ;
      const v376 = stdlib.checkedBigNumberify('./index.rsh:45:40:decimal', stdlib.UInt_max, '0');
      const v377 = v373;
      const v384 = stdlib.checkedBigNumberify('./index.rsh:28:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v388 = stdlib.lt(v376, v347);
        
        return v388;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc4, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v374, time: v373, didSend: v56, from: v372 } = txn3;
  ;
  const v375 = stdlib.addressEq(v345, v372);
  stdlib.assert(v375, {
    at: './index.rsh:44:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  let v376 = stdlib.checkedBigNumberify('./index.rsh:45:40:decimal', stdlib.UInt_max, '0');
  let v377 = v373;
  let v384 = stdlib.checkedBigNumberify('./index.rsh:28:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v388 = stdlib.lt(v376, v347);
    
    return v388;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v406], secs: v408, time: v407, didSend: v124, from: v405 } = txn4;
    undefined /* setApiDetails */;
    const v410 = v406[stdlib.checkedBigNumberify('./index.rsh:48:9:spread', stdlib.UInt_max, '0')];
    ;
    const v412 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v405), null);
    let v413;
    switch (v412[0]) {
      case 'None': {
        const v414 = v412[1];
        v413 = false;
        
        break;
        }
      case 'Some': {
        const v415 = v412[1];
        v413 = true;
        
        break;
        }
      }
    const v416 = v413 ? false : true;
    stdlib.assert(v416, {
      at: './index.rsh:55:16:application',
      fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:7:function exp)'],
      msg: 'You have placed a bid already.',
      who: 'A'
      });
    const v417 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, '0'), v410);
    const v418 = stdlib.lt(v410, stdlib.checkedBigNumberify('./index.rsh:6:86:decimal', stdlib.UInt_max, '11'));
    const v419 = v417 ? v418 : false;
    stdlib.assert(v419, {
      at: './index.rsh:56:16:application',
      fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:7:function exp)'],
      msg: 'The number is out of range',
      who: 'A'
      });
    await stdlib.mapSet(map1, v405, null);
    await stdlib.mapSet(map0, v405, v410);
    const v421 = 'TP';
    null;
    const v422 = true;
    await txn4.getOutput('B_playRaffle', 'v422', ctc9, v422);
    const v429 = stdlib.add(v376, stdlib.checkedBigNumberify('./index.rsh:61:29:decimal', stdlib.UInt_max, '1'));
    const cv376 = v429;
    const cv377 = v407;
    const cv384 = v384;
    
    v376 = cv376;
    v377 = cv377;
    v384 = cv384;
    
    continue;
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v345, v346, v358, v384, v342, v341],
    evt_cnt: 2,
    funcNum: 4,
    lct: v377,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v434, v435], secs: v437, time: v436, didSend: v162, from: v433 } = txn4;
      
      ;
      
      const v442 = 'ST';
      null;
      const v443 = false;
      const v444 = v345;
      const v445 = v436;
      const v452 = v384;
      
      if (await (async () => {
        const v456 = v443 ? false : true;
        
        return v456;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v513 = 'SW';
        null;
        sim_r.txns.push({
          kind: 'from',
          to: v444,
          tok: v346
          });
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v346
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc4, ctc7, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v434, v435], secs: v437, time: v436, didSend: v162, from: v433 } = txn4;
  ;
  const v438 = stdlib.addressEq(v345, v433);
  stdlib.assert(v438, {
    at: './index.rsh:68:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  const v439 = stdlib.digest(ctc6, [v434, v435]);
  const v440 = stdlib.digestEq(v358, v439);
  stdlib.assert(v440, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:69:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'A'
    });
  stdlib.protect(ctc0, await interact.showTicket(v435), {
    at: './index.rsh:70:24:application',
    fs: ['at ./index.rsh:70:24:application call to [unknown function] (defined at: ./index.rsh:70:24:function exp)', 'at ./index.rsh:70:24:application call to "liftedInteract" (defined at: ./index.rsh:70:24:application)'],
    msg: 'showTicket',
    who: 'A'
    });
  
  const v442 = 'ST';
  null;
  let v443 = false;
  let v444 = v345;
  let v445 = v436;
  let v452 = v384;
  
  while (await (async () => {
    const v456 = v443 ? false : true;
    
    return v456;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v470], secs: v472, time: v471, didSend: v228, from: v469 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v476 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v469), null);
    let v477;
    switch (v476[0]) {
      case 'None': {
        const v478 = v476[1];
        v477 = false;
        
        break;
        }
      case 'Some': {
        const v479 = v476[1];
        v477 = true;
        
        break;
        }
      }
    stdlib.assert(v477, {
      at: './index.rsh:82:16:application',
      fs: ['at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)'],
      msg: 'Did you participate in the ruffle?',
      who: 'A'
      });
    const v480 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v469), null);
    const v481 = stdlib.fromSome(v480, stdlib.checkedBigNumberify('./index.rsh:84:40:decimal', stdlib.UInt_max, '12'));
    const v482 = stdlib.eq(v481, v435);
    if (v482) {
      const v483 = [true, v481];
      await txn5.getOutput('B_tryYourLuck', 'v483', ctc10, v483);
      const cv443 = true;
      const cv444 = v469;
      const cv445 = v471;
      const cv452 = v452;
      
      v443 = cv443;
      v444 = cv444;
      v445 = cv445;
      v452 = cv452;
      
      continue;}
    else {
      const v498 = [false, v481];
      await txn5.getOutput('B_tryYourLuck', 'v498', ctc10, v498);
      const cv443 = false;
      const cv444 = v444;
      const cv445 = v471;
      const cv452 = v452;
      
      v443 = cv443;
      v444 = cv444;
      v445 = cv445;
      v452 = cv452;
      
      continue;}
    
    }
  const v513 = 'SW';
  null;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function _B_playRaffle8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _B_playRaffle8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _B_playRaffle8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v345, v346, v347, v358, v376, v384] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc4, ctc5, ctc1, ctc6, ctc1, ctc1]);
  const v389 = ctc.selfAddress();
  const v391 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)'],
    msg: 'in',
    who: 'B_playRaffle'
    });
  const v392 = v391[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v395 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v389), null);
  let v396;
  switch (v395[0]) {
    case 'None': {
      const v397 = v395[1];
      v396 = false;
      
      break;
      }
    case 'Some': {
      const v398 = v395[1];
      v396 = true;
      
      break;
      }
    }
  const v399 = v396 ? false : true;
  stdlib.assert(v399, {
    at: './index.rsh:50:15:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:14:function exp)', 'at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)'],
    msg: 'You have placed a bid already.',
    who: 'B_playRaffle'
    });
  const v400 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, '0'), v392);
  const v401 = stdlib.lt(v392, stdlib.checkedBigNumberify('./index.rsh:6:86:decimal', stdlib.UInt_max, '11'));
  const v402 = v400 ? v401 : false;
  stdlib.assert(v402, {
    at: './index.rsh:51:15:application',
    fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:14:function exp)', 'at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)', 'at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:7:function exp)'],
    msg: 'The number is out of range',
    who: 'B_playRaffle'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v345, v346, v347, v358, v376, v384, v391],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v406], secs: v408, time: v407, didSend: v124, from: v405 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "B_playRaffle"
        });
      const v410 = v406[stdlib.checkedBigNumberify('./index.rsh:48:9:spread', stdlib.UInt_max, '0')];
      ;
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v405), null);
      await stdlib.simMapSet(sim_r, 1, v405, null);
      await stdlib.simMapSet(sim_r, 0, v405, v410);
      const v421 = 'TP';
      null;
      const v422 = true;
      const v423 = await txn1.getOutput('B_playRaffle', 'v422', ctc8, v422);
      
      const v429 = stdlib.add(v376, stdlib.checkedBigNumberify('./index.rsh:61:29:decimal', stdlib.UInt_max, '1'));
      const v736 = v429;
      const v738 = v384;
      const v739 = stdlib.lt(v429, v347);
      if (v739) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc6, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v406], secs: v408, time: v407, didSend: v124, from: v405 } = txn1;
  undefined /* setApiDetails */;
  const v410 = v406[stdlib.checkedBigNumberify('./index.rsh:48:9:spread', stdlib.UInt_max, '0')];
  ;
  const v412 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v405), null);
  let v413;
  switch (v412[0]) {
    case 'None': {
      const v414 = v412[1];
      v413 = false;
      
      break;
      }
    case 'Some': {
      const v415 = v412[1];
      v413 = true;
      
      break;
      }
    }
  const v416 = v413 ? false : true;
  stdlib.assert(v416, {
    at: './index.rsh:55:16:application',
    fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:7:function exp)'],
    msg: 'You have placed a bid already.',
    who: 'B_playRaffle'
    });
  const v417 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, '0'), v410);
  const v418 = stdlib.lt(v410, stdlib.checkedBigNumberify('./index.rsh:6:86:decimal', stdlib.UInt_max, '11'));
  const v419 = v417 ? v418 : false;
  stdlib.assert(v419, {
    at: './index.rsh:56:16:application',
    fs: ['at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:7:function exp)'],
    msg: 'The number is out of range',
    who: 'B_playRaffle'
    });
  await stdlib.mapSet(map1, v405, null);
  await stdlib.mapSet(map0, v405, v410);
  const v421 = 'TP';
  null;
  const v422 = true;
  const v423 = await txn1.getOutput('B_playRaffle', 'v422', ctc8, v422);
  if (v124) {
    stdlib.protect(ctc0, await interact.out(v406, v423), {
      at: './index.rsh:48:10:application',
      fs: ['at ./index.rsh:48:10:application call to [unknown function] (defined at: ./index.rsh:48:10:function exp)', 'at ./index.rsh:60:11:application call to "fn" (defined at: ./index.rsh:54:7:function exp)', 'at ./index.rsh:54:7:application call to [unknown function] (defined at: ./index.rsh:54:7:function exp)'],
      msg: 'out',
      who: 'B_playRaffle'
      });
    }
  else {
    }
  
  const v429 = stdlib.add(v376, stdlib.checkedBigNumberify('./index.rsh:61:29:decimal', stdlib.UInt_max, '1'));
  const v736 = v429;
  const v738 = v384;
  const v739 = stdlib.lt(v429, v347);
  if (v739) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _B_tryYourLuck7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _B_tryYourLuck7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _B_tryYourLuck7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v345, v346, v435, v444, v452] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1]);
  const v457 = ctc.selfAddress();
  const v459 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:7:function exp)', 'at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:7:function exp)'],
    msg: 'in',
    who: 'B_tryYourLuck'
    });
  const v463 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v457), null);
  let v464;
  switch (v463[0]) {
    case 'None': {
      const v465 = v463[1];
      v464 = false;
      
      break;
      }
    case 'Some': {
      const v466 = v463[1];
      v464 = true;
      
      break;
      }
    }
  stdlib.assert(v464, {
    at: './index.rsh:77:15:application',
    fs: ['at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:11:function exp)', 'at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:7:function exp)', 'at ./index.rsh:76:7:application call to [unknown function] (defined at: ./index.rsh:76:7:function exp)'],
    msg: 'Did you participate in the ruffle?',
    who: 'B_tryYourLuck'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v345, v346, v435, v444, v452, v459],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v470], secs: v472, time: v471, didSend: v228, from: v469 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "B_tryYourLuck"
        });
      ;
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v469), null);
      const v480 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v469), null);
      const v481 = stdlib.fromSome(v480, stdlib.checkedBigNumberify('./index.rsh:84:40:decimal', stdlib.UInt_max, '12'));
      const v482 = stdlib.eq(v481, v435);
      if (v482) {
        const v483 = [true, v481];
        const v484 = await txn1.getOutput('B_tryYourLuck', 'v483', ctc8, v483);
        
        const v773 = v469;
        const v777 = 'SW';
        null;
        sim_r.txns.push({
          kind: 'from',
          to: v469,
          tok: v346
          });
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v346
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v498 = [false, v481];
        const v499 = await txn1.getOutput('B_tryYourLuck', 'v498', ctc8, v498);
        
        const v779 = v444;
        const v781 = v452;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v470], secs: v472, time: v471, didSend: v228, from: v469 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v476 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v469), null);
  let v477;
  switch (v476[0]) {
    case 'None': {
      const v478 = v476[1];
      v477 = false;
      
      break;
      }
    case 'Some': {
      const v479 = v476[1];
      v477 = true;
      
      break;
      }
    }
  stdlib.assert(v477, {
    at: './index.rsh:82:16:application',
    fs: ['at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)'],
    msg: 'Did you participate in the ruffle?',
    who: 'B_tryYourLuck'
    });
  const v480 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v469), null);
  const v481 = stdlib.fromSome(v480, stdlib.checkedBigNumberify('./index.rsh:84:40:decimal', stdlib.UInt_max, '12'));
  const v482 = stdlib.eq(v481, v435);
  if (v482) {
    const v483 = [true, v481];
    const v484 = await txn1.getOutput('B_tryYourLuck', 'v483', ctc8, v483);
    if (v228) {
      stdlib.protect(ctc0, await interact.out(v470, v484), {
        at: './index.rsh:75:10:application',
        fs: ['at ./index.rsh:75:10:application call to [unknown function] (defined at: ./index.rsh:75:10:function exp)', 'at ./index.rsh:86:21:application call to "fn" (defined at: ./index.rsh:81:7:function exp)', 'at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)'],
        msg: 'out',
        who: 'B_tryYourLuck'
        });
      }
    else {
      }
    
    const v773 = v469;
    const v777 = 'SW';
    null;
    ;
    ;
    return;
    }
  else {
    const v498 = [false, v481];
    const v499 = await txn1.getOutput('B_tryYourLuck', 'v498', ctc8, v498);
    if (v228) {
      stdlib.protect(ctc0, await interact.out(v470, v499), {
        at: './index.rsh:75:10:application',
        fs: ['at ./index.rsh:75:10:application call to [unknown function] (defined at: ./index.rsh:75:10:function exp)', 'at ./index.rsh:86:36:application call to "fn" (defined at: ./index.rsh:81:7:function exp)', 'at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)'],
        msg: 'out',
        who: 'B_tryYourLuck'
        });
      }
    else {
      }
    
    const v779 = v444;
    const v781 = v452;
    return;
    }
  
  
  };
export async function B_playRaffle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B_playRaffle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B_playRaffle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _B_playRaffle8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function B_tryYourLuck(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B_tryYourLuck expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B_tryYourLuck expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _B_tryYourLuck7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`B_playRaffle(uint64)byte`, `B_tryYourLuck(uint64)(byte,uint64)`],
    pure: [],
    sigs: [`B_playRaffle(uint64)byte`, `B_tryYourLuck(uint64)(byte,uint64)`]
    },
  appApproval: `BiAMAAEECCACBygKk7yMtApQoI0GJgMBAAEBACI1ADEYQQSmKmRJIls1ASVbNQIxGSMSQQAKMQAoIQivZkIEczYaABdJQQAlIjUEIzUGSSEJDEAACiEJEkQ2GgFCADOBipzZ7wMSRDYaAUIA3zYaAhc1BDYaAzYaARdJJAxAAgZJgQYMQAGPSSEGDEAAvSEGEkQlNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARm2YIVNP9QsDT/FzX+MQCIBClXCQFJNfwiVUAABiI1/UIABiM1/UIAADT9FEQiNP4ONP6BCwwQRDEAKDEAiAP7I4EJTFZmMQAoMQCIA+0pNP4WUDX8VwkBNPxMUGaABhOkCcZUUDT+FlCwgAkAAAAAAAABpgGwKTUHNANXACA0AyEEWzQDIQdbNANXMCA0AyEKWyMIMgY0A4FYW0ICU0ghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQdbNf0hCls1/Ek1BTX7gAR0eKgkNPtQsDEAiANcVwkBSTX5IlVAAAYiNfpCAAYjNfpCAAA0+kSBDDEAiAM7VwAJSTX4I1s0+CJVTUk1+TT9EkEAKIAIAAAAAAAAAeMpNPkWUFCwKTT5FlA1BzT/NP40/SMxADIGNPxCAg+ACAAAAAAAAAHyKDT5FlBQsCg0+RZQNQc0/zT+NP0iNANXMCAyBjT8QgHkJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iVbNf2ABBBGrXM0/hZQNP0WULA0/zEAEkQ0A1coIDT+FjT9FlABEkSABi0rd/NTVDT9FlCwNP80AyEEWzT9IjT/MgY0A4FIW0IBdEkjDEAArUkhBQxAAEQhBRJEIQU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARBsUBNsDT/MQASRDT/NAMhBFs0AyEHWzQDVzAgIjIGIkIAx0gjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4hB1s1/Uk1BTX8gARkkdr/NPxQsCM0/ogB/DT/MQASRDT/NP4WUDT9FlA0/FAoSwFXAFBnSCEFNQEyBjUCQgFdSCELiAG4IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsCELiAGIsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAPg1/zX+Nf01/DX7Nfo1+TT9NPsMQQAnNPk0+hZQNPsWUDT8UDT9FlA0/xZQKEsBVwBgZ0glNQEyBjUCQgC7NPk0+hZQNPxQNP8WUChLAVcAUGdIJDUBMgY1AkIAnDX/Nf41/TX8Nfs1+jX5NPxBAEmABsBNkZxTVzT9ULCxIrIBI7ISJLIQNP2yFDT6shGzsSKyATT/sggjshA0+bIHs7EisgEishIkshAyCbIVMgqyFDT6shGzQgAkNPk0+hZQNPsWUDT9UDT/FlAoSwFXAFhnSCEGNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v346",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes2",
            "name": "elem0",
            "type": "bytes2"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "E_showTicket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes2",
            "name": "elem0",
            "type": "bytes2"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      }
    ],
    "name": "E_showWinner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes2",
            "name": "elem0",
            "type": "bytes2"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "E_ticketPulled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v346",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T22",
                "name": "v470",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T22",
                "name": "v406",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v422",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v483",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v498",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "B_playRaffle",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "B_tryYourLuck",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T22",
                "name": "v470",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T22",
                "name": "v406",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200237938038062002379833981016040819052620000269162000228565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a1620000943415600762000121565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b039081168552905185015183526001958690554390955587519384015290519092169481019490945251908301529060800160405160208183030381529060405260029080519060200190620001189291906200014b565b505050620002dd565b81620001475760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015990620002a0565b90600052602060002090601f0160209004810192826200017d5760008555620001c8565b82601f106200019857805160ff1916838001178555620001c8565b82800160010185558215620001c8579182015b82811115620001c8578251825591602001919060010190620001ab565b50620001d6929150620001da565b5090565b5b80821115620001d65760008155600101620001db565b604080519081016001600160401b03811182821017156200022257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200023c57600080fd5b62000246620001f1565b835181526040601f19830112156200025d57600080fd5b62000267620001f1565b60208501519092506001600160a01b03811681146200028557600080fd5b82526040939093015160208083019190915283015250919050565b600181811c90821680620002b557607f821691505b60208210811415620002d757634e487b7160e01b600052602260045260246000fd5b50919050565b61208c80620002ed6000396000f3fe6080604052600436106100a55760003560e01c8063ab53f2c611610061578063ab53f2c61461014d578063ac3ab70314610170578063c695a56a14610183578063cadc2e7a146101b3578063ebdbfdcc146101e0578063f7d0545f146101f357005b80631e93b0f1146100ae5780633bc5b7bf146100d25780634eb0899b146100ff5780637eea518c146101125780638323075714610125578063873779a11461013a57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100de57600080fd5b506100f26100ed3660046119d2565b610216565b6040516100c99190611a23565b6100ac61010d366004611a6b565b610242565b6100ac610120366004611a6b565b610266565b34801561013157600080fd5b506001546100bf565b6100ac610148366004611a6b565b610286565b34801561015957600080fd5b506101626102a6565b6040516100c9929190611ab3565b6100ac61017e366004611a6b565b610343565b610196610191366004611aed565b610363565b6040805182511515815260209283015192810192909252016100c9565b3480156101bf57600080fd5b506101d36101ce3660046119d2565b6103a5565b6040516100c99190611b06565b6100ac6101ee366004611b38565b6103cb565b610206610201366004611aed565b6103eb565b60405190151581526020016100c9565b604080516060810182526000808252602082018190529181019190915261023c82610418565b92915050565b61024a61173e565b61026261025c36849003840184611c2c565b826104ea565b5050565b61026e61173e565b61026261028036849003840184611c56565b826107d1565b61028e61173e565b6102626102a036849003840184611c8e565b82610975565b6000606060005460028080546102bb90611cb9565b80601f01602080910402602001604051908101604052809291908181526020018280546102e790611cb9565b80156103345780601f1061030957610100808354040283529160200191610334565b820191906000526020600020905b81548152906001019060200180831161031757829003601f168201915b50505050509050915091509091565b61034b61173e565b61026261035d36849003840184611c2c565b82610b3d565b604080518082019091526000808252602082015261037f611776565b60208101515183905261039061173e565b61039a8282610b3d565b602001519392505050565b604080516060810182526000808252602082018190529181019190915261023c82610e92565b6103d361173e565b6102626103e536849003840184611cee565b82610f5b565b60006103f5611776565b60208101515183905261040661173e565b61041082826104ea565b519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610464576104646119ef565b14156104db576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156104a5576104a56119ef565b60018111156104b6576104b66119ef565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6104fa600860005414601d6111ca565b815161051590158061050e57508251600154145b601e6111ca565b60008080556002805461052790611cb9565b80601f016020809104026020016040519081016040528092919081815260200182805461055390611cb9565b80156105a05780601f10610575576101008083540402835291602001916105a0565b820191906000526020600020905b81548152906001019060200180831161058357829003601f168201915b50505050508060200190518101906105b89190611d48565b90506105c26117a3565b7f5c82a4a2d8eaa52925008d03eead7221eca30a4d81fc671e221fb8d5b67b24c733856040516105f3929190611de2565b60405180910390a16106073415601a6111ca565b600061061233610e92565b516001811115610624576106246119ef565b1415610633576000815261065b565b600161063e33610e92565b516001811115610650576106506119ef565b141561065b57600181525b80516106769061066c57600161066f565b60005b601b6111ca565b61068a60208501515151600b11601c6111ca565b336000908152600560209081526040808320805462ff00ff191660019081179091556004835292819020805460ff191684178155878301805151519190940155838201805161054560f41b90525192515151815193516001600160f01b0319168452918301919091527fa6bd6ab2d672e16ea90c8a13cc856129b26a5eaed766e3ce584ac8fac7988aa3910160405180910390a1604051600181527f5ea190c0ccf150c7af6c56c82d6a634174d696b64a21dfae60e073440d8155619060200160405180910390a16001835261075e6117cc565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808301516107a590600190611e0b565b602080830180519290925281514391015260a08401519051604001526107ca816111f0565b5050505050565b6107e1600260005414600f6111ca565b81516107fc9015806107f557508251600154145b60106111ca565b60008080556002805461080e90611cb9565b80601f016020809104026020016040519081016040528092919081815260200182805461083a90611cb9565b80156108875780601f1061085c57610100808354040283529160200191610887565b820191906000526020600020905b81548152906001019060200180831161086a57829003601f168201915b505050505080602001905181019061089f9190611eb9565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a16108f63415600d6111ca565b805161090e906001600160a01b03163314600e6111ca565b6109166117cc565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845190910152818301805160009081905281514394019390935251015261096f816111f0565b50505050565b610985600160005414600b6111ca565b81516109a090158061099957508251600154145b600c6111ca565b6000808055600280546109b290611cb9565b80601f01602080910402602001604051908101604052809291908181526020018280546109de90611cb9565b8015610a2b5780601f10610a0057610100808354040283529160200191610a2b565b820191906000526020600020905b815481529060010190602001808311610a0e57829003601f168201915b5050505050806020019051810190610a439190611ed5565b604080513381528551602080830191909152860151518183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a1610a99341560086111ca565b610ab3610aac3383602001516001611374565b60096111ca565b8051610acb906001600160a01b03163314600a6111ca565b610ad3611808565b81516001600160a01b03908116825260208084015190911681830152604080840151818401528582015151606084015260026000554360015551610b1991839101611f4e565b604051602081830303815290604052600290805190602001906107ca929190611842565b610b4d60076000541460186111ca565b8151610b68901580610b6157508251600154145b60196111ca565b600080805560028054610b7a90611cb9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba690611cb9565b8015610bf35780601f10610bc857610100808354040283529160200191610bf3565b820191906000526020600020905b815481529060010190602001808311610bd657829003601f168201915b5050505050806020019051810190610c0b9190611f87565b9050610c156118c6565b7f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc5513385604051610c46929190611de2565b60405180910390a1610c5a341560166111ca565b6000610c6533610e92565b516001811115610c7757610c776119ef565b1415610c865760008152610cae565b6001610c9133610e92565b516001811115610ca357610ca36119ef565b1415610cae57600181525b8051610cbb9060176111ca565b6001610cc633610418565b516001811115610cd857610cd86119ef565b14610ce457600c610cf2565b610ced33610418565b604001515b6020820181905260408301511415610dcb57604081810180516001905260208084015182518201529051825181511515815290820151918101919091527f694c8b002c189d702a94ffa835c7158e938a1571dc112e21996affa5574e1992910160405180910390a160408101516020840152610d6c611924565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051600190528051339301929092528151439101526080840151905160600152610dc58161138c565b5061096f565b60608101805160009052602080830151825182015290516040805182511515815291830151928201929092527f8933c5488c462e0ff32ca2a66c36092551c083316c67d8a4016cabd7c7afbc12910160405180910390a160608101516020840152610e34611924565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201528184018051600090526060808801518251951694909301939093528251439101526080850151915101526107ca8161138c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115610ede57610ede6119ef565b14156104db576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f1f57610f1f6119ef565b6001811115610f3057610f306119ef565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b610f6b60046000541460146111ca565b8151610f86901580610f7f57508251600154145b60156111ca565b600080805560028054610f9890611cb9565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc490611cb9565b80156110115780601f10610fe657610100808354040283529160200191611011565b820191906000526020600020905b815481529060010190602001808311610ff457829003601f168201915b50505050508060200190518101906110299190611eb9565b905061104660408051808201909152600060208201908152815290565b604080513381528551602080830191909152808701518051838501520151606082015290517fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a9181900360800190a16110a1341560116111ca565b81516110b9906001600160a01b0316331460126111ca565b602080850151805190820151604051611107936110e193929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83604001511460136111ca565b80516114d560f21b905280516020858101518101516040805193516001600160f01b0319168452918301527fb0121db0a93d9e3cf7bd679933d96c71452ab29232282650078bf6de31244423910160405180910390a1611165611924565b825181516001600160a01b0391821690526020808501518351908316908201528681015181015183516040908101919091528184018051600090528651815194169390920192909252805143920191909152606080850151915101526107ca8161138c565b816102625760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b805160400151602082015151101561130b5761124d6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528751606090810151818901908152858a018051516080808c01918252915186015160a0808d019182526008600055436001558751998a019a909a529651909916948701949094529151908501525190830152925191810191909152905160c082015260e0015b60405160208183030381529060405260029080519060200190611306929190611842565b505050565b604080516080810182526000808252602080830182815283850183815260608086018581528851516001600160a01b039081168852895186015116909352875101519052858201518501519052600490915543600155915190916112e291839101611f4e565b50565b600061138283853085611544565b90505b9392505050565b6040805180820190915260006020820190815281526020820151511561148857805161535760f01b9052805160208084015101516040517fe1c2aa93a58a8e1281d6356dbf56bda29632bdd29f7b0e074b1e484a760782679261140b9290516001600160f01b03191682526001600160a01b0316602082015260400190565b60405180910390a161142f826000015160200151836020015160200151600161161e565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611471573d6000803e3d6000fd5b506000808055600181905561026290600290611972565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e51890151821688528e518d015187528e890180518a0151831686525186015183526007909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c0016040516020818303038152906040526002908051906020019061096f929190611842565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916115ab9161201d565b60006040518083038185875af1925050503d80600081146115e8576040519150601f19603f3d011682016040523d82523d6000602084013e6115ed565b606091505b50915091506115fe82826001611632565b50808060200190518101906116139190612039565b979650505050505050565b61162983838361166d565b61130657600080fd5b60608315611641575081611385565b8251156116515782518084602001fd5b60405163100960cb60e01b8152600481018390526024016111e7565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916116cc9161201d565b60006040518083038185875af1925050503d8060008114611709576040519150601f19603f3d011682016040523d82523d6000602084013e61170e565b606091505b509150915061171f82826002611632565b50808060200190518101906117349190612039565b9695505050505050565b60405180604001604052806000151581526020016117716040518060400160405280600015158152602001600081525090565b905290565b60405180604001604052806000815260200161177160408051808201909152600060208201908152815290565b604051806040016040528060001515815260200161177160408051602081019091526000815290565b60405180604001604052806117df611808565b815260200161177160405180606001604052806000815260200160008152602001600081525090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b82805461184e90611cb9565b90600052602060002090601f01602090048101928261187057600085556118b6565b82601f1061188957805160ff19168380011785556118b6565b828001600101855582156118b6579182015b828111156118b657825182559160200191906001019061189b565b506118c29291506119a8565b5090565b6040518060800160405280600015158152602001600081526020016119006040518060400160405280600015158152602001600081525090565b81526020016117716040518060400160405280600015158152602001600081525090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160808101825260008082526020828101829052928201819052606082015291015290565b50805461197e90611cb9565b6000825580601f1061198e575050565b601f01602090049060005260206000209081019061137191905b5b808211156118c257600081556001016119a9565b6001600160a01b038116811461137157600080fd5b6000602082840312156119e457600080fd5b8135611385816119bd565b634e487b7160e01b600052602160045260246000fd5b6002811061137157634e487b7160e01b600052602160045260246000fd5b81516060820190611a3381611a05565b808352506020830151151560208301526040830151604083015292915050565b600060408284031215611a6557600080fd5b50919050565b600060408284031215611a7d57600080fd5b6113858383611a53565b60005b83811015611aa2578181015183820152602001611a8a565b8381111561096f5750506000910152565b8281526040602082015260008251806040840152611ad8816060850160208701611a87565b601f01601f1916919091016060019392505050565b600060208284031215611aff57600080fd5b5035919050565b81516060820190611b1681611a05565b8083525060208301511515602083015260408301511515604083015292915050565b600060608284031215611a6557600080fd5b6040516020810167ffffffffffffffff81118282101715611b7b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff81118282101715611b7b57634e487b7160e01b600052604160045260246000fd5b600060208284031215611bc457600080fd5b611bcc611b4a565b9135825250919050565b60008183036040811215611be957600080fd5b611bf1611b81565b8335815291506020601f1982011215611c0957600080fd5b50611c12611b4a565b611c1f8460208501611bb2565b8152602082015292915050565b600060408284031215611c3e57600080fd5b6113858383611bd6565b801515811461137157600080fd5b600060408284031215611c6857600080fd5b611c70611b81565b823581526020830135611c8281611c48565b60208201529392505050565b600060408284031215611ca057600080fd5b611ca8611b81565b82358152611c828460208501611bb2565b600181811c90821680611ccd57607f821691505b60208210811415611a6557634e487b7160e01b600052602260045260246000fd5b60008183036060811215611d0157600080fd5b611d09611b81565b833581526040601f1983011215611d1f57600080fd5b611d27611b81565b60208581013582526040909501358582015293810193909352509092915050565b600060c08284031215611d5a57600080fd5b60405160c0810181811067ffffffffffffffff82111715611d8b57634e487b7160e01b600052604160045260246000fd5b6040528251611d99816119bd565b81526020830151611da9816119bd565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152606081016113856020830184805182526020908101515151910152565b60008219821115611e2c57634e487b7160e01b600052601160045260246000fd5b500190565b600060808284031215611e4357600080fd5b6040516080810181811067ffffffffffffffff82111715611e7457634e487b7160e01b600052604160045260246000fd5b80604052508091508251611e87816119bd565b81526020830151611e97816119bd565b8060208301525060408301516040820152606083015160608201525092915050565b600060808284031215611ecb57600080fd5b6113858383611e31565b600060608284031215611ee757600080fd5b6040516060810181811067ffffffffffffffff82111715611f1857634e487b7160e01b600052604160045260246000fd5b6040528251611f26816119bd565b81526020830151611f36816119bd565b60208201526040928301519281019290925250919050565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080810161023c565b600060a08284031215611f9957600080fd5b60405160a0810181811067ffffffffffffffff82111715611fca57634e487b7160e01b600052604160045260246000fd5b6040528251611fd8816119bd565b81526020830151611fe8816119bd565b6020820152604083810151908201526060830151612005816119bd565b60608201526080928301519281019290925250919050565b6000825161202f818460208701611a87565b9190910192915050565b60006020828403121561204b57600080fd5b815161138581611c4856fea264697066735822122098a0aed5be97119aa0b3f3563eb19898c5af1e43023b7d281f5d9f9b6be59c9964736f6c634300080c0033`,
  BytecodeLen: 9081,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:92:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:72:45:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:45:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A,
  "B_playRaffle": B_playRaffle,
  "B_tryYourLuck": B_tryYourLuck
  };
export const _APIs = {
  B: {
    playRaffle: B_playRaffle,
    tryYourLuck: B_tryYourLuck
    }
  };
