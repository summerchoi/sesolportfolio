const handleScroll = () => {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('#logo');

    // nav 높이보다 더 스크롤이 되었을 경우
    if (window.scrollY > nav.clientHeight) {
        nav.classList.add('scrolled');
        logo.src = 'images/blacklogo.png';
    } else {
        nav.classList.remove('scrolled');
        logo.src = 'images/whitelogo.png';
    }
}

window.addEventListener('scroll', handleScroll);