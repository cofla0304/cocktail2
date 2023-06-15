function handleClick() {
    document.querySelector('.menu').classList.toggle('is-active');
    document.querySelector('.menu-btn').classList.toggle('active');
}

document.querySelector('.menu-btn').addEventListener('click', handleClick);
/*
document.querySelector('.menu-btn').addEventListener('click', handleClick);
$('.menu-btn').click(handleClick);
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('is-active');
});
*/
