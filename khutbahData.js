// بيانات سلسلة علامات الساعة - الشيخ سعيد مصطفى دياب
const khutbahData = [
    { id: 1, title: "علامات الساعة - 1", date: "2026-01-01", link: "audio/khutba1.mp3" },
    { id: 2, title: "علامات الساعة - 2", date: "2026-01-08", link: "audio/khutba2.mp3" },
    { id: 3, title: "علامات الساعة - 3", date: "2026-01-15", link: "audio/khutba3.mp3" },
    { id: 4, title: "علامات الساعة - 4", date: "2026-01-22", link: "audio/khutba4.mp3" },
    { id: 5, title: "علامات الساعة - 5", date: "2026-01-29", link: "audio/khutba5.mp3" },
    // يمكنك تكرار الأسطر وتغيير الرقم والرابط حتى تصل إلى 40
];

// دالة عرض الخطب في الصفحة بتنسيق "علامات الساعة - الرقم"
function displayKhutbahs() {
    const container = document.getElementById('khutbah-list');
    
    // إذا أردت توليد 40 خطبة تجريبية بسرعة (للاختبار فقط) يمكنك تفعيل الكود التالي
    // أما إذا كنت ستدخل الروابط يدوياً فاستخدم المصفوفة أعلاه فقط
    
    container.innerHTML = khutbahData.map(khutbah => `
        <div class="khutbah-card">
            <div style="display: flex; align-items: center;">
                <div class="series-icon"><i class="fas fa-hourglass-half"></i></div>
                <div class="khutbah-info">
                    <h3>${khutbah.title}</h3>
                    <p><i class="far fa-calendar-alt"></i> تاريخ النشر: ${khutbah.date}</p>
                </div>
            </div>
            <a href="${khutbah.link}" class="play-btn" target="_blank">
                <i class="fas fa-play"></i>
            </a>
        </div>
    `).join('');
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayKhutbahs);
