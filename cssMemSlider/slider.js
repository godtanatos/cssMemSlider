const pictures = document.querySelector('.container_for_img').querySelectorAll('img');
const comments = document.querySelectorAll('.сommentToPictur')
const bullets = document.querySelectorAll('.container_bulit');

bullets.forEach(elem => {
    elem.addEventListener("click", changeBullet, true)
})

function change() {
    /*  pictures[1].classList.add('active')
     pictures[0].classList.add('disable') */

}
let slide;
function changeBullet(e) {
    bullets.forEach(e => { e.firstElementChild.classList.remove('active') })
    if (e.target.firstElementChild == null) {
        e.target.classList.add("active");
        slide = e.target.parentElement.attributes['data-number'].value;

    } else {
        e.target.firstElementChild.classList.add("active")
        slide = e.target.attributes['data-number'].value;
    }
    pictures.forEach(elem => {
        elem.classList.remove('active');
        pictures[slide - 1].classList.add('active');
    })
    comments.forEach(elem => {
        elem.classList.remove('active');
        comments[slide - 1].classList.add('active');
    })
}

