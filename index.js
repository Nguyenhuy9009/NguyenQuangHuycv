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


function Openjob(jobId) {
  const infoContainer = document.getElementById("info-container");
  let content = "";

  switch (jobId) {
    case "haiphat":
      content = `
        <h3>Sale Online & Marketing - Cty Hải Phát</h3>
        <p>Tôi đã học được cách phân tích dữ liệu khách hàng và thực hiện các chiến dịch marketing hiệu quả.</p>
      `;
      break;
    case "wonhome":
      content = `
        <h3>CSKH & Sale - Wonhome & Owndays</h3>
        <p>Kinh nghiệm chăm sóc khách hàng và quản lý bán hàng tại cửa hàng.</p>
      `;
      break;
    case "owndays":
      content = `
        <h3>Intern Front-End</h3>
        <p>Học cách xây dựng và phát triển giao diện người dùng với các công nghệ hiện đại như HTML, CSS và JavaScript.</p>
      `;
      break;
    default:
      content = "<p>Không tìm thấy thông tin phù hợp.</p>";
  }

  // Cập nhật nội dung vào vùng thông tin
  infoContainer.innerHTML = content;

  // Hiển thị vùng thông tin
  infoContainer.classList.add("active");
}
