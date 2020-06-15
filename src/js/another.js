uiQuery = {
    dataButtonHamburgerOpen: "[data-button-hamburger-open]"
}

uiElements = {
    btnOpen: document.querySelector(uiQuery.dataButtonHamburgerOpen)
}

const addEventListeners = () => {
    uiElements.btnOpen.addEventListener('click', () => openMobileMenu())
}

addEventListeners();

// additional methods =========================
const openMobileMenu = () => {
    alert('openMobileMenu');
}

