function toggleMenu() {
    const menu = document.getElementById('menu-links');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Load the menu HTML dynamically
async function loadMenu() {
    const response = await fetch('menu.html');
    const menuHtml = await response.text();
    document.body.insertAdjacentHTML('afterbegin', menuHtml);

    // Attach the toggleMenu function to the hamburger menu
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
}

// Load the menu on page load
loadMenu();
