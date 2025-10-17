// 当整个页面的内容都加载完毕后执行
document.addEventListener('DOMContentLoaded', function() {

    // --- 赛事倒计时功能 ---
    const countdownElement = document.getElementById('countdown');

    // 只有在首页存在 countdown 元素时才执行倒计时
    if (countdownElement) {
        // 设置S15开赛日期 (年, 月-1, 日)
        const eventDate = new Date('2025-10-14T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "赛事正在进行！";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `距离开赛: ${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
        };
        
        // 立即执行一次，然后每秒更新
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }
    
    // --- 导航栏高亮当前页面 ---
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname.split('/').pop(); // 获取当前文件名

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // 如果链接的文件名和当前页面的文件名相同，则添加 active class
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
             link.classList.remove('active'); // 移除其他链接的 active class
        }
    });

});