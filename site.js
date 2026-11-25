const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const Q=new URLSearchParams(location.search);
let lang=Q.get('lang')||localStorage.getItem('lang')||'en',theme=Q.get('theme')||localStorage.getItem('theme')||'dark';
const T=(en,ar)=>lang==='ar'?ar:en;
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=theme;
 $('#lang').textContent=lang==='ar'?'EN':'AR';
 $$('[data-en]').forEach(e=>{if(e.id!=='h1')e.textContent=e.dataset[lang]});
 if(window.onRender)window.onRender();
 chatLocalize();
}
$('#lang').onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('lang',lang);render()};
$('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('theme',theme);render()};
/* particles */
(function(){const c=$('#fx'),x=c.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
 const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(90,Math.floor(W*H/18000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
 rs();addEventListener('resize',rs);addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY;const g=$('#glow');if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}});
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 (function f(){x.clearRect(0,0,W,H);const col=document.documentElement.dataset.theme==='light'?'90,70,200':'160,150,255';
  P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
   const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<140){p.x+=dx/d*1.4;p.y+=dy/d*1.4}
   x.fillStyle='rgba('+col+',.7)';x.beginPath();x.arc(p.x,p.y,1.6,0,7);x.fill()});
  for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<130){x.strokeStyle='rgba('+col+','+(.22*(1-d/130))+')';x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
  requestAnimationFrame(f)})()})();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function watch(){$$('.rv:not(.in)').forEach(e=>io.observe(e))}
