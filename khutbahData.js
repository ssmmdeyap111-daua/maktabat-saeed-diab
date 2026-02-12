// بيانات سلسلة علامات الساعة - الشيخ سعيد مصطفى دياب
// ملاحظة: تأكد أن ملفات الصوت موجودة داخل مجلد اسمه audio بجانب صفحات الموقع
const khutbahData = [];

// توليد بيانات 40 خطبة تلقائياً بناءً على نمط التسمية الخاص بك
for (let i = 1; i <= 40; i++) {
    khutbahData.push({
        id: i,
        title: `علامات الساعة - ${i}`,
        date: "2026", // يمكنك تعديل التاريخ لاحقاً لكل خطبة
        link: `audio/alamat-${i}.mp3` // هذا هو الرابط الذي بدأت برفعه
    });
}

// دالة عرض الخطب في الصفحة
function displayKhutbahs() {
    const container = document.getElementById('khutbah-list');
    if (!container) return;

    container.innerHTML = khutbahData.map(khutbah => `
        <div class="khutbah-card">
            <div style="display: flex; align-items: center;">
                <div class="series-icon"><i class="fas fa-hourglass-half"></i></div>
                <div class="khutbah-info">
                    <h3>${khutbah.title}</h3>
                    <p><i class="far fa-calendar-alt"></i> سلسلة علامات الساعة</p>
                </div>
            </div>
            <a href="${khutbah.link}" class="play-btn" target="_blank" title="استماع">
                <i class="fas fa-play"></i>
            </a>
        </div>
    `).join('');
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayKhutbahs);
