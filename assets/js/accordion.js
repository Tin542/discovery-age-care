document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        // Đóng tất cả các accordion
        document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
        });

        // Nếu accordion hiện tại không hoạt động, hãy mở nó
        if (!isActive) {
            button.classList.add('active');
            accordionContent.style.display = 'flex';
        }
    });
});