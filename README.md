# 🌟 The Goldy Choices — Body & Skin Care Landing Page

![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)

مرحبًا بك في المستودع الرسمي لصفحة الهبوط الخاصة بمنتج **The Goldy Choices Cream** — كريم العناية الفائقة بمنطقة البطن والسيلوليت، المطور بعناية فائقة والمطابق لأعلى معايير الجودة والسلامة ومسجل رسميًا لدى هيئة الدواء المصرية تحت رقم **COSMTOL26127860**.

---

## ✨ نظرة عامة على المشروع (Project Overview)

تم تصميم وتطوير هذه المنصة باستخدام أحدث تقنيات **Angular 18 (Standalone Components)** وتنسيقات **Tailwind CSS** المخصصة، مع التركيز التام على تقديم تجربة مستخدم فاخرة (Luxury Dark & Gold Theme) تتناسب مع البراندات العالمية، ودعم كامل للغة العربية والاتجاه من اليمين إلى اليسار (**RTL**).

### 🎯 المميزات الرئيسية (Key Features)

1. **واجهة استخدام فاخرة وسريعة الاستجابة (Responsive Luxury UI):**
   - تصميم متجاوب يدعم جميع الشاشات (الهواتف الذكية، الأجهزة اللوحية، والشاشات الكبيرة).
   - هيدر زجاجي متطور (Glassmorphism Header) مع قائمة جانبية للموبايل (Hamburger Menu).
   - ألوان مخصصة مستوحاة من الذهب الفاخر (`#D4AF37`) والخلفيات المحايدة العميقة (`#0B0D12`).

2. **عرض حقيقي للمنتج والمكونات (Product & Ingredients Showcase):**
   - قسم **Hero Section** يبرز صورة المنتج الأصلي مع تأثيرات توهج وإضاءة ناعمة.
   - قسم المكونات الفعالة (Niacinamide, Hyaluronic Acid, Centella Asiatica, Bakuchiol, etc.) مع بطاقات تفاعلية ورسوم متحركة عند التمرير.
   - قسم خاص بالدكتورة المطوّرة للمنتج (د. آية) لإبراز المصداقية والخبرة الطبية والصيدلانية.

3. **الأسئلة الشائعة (Interactive FAQ Accordion):**
   - نظام أكورديون مرن وسلس مبني بالكامل بـ Angular & Tailwind (بدون استخدام مكتبات ثقيلة مثل Angular Material) لضمان سرعة التحميل والأداء العالي.

4. **نموذج طلب ذكي متصل بـ WhatsApp (Smart Order Form & WhatsApp Integration):**
   - حقل اختيار المحافظة مع **حساب تلقائي ودقيق لمصاريف الشحن**:
     - **70 جنيه:** داخل القاهرة والجيزة.
     - **100 جنيه:** لجميع المحافظات الأخرى خارج القاهرة.
   - دعم طرق دفع متعددة:
     - 💵 **الدفع عند الاستلام (Cash on Delivery).**
     - 💜 **التحويل السريع عبر إنستاباي (InstaPay):** مع إرشاد المستخدم لإتمام التحويل داخل محادثة الواتساب.
   - زر إرسال يقوم بإنشاء رسالة منسقة تلقائيًا بكافة بيانات العميل (الاسم، الهاتف، المحافظة، الكمية، تكلفة الشحن، وطريقة الدفع) وتوجيهه فورًا لإتمام الطلب على رقم الواتساب المعتمد: **`201040731276`**.

5. **زر تواصل عائم (Floating WhatsApp Button):**
   - أيقونة واتساب تفاعلية متواجدة دائمًا في أسفل الشاشة لتسهيل التواصل الفوري والدعم الفني على مدار الساعة.

---

## 🛠️ التقنيات والمكتبات المستخدمة (Tech Stack)

| التقنية / المكتبة | الاستخدام والهدف |
| :--- | :--- |
| **Angular 18** | إطار العمل الأساسي (Standalone Components, Signals, HostListener) |
| **Tailwind CSS** | بناء التصميم العصري والمتجاوب ونظام الألوان والظلال المخصص |
| **Google Fonts** | خطوط **Cairo** (للعناوين البارزة) و **Tajawal** (للنصوص المريحة للعين) |
| **Lucide Icons** | أيقونات متطورة ونظيفة لواجهة المستخدم |
| **PostCSS & Autoprefixer** | معالجة وتوافق ملفات الـ CSS عبر مختلف المتصفحات |

---

## 🚀 كيفية تشغيل المشروع محليًا (Local Setup & Installation)

التأكد من تثبيت [Node.js](https://nodejs.org/) (إصدار 18 أو أحدث) قبل البدء.

### 1. تثبيت الحزم والاعتمادات (Install Dependencies)
```bash
npm install
```

### 2. تشغيل خادم التطوير المحلي (Start Dev Server)
```bash
npm run start
# أو باستخدام Angular CLI مباشرة:
npx ng serve --port 4200
```
افتح المتصفح وانتقل إلى الرابط: [http://localhost:4200/](http://localhost:4200/)
سيتم إعادة تحميل الصفحة تلقائيًا عند إجراء أي تعديل على الملفات.

### 3. بناء النسخة النهائية للإنتاج (Production Build)
```bash
npm run build
```
سيتم حفظ ملفات البناء المحسنة والمضغوطة داخل مجلد `dist/the-goldy-choices/` جاهزة للرفع على أي استضافة (Vercel, Netlify, Firebase, cPanel, إلخ).

---

## 📂 هيكلية الملفات والأصول (Project Structure)

```text
The Goldy Choices/
├── public/                 # الصور والأصول الرئيسية
│   ├── favicon.ico
│   ├── logo.jpeg           # شعار براند The Goldy Choices
│   └── product.jpeg        # الصورة الحقيقية لكريم The Goldy Choices Cream
├── src/
│   ├── app/
│   │   ├── app.component.ts    # المنطق البرمجي، حساب الشحن، ونموذج إرسال الواتساب
│   │   ├── app.component.html  # قالب الـ HTML لكافة أقسام صفحة الهبوط
│   │   └── app.component.css   # التنسيقات المكملة للمكون
│   ├── index.html          # إعدادات الـ RTL وربط خطوط Google Fonts مباشرة
│   ├── main.ts             # نقطة انطلاق تطبيق Angular Standalone
│   └── styles.css          # التنسيقات العالمية وتوجيهات Tailwind الأساسية
├── angular.json            # إعدادات البناء وتعطيل inline fonts لتجنب أخطاء الشبكة أثناء الـ build
├── tailwind.config.js      # تعريف الألوان الفاخرة (Gold & Luxury Dark) والخطوط والظلال
├── postcss.config.js       # تكوين Tailwind CSS
└── package.json            # قائمة الاعتمادات والسكريبتات
```

---

## 🛡️ الترخيص والتسجيل (Regulatory & Licensing)

- **اسم المنتج:** The Goldy Choices Cream
- **رقم التسجيل بهيئة الدواء المصرية:** `COSMTOL26127860`
- **التواصل والدعم الفني (واتساب):** `+20 1040731276`
- **جميع الحقوق محفوظة © 2026 The Goldy Choices.**
