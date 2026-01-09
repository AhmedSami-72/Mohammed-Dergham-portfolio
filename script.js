// Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_subtitle: "Front-End Developer • WordPress • SEO & Speed Optimization",
        hero_desc: "Transforming business needs into high-performance websites. I specialize in creating fast, SEO-optimized websites that rank well and deliver exceptional user experiences.",
        btn_download_cv: "Download CV",
        btn_contact_me: "Contact Me",
        about_title: "About Me",
        about_text: "I am a dedicated Front-End Developer and SEO Specialist with a passion for building websites that not only look great but perform exceptionally. My expertise lies in creating custom WordPress solutions, optimizing website speed, and implementing advanced SEO strategies that help businesses rank higher and convert better. I focus on clean code, fast loading times, and search engine visibility.",
        experience_title: "Experience & Expertise",
        exp_role: "Front-End Developer & SEO Specialist",
        exp_company: "Freelance & Professional Projects",
        exp_item_1: "Building high-performance websites optimized for speed and user experience.",
        exp_item_2: "Implementing advanced SEO techniques to improve search engine rankings.",
        exp_item_3: "Creating responsive, mobile-first WordPress websites with custom themes.",
        exp_item_4: "Optimizing website loading times and Core Web Vitals for better performance.",
        value_title: "What I Actually Do",
        value_1_title: "Website Development",
        value_1_desc: "Creating modern, responsive websites that work flawlessly across all devices and browsers.",
        value_2_title: "SEO Optimization",
        value_2_desc: "Implementing on-page and technical SEO strategies to boost your website's visibility and rankings.",
        value_3_title: "Speed Optimization",
        value_3_desc: "Optimizing websites for lightning-fast loading times and excellent Core Web Vitals scores.",
        auto_title: "SEO & Performance Optimization",
        auto_desc: "I specialize in making websites faster and more visible. From optimizing images and code to implementing schema markup and improving Core Web Vitals, I ensure your website ranks well and loads instantly.",
        projects_title: "Projects",
        filter_all: "All",
        filter_wp: "WordPress",
        filter_fe: "Front-End",
        view_live: "View Live",
        view_details: "Details",
        proj_oa_desc: "Marketing Agency Website",
        proj_fantasy_desc: "Digital Marketing Platform",
        proj_pearl_desc: "Medical Clinic Website",
        proj_soha_desc: "Skin Care Clinic",
        proj_bakkah_desc: "Travel Agency Landing Page",
        proj_sham_desc: "Restaurant Website",
        proj_estore_desc: "E-Commerce Template",
        proj_weather_desc: "Live Weather Application",
        proj_todo_desc: "Task Management App",
        proj_stopwatch_desc: "Time Tracking Tool",
        results_title: "Results & Impact",
        res_manual: "Loading Speed",
        res_booking: "SEO Rankings",
        res_ops: "User Experience",
        res_reliability: "Performance Scores",
        tools_title: "Tools & Technologies",
        process_title: "How I Work",
        step_1: "Understand Requirements",
        step_2: "Design & Planning",
        step_3: "Development",
        step_4: "SEO & Speed Optimization",
        step_5: "Launch & Support",
        contact_title: "Contact Me"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_experience: "الخبرات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        hero_greeting: "مرحباً، أنا",
        hero_subtitle: "مطور واجهات • ووردبريس • تحسين السيو والسرعة",
        hero_desc: "أحول احتياجات العمل إلى مواقع عالية الأداء. أتخصص في إنشاء مواقع سريعة ومحسنة لمحركات البحث تحقق نتائج متميزة وتجربة مستخدم استثنائية.",
        btn_download_cv: "تحميل السيرة الذاتية",
        btn_contact_me: "تواصل معي",
        about_title: "من أنا",
        about_text: "أنا مطور واجهات أمامية ومتخصص في تحسين محركات البحث (SEO) شغوف ببناء مواقع لا تبدو رائعة فحسب، بل تحقق أداءً استثنائيًا. خبرتي تكمن في إنشاء حلول ووردبريس مخصصة، تحسين سرعة المواقع، وتطبيق استراتيجيات سيو متقدمة تساعد الشركات على التصدر في نتائج البحث وتحقيق معدلات تحويل أفضل. أركز على كود نظيف، أوقات تحميل سريعة، وظهور قوي في محركات البحث.",
        experience_title: "الخبرة والتخصص",
        exp_role: "مطور واجهات أمامية ومتخصص سيو",
        exp_company: "مشاريع احترافية وعمل حر",
        exp_item_1: "بناء مواقع عالية الأداء محسّنة للسرعة وتجربة المستخدم.",
        exp_item_2: "تطبيق تقنيات سيو متقدمة لتحسين ترتيب المواقع في محركات البحث.",
        exp_item_3: "إنشاء مواقع ووردبريس متجاوبة مع قوالب مخصصة تعمل على جميع الأجهزة.",
        exp_item_4: "تحسين أوقات تحميل المواقع ومؤشرات Core Web Vitals للحصول على أداء أفضل.",
        value_title: "ماذا أقدم فعلياً",
        value_1_title: "تطوير المواقع",
        value_1_desc: "إنشاء مواقع حديثة ومتجاوبة تعمل بشكل مثالي على جميع الأجهزة والمتصفحات.",
        value_2_title: "تحسين السيو",
        value_2_desc: "تطبيق استراتيجيات السيو التقني والداخلي لتعزيز ظهور موقعك وتصدر نتائج البحث.",
        value_3_title: "تحسين السرعة",
        value_3_desc: "تحسين المواقع لأوقات تحميل فائقة السرعة ودرجات ممتازة في مؤشرات الأداء.",
        auto_title: "تحسين السيو والأداء",
        auto_desc: "أتخصص في جعل المواقع أسرع وأكثر ظهوراً. من تحسين الصور والكود إلى تطبيق Schema Markup وتحسين Core Web Vitals، أضمن أن موقعك يتصدر النتائج ويُحمّل فوريًا.",
        projects_title: "المشاريع",
        filter_all: "الكل",
        filter_wp: "ووردبريس",
        filter_fe: "واجهات أمامية",
        view_live: "عاين المشروع",
        view_details: "تفاصيل",
        proj_oa_desc: "موقع وكالة تسويق",
        proj_fantasy_desc: "منصة تسويق رقمي",
        proj_pearl_desc: "موقع عيادة طبية",
        proj_soha_desc: "عيادة للعناية بالبشرة",
        proj_bakkah_desc: "صفحة هبوط لوكالة سفر",
        proj_sham_desc: "موقع مطعم",
        proj_estore_desc: "قالب متجر إلكتروني",
        proj_weather_desc: "تطبيق طقس مباشر",
        proj_todo_desc: "تطبيق إدارة مهام",
        proj_stopwatch_desc: "أداة تتبع الوقت",
        results_title: "النتائج والأثر",
        res_manual: "سرعة تحميل أعلى",
        res_booking: "تصدر نتائج البحث",
        res_ops: "تجربة مستخدم أفضل",
        res_reliability: "درجات أداء محسّنة",
        tools_title: "الأدوات والتقنيات",
        process_title: "كيف أعمل",
        step_1: "فهم المتطلبات",
        step_2: "التصميم والتخطيط",
        step_3: "التطوير",
        step_4: "تحسين السيو والسرعة",
        step_5: "الإطلاق والدعم",
        contact_title: "تواصل معي"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const langToggleNav = document.getElementById('lang-toggle-nav');
    const langToggleFloat = document.getElementById('lang-toggle-float');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const typewriterText = document.getElementById('typewriter-text');
    
    // Modal Elements
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-modal');
    const detailsBtns = document.querySelectorAll('.details-btn');

    // State
    let currentLang = localStorage.getItem('lang') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';
    let typewriterInterval;

    // Initialization
    setTheme(currentTheme);
    setLanguage(currentLang);
    initAnimations();

    // Event Listeners
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    langToggleNav.addEventListener('click', toggleLanguage);
    langToggleFloat.addEventListener('click', toggleLanguage);

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = '';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if (window.innerWidth <= 768) {
                navLinks.style.display = '';
            }
        });
    });

    // Project Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
        });
    });

    // Modal Logic
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            const img = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent; // This will get the translated text
            const tech = card.querySelector('.tech').textContent;
            const link = card.querySelector('.view-btn').href;

            modalImg.src = img;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalTech.textContent = tech;
            modalLink.href = link;

            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('show'), 10);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    // Functions
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
    }

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update Buttons
        const btnText = lang === 'en' ? 'AR' : 'EN';
        langToggleNav.textContent = btnText;
        langToggleFloat.textContent = btnText;

        // Restart Typewriter
        startTypewriter(lang);
    }

    function startTypewriter(lang) {
        if (typewriterInterval) clearInterval(typewriterInterval);
        
        const text = lang === 'en' ? 'Mohammed Dergham' : 'محمد درغام';
        let i = 0;
        
        typewriterText.textContent = '';
        
        typewriterInterval = setInterval(() => {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typewriterInterval);
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                cursor.innerHTML = '&nbsp;';
                typewriterText.appendChild(cursor);
            }
        }, 100);
    }

    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.section-title, .card, .project-card, .stat-card, .step, .about-content, .hero-text, .hero-image');
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
});
