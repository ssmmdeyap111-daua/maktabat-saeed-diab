/**
 * قاعدة بيانات الدروس العلمية الشاملة - الشيخ سعيد مصطفى دياب
 * تحتوي على الأقسام والدروس التفصيلية
 */

// 1. دروس الفرائض (التي أرسلتها)
const faraidLessons = [
    { title: "شرح المنظومة الرحبية - الدرس 1", file: "al-rhapih1.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 2", file: "al-rhapih2.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 3", file: "al-rhapih3.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 4", file: "al-rhapih4.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 5", file: "al-rhapih5.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 6", file: "al-rhapih6.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 7", file: "al-rhapih7.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 8", file: "al-rhapih8.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 9", file: "al-rhapih9.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 10", file: "al-rhapih10.mp3", cat: "فرائض" },
    { title: "شرح المنظومة الرحبية - الدرس 11", file: "al-rhapih11.mp3", cat: "فرائض" }
];

// 2. دروس الحديث (التي أرسلتها)
const hadithLessons = [
    { title: "شرح رياض الصالحين - الدرس 1", file: "reyad-1.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 2", file: "reyad-2.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 3", file: "reyad-3.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 4", file: "reyad-4.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 5", file: "reyad-5.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 6", file: "reyad-6.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 7", file: "reyad-7.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 8", file: "reyad-8.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 9", file: "reyad-9.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 10", file: "reyad-10.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 11", file: "reyad-11.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 12", file: "reyad-12.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 13", file: "reyad-13.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 14", file: "reyad-14.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 15", file: "reyad-15.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 16", file: "reyad-16.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 17", file: "reyad-17.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 18", file: "reyad-18.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 19", file: "reyad-19.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 20", file: "reyad-20.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 21", file: "reyad-21.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 22", file: "reyad-22.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 23", file: "reyad-23.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 24", file: "reyad-24.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 25", file: "reyad-25.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 26", file: "reyad-26.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 27", file: "reyad-27.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 28", file: "reyad-28.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 29", file: "reyad-29.mp3", cat: "حديث" },
    { title: "شرح رياض الصالحين - الدرس 30", file: "reyad-30.mp3", cat: "حديث" }
];

// مصفوفة الأقسام الرئيسية (الفهرس)
const mainCategories = [
    { title: "التفسير", icon: "fas fa-book-open", desc: "بيان معاني القرآن", link: "tafseer.html" },
    { title: "علوم القرآن", icon: "fas fa-quran", desc: "مباحث الكتاب العزيز", link: "quran-sciences.html" },
    { title: "شرح الحديث", icon: "fas fa-scroll", desc: "شرح رياض الصالحين", link: "hadith.html" },
    { title: "العقيدة", icon: "fas fa-shield-halved", desc: "أصول الإيمان", link: "aqidah.html" },
    { title: "الفقه", icon: "fas fa-gavel", desc: "الأحكام الشرعية", link: "fiqh.html" },
    { title: "السيرة", icon: "fas fa-mosque", desc: "حياة النبي ﷺ", link: "seerah.html" },
    { title: "الفرائض", icon: "fas fa-calculator", desc: "شرح الرحبية", link: "faraid.html" },
    { title: "الرقائق", icon: "fas fa-heart", desc: "أعمال القلوب", link: "raqaeq.html" }
];

// دالة عرض الأقسام في الصفحة الرئيسية (lessons.html)
function displayCategories() {
    const container = document.getElementById('lessons-list');
    if (!container) return;

    container.innerHTML = mainCategories.map(cat => `
        <a href="${cat.link}" class="lesson-card">
            <div class="icon-box"><i class="${cat.icon}"></i></div>
            <div class="lesson-info">
                <h3>${cat.title}</h3>
                <p>${cat.desc}</p>
            </div>
        </a>
    `).join('');
}

// دالة عرض الدروس الصوتية داخل الصفحات الفرعية
function displayAudioLessons(data, containerId, folder) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(lesson => `
        <div class="lesson-item">
            <div class="lesson-info">
                <i class="fas fa-play-circle"></i>
                <span class="lesson-title">${lesson.title}</span>
            </div>
            <audio controls preload="none">
                <source src="audio/${folder}/${lesson.file}" type="audio/mpeg">
            </audio>
        </div>
    `).join('');
}

// تشغيل العرض التلقائي
document.addEventListener('DOMContentLoaded', () => {
    displayCategories(); // يعرض الأيقونات الثمانية
    displayAudioLessons(faraidLessons, 'faraid-list', 'faraid'); // يعرض دروس الفرائض
    displayAudioLessons(hadithLessons, 'hadith-list', 'hadith'); // يعرض دروس الحديث
});
