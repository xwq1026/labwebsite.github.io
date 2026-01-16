console.log("网站加载成功！");

// ✅ 新增：控制手机端导航展开/收起
function toggleNav() {
    const nav = document.querySelector('nav');
    if (nav) nav.classList.toggle('open');
}

// 显示指定部分的函数
function showSection(sectionId) {
    // 隐藏所有 section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示指定的部分
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // 更新导航栏活动状态
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${sectionId}'`)) {
            link.classList.add('active');
        }
    });

    // ✅ 新增：点击菜单项后，手机端自动收起导航
    const nav = document.querySelector('nav');
    if (nav) nav.classList.remove('open');
}

// 页面加载时显示首页
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
