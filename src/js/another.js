uiQuery = {
    dataButtonHamburgerOpen: "[data-button-hamburger-open]",
    dataNavigationMobileOn: "[data-navigation-mobile-on]",
}

uiElements = {
    btnOpen: document.querySelector(uiQuery.dataButtonHamburgerOpen),
    navMobileOn: document.querySelector(uiQuery.dataNavigationMobileOn),
}

const addEventListeners = () => {
    uiElements.btnOpen.addEventListener('click', () => openMobileMenu())
}

addEventListeners();

// additional methods =========================
const openMobileMenu = () => {
    uiElements.navMobileOn.classList.remove('navigation__mobile-on--hide');
}

