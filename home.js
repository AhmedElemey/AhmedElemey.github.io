function splitH1(){
 const h=document.getElementById('h1');const t=h.dataset[lang];h.innerHTML='';
 t.split(' ').forEach((w,i)=>{const s=document.createElement('span');s.className='w';let g=false;if(w.startsWith('*')){g=true;w=w.replace(/\*/g,'')}
  if(g)s.className+=' g';s.textContent=w;s.style.animationDelay=(0.5+i*0.09)+'s';h.appendChild(s);h.appendChild(document.createTextNode(' '))});
}
function counts(){document.querySelectorAll('[data-n]').forEach(e=>{const n=+e.dataset.n,s=e.dataset.s||'';let t0=null;const f=ts=>{t0=t0||ts;const p=Math.min((ts-t0)/1600,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)};setTimeout(()=>requestAnimationFrame(f),1700)})}
window.onRender=()=>{splitH1()};
splitH1();counts();
const ph=document.getElementById('phone'),st=document.getElementById('stage');
st.addEventListener('mousemove',e=>{const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ph.style.transform='rotateY('+(x*26)+'deg) rotateX('+(-y*22)+'deg)'});
st.addEventListener('mouseleave',()=>ph.style.transform='');
document.querySelectorAll('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
document.getElementById('askbtn').onclick=()=>window.openChat();
