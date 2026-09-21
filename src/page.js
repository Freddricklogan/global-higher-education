/* Page widgets for global-higher-education, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Strategy explorer tabs ----
document.querySelectorAll('#levertabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#levertabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#explorer .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- Comprehensive internationalization self-check ----
const cks=document.querySelectorAll('#checklist .ck');
function scoreCI(){
  let s=0; cks.forEach(c=>{ if(c.classList.contains('on')) s+=parseInt(c.dataset.w,10); });
  s=Math.min(100,s);
  document.getElementById('ciFill').style.width=s+'%';
  const v=document.getElementById('ciVerdict');
  if(s===0){v.textContent='Select the elements your institution has in place';v.style.color='var(--lr-muted)';}
  else if(s<35){v.textContent=s+'% — Fragmented: activities exist but lack an institution-wide strategy';v.style.color='var(--lr-bad)';}
  else if(s<70){v.textContent=s+'% — Developing: strong pillars, but not yet comprehensive';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Comprehensive: internationalization is woven across the institution';v.style.color='var(--lr-good)';}
}
cks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreCI();});
scoreCI();

// ---- Rankings explorer tabs ----
document.querySelectorAll('#ranktabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#ranktabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#rankings .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- TNE model selector ----
const tneInfo={
  branch:{t:'International branch campus',d:'The awarding institution operates a physical campus in the host country and grants its own credential there. Highest control and brand consistency — and the highest capital cost, financial exposure, and dual-jurisdiction quality-assurance burden. Best when there is durable demand and a stable host environment.'},
  franchise:{t:'Franchising / validation',d:'A local partner delivers the awarding institution’s programme under licence (franchising) or wins approval for its own programme to carry the awarding institution’s credential (validation). Low capital and fast reach, but the awarding institution stakes its brand on a partner it must monitor closely to prevent quality drift.'},
  joint:{t:'Joint &amp; double degrees',d:'Institutions in different countries co-design a programme that awards a single shared credential (joint) or two separate credentials (double / dual). Deep, reciprocal collaboration with mutual recognition and shared expertise — offset by complex governance, credit-recognition, and sustainability challenges if a founding champion departs.'},
  online:{t:'Distance / online provision',d:'The credential is delivered wholly or largely online across borders, sometimes supported by local study centres. Highly scalable and flexible for working and non-mobile learners, but success depends on digital-access equity, engagement and completion, credential recognition abroad, and designing in cultural connection.'}
};
const tneOpts=document.querySelectorAll('#tneOpts .opt');
const tneResult=document.getElementById('tneResult');
function renderTne(m){
  const i=tneInfo[m];
  tneResult.innerHTML='<div class="big">'+i.t+'</div><p class="kv">'+i.d+'</p>';
}
tneOpts.forEach(o=>o.onclick=()=>{
  tneOpts.forEach(x=>x.classList.remove('sel'));
  o.classList.add('sel');
  renderTne(o.dataset.m);
});
renderTne('branch');