/* chat */
const norm=s=>s.toLowerCase().replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^\p{L}\p{N} ]/gu,' ');
const MAIL='<a href="mailto:ahmedtahaelelemy@gmail.com">ahmedtahaelelemy@gmail.com</a>';
const KB=[
 {k:['hi','hello','hey','سلام','مرحبا','اهلا','هاي','ازيك'],en:"Hi! I'm Ahmed's assistant bot. Ask me about his projects, skills, experience or how to contact him.",ar:"أهلا! أنا البوت المساعد بتاع أحمد. اسألني عن مشاريعه ومهاراته وخبرته وإزاي تتواصل معاه."},
 {k:['who','about','yourself','ahmed','مين','عن احمد','نبذه','احمد'],en:"Ahmed Elelemy is a Senior Flutter Developer with 6+ years of experience, based in Egypt. He builds apps with Clean Architecture, Bloc and Riverpod, Firebase and CI/CD.",ar:"أحمد العليمي مطور Flutter أول بخبرة أكتر من 6 سنين، في مصر. بيبني تطبيقات بـ Clean Architecture وBloc وRiverpod وFirebase وCI/CD."},
 {k:['experience','years','senior','خبره','سنين','سنه'],en:"6+ years of Flutter. He started mobile development in 2016 with Google and MCIT's Mobile Application Launchpad, and has shipped to Google Play, the App Store and Huawei AppGallery.",ar:"أكتر من 6 سنين Flutter. بدأ موبايل ديف سنة 2016 مع Google وMobile Application Launchpad من MCIT، ونشر على Google Play وApp Store وHuawei AppGallery."},
 {k:['skill','tech','stack','flutter','dart','riverpod','bloc','firebase','مهارات','تقنيات','تكنولوجيا','بيعرف'],en:"Flutter and Dart, Clean Architecture, Bloc, Riverpod, Provider, REST, GraphQL, Firebase, CI/CD (GitHub Actions, Fastlane), unit and widget tests, Figma to UI and Arabic RTL. Also some React Native.",ar:"Flutter وDart وClean Architecture وBloc وRiverpod وProvider وREST وGraphQL وFirebase وCI/CD (GitHub Actions وFastlane) واختبارات unit وwidget وFigma to UI وواجهات عربي RTL. وشوية React Native."},
 {k:['project','projects','work','portfolio','app','apps','مشاريع','شغل','اعمال','تطبيقات'],en:"Four projects: Dr booking (clinic booking), xStore (local marketplace), 4Swapp (swapping marketplace on Google Play) and Muslim and Sundus (kids' cartoons). Each demo opens in a new tab with a video. Ask me about any of them.",ar:"أربع مشاريع: Dr booking (حجز عيادات) وxStore (سوق محلي) و4Swapp (سوق مقايضة على Google Play) وحكايات مسلم وسندس (كرتون أطفال). كل ديمو بيفتح في تاب جديدة فيها فيديو. اسألني عن أي واحد."},
 {k:['dr booking','drbooking','clinic','doctor','booking','حجز','عيادات','دكتور','عياده'],en:'Dr booking is a clinic booking platform for Egypt: patient mobile app and website in Arabic RTL, a clinic dashboard, an admin console and an API. <a href="app.html?a=drbooking" target="_blank">See the demo</a>.',ar:'Dr booking منصة حجز عيادات لمصر: تطبيق وموقع للمريض بالعربي RTL، داشبورد للعيادة، كونسول للأدمن وAPI. <a href="app.html?a=drbooking" target="_blank">شوف الديمو</a>.'},
 {k:['xstore','x store','marketplace','market','سوق','اكس ستور'],en:'xStore is a local marketplace that connects sellers and buyers with delivery. Shops and individuals can sell. It is pre-launch. <a href="app.html?a=xstore" target="_blank">See the demo</a>.',ar:'xStore سوق محلي بيربط البايعين بالمشترين مع توصيل. المحلات والأفراد يقدروا يبيعوا. لسه قبل الإطلاق. <a href="app.html?a=xstore" target="_blank">شوف الديمو</a>.'},
 {k:['4swapp','swapp','swap','مقايضه','فورسواب'],en:'4Swapp is a swapping and trading app on Google Play. Ahmed built it from scratch and led the unified analytics service. <a href="app.html?a=swapp" target="_blank">See the page</a>.',ar:'4Swapp تطبيق مقايضة وتبادل على Google Play. أحمد بناه من الصفر وقاد خدمة الـ analytics الموحدة. <a href="app.html?a=swapp" target="_blank">شوف الصفحة</a>.'},
 {k:['muslim','sundus','cartoon','kids','tiktok','youtube','مسلم','سندس','كرتون','اطفال','تيك'],en:'Muslim and Sundus is a short Islamic kids\' cartoon series in Egyptian Arabic, made with AI tools. <a href="https://www.tiktok.com/@muslimsondoss" target="_blank">TikTok</a> · <a href="https://www.youtube.com/@ahmedtahaelelemy2938" target="_blank">YouTube</a>',ar:'حكايات مسلم وسندس سلسلة كرتون إسلامي قصيرة للأطفال بالعامية المصرية، معمولة بأدوات ذكاء اصطناعي. <a href="https://www.tiktok.com/@muslimsondoss" target="_blank">تيك توك</a> · <a href="https://www.youtube.com/@ahmedtahaelelemy2938" target="_blank">يوتيوب</a>'},
 {k:['available','availability','hire','hiring','job','open','role','work with','متاح','توظيف','وظيفه','فرصه','شغل معاكم'],en:"Ahmed is open to new roles, in Egypt and in the Gulf. The best way is email: "+MAIL+".",ar:"أحمد متاح لفرص جديدة، في مصر والخليج. أحسن طريقة إيميل: "+MAIL+"."},
 {k:['contact','email','mail','reach','github','تواصل','ايميل','اتصال','رقم','كلم'],en:"Email: "+MAIL+'\nGitHub: <a href="https://github.com/AhmedElemey" target="_blank">github.com/AhmedElemey</a>',ar:"الإيميل: "+MAIL+'\nجيت هاب: <a href="https://github.com/AhmedElemey" target="_blank">github.com/AhmedElemey</a>'},
 {k:['where','location','egypt','gulf','based','فين','مكان','مصر','خليج','بلد'],en:"Ahmed is based in Egypt and open to roles in the Gulf.",ar:"أحمد في مصر ومتاح لفرص في الخليج."},
 {k:['education','study','university','degree','تعليم','جامعه','دراسه','كليه','بكالوريوس'],en:"B.Sc. in Computer Science and IT from Menoufia University.",ar:"بكالوريوس حاسبات ومعلومات من جامعة المنوفية."},
 {k:['thanks','thank','شكرا','تسلم','متشكر'],en:"You're welcome! If you want to talk to Ahmed directly, email him: "+MAIL+".",ar:"العفو! لو عايز تكلم أحمد مباشرة ابعتله إيميل: "+MAIL+"."}
];
const FB={en:"I only know about Ahmed's work, so I can't answer that one. Try projects, skills, experience or contact. For anything else, email him: "+MAIL+".",ar:"أنا بعرف بس عن شغل أحمد، فمش هقدر أجاوب على ده. جرب مشاريع أو مهارات أو خبرة أو تواصل. ولأي حاجة تانية ابعتله إيميل: "+MAIL+"."};
const SUG=[['Projects','المشاريع'],['Skills','المهارات'],['Experience','الخبرة'],['Availability','متاح؟'],['Contact','التواصل']];
const chatHTML='<button id="chatbtn" type="button" aria-label="Chat">💬</button><div id="chatnudge"></div><div id="chat"><div class="ch"><span>🤖</span><div><span id="ct"></span><small id="cs"></small></div><button id="cx" type="button">×</button></div><div class="msgs" id="msgs"></div><div class="sugg" id="sugg"></div><form class="cf" id="cf"><input id="ci" autocomplete="off"><button type="submit" id="csend"></button></form></div>';
document.body.insertAdjacentHTML('beforeend',chatHTML);
function chatLocalize(){$('#ct').textContent=T("Ahmed's assistant","مساعد أحمد");$('#cs').textContent=T("Answers from his portfolio","بيرد من محتوى البورتفوليو");$('#ci').placeholder=T("Ask about projects, skills, contact...","اسأل عن المشاريع أو المهارات أو التواصل...");$('#csend').textContent=T("Send","إرسال");$('#chatnudge').textContent=T("Ask me about Ahmed's work","اسألني عن شغل أحمد");
 $('#sugg').innerHTML=SUG.map(s=>'<button type="button">'+T(...s)+'</button>').join('')}
