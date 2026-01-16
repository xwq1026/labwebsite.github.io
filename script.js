console.log("网站加载成功！");

// 显示指定部分的函数
function showSection(sectionId) {
    // 隐藏所有 section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';  // 隐藏所有部分
    });

    // 显示指定的部分
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';  // 显示被点击的部分
    }
    
    // 更新导航栏活动状态
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${sectionId}'`)) {
            link.classList.add('active');
        }
    });
}

// 页面加载时显示首页
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
