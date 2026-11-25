const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const Q=new URLSearchParams(location.search);
let lang=Q.get('lang')||localStorage.getItem('lang')||'en',theme=Q.get('theme')||localStorage.getItem('theme')||'dark',app='drbooking',step=0;
const T=(en,ar)=>lang==='ar'?ar:en;
const APPS={
drbooking:{c:'#0f8f8a',rtl:true,
 title:['Dr booking','Dr booking'],
 text:['Patient flow: pick a doctor, choose a time, confirm. Clinic staff see the booking on their dashboard.','مسار المريض: اختار دكتور، اختار ميعاد، أكد. موظفو العيادة بيشوفوا الحجز على الداشبورد.'],
 steps:[['Doctors','الدكاترة'],['Time','الميعاد'],['Confirmed','تم الحجز']],
 links:[['Live test: patient website','https://moonlight-website-test.onrender.com'],['Live test: mobile app (web)','https://moonlight-mobile-test.onrender.com'],['Live test: clinic dashboard','https://moonlight-dashboard-test.onrender.com']],
 note:['Test environment on free hosting with fake data. The first open can take about a minute.','بيئة اختبار على استضافة مجانية ببيانات وهمية. أول فتح ممكن ياخد دقيقة.'],
 screens:[
  ()=>bar('Dr booking','دكتور بوكينج')+body(item('Dr. Sara Nabil',T('Dentist','أسنان'),'250')+item('Dr. Omar Hassan',T('Orthopedics','عظام'),'300')+item('Dr. Mona Adel',T('Pediatrics','أطفال'),'200')),
  ()=>bar(T('Choose a time','اختار الميعاد'),'اختار الميعاد')+body(item(T('Sat 28 Nov','السبت 28 نوفمبر'),'05:00 PM','')+item(T('Sat 28 Nov','السبت 28 نوفمبر'),'05:30 PM','')+item(T('Sun 29 Nov','الأحد 29 نوفمبر'),'06:00 PM','')+btn(T('Continue','متابعة'))),
  ()=>bar(T('Booking','الحجز'),'الحجز')+body('<div class="s-item"><div><b>Dr. Sara Nabil</b><small>'+T('Sat 28 Nov, 05:00 PM','السبت 28 نوفمبر، 05:00 م')+'</small></div><span class="s-chip">'+T('Confirmed','مؤكد')+'</span></div>'+btn(T('Cancel booking','إلغاء الحجز')))]},
xstore:{c:'#f97316',rtl:false,
 title:['xStore','xStore'],
 text:['Mock screens of the marketplace: browse nearby offers, open a product, track delivery. The app is not on the stores yet.','شاشات توضيحية للسوق: تصفح عروض قريبة، افتح منتج، تابع التوصيل. التطبيق لسه مش على الاستورز.'],
 steps:[['Nearby','قريب مني'],['Product','المنتج'],['Delivery','التوصيل']],
 links:[],note:['Illustrative screens with fake data.','شاشات توضيحية ببيانات وهمية.'],
 screens:[
  ()=>bar('xStore','xStore')+body(item(T('Fresh bread, 12 pcs','عيش طازة 12 رغيف'),T('Local bakery · 1.2 km','مخبز محلي · 1.2 كم'),'30')+item(T('Used phone case','جراب موبايل مستعمل'),T('Individual seller · 2 km','بايع فرد · 2 كم'),'50')+item(T('Mixed vegetables 2kg','خضار متنوعة 2 كجم'),T('Shop · 0.8 km','محل · 0.8 كم'),'45')),
  ()=>bar(T('Product','المنتج'),'المنتج')+body('<div class="s-item" style="height:110px;justify-content:center;font-size:30px">🛍️</div>'+item(T('Mixed vegetables 2kg','خضار متنوعة 2 كجم'),T('Shop · 0.8 km','محل · 0.8 كم'),'45')+btn(T('Order with delivery','اطلب مع توصيل'))),
  ()=>bar(T('Delivery','التوصيل'),'التوصيل')+body(item(T('Order placed','تم الطلب'),'✓','')+item(T('Seller preparing','البايع بيجهز'),'✓','')+item(T('On the way','في الطريق'),'…',''))]},
swapp:{c:'#6d28d9',rtl:false,
 title:['4swapp','4swapp'],
 text:['Illustrative screens of the offers flow. I built the app from scratch and refactored offers so actions stay in sync across screens. No client data is shown.','شاشات توضيحية لمسار العروض. بنيت التطبيق من الصفر وعملت refactor للعروض فتفضل الأكشنز متزامنة بين الشاشات. مفيش بيانات عميل ظاهرة.'],
 steps:[['Offers','العروض'],['Offer details','تفاصيل العرض']],
 links:[],note:['Mock-ups only. Not the real app UI or data.','نماذج فقط. مش واجهة أو بيانات التطبيق الحقيقية.'],
 screens:[
  ()=>bar(T('Offers','العروض'),'العروض')+body(item(T('Sample offer A','عرض تجريبي أ'),T('Saved','محفوظ'),'')+item(T('Sample offer B','عرض تجريبي ب'),T('New','جديد'),'')+item(T('Sample offer C','عرض تجريبي ج'),T('Saved','محفوظ'),'')),
  ()=>bar(T('Offer details','تفاصيل العرض'),'تفاصيل العرض')+body(item(T('Sample offer A','عرض تجريبي أ'),T('Saved','محفوظ'),'')+btn(T('Save / unsave','حفظ / إلغاء الحفظ')))]}
};
function bar(en,ar){return '<div class="s-bar" style="background:var(--c)">'+(lang==='ar'?ar:en)+'</div>'}
function body(h){return '<div class="s-body">'+h+'</div>'}
function item(a,b,p){return '<div class="s-item"><div><b>'+a+'</b><small>'+b+'</small></div>'+(p?'<span>'+p+' '+T('EGP','ج.م')+'</span>':'')+'</div>'}
function btn(t){return '<div class="s-btn">'+t+'</div>'}
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=theme;
 $('#lang').textContent=lang==='ar'?'EN':'AR';
 $$('[data-en]').forEach(e=>e.textContent=e.dataset[lang]);
 const a=APPS[app];
 $$('.tab').forEach(t=>t.classList.toggle('on',t.dataset.app===app));
 $('#d-title').textContent=a.title[0];
 $('#d-text').textContent=T(...a.text);
 $('#steps').innerHTML=a.steps.map((s,i)=>'<button type="button" class="'+(i===step?'on':'')+'" data-i="'+i+'">'+(i+1)+'. '+T(...s)+'</button>').join('');
 $('#d-links').innerHTML=a.links.map(l=>'<a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>').join('')+'<p class="note" style="width:100%">'+T(...a.note)+'</p>';
 const sc=$('#screen');sc.className='screen'+(a.rtl?' rtl':'');sc.style.setProperty('--c',a.c);
 sc.innerHTML=a.screens[step]()+'<div class="s-nav"><span>⌂</span><span>☰</span><span>☺</span></div>';
}
document.addEventListener('click',e=>{
 const t=e.target.closest('.tab'),s=e.target.closest('#steps button'),d=e.target.closest('[data-demo]');
 if(t){app=t.dataset.app;step=0;render()}
 if(s){step=+s.dataset.i;render()}
 if(d){app=d.dataset.demo;step=0;render()}
});
$('#lang').onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('lang',lang);render()};
$('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('theme',theme);render()};
render();
