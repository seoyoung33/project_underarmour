document.querySelectorAll('.menu_button').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        
        // 열려 있는 다른 submenu 닫기
        document.querySelectorAll('.submenu').forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = 'none';
            }
        });

        // 현재 submenu 토글
        submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    });
});
