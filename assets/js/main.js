/** MOBILE MENU SHOW HIDE */
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', showMobileMenu);
closeIcon.addEventListener('click', hideMobileMenu);

// SHOW MOBILE MENU
function showMobileMenu() {
    mobileMenu.classList.add('show');
}

// HIDE MOBILE MENU
function hideMobileMenu() {
    mobileMenu.classList.remove('show');
}

// HIDE m-menu on outside click
window.addEventListener('click', e => {
    e.target == mobileMenu ? mobileMenu.classList.remove('show') : false;
});


/** COMMENT BOX SHOWN */
const commentBtn = document.querySelectorAll('.comment-btn');

for (let a = 0; a < commentBtn.length; a++) {
    commentBtn[a].addEventListener('click', showCommentBox);

    function showCommentBox() {
        const commentBox = document.querySelectorAll('.comment-box');

        for (let i = 0; i < commentBox.length; i++) {
            commentBox[i].style.opacity = '1';
            commentBox[i].style.visibility = 'visible';
        }
    }
}

/** DATE PICKER */
if($('#datepicker').length > 0) {
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'materialicons'
    });
}
if($('#datepicker2').length > 0) {
    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'materialicons'
    });
}
if($('#datepicker3').length > 0) {
    $('#datepicker3').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'materialicons'
    });
}