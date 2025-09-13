// فتح نافذة عرض الشعار
function openLogoModal() {
    document.getElementById('logoModal').style.display = 'flex';
}

// إغلاق نافذة عرض الشعار
function closeLogoModal() {
    document.getElementById('logoModal').style.display = 'none';
}

// إغلاق النافذة عند النقر خارج الصورة
document.addEventListener('click', function(event) {
    const modal = document.getElementById('logoModal');
    if (event.target === modal) {
        closeLogoModal();
    }
});


