// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
        }
    });
}

// Statistics Counter Animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
            counter.innerText = Math.min(count + increment, target);
            setTimeout(animateCounters, 1);
        }
    });
};

// Start counter animation when section is in view
const statisticsSection = document.querySelector('.statistics');
if (statisticsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statisticsSection);
}

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// آراء أولياء الأمور المتغيرة
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
{
    text: "ابنتي تطورت بشكل ملحوظ منذ التحاقها بمدرسة دمت الأهلية، ليس academically فقط ولكن أيضًا على المستوى الشخصي والاجتماعي",
    author: "والد الطالبة سارة"
},
{
    text: "نحن سعداء جدًا بالمستوى التعليمي والاهتمام الذي تقدمه المدرسة، والمعلمات متخصصات ومتميزات في تعليم البنات",
    author: "والد الطالبة لمى"
},
{
    text: "المناهج المتطورة والأنشطة اللامنهجية ساهمت في تطوير مهارات ابنتي بشكل كبير، شكرًا لإدارة المدرسة",
    author: "والد الطالبة نوف"
},
{
    text: "الجو التعليمي المناسب والاهتمام الفردي بكل طالبة يجعل المدرسة بيئة مثالية للتعلم والنمو",
    author: "والدة الطالبة ريم"
},
{
     text: "نشكر إدارة المدرسة على جهودها في تنظيم الفعاليات والأنشطة التي تنمي قدرات الطالبات الإبداعية",
    author: "والد الطالبة يارا"
},
{
    text: "الاهتمام بالقيم الإسلامية واللغة العربية إلى جانب المناهج الحديثة هو ما يميز مدرسة دمت الأهلية",
     author: "والد الطالبة جود"
},

{
    text: "الاهتمام باللغات الأجنبية إلى جانب اللغة العربية يعطي الطالبات ميزة تنافسية رائعة في سوق العمل المستقبلي",
    author: "والد الطالبة لين"
},
{
    text: "برنامج التوجيه والإرشاد الطلابي ساعد ابنتي على تجاوز الصعوبات الدراسية والاجتماعية بثقة أكبر",
    author: "والدة الطالبة تالا"
},
{
    text: "المختبرات المجهزة بأحدث التقنيات توفر لطالباتنا فرصة التعلم العملي والتجريبي المتميز",
    author: "والد الطالبة لمياء"
},
{
    text: "نقدر حرص المدرسة على التواصل المستمر مع أولياء الأمور وإطلاعنا على تقدم بناتنا بشكل دوري",
    author: "والدة الطالبة روان"
},
{
    text: "الأنشطة الرياضية والفنية المتنوعة ساعدت في اكتشاف مواهب ابنتي وتطويرها بشكل ملحوظ",
    author: "والد الطالبة دانة"
},
{
    text: "الجو الأسري والترابط بين الطالبات والمعلمات يخلق بيئة تعليمية آمنة ومحفزة للإبداع",
    author: "والدة الطالبة جنا"
},
{
    text: "الاهتمام بتعزيز الثقة بالنفس ومهارات القيادة لدى الطالبات يعد من أبرز مميزات المدرسة",
    author: "والد الطالبة ميار"
},
{
    text: "الرحلات التعليمية والزيارات الميدانية تثري خبرات الطالبات وتربط التعليم بالحياة الواقعية",
    author: "والدة الطالبة لمى"
},
{
    text: "نشكر إدارة المدرسة على التخطيط الجيد للعام الدراسي والالتزام بالتقويم الأكاديمي المعلن",
    author: "والد الطالبة رغد"
},
{
    text: "التركيز على تنمية المهارات الرقمية والتكنولوجية يعد الطالبات لمتطلبات العصر الحديث",
    author: "والدة الطالبة سدى"
},
{
    text: "الأنشطة التطوعية وخدمة المجتمع تغرس في الطالبات قيم المسؤولية الاجتماعية والعطاء",
    author: "والد الطالبة لجين"
},
{
    text: "نظام التعليم المدمج الذي تتبعه المدرسة وفر المرونة اللازمة مع الحفاظ على جودة التعليم",
    author: "والدة الطالبة مها"
},
{
    text: "الاهتمام بالصحة النفسية والجسدية للطالبات يظهر من خلال البرامج والأنشطة المتنوعة",
    author: "والد الطالبة نورة"
},
{
    text: "المكتبة الغنية بالمصادر والمراجع تشجع الطالبات على البحث والقراءة والاستكشاف",
    author: "والدة الطالبة هيا"
},
{
    text: "نظام التقويم والتقييم الشامل يعكس بوضوح تقدم الطالبات في جميع الجوانب التعليمية",
    author: "والد الطالبة أروى"
}
    ];

    // اختيار رأي عشوائي
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    const testimonial = testimonials[randomIndex];
    
    // تحديث النص والعنوان
    const testimonialText = document.querySelector('.testimonial-text');
    const testimonialAuthor = document.querySelector('.testimonial-author');
    
    if (testimonialText && testimonialAuthor) {
        testimonialText.textContent = testimonial.text;
        testimonialAuthor.textContent = `- ${testimonial.author}`;
    }
});

// فتح نافذة عرض الشعار
function openLogoModal() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// إغلاق نافذة عرض الشعار
function closeLogoModal() {
    const modal = document.getElementById('logoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// إغلاق النافذة عند النقر خارج الصورة
document.addEventListener('click', function(event) {
    const modal = document.getElementById('logoModal');
    if (event.target === modal) {
        closeLogoModal();
    }
});







    // تفعيل التنقل في شريط الأقسام
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.section-nav a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

 // شريط التقدم
        window.onscroll = function() {updateProgressBar()};
        
        function updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("myProgressBar").style.width = scrolled + "%";
        }

        // زر العودة للأعلى
        document.getElementById('scrollToTop').addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // إظهار/إخفاء زر العودة للأعلى
        window.addEventListener('scroll', function() {
            const scrollButton = document.getElementById('scrollToTop');
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'flex';
            } else {
                scrollButton.style.display = 'none';
            }
        });



             // تفعيل الأسئلة الشائعة
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
