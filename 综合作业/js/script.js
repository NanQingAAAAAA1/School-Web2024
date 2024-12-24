// 等待页面加载完成
document.addEventListener("DOMContentLoaded", () => {
    // 获取所有需要滑入效果的元素
    const scrollElements = document.querySelectorAll(".scroll-fade-in");

    // 判断元素是否在视口中
    const isInView = (element, offset = 100) => {
        const elementTop = element.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    // 显示元素（添加激活类）
    const showElement = (element) => {
        element.classList.add("active");
    };

    // 隐藏元素（移除激活类，可选）
    const hideElement = (element) => {
        element.classList.remove("active");
    };

    // 处理滚动动画
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (isInView(el, 100)) {
                showElement(el); // 进入视口，显示
            } else {
                hideElement(el); // 离开视口，隐藏（可选）
            }
        });
    };

    // 监听滚动事件
    window.addEventListener("scroll", handleScrollAnimation);

    // 初次检查元素位置
    handleScrollAnimation();
});
