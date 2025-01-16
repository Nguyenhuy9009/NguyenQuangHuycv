/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function Openpage(sectionId){
     // Lấy tất cả các section
            const sections = document.querySelectorAll('.content');

            // Duyệt qua các section
            sections.forEach(section => {
                if (section.id === sectionId) {
                    // Hiển thị section được chọn
                    section.classList.remove('hidden');
                    section.classList.add('active');
                    section.style.display = '';
                    section.style.zIndex = 1; // Đưa section được chọn lên trên
                } else {
                    // Ẩn các section khác
                    section.classList.remove('active');
                    section.classList.add('hidden');
                    section.style.display = 'none';
                    section.style.zIndex = 0; // Đưa section khác xuống dưới
                }
            });

            // Cuộn đến section được chọn
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
}
function openLink(url) {
        window.open(url, '_blank'); // Mở link trong tab mới
    }

    // Hàm hiển thị thông báo số điện thoại
function call() {
    alert('Liên hệ với tôi!');
    alert('Số điện thoại của tôi: 0123456789');
    alert('Email liên hệ: nguyenhuy092102@gmail.com');
    alert('Cảm ơn bạn đã quan tâm ');
}
