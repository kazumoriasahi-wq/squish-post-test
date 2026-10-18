(function(root){'use strict';
const size=q=>({w:112-60*q,h:76+76*q});
function create(seed=Date.now()){return{phase:'ready',q:0,hold:false,score:0,passed:0,perfects:0,chain:0,bestChain:0,lives:3,time:0,gate:null,gap:0,rng:seed>>>0,serial:0,events:[]};}
function random(s){s.rng=(Math.imul(s.rng,1664525)+1013904223)>>>0;return s.rng/4294967296;}
function spawn(s){const early=[0,.55,1],choices=[0,.25,.5,.75,1];let q=s.serial<3?early[s.serial]:choices[Math.floor(random(s)*5)];if(s.gate&&Math.abs(q-s.gate.target)<.2)q=1-s.gate.target;s.serial++;const body=size(q);s.gate={id:s.serial,target:q,w:body.w+18,h:body.h+18,progress:0,duration:s.serial===1?4.5:Math.max(1.9,3.7-s.passed*.055)};}
function start(s){if(s.phase!=='ready')return;s.phase='playing';spawn(s);}
function fits(q,gate){const p=size(q);return p.w<=gate.w+.00001&&p.h<=gate.h+.00001;}
function step(s,dt){if(s.phase!=='playing'||!Number.isFinite(dt)||dt<=0)return;dt=Math.min(dt,.05);s.time+=dt;s.q=Math.max(0,Math.min(1,s.q+(s.hold?1.18:-1.35)*dt));if(s.gap>0){s.gap-=dt;if(s.gap<=0)spawn(s);return;}const gate=s.gate;if(!gate)return;gate.progress+=dt/gate.duration;if(gate.progress<1)return;const ok=fits(s.q,gate);gate.progress=1;s.gap=.78;if(ok){s.passed++;s.chain++;s.bestChain=Math.max(s.bestChain,s.chain);const perfect=Math.abs(s.q-gate.target)<.075;if(perfect)s.perfects++;const gain=10+Math.min(s.chain,10)*2+(perfect?5:0);s.score+=gain;s.events.push({type:perfect?'perfect':'pass',gain,chain:s.chain,passed:s.passed});}else{s.lives--;s.chain=0;s.events.push({type:'miss'});if(s.lives===0){s.phase='over';s.hold=false;s.events.push({type:'over'});}}}
const api={create,start,step,size,fits};root.SquishEngine=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
