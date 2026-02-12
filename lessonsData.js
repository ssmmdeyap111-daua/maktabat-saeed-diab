/**
 * ملف بيانات الدروس العلمية - الشيخ سعيد مصطفى دياب
 * يحتوي على كافة الأقسام العلمية والأيقونات الخاصة بها
 */

const lessonsData = [
    { 
        title: "علوم القرآن", 
        icon: "fas fa-quran", 
        desc: "شرح مباحث وعلوم الكتاب العزيز", 
        link: "quran-sciences.html" 
    },
    { 
        title: "السيرة النبوية", 
        icon: "fas fa-mosque", 
        desc: "دروس في سيرة الحبيب المصطفى ﷺ", 
        link: "seerah.html" 
    },
    { 
        title: "دروس العقيدة", 
        icon: "fas fa-book-open", 
        desc: "شرح أصول الإيمان والتوحيد", 
        link: "aqidah.html" 
    },
    { 
        title: "الفقه الإسلامي", 
        icon: "fas fa-gavel", 
        desc: "دروس في الأحكام الفقهية والعبادات", 
        link: "fiqh.html" 
    }
];

// دالة عرض الدروس في الصفحة
function displayLessons() {
    const container = document.getElementById('lessons-list');
    
    // التأكد من وجود الحاوية في الصفحة لتجنب الأخطاء
    if (!container) return;

    container.innerHTML = lessonsData.map(lesson => `
        <a href="${lesson.link}" class="lesson-card">
            <div class="lesson-icon">
                <i class="${lesson.icon}"></i>
            </div>
            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.desc}</p>
            </div>
        </a>
    `).join('');
}

// تشغيل الدالة فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayLessons);
