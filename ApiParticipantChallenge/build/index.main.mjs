// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _AApi_endAdmission3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AApi_endAdmission3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AApi_endAdmission3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    AApi_endAdmission0_43: ctc5,
    UApi_addUser0_43: ctc6
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v198, v199, v205, v210] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc3, ctc3]);
  const v214 = ctc.selfAddress();
  const v216 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:9:function exp)', 'at ./index.rsh:35:44:application call to "runAApi_endAdmission0_43" (defined at: ./index.rsh:38:11:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
    msg: 'in',
    who: 'AApi_endAdmission'
    });
  const v219 = stdlib.addressEq(v199, v214);
  stdlib.assert(v219, {
    at: './index.rsh:39:24:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)', 'at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:9:function exp)', 'at ./index.rsh:35:44:application call to "runAApi_endAdmission0_43" (defined at: ./index.rsh:38:11:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
    msg: 'Only the admin can call this',
    who: 'AApi_endAdmission'
    });
  const v223 = ['AApi_endAdmission0_43', v216];
  
  const txn1 = await (ctc.sendrecv({
    args: [v198, v199, v205, v210, v223],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v237], secs: v239, time: v238, didSend: v115, from: v236 } = txn1;
      
      switch (v237[0]) {
        case 'AApi_endAdmission0_43': {
          const v240 = v237[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AApi_endAdmission"
            });
          ;
          const v248 = v240[stdlib.checkedBigNumberify('./index.rsh:38:11:spread', stdlib.UInt_max, '0')];
          const v250 = true;
          const v251 = await txn1.getOutput('AApi_endAdmission', 'v250', ctc4, v250);
          
          const v533 = v205;
          const v536 = v210;
          if (v248) {
            sim_r.txns.push({
              kind: 'from',
              to: v198,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'UApi_addUser0_43': {
          const v299 = v237[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v115, from: v236 } = txn1;
  switch (v237[0]) {
    case 'AApi_endAdmission0_43': {
      const v240 = v237[1];
      undefined /* setApiDetails */;
      ;
      const v248 = v240[stdlib.checkedBigNumberify('./index.rsh:38:11:spread', stdlib.UInt_max, '0')];
      const v249 = stdlib.addressEq(v199, v236);
      stdlib.assert(v249, {
        at: './index.rsh:42:20:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:9:function exp)'],
        msg: 'Only the admin can call this',
        who: 'AApi_endAdmission'
        });
      const v250 = true;
      const v251 = await txn1.getOutput('AApi_endAdmission', 'v250', ctc4, v250);
      if (v115) {
        stdlib.protect(ctc0, await interact.out(v240, v251), {
          at: './index.rsh:38:12:application',
          fs: ['at ./index.rsh:38:12:application call to [unknown function] (defined at: ./index.rsh:38:12:function exp)', 'at ./index.rsh:43:15:application call to "fb" (defined at: ./index.rsh:41:9:function exp)', 'at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:9:function exp)'],
          msg: 'out',
          who: 'AApi_endAdmission'
          });
        }
      else {
        }
      
      const v533 = v205;
      const v536 = v210;
      if (v248) {
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'UApi_addUser0_43': {
      const v299 = v237[1];
      return;
      break;
      }
    }
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    AApi_endAdmission0_43: ctc4,
    UApi_addUser0_43: ctc5
    });
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v196 = ctc.selfAddress();
  
  const txn1 = await (ctc.sendrecv({
    args: [v196],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v199], secs: v201, time: v200, didSend: v26, from: v198 } = txn1;
      
      ;
      
      const v205 = stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '0');
      const v206 = false;
      const v207 = v200;
      const v210 = stdlib.checkedBigNumberify('./index.rsh:24:5:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v213 = v206 ? false : true;
        
        return v213;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v198,
          tok: undefined /* Nothing */
          });
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
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v199], secs: v201, time: v200, didSend: v26, from: v198 } = txn1;
  ;
  const v204 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v204), {
    at: './index.rsh:31:23:application',
    fs: ['at ./index.rsh:30:15:application call to [unknown function] (defined at: ./index.rsh:30:18:function exp)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v205 = stdlib.checkedBigNumberify('./index.rsh:35:47:decimal', stdlib.UInt_max, '0');
  let v206 = false;
  let v207 = v200;
  let v210 = stdlib.checkedBigNumberify('./index.rsh:24:5:after expr stmt', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v213 = v206 ? false : true;
    
    return v213;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v237], secs: v239, time: v238, didSend: v115, from: v236 } = txn2;
    switch (v237[0]) {
      case 'AApi_endAdmission0_43': {
        const v240 = v237[1];
        undefined /* setApiDetails */;
        ;
        const v248 = v240[stdlib.checkedBigNumberify('./index.rsh:38:11:spread', stdlib.UInt_max, '0')];
        const v249 = stdlib.addressEq(v199, v236);
        stdlib.assert(v249, {
          at: './index.rsh:42:20:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:9:function exp)'],
          msg: 'Only the admin can call this',
          who: 'Alice'
          });
        const v250 = true;
        await txn2.getOutput('AApi_endAdmission', 'v250', ctc3, v250);
        const cv205 = v205;
        const cv206 = v248;
        const cv207 = v238;
        const cv210 = v210;
        
        v205 = cv205;
        v206 = cv206;
        v207 = cv207;
        v210 = cv210;
        
        continue;
        break;
        }
      case 'UApi_addUser0_43': {
        const v299 = v237[1];
        undefined /* setApiDetails */;
        ;
        const v318 = stdlib.le(v205, stdlib.checkedBigNumberify('./index.rsh:50:32:decimal', stdlib.UInt_max, '4'));
        stdlib.assert(v318, {
          at: './index.rsh:50:20:application',
          fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:9:function exp)'],
          msg: 'The member list is full',
          who: 'Alice'
          });
        const v319 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v236), null);
        let v320;
        switch (v319[0]) {
          case 'None': {
            const v321 = v319[1];
            v320 = false;
            
            break;
            }
          case 'Some': {
            const v322 = v319[1];
            v320 = true;
            
            break;
            }
          }
        if (v320) {
          const v346 = [false, v205];
          await txn2.getOutput('UApi_addUser', 'v346', ctc8, v346);
          const cv205 = v205;
          const cv206 = true;
          const cv207 = v238;
          const cv210 = v210;
          
          v205 = cv205;
          v206 = cv206;
          v207 = cv207;
          v210 = cv210;
          
          continue;}
        else {
          await stdlib.mapSet(map0, v236, null);
          const v325 = [true, v205];
          await txn2.getOutput('UApi_addUser', 'v325', ctc8, v325);
          const v333 = stdlib.add(v205, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, '1'));
          const v334 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, '5'));
          if (v334) {
            stdlib.protect(ctc0, await interact.end(), {
              at: './index.rsh:55:39:application',
              fs: ['at ./index.rsh:55:39:application call to [unknown function] (defined at: ./index.rsh:55:39:function exp)', 'at ./index.rsh:55:39:application call to "liftedInteract" (defined at: ./index.rsh:55:39:application)', 'at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:9:function exp)'],
              msg: 'end',
              who: 'Alice'
              });
            
            const cv205 = v333;
            const cv206 = false;
            const cv207 = v238;
            const cv210 = v210;
            
            v205 = cv205;
            v206 = cv206;
            v207 = cv207;
            v210 = cv210;
            
            continue;}
          else {
            const cv205 = v333;
            const cv206 = false;
            const cv207 = v238;
            const cv210 = v210;
            
            v205 = cv205;
            v206 = cv206;
            v207 = cv207;
            v210 = cv210;
            
            continue;}}
        break;
        }
      }
    
    }
  stdlib.protect(ctc0, await interact.finish(), {
    at: './index.rsh:64:26:application',
    fs: ['at ./index.rsh:64:26:application call to [unknown function] (defined at: ./index.rsh:64:26:function exp)', 'at ./index.rsh:64:26:application call to "liftedInteract" (defined at: ./index.rsh:64:26:application)'],
    msg: 'finish',
    who: 'Alice'
    });
  
  ;
  return;
  
  
  };
