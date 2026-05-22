// ==========================================
// إعدادات الدعوة (يمكنك تغيير هذه القيم بسهولة)
// ==========================================
const INVITATION_CONFIG = {
    // أسماء العرسان
    names: "Taylor & Estelle",

    // تاريخ ووقت الزفاف (السنة-الشهر-اليوم حرفT الساعة:الدقيقة:الثانية)
    weddingDate: "2026-06-25T19:00:00",

    // رابط الموقع (Google Maps أو أي رابط آخر)
    locationLink: "https://maps.google.com/?q=Borcelle+Hotel",

    // اسم ومكان الفندق أو القاعة
    hotelName: "BORCELLE HOTEL",
    hotelAddress1: "123 Anywhere ST., Any City,",
    hotelAddress2: "ST 12345",

    // ===== إعدادات الموسيقى =====
    // ضع اسم ملف الأغنية هنا (يجب أن يكون في نفس المجلد)
    // مثال: "song.mp3" أو "music.mp3"
    musicFile: "music.mp3",

    // مستوى الصوت من 0 إلى 1 (0.5 = 50%)
    musicVolume: 0.5
};

// ==========================================
// كود التشغيل (لا تحتاج لتغيير شيء هنا)
// ==========================================

/* --- جزيئات شاشة الاستقبال --- */
function createIntroParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + 'vw';
        p.style.bottom = '-10px';
        p.style.width  = (Math.random() * 4 + 2) + 'px';
        p.style.height = (Math.random() * 4 + 2) + 'px';
        p.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
        p.style.animationDuration  = (Math.random() * 6 + 5) + 's';
        p.style.animationDelay     = (Math.random() * 5) + 's';
        p.style.opacity = 0;
        container.appendChild(p);
    }
}

/* --- جزيئات الخلفية الرئيسية --- */
function createBgParticles() {
    const container = document.getElementById('bg-particles');
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.classList.add('bg-particle');
        p.style.left  = Math.random() * 100 + 'vw';
        p.style.bottom = '-10px';
        p.style.width  = (Math.random() * 5 + 2) + 'px';
        p.style.height = (Math.random() * 5 + 2) + 'px';
        p.style.animationDuration = (Math.random() * 10 + 8) + 's';
        p.style.animationDelay    = (Math.random() * 8) + 's';
        container.appendChild(p);
    }
}

/* --- تشغيل الأنيميشن على عناصر المحتوى --- */
function triggerContentAnimations() {
    const elements = document.querySelectorAll(
        '.names, .divider-line, .date-block, .invite-text, .location-details, .countdown-container, .location-btn'
    );
    elements.forEach(el => el.classList.add('animate'));
}

/* --- الموسيقى --- */
let musicPlaying = false;
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');

function setupMusic() {
    if (INVITATION_CONFIG.musicFile) {
        music.src = INVITATION_CONFIG.musicFile;
    }
    music.volume = INVITATION_CONFIG.musicVolume;
}

function playMusic() {
    music.play().then(() => {
        musicPlaying = true;
        musicToggle.classList.add('playing');
        musicIcon.textContent = '♪';
    }).catch(() => {
        // المتصفح منع التشغيل التلقائي - لا شيء
    });
}

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        musicToggle.classList.remove('playing');
        musicIcon.textContent = '♩';
    } else {
        music.play();
        musicPlaying = true;
        musicToggle.classList.add('playing');
        musicIcon.textContent = '♪';
    }
}

/* --- الدخول من شاشة الاستقبال --- */
function enterInvitation() {
    const introScreen  = document.getElementById('intro-screen');
    const mainContent  = document.getElementById('main-content');

    // إخفاء شاشة الاستقبال بأنيميشن
    introScreen.classList.add('exit');

    // إظهار المحتوى بعد انتهاء أنيميشن الخروج
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        musicToggle.classList.add('visible');

        // تشغيل الموسيقى
        playMusic();

        // تأخير بسيط ثم تشغيل الأنيميشن
        setTimeout(() => {
            triggerContentAnimations();
            createBgParticles();
        }, 100);
    }, 1200);
}

/* --- عند تحميل الصفحة --- */
document.addEventListener('DOMContentLoaded', () => {

    // إعداد الموسيقى
    setupMusic();

    // إنشاء جزيئات شاشة الاستقبال
    createIntroParticles();

    // ربط زر الدخول
    document.getElementById('enter-btn').addEventListener('click', enterInvitation);

    // ربط زر التحكم بالموسيقى
    musicToggle.addEventListener('click', toggleMusic);

    // ===================== ملء بيانات الدعوة =====================
    document.getElementById('names-display').textContent = INVITATION_CONFIG.names;
    document.getElementById('location-btn').href         = INVITATION_CONFIG.locationLink;
    document.getElementById('hotel-name').textContent    = INVITATION_CONFIG.hotelName;
    document.getElementById('hotel-address1').textContent = INVITATION_CONFIG.hotelAddress1;
    document.getElementById('hotel-address2').textContent = INVITATION_CONFIG.hotelAddress2;

    // معالجة التاريخ
    const dateObj = new Date(INVITATION_CONFIG.weddingDate);
    const months   = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    const daysName = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

    let h = dateObj.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const mins = dateObj.getMinutes().toString().padStart(2, '0');

    document.getElementById('display-month').textContent   = months[dateObj.getMonth()];
    document.getElementById('display-day-name').textContent = daysName[dateObj.getDay()];
    document.getElementById('display-day-number').textContent = dateObj.getDate().toString().padStart(2, '0');
    document.getElementById('display-time').textContent    = `AT ${h.toString().padStart(2,'0')}:${mins} ${ampm}`;
    document.getElementById('display-year').textContent    = dateObj.getFullYear();

    // ===================== العد التنازلي =====================
    const targetDate = dateObj.getTime();

    function updateCountdown() {
        const distance = targetDate - Date.now();
        if (distance < 0) {
            document.querySelector('.countdown-container').style.display = 'none';
            return;
        }
        const d = Math.floor(distance / 86400000);
        const h = Math.floor((distance % 86400000) / 3600000);
        const m = Math.floor((distance % 3600000)  / 60000);
        const s = Math.floor((distance % 60000)    / 1000);

        document.getElementById('days').textContent    = d.toString().padStart(2,'0');
        document.getElementById('hours').textContent   = h.toString().padStart(2,'0');
        document.getElementById('minutes').textContent = m.toString().padStart(2,'0');
        document.getElementById('seconds').textContent = s.toString().padStart(2,'0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
