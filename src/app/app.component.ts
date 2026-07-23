import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IngredientCard {
  icon: string;
  name: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobileMenuOpen = false;
  activeAccordionIndex: number | null = null;
  isScrolled = false;
  isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  orderForm = {
    name: '',
    phone: '',
    governorate: '',
    quantity: 1,
    paymentMethod: 'cod' // 'cod' or 'instapay'
  };

  get shippingCost(): number {
    if (!this.orderForm.governorate) return 0;
    if (this.orderForm.governorate === 'القاهرة' || this.orderForm.governorate === 'الجيزة') {
      return 70;
    }
    return 100;
  }

  governorates: string[] = [
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'الدقهلية',
    'البحر الأحمر',
    'البحيرة',
    'الفيوم',
    'الغربية',
    'الإسماعيلية',
    'المنوفية',
    'المنيا',
    'القليوبية',
    'الوادي الجديد',
    'السويس',
    'أسوان',
    'أسيوط',
    'بني سويف',
    'بورسعيد',
    'دمياط',
    'الشرقية',
    'جنوب سيناء',
    'كفر الشيخ',
    'مطروح',
    'الأقصر',
    'قنا',
    'شمال سيناء',
    'سوهاج'
  ];

  ingredients: IngredientCard[] = [
    {
      icon: '☕',
      name: 'Coffee Seed Oil & Caffeine',
      description: 'يساعدان على تنشيط الدورة الدموية الدقيقة أثناء التدليك، ويدعمان تقليل احتباس السوائل المؤقت وتحسين مظهر وحجم البطن، مع المساهمة في تحسين مظهر السيلوليت، مما يمنح منطقة البطن مظهرًا أكثر تناسقًا.'
    },
    {
      icon: '🌸',
      name: 'Bakuchiol',
      description: 'يساعد على دعم إنتاج الكولاجين وتحسين مرونة البشرة، مما يساعد على شد الجلد، ويساهم في تحسين المظهر العام للبشرة وجعل مظهر السيلوليت أقل وضوحًا.'
    },
    {
      icon: '🌱',
      name: 'Centella Asiatica Extract',
      description: 'يساعد على إنتاج الكولاجين مما يعزز مرونة البشرة ودعم تماسكها، ليمنح الجلد مظهرًا أكثر شدًا ونعومة وأقل حجمًا، ويساهم في تحسين مظهر السيلوليت مع الاستخدام المنتظم.'
    },
    {
      icon: '🥑',
      name: 'Vitamin E & Panthenol',
      description: 'تركيبة مغذية تساعد البشرة على مقاومة الجفاف، والحفاظ على مرونتها ونعومتها، لتبدو أكثر صحة مع الاستخدام المنتظم.'
    },
    {
      icon: '🍃',
      name: 'Green Tea Extract',
      description: 'يعزز صحة البشرة بفضل مضادات الأكسدة الطبيعية، ليساعد على الحفاظ على مرونتها ومظهرها المشدود، ويمنحها نعومة وإشراقة طبيعية.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'هل المنتج آمن للاستخدام اليومي؟',
      answer: 'نعم تمامًا، تم تطوير The Goldy Choices Cream بتركيبة آمنة ومتوازنة من مكونات مختارة بعناية ومطابقة لأعلى معايير الجودة والسلامة.'
    },
    {
      question: 'هل يناسب الكريم كل أنواع البشرة؟',
      answer: 'نعم، تم تصميم التركيبة لتكون لطيفة وفعالة ومناسبة لمختلف أنواع البشرة، مع الحفاظ على الترطيب العميق وعدم التسبب في تهيجها.'
    },
    {
      question: 'ما هي طريقة الاستخدام المثلى للحصول على أفضل النتائج؟',
      answer: 'يُدهن الكريم على منطقة البطن أو المناطق المستهدفة مرتين يوميًا، مع التدليك اللطيف بحركات دائرية حتى يتم امتصاصه بالكامل للوصول لأفضل ترطيب ومرونة.'
    },
    {
      question: 'متى تظهر النتائج الملحوظة؟',
      answer: 'يمنح الكريم ترطيبًا ونعومة فورية من الاستخدام الأول، ومع الاستخدام المنتظم المستمر تبدأ البشرة في إظهار تحسن ملحوظ في المرونة والمظهر العام خلال أسابيع.'
    },
    {
      question: 'هل يمكن الدفع عبر إنستاباي (InstaPay)؟',
      answer: 'نعم بالتأكيد، نوفر إمكانية الدفع السريع والآمن عبر تطبيق إنستاباي (InstaPay). عند اختيارك للدفع عبر إنستاباي في نموذج الطلب، سيقوم فريقنا بإرسال رقم التحويل والبيانات المطلوبة في محادثة الواتساب لتأكيد طلبك بسهولة.'
    },
    {
      question: 'هل المنتج مسجل لدى هيئة الدواء المصرية؟',
      answer: 'نعم، المنتج مسجل رسميًا لدى هيئة الدواء المصرية تحت رقم التسجيل COSMTOL26127860، التزامًا بأعلى معايير الجودة المعتمدة.'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleAccordion(index: number) {
    if (this.activeAccordionIndex === index) {
      this.activeAccordionIndex = null;
    } else {
      this.activeAccordionIndex = index;
    }
  }

  scrollToForm() {
    this.closeMobileMenu();
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  submitOrder() {
    if (!this.orderForm.name || !this.orderForm.phone || !this.orderForm.governorate) {
      alert('يرجى استكمال جميع البيانات المطلوبة (الاسم، رقم الهاتف، والمحافظة) لإتمام الطلب.');
      return;
    }

    const paymentMethodLabel = this.orderForm.paymentMethod === 'instapay'
      ? '💜 التحويل عبر إنستاباي (InstaPay) - برجاء تزويدي برقم التحويل'
      : '💵 الدفع عند الاستلام (Cash on Delivery)';

    const shippingCostLabel = this.shippingCost === 70
      ? '70 جنيه (داخل القاهرة/الجيزة)'
      : '100 جنيه (خارج القاهرة)';

    const message = `السلام عليكم، أريد طلب The Goldy Choices Cream.\n\n` +
      `📌 الاسم: ${this.orderForm.name}\n` +
      `📞 الهاتف: ${this.orderForm.phone}\n` +
      `🏛️ المحافظة: ${this.orderForm.governorate}\n` +
      `📦 الكمية: ${this.orderForm.quantity}\n` +
      `🚚 مصاريف الشحن: ${shippingCostLabel}\n` +
      `💳 طريقة الدفع: ${paymentMethodLabel}`;

    // Redirect to WhatsApp with pre-filled message using user's phone number
    const whatsappUrl = `https://wa.me/201040731276?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
