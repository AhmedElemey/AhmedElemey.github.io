const PLAY='https://play.google.com/store/apps/details?id=com.forswapp.forswappandroid';
const IMG=['Zto1EWzy_kMUcAlvXgbHUC4DGuICJGQ9de2RtA0VwIv9ImzAPd84YV2gW3FKWpWgM2RbtbpNs1mZ864VQ-8k', 'Aan4rBWd_EqSs07loe1J0XwayI5zm7ePJinGbejs-dy3LNpP37ShxDF0_wiu_SBEvCKScqGL3VQvY0EyVkz5', 'NAKVq2fZuRF3MoQRNWIxXhcwcCOtjPELFRPOLrFswPCInji3TXgo6HHfqDra0KTDNZ4lrzO1OXgYoydgXIT7', 'Jwvxty9JtRquPvUAWIfMDpxwin5iQCNUMDwBg5r3mo4sccccGOLHU47hpEstxbLZauIh5zaBhsjmXS0BMVprDQ', 'kp2P9jfSskQrJe-5WgOoJv6jPH1DUSsjcskNrDsCBA7801F-RcRiLG7MqniX_AurW1X3JCQvHTzX6iGZKI3Z', 'imJ_6Q-EvdTVLosEbMUuuIaYKqQYXdADLe6rYycD3qxSi9o3KtQus6adI1Zj3GJeYlZni-QOKXrHWLDvBUyTyA'];
const D={
drbooking:{name:'Dr booking',tag:['Product','منتج'],
 tl:['Clinic booking platform for Egypt','منصة حجز عيادات لمصر'],
 intro:['Patients find a dentist, check the clinic and treatments, and book. Clinics manage doctors, schedules and bookings from a dashboard. Everything is built to work in Arabic RTL and in English.','المريض بيدور على دكتور أسنان، يشوف العيادة والعلاجات، ويحجز. والعيادات بتدير الدكاترة والمواعيد والحجوزات من داشبورد. كله مبني يشتغل بالعربي RTL والإنجليزي.'],
 video:'drbooking.mp4',cap:['Screen recording of the real mobile app (web build) on the test environment, with test data.','تسجيل شاشة للتطبيق الحقيقي (نسخة ويب) على بيئة الاختبار، ببيانات تجريبية.'],
 did:[['Five connected products','خمس منتجات مترابطة','Backend API with Postgres, clinic dashboard, patient mobile app, patient website and a private admin console.','Backend API وPostgres، داشبورد للعيادة، تطبيق للمريض، موقع للمريض وكونسول أدمن خاص.'],
  ['Patient flow','مسار المريض','Search by name or city, offers, specialties, doctor profile with insurance, treatments with prices and reviews, then booking.','بحث بالاسم أو المدينة، عروض، تخصصات، بروفايل الدكتور مع التأمين والعلاجات وأسعارها والتقييمات، ثم الحجز.'],
  ['Arabic and English','عربي وإنجليزي','Full RTL layout and a language switch inside the app.','واجهة RTL كاملة وتبديل لغة جوه التطبيق.'],
  ['Quality and delivery','الجودة والنشر','CI on every pull request, automated tests, and separate test deployments for each part.','CI على كل pull request، اختبارات آلية، ونشر تجريبي منفصل لكل جزء.']],
 tech:['Flutter','Flutter Web','REST API','Postgres','CI'],
 links:[['Open live mobile app','https://moonlight-mobile-test.onrender.com'],['Open live patient website','https://moonlight-website-test.onrender.com'],['Open live clinic dashboard','https://moonlight-dashboard-test.onrender.com']],
 note:['Test environment on free hosting with fake data. The first open can take about a minute.','بيئة اختبار على استضافة مجانية ببيانات وهمية. أول فتح ممكن ياخد دقيقة.']},
xstore:{name:'xStore',tag:['Pre-launch','قبل الإطلاق'],
 tl:['Local marketplace with delivery','سوق محلي مع توصيل'],
 intro:['A marketplace app that connects sellers and buyers, with delivery. Shops and individuals can both sell. It is my own product and is not on the stores yet.','تطبيق سوق بيربط البايعين بالمشترين، مع توصيل. المحلات والأفراد يقدروا يبيعوا. منتجي الخاص ولسه مش على الاستورز.'],
 video:'xstore.mp4',cap:['Screen recording of the Flutter web build of the app running on demo data. Not the Android build.','تسجيل شاشة لنسخة الويب من تطبيق Flutter شغالة على بيانات تجريبية. مش نسخة أندرويد.'],
 did:[['Buyer and seller flows','مسار المشتري والبايع','Catalog, listings, cart, checkout, orders and store hours.','الكتالوج والإعلانات والعربة والدفع والطلبات وساعات عمل المتجر.'],
  ['Sign in options','طرق تسجيل الدخول','Phone, email and social sign in with Firebase Auth.','تسجيل بالموبايل والإيميل والسوشيال عن طريق Firebase Auth.'],
  ['Architecture','المعمارية','Feature-first layers (data, domain, presentation) with Riverpod and go_router. Dio client with token handling and automatic session reset on 401.','طبقات لكل فيتشر (data وdomain وpresentation) مع Riverpod وgo_router. Dio مع إدارة التوكن وإعادة ضبط الجلسة أوتوماتيك عند 401.'],
  ['Mock or live data','بيانات تجريبية أو حقيقية','Compile-time switch between mock data and the live API, used for UI work and for this demo.','تبديل وقت البناء بين بيانات تجريبية وAPI حقيقي، بيُستخدم في شغل الواجهة وفي الديمو ده.'],
  ['Around the app','حوالين التطبيق','Dev and prod flavors, push notifications, crash reporting, tests, an Angular admin dashboard and a Next.js marketing site.','نسخ dev وprod، إشعارات، تتبع أعطال، اختبارات، داشبورد أدمن Angular وموقع تسويقي Next.js.']],
 tech:['Flutter','Riverpod','go_router','Dio','Firebase','Angular','Next.js'],links:[],
 note:['Web build for demo purposes with fake data.','نسخة ويب للعرض فقط ببيانات وهمية.']},
swapp:{name:'4Swapp',tag:['Published app','تطبيق منشور'],
 tl:['Swapping and trading marketplace','سوق مقايضة وتبادل'],
 icon:'https://play-lh.googleusercontent.com/Jur1nOxmRE4QZtSyNLtXnhJreedprtWWaoH2c-_DX3zTOAafU9tp58nZDH7L7qs-KyUJgCv0nsfCzXXlEMC5pA=w240-h480-rw',
 intro:['An app where people swap and trade items: cars, real estate, electronics, fashion and more, with smart matching, chat and ratings. It has 1M+ downloads on Google Play. I built the app from scratch.','تطبيق الناس بتقايض وتبدل فيه حاجات: عربيات وعقارات وإلكترونيات وموضة وغيرها، مع matching ذكي وشات وتقييمات. عليه أكتر من مليون تحميل على Google Play. أنا بنيت التطبيق من الصفر.'],
 video:'swapp.mp4',cap:['Slideshow made from the public Google Play listing screenshots.','عرض مكوّن من سكرينات صفحة التطبيق العامة على Google Play.'],
 did:[['Built from scratch','اتبنى من الصفر','Flutter app architecture and feature delivery from the first commit.','معمارية تطبيق Flutter وتسليم الفيتشرز من أول commit.'],
  ['Unified analytics service','خدمة analytics موحدة','Led one event service that feeds Google Analytics, AppsFlyer, TikTok, Facebook Pixel and Amplitude.','قدت خدمة events واحدة بتغذي Google Analytics وAppsFlyer وTikTok وFacebook Pixel وAmplitude.'],
  ['Offers module refactor','refactor لموديول العروض','Offer actions now stay in sync across screens.','أكشنز العروض بقت متزامنة بين الشاشات.'],
  ['Architecture and delivery','المعمارية والنشر','Clean Architecture refactor (+25% feature delivery speed) and CI/CD with GitHub Actions and Fastlane (-30% deployment cycle time).','refactor لـ Clean Architecture (+25% سرعة تسليم الفيتشرز) وCI/CD بـ GitHub Actions وFastlane (-30% وقت دورة النشر).']],
 tech:['Flutter','Clean Architecture','Analytics','GitHub Actions','Fastlane'],
 links:[['View on Google Play',PLAY]],
 note:['Store text and screenshots come from the public Google Play listing. The app belongs to its owner.','النص والسكرينات من صفحة التطبيق العامة على Google Play. التطبيق ملك صاحبه.']}
};
function show(){
 const id=Q.get('a')||'drbooking',d=D[id]||D.drbooking;document.title=d.name+' | Ahmed Elelemy';
 const li=d.did.map(x=>'<li><b>'+(lang==='ar'?x[1]:x[0])+'.</b> '+(lang==='ar'?x[3]:x[2])+'</li>').join('');
 const shots=id==='swapp'?'<h3>'+T('From the store listing','من صفحة الاستور')+'</h3><div class="shots">'+IMG.map(i=>'<img loading="lazy" alt="" src="https://play-lh.googleusercontent.com/'+i+'=w540">').join('')+'</div>':'';
 $('#app').innerHTML='<div class="dgrid"><div><span class="tag">'+T(...d.tag)+'</span>'+(d.icon?'<br><img class="icon" src="'+d.icon+'" alt="" onerror="this.remove()">':'')+'<h1 style="font-size:clamp(34px,5vw,58px)">'+d.name+'</h1><p class="lead" style="animation:none;opacity:1">'+T(...d.tl)+'</p><p class="sub">'+T(...d.intro)+'</p>'+
 '<div class="chips">'+d.tech.map(t=>'<li>'+t+'</li>').join('')+'</div><div class="links">'+d.links.map(l=>'<a class="demo" href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>').join('')+'</div><p class="note">'+T(...d.note)+'</p></div>'+
 '<div><div class="vid"><video controls autoplay muted loop playsinline preload="metadata" src="'+d.video+'"></video></div><div class="vcap">'+T(...d.cap)+'</div></div></div>'+
 '<h2 style="margin-top:60px">'+T('What I did','اللي عملته')+'</h2><ul class="list">'+li+'</ul>'+shots;
}
window.onRender=show;show();
