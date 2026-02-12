/**
 * بيانات الأقسام العلمية (8 أقسام) - الشيخ سعيد مصطفى دياب
 * تم التصميم بحيث تكون الأيقونات متوحدة ومنسجمة برمجياً
 */

const lessonsData = [
    { 
        title: "التفسير", 
        icon: "fas fa-book-open", 
        desc: "تأملات وبيان لمعاني آيات الذكر الحكيم", 
        link: "tafseer.html" 
    },
    { 
        title: "علوم القرآن", 
        icon: "fas fa-quran", 
        desc: "دراسات في تاريخ القرآن ونزوله وأحكامه", 
        link: "quran-sciences.html" 
    },
    { 
        title: "شرح الحديث", 
        icon: "fas fa-scroll", 
        desc: "شرح الأحاديث النبوية الشريفة وتخريجها", 
        link: "hadith.html" 
    },
    { 
        title: "العقيدة", 
        icon: "fas fa-shield-halved", 
        desc: "بيان أصول الإيمان وعقيدة أهل السنة والجماعة", 
        link: "aqidah.html" 
    },
    { 
        title: "الفقه", 
        icon: "fas fa-gavel", 
        desc: "الأحكام الشرعية العملية في العبادات والمعاملات", 
        link: "fiqh.html" 
    },
    { 
        title: "السيرة", 
        icon: "fas fa-mosque", 
        desc: "دروس وعبر من حياة النبي ﷺ وأصحابه", 
        link: "seerah.html" 
    },
    { 
        title: "الفرائض", 
        icon: "fas fa-calculator", 
        desc: "علم المواريث وتوزيع التركات حسب الشرع", 
        link: "faraid.html" 
    },
    { 
        title: "الرقائق", 
        icon: "fas fa-heart", 
        desc: "دروس في تهذيب النفوس وأعمال القلوب", 
        link: "raqaeq.html" 
    }
];

function displayLessons() {
    const container = document.getElementById('lessons-list');
    if (!container) return;

    let htmlContent = "";

    // معالجة كل قسم لضمان الاستقلالية والأمان
    lessonsData.forEach((lesson) => {
        try {
            htmlContent += `
                <a href="${lesson.link}" class="lesson-card">
                    <div class="icon-box">
                        <i class="${lesson.icon}"></i>
                    </div>
                    <div class="lesson-info">
                        <h3>${lesson.title}</h3>
                        <p>${lesson.desc}</p>
                    </div>
                </a>
            `;
        } catch (e) {
            console.error("خطأ في تحميل قسم:", lesson.title);
        }
    });

    container.innerHTML = htmlContent;
}

// التشغيل الآمن فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayLessons);