export async function _UApi_addUser3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UApi_addUser3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UApi_addUser3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    AApi_endAdmission0_43: ctc6,
    UApi_addUser0_43: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc5, ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v198, v199, v205, v210] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc2, ctc3, ctc3]);
  const v227 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:35:44:application call to "runUApi_addUser0_43" (defined at: ./index.rsh:46:11:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
    msg: 'in',
    who: 'UApi_addUser'
    });
  const v228 = stdlib.le(v205, stdlib.checkedBigNumberify('./index.rsh:47:33:decimal', stdlib.UInt_max, '4'));
  stdlib.assert(v228, {
    at: './index.rsh:47:21:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:12:function exp)', 'at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:35:44:application call to "runUApi_addUser0_43" (defined at: ./index.rsh:46:11:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
    msg: 'The member list is full',
    who: 'UApi_addUser'
    });
  const v231 = ['UApi_addUser0_43', v227];
  
  const txn1 = await (ctc.sendrecv({
    args: [v198, v199, v205, v210, v231],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v237], secs: v239, time: v238, didSend: v115, from: v236 } = txn1;
      
      switch (v237[0]) {
        case 'AApi_endAdmission0_43': {
          const v240 = v237[1];
          
          break;
          }
        case 'UApi_addUser0_43': {
          const v299 = v237[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UApi_addUser"
            });
          ;
          const v319 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v236), null);
          let v320;
          switch (v319[0]) {
            case 'None': {
              const v321 = v319[1];
              v320 = false;
              
              break;
              }
            case 'Some': {
              const v322 = v319[1];
              v320 = true;
              
              break;
              }
            }
          if (v320) {
            const v346 = [false, v205];
            const v347 = await txn1.getOutput('UApi_addUser', 'v346', ctc8, v346);
            
            sim_r.txns.push({
              kind: 'from',
              to: v198,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            await stdlib.simMapSet(sim_r, 0, v236, null);
            const v325 = [true, v205];
            const v326 = await txn1.getOutput('UApi_addUser', 'v325', ctc8, v325);
            
            const v333 = stdlib.add(v205, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, '1'));
            const v334 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, '5'));
            if (v334) {
              const v563 = v333;
              const v566 = v210;
              sim_r.isHalt = false;
              }
            else {
              const v568 = v333;
              const v571 = v210;
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v115, from: v236 } = txn1;
  switch (v237[0]) {
    case 'AApi_endAdmission0_43': {
      const v240 = v237[1];
      return;
      break;
      }
    case 'UApi_addUser0_43': {
      const v299 = v237[1];
      undefined /* setApiDetails */;
      ;
      const v318 = stdlib.le(v205, stdlib.checkedBigNumberify('./index.rsh:50:32:decimal', stdlib.UInt_max, '4'));
      stdlib.assert(v318, {
        at: './index.rsh:50:20:application',
        fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:9:function exp)'],
        msg: 'The member list is full',
        who: 'UApi_addUser'
        });
      const v319 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v236), null);
      let v320;
      switch (v319[0]) {
        case 'None': {
          const v321 = v319[1];
          v320 = false;
          
          break;
          }
        case 'Some': {
          const v322 = v319[1];
          v320 = true;
          
          break;
          }
        }
      if (v320) {
        const v346 = [false, v205];
        const v347 = await txn1.getOutput('UApi_addUser', 'v346', ctc8, v346);
        if (v115) {
          stdlib.protect(ctc0, await interact.out(v299, v347), {
            at: './index.rsh:46:12:application',
            fs: ['at ./index.rsh:46:12:application call to [unknown function] (defined at: ./index.rsh:46:12:function exp)', 'at ./index.rsh:60:19:application call to "fn" (defined at: ./index.rsh:49:9:function exp)', 'at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:9:function exp)'],
            msg: 'out',
            who: 'UApi_addUser'
            });
          }
        else {
          }
        
        ;
        return;
        }
      else {
        await stdlib.mapSet(map0, v236, null);
        const v325 = [true, v205];
        const v326 = await txn1.getOutput('UApi_addUser', 'v325', ctc8, v325);
        if (v115) {
          stdlib.protect(ctc0, await interact.out(v299, v326), {
            at: './index.rsh:46:12:application',
            fs: ['at ./index.rsh:46:12:application call to [unknown function] (defined at: ./index.rsh:46:12:function exp)', 'at ./index.rsh:53:19:application call to "fn" (defined at: ./index.rsh:49:9:function exp)', 'at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:9:function exp)'],
            msg: 'out',
            who: 'UApi_addUser'
            });
          }
        else {
          }
        
        const v333 = stdlib.add(v205, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, '1'));
        const v334 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, '5'));
        if (v334) {
          const v563 = v333;
          const v566 = v210;
          return;
          }
        else {
          const v568 = v333;
          const v571 = v210;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function AApi_endAdmission(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AApi_endAdmission expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AApi_endAdmission expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _AApi_endAdmission3(ctcTop, interact);}
  };
