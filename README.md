# 💍 Elegant Wedding Invitation Template

A beautiful, fully responsive wedding invitation web template designed with HTML, CSS, and vanilla JavaScript. 
It includes a dynamic countdown, automatically generated date formatting, and a highly professional UI.

دعوة زفاف إلكترونية أنيقة ومتجاوبة بالكامل (تعمل على جميع الشاشات)، مصممة بـ HTML و CSS و JS. تحتوي على عد تنازلي ديناميكي وتصميم احترافي.

---

## ✨ Features (المميزات)
- 📱 **Fully Responsive (متجاوب بالكامل):** Perfectly adapts to mobile phones, tablets, and desktops using modern fluid typography.
- ⏱️ **Dynamic Countdown (عد تنازلي ديناميكي):** Automatically calculates days, hours, minutes, and seconds remaining until the big day.
- 📅 **Auto-generated Date (تاريخ تلقائي):** The UI automatically figures out the day of the week, month, and year based on a single date configuration!
- 🎨 **Beautiful Typography (خطوط أنيقة):** Uses Google Fonts (`Great Vibes` and `Montserrat`).
- ⚙️ **Easy to Customize (سهل التعديل):** All data (names, date, location) is separated into a simple config object. No coding experience needed!

## 🚀 How to Use (طريقة الاستخدام)

1. Clone or download this repository.
   (قم بتحميل الملفات أو عمل استنساخ للمستودع)
2. Open `index.html` in any web browser.
   (افتح ملف `index.html` في أي متصفح ويب)

## 🛠️ Customization (طريقة التعديل)

To change the names, wedding date, or location, simply open the `script.js` file.
At the very top, you will find the `INVITATION_CONFIG` object:

لتعديل أسماء العرسان، وتاريخ الزفاف، وموقع القاعة.. فقط افتح ملف `script.js` وقم بتغيير القيم في الجزء العلوي:

```javascript
const INVITATION_CONFIG = {
    // Names of the couple
    names: "Taylor & Estelle",
    
    // Date & Time (YYYY-MM-DDTHH:MM:SS)
    weddingDate: "2026-06-25T19:00:00", 
    
    // Location Map Link
    locationLink: "https://maps.google.com/?q=Borcelle+Hotel",
    
    // Hotel or Hall Name & Address
    hotelName: "BORCELLE HOTEL",
    hotelAddress1: "123 Anywhere ST., Any City,",
    hotelAddress2: "ST 12345"
};
```
*Note: Make sure to keep the date format exactly like `YYYY-MM-DDTHH:MM:SS`.*
*ملاحظة: تأكد من كتابة التاريخ بنفس الصيغة المطلوبة لكي يعمل العد التنازلي بشكل سليم.*

## 🖼️ Background Image (تغيير صورة الخلفية)
To change the background image, simply replace `Untitled design p.jpg` in the folder with your own image, or edit the file path in `style.css` inside the `body` selector.
لتغيير صورة الخلفية، قم باستبدال الصورة الموجودة بصورتك وبنفس الاسم، أو قم بتغيير اسم الصورة داخل ملف `style.css`.

## 🌐 Deploying on GitHub Pages (النشر مجاناً على جت هب)
You can host this invitation for free so you can send a link to your guests!
يمكنك رفع هذه الدعوة مجاناً وإرسال الرابط للمدعوين عبر GitHub كالتالي:

1. Upload these files to a public GitHub repository. (ارفع الملفات إلى مستودع عام على جت هب).
2. Go to your repository **Settings**. (اذهب إلى إعدادات المستودع).
3. On the left sidebar, click on **Pages**. (من القائمة الجانبية اختر Pages).
4. Under "Build and deployment", select the **main** branch and click **Save**. (اختر مسار main واضغط حفظ).
5. Wait a minute or two, refresh the page, and GitHub will provide you with a live link to your wedding invitation! 🎉 (انتظر دقيقة وسيعطيك جت هب رابطاً مباشراً لدعوتك!).
