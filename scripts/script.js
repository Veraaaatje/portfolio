const hidden = document.querySelector('.hidden');
const hover = document.querySelector('.hover')

hover.addEventListener('mouseenter', function () {
    hidden.classList.remove("hidden");
})

hover.addEventListener('mouseleave', function () {
    hidden.classList.add("hidden");
})


const hidden1 = document.querySelector('.hidden1');
const hover1 = document.querySelector('.hover1')

hover1.addEventListener('mouseenter', function () {
    hidden1.classList.remove("hidden1");
})

hover1.addEventListener('mouseleave', function () {
    hidden1.classList.add("hidden1");
})