export async function UApi_addUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UApi_addUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UApi_addUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _UApi_addUser3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AApi_endAdmission(byte)byte`, `UApi_addUser()(byte,uint64)`],
    pure: [],
    sigs: [`AApi_endAdmission(byte)byte`, `UApi_addUser()(byte,uint64)`]
    },
  appApproval: `BiAFAAECyeDVhgQDJgMBAAEBACI1ADEYQQIWKmRJIls1AYEIWzUCMRkjEkEACDEAKChmQgHkNhoAF0lBAC8iNQQjNQZJJQxAAA8lEkQ2GgE1/yg0/1BCACqBquDxtAISRCo1/yk0/1AoUEIAFjYaAhc1BDYaAzYaARdJJAxAAOgkEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+gUBbNf2BSFs1/Ek1BTX7gASiX0S1NPtQsDT7IlVAACw0+1cBATX6NP4xABJEgAkAAAAAAAAA+gGwKTUHNP80/jT9NPoXMgY0/EIArDT9gQQORDEAiAFSSTX5IlVAAAYiNfpCAAYjNfpCAAA0+kEAJoAIAAAAAAAAAVooNP0WUFCwKDT9FlA1BzT/NP40/SMyBjT8QgBiMQAoKWaACAAAAAAAAAFFKTT9FlBQsCk0/RZQNQc0/zT+NP0jCCIyBjT8QgA1IhJEgaCNBogA6SI0ARJENARJIhJMNAISEURJNQU1/4AE+4Zv7jT/ULAxADT/IiIyBiJCAAA1/zX+Nf01/DX7Nfo0/UEAE7EisgE0/7III7IQNPqyB7NCACA0+jT7UDT8FlA0/xZQKEsBVwBQZ0ghBDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 80,
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
                "name": "v199",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v199",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_AApi_endAdmission0_43",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UApi_addUser0_43",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v237",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v250",
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
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v325",
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
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v346",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "AApi_endAdmission",
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
    "inputs": [],
    "name": "UApi_addUser",
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
        "internalType": "struct T10",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_AApi_endAdmission0_43",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_UApi_addUser0_43",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v237",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200131e3803806200131e83398101604081905262000026916200033f565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000121565b620000d0604080516080808201835260008284018181526060808501839052908452845192830185528183526020838101839052948301829052820152909182015290565b80513390526020828101515182516001600160a01b039091169082015280820180516000908190528151909201829052805143604090910152516060015262000119816200014b565b50506200043a565b81620001475760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516020015115620001b9578051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200019d573d6000803e3d6000fd5b5060008080556001819055620001b6906002906200025a565b50565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b8701805151865251840151835260039097554360015589518087019790975293519093168589015290519084015251828401528451808303909301835260a09091019093528051919262000255926002929091019062000299565b505050565b5080546200026890620003fd565b6000825580601f1062000279575050565b601f016020900490600052602060002090810190620001b6919062000328565b828054620002a790620003fd565b90600052602060002090601f016020900481019282620002cb576000855562000316565b82601f10620002e657805160ff191683800117855562000316565b8280016001018555821562000316579182015b8281111562000316578251825591602001919060010190620002f9565b506200032492915062000328565b5090565b5b8082111562000324576000815560010162000329565b60008183036040808212156200035457600080fd5b80518082016001600160401b0380821183831017156200038457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200039e57600080fd5b835194506020850191508482108183111715620003cb57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b0382168214620003eb57600080fd5b90825260208101919091529392505050565b600181811c908216806200041257607f821691505b602082108114156200043457634e487b7160e01b600052602260045260246000fd5b50919050565b610ed4806200044a6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100eb5780638ab696f614610100578063ab53f2c614610125578063eca0d9911461014857005b80631e93b0f1146100775780633503e7931461009b5780633bc5b7bf146100be57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100ae6100a9366004610aff565b61015b565b6040519015158152602001610092565b3480156100ca57600080fd5b506100de6100d9366004610b36565b610194565b6040516100929190610b87565b3480156100f757600080fd5b50600154610088565b6101086101c0565b604080518251151581526020928301519281019290925201610092565b34801561013157600080fd5b5061013a610202565b604051610092929190610bb9565b610075610156366004610c16565b61029f565b6000610165610961565b6020818101805151600090525151015183151590526101826109a8565b61018c82826102c3565b519392505050565b60408051606081018252600080825260208201819052918101919091526101ba8261075a565b92915050565b60408051808201909152600080825260208201526101dc610961565b602081015151600190526101ee6109a8565b6101f882826102c3565b6020015192915050565b60006060600054600280805461021790610c2e565b80601f016020809104026020016040519081016040528092919081815260200182805461024390610c2e565b80156102905780601f1061026557610100808354040283529160200191610290565b820191906000526020600020905b81548152906001019060200180831161027357829003601f168201915b50505050509050915091509091565b6102a76109a8565b6102bf6102b936849003840184610cfc565b826102c3565b5050565b6102d3600360005414600c610833565b81516102ee9015806102e757508251600154145b600d610833565b60008080556002805461030090610c2e565b80601f016020809104026020016040519081016040528092919081815260200182805461032c90610c2e565b80156103795780601f1061034e57610100808354040283529160200191610379565b820191906000526020600020905b81548152906001019060200180831161035c57829003601f168201915b50505050508060200190518101906103919190610da1565b90506103de6040805160a081018252600060808201818152825260208083018290528351808501855282815280820183905283850152835180850190945281845283015290606082015290565b7fca2c3289b1c221cf6312be74234bac44d246b261df26611a064418c14b9e9eff338560405161040f929190610e24565b60405180910390a1600060208501515151600181111561043157610431610b53565b141561050757602080850151510151815261044e34156008610833565b6020820151610469906001600160a01b031633146009610833565b604051600181527f32835f446085e5f25e7f08a28386cff770071922f489b1278c9254080f0efaa39060200160405180910390a1600183526104a96109db565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015182840180519190915284515181519015159301929092528151439101526060808501519151015261050181610858565b50610754565b600160208501515151600181111561052157610521610b53565b1415610754576105333415600a610833565b610546600483604001511115600b610833565b60006105513361075a565b51600181111561056357610563610b53565b141561057557600060208201526105a0565b60016105803361075a565b51600181111561059257610592610b53565b14156105a057600160208201525b8060200151156106715760608101805160009052604080840151825160200152905190517f93085ef36ea58d9222aeab6460535064d3f828db401f0dd55481a6a06c6d695191610603918151151581526020918201519181019190915260400190565b60405180910390a16060810151602084015261061d6109db565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152805160019301929092528151439101526060808501519151015261050181610858565b33600090815260046020908152604091829020805462ff00ff1916600190811790915583830180519190915284830151815183015251825181511515815290820151918101919091527fd0215f963a46648a5f60e14818ca1947207911d8758f05218f31002cf2c7c5a9910160405180910390a1604081015160208401526106f76109db565b825181516001600160a01b03918216905260208085015183519216910152604083015161072690600190610e78565b6020808301805192909252815160009101528051436040909101526060808501519151015261050181610858565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156107a6576107a6610b53565b1415610823576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156107e7576107e7610b53565b60018111156107f8576107f8610b53565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b816102bf5760405163100960cb60e01b81526004810182905260240160405180910390fd5b806020015160200151156108c2578051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108a8573d6000803e3d6000fd5b50600080805560018190556108bf90600290610a1c565b50565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b8701805151865251840151835260039097554360015589518087019790975293519093168589015290519084015251828401528451808303909301835260a09091019093528051919261095c9260029290910190610a56565b505050565b6040518060400160405280600081526020016109a360408051608081018252600060208083018281528451918201855282825293830152606082015290815290565b905290565b60405180604001604052806000151581526020016109a36040518060400160405280600015158152602001600081525090565b604080516080808201835260008284018181526060808501839052908452845192830185528183526020838101839052948301829052820152909182015290565b508054610a2890610c2e565b6000825580601f10610a38575050565b601f0160209004906000526020600020908101906108bf9190610ada565b828054610a6290610c2e565b90600052602060002090601f016020900481019282610a845760008555610aca565b82601f10610a9d57805160ff1916838001178555610aca565b82800160010185558215610aca579182015b82811115610aca578251825591602001919060010190610aaf565b50610ad6929150610ada565b5090565b5b80821115610ad65760008155600101610adb565b8035801515811461082e57600080fd5b600060208284031215610b1157600080fd5b610b1a82610aef565b9392505050565b6001600160a01b03811681146108bf57600080fd5b600060208284031215610b4857600080fd5b8135610b1a81610b21565b634e487b7160e01b600052602160045260246000fd5b600281106108bf57634e487b7160e01b600052602160045260246000fd5b81516060820190610b9781610b69565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610bed57858101830151858201606001528201610bd1565b81811115610bff576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610c2857600080fd5b50919050565b600181811c90821680610c4257607f821691505b60208210811415610c2857634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715610c9457634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610c9457634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c9457634e487b7160e01b600052604160045260246000fd5b60008183036080811215610d0f57600080fd5b610d17610c63565b833581526060601f1983011215610d2d57600080fd5b610d35610c9a565b610d3d610ccb565b602086013560028110610d4f57600080fd5b81526020603f1985011215610d6357600080fd5b610d6b610c9a565b9350610d7960408701610aef565b8452836020820152610d8d60608701610aef565b604082015281526020820152949350505050565b600060808284031215610db357600080fd5b6040516080810181811067ffffffffffffffff82111715610de457634e487b7160e01b600052604160045260246000fd5b6040528251610df281610b21565b81526020830151610e0281610b21565b6020820152604083810151908201526060928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190610e5081610b69565b8060408501525060208101515115156060840152604081015115156080840152509392505050565b60008219821115610e9957634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220542c8630ad86e8242a7fe7f74237e63b9e14da887056139b8d55e5f01d6847b564736f6c634300080c0033`,
  BytecodeLen: 4894,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:35:44:after expr stmt semicolon',
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
  "AApi_endAdmission": AApi_endAdmission,
  "Alice": Alice,
  "UApi_addUser": UApi_addUser
  };
export const _APIs = {
  AApi: {
    endAdmission: AApi_endAdmission
    },
  UApi: {
    addUser: UApi_addUser
    }
  };
