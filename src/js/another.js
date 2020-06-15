uiQuery = {
    dataButtonHamburgerOpen: "[data-button-hamburger-open]",
    dataButtonHamburgerClose: "[data-button-hamburger-close]",
    dataNavigationMobileOn: "[data-navigation-mobile-on]",
    dataNavigationLink: "[data-navigation-link]",
    dataNavigationBody: "[data-navigation-body]",
}

uiElements = {
    btnOpen: document.querySelector(uiQuery.dataButtonHamburgerOpen),
    btnClose: document.querySelector(uiQuery.dataButtonHamburgerClose),
    navMobileOn: document.querySelector(uiQuery.dataNavigationMobileOn),
    dataNavLinks: document.querySelectorAll(uiQuery.dataNavigationLink),
    dataNavBody: document.querySelector(uiQuery.dataNavigationBody),
}

const addEventListeners = () => {
    uiElements.btnOpen.addEventListener('click', () => openMobileMenu());
    uiElements.btnClose.addEventListener('click', () => closeMobileMenu());

    uiElements.dataNavLinks.forEach(link => link.addEventListener('click', (e) => closeMobileByLink(e)))
}

addEventListeners();

// additional methods =========================
const openMobileMenu = () => {
    uiElements.navMobileOn.classList.remove('navigation__mobile-on--hide');
}

const closeMobileMenu = () => {
    uiElements.navMobileOn.classList.add('navigation__mobile-on--hide');
}

const closeMobileByLink = (e) => {
    closeMobileMenu();
    removNavigationLinkActive();
    e.target.classList.add("navigation__link--active");
}

const removNavigationLinkActive = () => {
    uiElements.dataNavLinks.forEach(link => link.classList.remove("navigation__link--active"));
}

// scroll change navigadion look depends of scrollY position=======================================
const scrollPosition = {
    callAt: 400,
    overCallAt: false,
    belowCallAt: false,
}

window.addEventListener('scroll', () => {
    if(window.scrollY > scrollPosition.callAt && !scrollPosition.overCallAt) {
        scrollPosition.overCallAt = true;
        scrollPosition.belowCallAt = false;
        uiElements.dataNavBody.classList.add('navigation__body--small');

    } else if(window.scrollY <= 200 && !scrollPosition.belowCallAt) {
        scrollPosition.overCallAt = false;
        scrollPosition.belowCallAt = true;
        uiElements.dataNavBody.classList.remove('navigation__body--small');
    }
})