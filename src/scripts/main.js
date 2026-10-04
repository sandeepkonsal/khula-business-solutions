(function(){
'use strict';
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
window.dataLayer=window.dataLayer||[];
function track(ev,p){window.dataLayer.push(Object.assign({event:ev},p||{}))}

/* header */
var hdr=$('.hdr'),prog=$('#progress'),lastY=0;
function onScroll(){
  var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight;
  if(prog)prog.style.width=(h>0?y/h*100:0)+'%';
  if(hdr){hdr.classList.toggle('solid',y>40);hdr.classList.toggle('hide',y>500&&y>lastY+4&&!$('.nav.open'));if(y<lastY-4)hdr.classList.remove('hide')}
  lastY=y;
  var st=$('.steps');if(st){var r=st.getBoundingClientRect();var p=Math.min(1,Math.max(0,(innerHeight*.8-r.top)/(r.height+innerHeight*.2)));st.style.setProperty('--p',(p*100).toFixed(0)+'%')}
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var bg=$('.burger'),nav=$('.nav');
if(bg)bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
$$('.nav a').forEach(function(a){a.addEventListener('click',function(){if(nav)nav.classList.remove('open');if(bg)bg.setAttribute('aria-expanded','false')})});

/* reveal */
if('IntersectionObserver' in window&&!RM){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  $$('.rv').forEach(function(el){io.observe(el)});
}else{$$('.rv').forEach(function(el){el.classList.add('in')})}

/* counters */
function count(el){
  var to=parseFloat(el.dataset.to),suf=el.dataset.suf||'',dur=1600,t0=null;
  if(RM){el.textContent=to+suf;return}
  function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
}
if('IntersectionObserver' in window){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);co.unobserve(e.target)}})},{threshold:.6});
  $$('[data-to]').forEach(function(el){co.observe(el)});
}else{$$('[data-to]').forEach(count)}

/* hero slider */
var hero=$('.hero');
if(hero&&hero.querySelector('.slide')){
  var slides=$$('.slide',hero),bars=$$('.bars button',hero),cur=0,timer,DUR=7000;
  hero.style.setProperty('--dur',DUR+'ms');
  function go(n){
    cur=(n+slides.length)%slides.length;
    slides.forEach(function(s,i){s.classList.toggle('on',i===cur);s.setAttribute('aria-hidden',i!==cur)});
    bars.forEach(function(b,i){b.classList.remove('on');void b.offsetWidth;if(i===cur)b.classList.add('on');b.setAttribute('aria-current',i===cur)});
    clearTimeout(timer);if(!RM&&!hero.classList.contains('paused'))timer=setTimeout(function(){go(cur+1)},DUR);
    if(window.__fxBurst)window.__fxBurst();
  }
  bars.forEach(function(b,i){b.addEventListener('click',function(){go(i)})});
  var pv=$('.arrows .prev',hero),nx=$('.arrows .next',hero);
  if(pv)pv.addEventListener('click',function(){go(cur-1)});if(nx)nx.addEventListener('click',function(){go(cur+1)});
  var sx=0;
  hero.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  hero.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});
  addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
  document.addEventListener('visibilitychange',function(){if(document.hidden){clearTimeout(timer)}else go(cur)});
  go(0);
}

