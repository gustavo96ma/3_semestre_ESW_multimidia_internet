const toggleButton = document.getElementById('toggle-button');
const drawer = document.getElementById('drawer');
const main = document.getElementById('main');

const toggleDrawer = () => {
    // drawerOpened = false;

    // if (drawer.style.left < 0) {
    //     drawerOpened = false;
    // } else {
    //     drawerOpened = true;
    // }

    const drawerOpened = drawer.style.left < '0px' ? false : true;

    drawer.style.left = drawerOpened ? '-250px' : '0';
    main.style.marginLeft = drawerOpened ? '0' : '250px';
}

toggleButton.addEventListener('click', toggleDrawer);