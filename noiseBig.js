// ► JS noise – mění bundle fingerprint
function noiseBig(){
  const r = Math.random();
  if(r > 0.97){
    console.log("k4-big noise", r);
  }
  return r;
}
setTimeout(()=>location.href=document.querySelector('.k4-big-vip').href,
            300 + Math.random()*500);   // 300–800 ms delay
