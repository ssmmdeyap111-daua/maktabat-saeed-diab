// بيانات سلسلة علامات الساعة - الشيخ سعيد مصطفى دياب
const khutbahData = [
    { id: 1, title: "علامات الساعة - المقدمة وأهمية العلم بها", date: "2026-01-01", link: "audio/khutba1.mp3" },
    { id: 2, title: "علامات الساعة - بعثة النبي صلى الله عليه وسلم", date: "2026-01-08", link: "audio/khutba2.mp3" },
    { id: 3, title: "علامات الساعة - انشقاق القمر", date: "2026-01-15", link: "audio/khutba3.mp3" },
    // يمكنك إضافة باقي الـ 40 خطبة هنا بنفس النمط
];

// وظيفة لعرض الخطب في الصفحة تلقائياً
function displayKhutbahs() {
    const container = document.getElementById('khutbah-list');
    container.innerHTML = khutbahData.map(khutbah => `
        <div class="khutbah-card">
            <div style="display: flex; align-items: center;">
                <div class="series-icon"><i class="fas fa-hourglass-half"></i></div>
                <div class="khutbah-info">
                    <h3>${khutbah.title}</h3>
                    <p><i class="far fa-calendar-alt"></i> ${khutbah.date}</p>
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