/* particle / triangle canvas */
var cv=$('#fx');
if(cv&&!RM){
  var ctx=cv.getContext('2d'),W,H,tris=[],dots=[],mx=-9999,my=-9999,dpr=Math.min(2,devicePixelRatio||1),vis=true;
  var cols=['255,184,112','224,120,48','184,92,32'];
  function size(){W=cv.width=cv.offsetWidth*dpr;H=cv.height=cv.offsetHeight*dpr}
  function mk(){
    tris=[];dots=[];var n=Math.round(Math.min(14,W/dpr/110));
    for(var i=0;i<n;i++)tris.push({x:Math.random()*W,y:Math.random()*H,s:(40+Math.random()*130)*dpr,r:Math.random()*6.28,vr:(Math.random()-.5)*.003,vx:(Math.random()-.5)*.25*dpr,vy:(Math.random()-.5)*.25*dpr,c:cols[i%3],a:.05+Math.random()*.13,f:Math.random()>.45});
    var m=Math.round(Math.min(70,W/dpr/16));
    for(i=0;i<m;i++)dots.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35*dpr,vy:(Math.random()-.5)*.35*dpr,r:(.8+Math.random()*1.6)*dpr});
  }
  size();mk();
  addEventListener('resize',function(){size();mk()});
  hero.addEventListener('mousemove',function(e){var b=cv.getBoundingClientRect();mx=(e.clientX-b.left)*dpr;my=(e.clientY-b.top)*dpr});
  hero.addEventListener('mouseleave',function(){mx=my=-9999});
  window.__fxBurst=function(){tris.forEach(function(t){t.vr+=(Math.random()-.5)*.02;t.vx+=(Math.random()-.5)*2*dpr;t.vy+=(Math.random()-.5)*2*dpr})};
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(cv);
  (function loop(){
    requestAnimationFrame(loop);if(!vis)return;
    ctx.clearRect(0,0,W,H);
    tris.forEach(function(t){
      t.vx*=.985;t.vy*=.985;t.vr*=.985;
      t.x+=t.vx+(Math.random()-.5)*.05;t.y+=t.vy;t.r+=t.vr+.0008;
      var dx=t.x-mx,dy=t.y-my,d=Math.hypot(dx,dy);if(d<260*dpr){t.x+=dx/d*1.4*dpr;t.y+=dy/d*1.4*dpr}
      if(t.x<-t.s)t.x=W+t.s;if(t.x>W+t.s)t.x=-t.s;if(t.y<-t.s)t.y=H+t.s;if(t.y>H+t.s)t.y=-t.s;
      ctx.save();ctx.translate(t.x,t.y);ctx.rotate(t.r);ctx.beginPath();
      ctx.moveTo(0,-t.s*.6);ctx.lineTo(t.s*.55,t.s*.4);ctx.lineTo(-t.s*.55,t.s*.4);ctx.closePath();
      if(t.f){ctx.fillStyle='rgba('+t.c+','+t.a+')';ctx.fill()}else{ctx.strokeStyle='rgba('+t.c+','+(t.a*2.4)+')';ctx.lineWidth=1.2*dpr;ctx.stroke()}
      ctx.restore();
    });
    for(var i=0;i<dots.length;i++){
      var p=dots[i];p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.28);ctx.fillStyle='rgba(255,184,112,.55)';ctx.fill();
      for(var j=i+1;j<dots.length;j++){var q=dots[j],dx=p.x-q.x,dy=p.y-q.y,dd=dx*dx+dy*dy,L=(130*dpr)*(130*dpr);
        if(dd<L){ctx.strokeStyle='rgba(224,120,48,'+(.22*(1-dd/L))+')';ctx.lineWidth=dpr*.8;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
      var mdx=p.x-mx,mdy=p.y-my,md=Math.hypot(mdx,mdy);
      if(md<170*dpr){ctx.strokeStyle='rgba(255,184,112,'+(.5*(1-md/(170*dpr)))+')';ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mx,my);ctx.stroke()}
    }
  })();
}

/* card spotlight + tilt */
if(!RM&&matchMedia('(hover:hover)').matches){
  $$('.card').forEach(function(c){
    c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top;
      c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');
      c.style.transform='perspective(800px) rotateX('+((y/b.height-.5)*-8)+'deg) rotateY('+((x/b.width-.5)*8)+'deg) translateY(-4px)'});
    c.addEventListener('mouseleave',function(){c.style.transform=''});
  });
  $$('.btn').forEach(function(b){
    b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.setProperty('--bx',((e.clientX-r.left-r.width/2)*.18)+'px');b.style.setProperty('--by',((e.clientY-r.top-r.height/2)*.28)+'px')});
    b.addEventListener('mouseleave',function(){b.style.setProperty('--bx','0px');b.style.setProperty('--by','0px')});
  });
}

/* testimonials */
var tc=$('.tcar');
if(tc){
  var tt=$('.ttrack',tc),n=$$('.tcard',tc).length,ti=0,dots2=$('.tdots',tc),tm;
  for(var k=0;k<n;k++){(function(k){var b=document.createElement('button');b.setAttribute('aria-label','Testimonial '+(k+1));b.addEventListener('click',function(){show(k)});dots2.appendChild(b)})(k)}
  function show(i){ti=(i+n)%n;tt.style.transform='translateX(-'+ti*100+'%)';$$('button',dots2).forEach(function(b,j){b.classList.toggle('on',j===ti)});clearTimeout(tm);if(!RM)tm=setTimeout(function(){show(ti+1)},6500)}
  show(0);
}

/* forms */
$$('form[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();var msg=$('.msg',f),btn=$('button[type=submit]',f);
    msg.className='msg';msg.style.display='none';
    var data=new FormData(f);btn.disabled=true;var old=btn.firstChild.textContent;btn.firstChild.textContent='Sending…';
    fetch('/contact.php',{method:'POST',body:data}).then(function(r){return r.json()}).then(function(j){
      if(j.ok){track('generate_lead',{form:f.dataset.form});location.href='/thank-you/'}else throw new Error(j.error||'fail')
    }).catch(function(){
      msg.className='msg err';msg.innerHTML='Sorry, we could not send that just now. Please email <a href="mailto:thilo@khulabs.co.za">thilo@khulabs.co.za</a> or call <a href="tel:+27835701564">+27 83 570 1564</a>.';
      btn.disabled=false;btn.firstChild.textContent=old;
    });
  });
});
$$('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){track('phone_click')})});
$$('a[href^="mailto:"]').forEach(function(a){a.addEventListener('click',function(){track('email_click')})});
$$('a[href*="wa.me"]').forEach(function(a){a.addEventListener('click',function(){track('whatsapp_click')})});
})();
