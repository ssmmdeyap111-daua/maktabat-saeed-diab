// بيانات الدروس العلمية - الشيخ سعيد مصطفى دياب
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
    }
];

// دالة العرض - تأكد أنها تطابق كود صفحة الخطب التي نجحت
function displayLessons() {
    const container = document.getElementById('lessons-list');
    if (!container) return;

    let htmlContent = "";
    for (let i = 0; i < lessonsData.length; i++) {
        htmlContent += `
            <a href="${lessonsData[i].link}" class="lesson-card" style="text-decoration: none; display: flex; align-items: center; background: white; padding: 20px; border-radius: 15px; margin-bottom: 20px; border-right: 6px solid #87ceeb; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; color: #2c5d87; margin-left: 20px;">
                    <i class="${lessonsData[i].icon}"></i>
                </div>
                <div>
                    <h3 style="margin: 0; color: #2c5d87;">${lessonsData[i].title}</h3>
                    <p style="margin: 5px 0 0; color: #666;">${lessonsData[i].desc}</p>
                </div>
            </a>
        `;
    }
    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', displayLessons);
