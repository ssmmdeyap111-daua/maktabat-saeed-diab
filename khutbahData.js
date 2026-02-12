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
// بيانات سلسلة علامات الساعة - الشيخ سعيد مصطفى دياب
// هذا الملف يحتوي على 40 خطبة مرتبة ومجهزة للعمل فوراً
const khutbahData = [
    { id: 1, title: "علامات الساعة - 1", link: "audio/alamat-1.mp3" },
    { id: 2, title: "علامات الساعة - 2", link: "audio/alamat-2.mp3" },
    { id: 3, title: "علامات الساعة - 3", link: "audio/alamat-3.mp3" },
    { id: 4, title: "علامات الساعة - 4", link: "audio/alamat-4.mp3" },
    { id: 5, title: "علامات الساعة - 5", link: "audio/alamat-5.mp3" },
    { id: 6, title: "علامات الساعة - 6", link: "audio/alamat-6.mp3" },
    { id: 7, title: "علامات الساعة - 7", link: "audio/alamat-7.mp3" },
    { id: 8, title: "علامات الساعة - 8", link: "audio/alamat-8.mp3" },
    { id: 9, title: "علامات الساعة - 9", link: "audio/alamat-9.mp3" },
    { id: 10, title: "علامات الساعة - 10", link: "audio/alamat-10.mp3" },
    { id: 11, title: "علامات الساعة - 11", link: "audio/alamat-11.mp3" },
    { id: 12, title: "علامات الساعة - 12", link: "audio/alamat-12.mp3" },
    { id: 13, title: "علامات الساعة - 13", link: "audio/alamat-13.mp3" },
    { id: 14, title: "علامات الساعة - 14", link: "audio/alamat-14.mp3" },
    { id: 15, title: "علامات الساعة - 15", link: "audio/alamat-15.mp3" },
    { id: 16, title: "علامات الساعة - 16", link: "audio/alamat-16.mp3" },
    { id: 17, title: "علامات الساعة - 17", link: "audio/alamat-17.mp3" },
    { id: 18, title: "علامات الساعة - 18", link: "audio/alamat-18.mp3" },
    { id: 19, title: "علامات الساعة - 19", link: "audio/alamat-19.mp3" },
    { id: 20, title: "علامات الساعة - 20", link: "audio/alamat-20.mp3" },
    { id: 21, title: "علامات الساعة - 21", link: "audio/alamat-21.mp3" },
    { id: 22, title: "علامات الساعة - 22", link: "audio/alamat-22.mp3" },
    { id: 23, title: "علامات الساعة - 23", link: "audio/alamat-23.mp3" },
    { id: 24, title: "علامات الساعة - 24", link: "audio/alamat-24.mp3" },
    { id: 25, title: "علامات الساعة - 25", link: "audio/alamat-25.mp3" },
    { id: 26, title: "علامات الساعة - 26", link: "audio/alamat-26.mp3" },
    { id: 27, title: "علامات الساعة - 27", link: "audio/alamat-27.mp3" },
    { id: 28, title: "علامات الساعة - 28", link: "audio/alamat-28.mp3" },
    { id: 29, title: "علامات الساعة - 29", link: "audio/alamat-29.mp3" },
    { id: 30, title: "علامات الساعة - 30", link: "audio/alamat-30.mp3" },
    { id: 31, title: "علامات الساعة - 31", link: "audio/alamat-31.mp3" },
    { id: 32, title: "علامات الساعة - 32", link: "audio/alamat-32.mp3" },
    { id: 33, title: "علامات الساعة - 33", link: "audio/alamat-33.mp3" },
    { id: 34, title: "علامات الساعة - 34", link: "audio/alamat-34.mp3" },
    { id: 35, title: "علامات الساعة - 35", link: "audio/alamat-35.mp3" },
    { id: 36, title: "علامات الساعة - 36", link: "audio/alamat-36.mp3" },
    { id: 37, title: "علامات الساعة - 37", link: "audio/alamat-37.mp3" },
    { id: 38, title: "علامات الساعة - 38", link: "audio/alamat-38.mp3" },
    { id: 39, title: "علامات الساعة - 39", link: "audio/alamat-39.mp3" },
    { id: 40, title: "علامات الساعة - 40", link: "audio/alamat-40.mp3" }
];

// دالة العرض البرمجية
function displayKhutbahs() {
    const container = document.getElementById('khutbah-list');
    if (!container) return;

    container.innerHTML = khutbahData.map(khutbah => `
        <div class="khutbah-card">
            <div style="display: flex; align-items: center;">
                <div class="series-icon"><i class="fas fa-hourglass-half"></i></div>
                <div class="khutbah-info">
                    <h3>${khutbah.title}</h3>
                    <p><i class="far fa-clock"></i> استماع للخطبة</p>
                </div>
            </div>
            <a href="${khutbah.link}" class="play-btn" target="_blank">
                <i class="fas fa-play"></i>
            </a>
        </div>
    `).join('');
}

// تنفيذ الدالة عند التحميل
document.addEventListener('DOMContentLoaded', displayKhutbahs);
// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayKhutbahs);
