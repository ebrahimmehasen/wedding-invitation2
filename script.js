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
    hotelAddress2: "ST 12345"
};

// ==========================================
// كود التشغيل (لا تحتاج لتغيير شيء هنا)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. تعيين القيم الأساسية في الصفحة
    document.getElementById('names-display').textContent = INVITATION_CONFIG.names;
    document.getElementById('location-btn').href = INVITATION_CONFIG.locationLink;
    document.getElementById('hotel-name').textContent = INVITATION_CONFIG.hotelName;
    document.getElementById('hotel-address1').textContent = INVITATION_CONFIG.hotelAddress1;
    document.getElementById('hotel-address2').textContent = INVITATION_CONFIG.hotelAddress2;

    // 2. معالجة التاريخ وعرضه بشكل ديناميكي
    const dateObj = new Date(INVITATION_CONFIG.weddingDate);
    
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const daysName = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    
    // حساب الوقت بصيغة 12 ساعة
    let hours = dateObj.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // الساعة 0 تصبح 12
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    
    // تحديث أجزاء التاريخ في الصفحة
    document.getElementById('display-month').textContent = months[dateObj.getMonth()];
    document.getElementById('display-day-name').textContent = daysName[dateObj.getDay()];
    document.getElementById('display-day-number').textContent = dateObj.getDate().toString().padStart(2, '0');
    document.getElementById('display-time').textContent = `AT ${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    document.getElementById('display-year').textContent = dateObj.getFullYear();

    // 3. إعداد وتحديث العد التنازلي
    const targetDate = dateObj.getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // إذا انتهى الوقت، قم بإخفاء العداد
        if (distance < 0) {
            document.querySelector('.countdown-container').style.display = 'none';
            return;
        }

        // حساب الأيام، الساعات، الدقائق والثواني
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض القيم مع إضافة صفر على اليسار إذا لزم الأمر
        document.getElementById('days').textContent = d.toString().padStart(2, '0');
        document.getElementById('hours').textContent = h.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
    }

    // تحديث العد التنازلي كل ثانية
    setInterval(updateCountdown, 1000);
    updateCountdown(); // تشغيل فوري لتجنب التأخير عند تحميل الصفحة
});
