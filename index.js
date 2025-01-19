/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Hiển thị section đầu tiên khi tải trang
window.addEventListener('load', function () {
  // Lấy section đầu tiên mặc định
  const defaultSectionId = 'about'; // Đổi thành ID của section đầu tiên
  Openpage(defaultSectionId); // Gọi hàm Openpage để hiển thị section đầu tiên
});

// Hàm điều khiển hiển thị các section khi nhấn nút
function Openpage(sectionId) {
  // Lấy tất cả các section
  const sections = document.querySelectorAll('.content');

  // Xác định section được chọn
  const targetSection = document.getElementById(sectionId);

  sections.forEach(section => {
    if (section === targetSection) {
      // Hiển thị section được chọn
      section.classList.add('active');
      section.classList.remove('hidden');
    } else {
      // Làm mờ section đang hiển thị
      section.classList.remove('active');
      section.classList.add('hidden');
    }
  });

  // Cuộn đến section được chọn (nếu cần)
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


function Openjob(job) {
  // Ẩn tất cả các nội dung trước
  const contents = document.querySelectorAll(".info-content");
  contents.forEach((content) => (content.style.display = "none"));

  // Hiển thị nội dung tương ứng
  const selectedContent = document.getElementById(`info-${job}`);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}