let greeted=false;
function add(cls,html){const d=document.createElement('div');d.className='m '+cls;d.innerHTML=html;$('#msgs').appendChild(d);$('#msgs').scrollTop=1e6;return d}
function answer(q){const n=' '+norm(q)+' ';let best=null,sc=0;KB.forEach(e=>{let s=0;e.k.forEach(k=>{const kk=norm(k);if(n.includes(kk.length<4?' '+kk+' ':kk))s+=kk.length});if(s>sc){sc=s;best=e}});return best?best[lang]:FB[lang]}
function ask(q){if(!q.trim())return;add('me',q.replace(/</g,'&lt;'));const t=add('bot typing','<i></i><i></i><i></i>');setTimeout(()=>{t.className='m bot';t.innerHTML=answer(q);$('#msgs').scrollTop=1e6},650)}
window.openChat=()=>{$('#chat').classList.add('open');$('#chatnudge').style.display='none';if(!greeted){greeted=true;add('bot',T("Hi, I'm Ahmed's assistant bot. I answer from his portfolio: projects, skills, availability and contact.","أهلا، أنا البوت المساعد بتاع أحمد. برد من محتوى البورتفوليو: المشاريع والمهارات والتوافر والتواصل."))}$('#ci').focus()};
$('#chatbtn').onclick=()=>$('#chat').classList.contains('open')?$('#chat').classList.remove('open'):openChat();
$('#cx').onclick=()=>$('#chat').classList.remove('open');
$('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value;$('#ci').value='';ask(v)};
$('#sugg').onclick=e=>{const b=e.target.closest('button');if(b)ask(b.textContent)};
render();watch();
