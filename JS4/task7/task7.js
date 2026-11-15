const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

trigger.addEventListener('mouseenter', function() {
    target.src = '../task5/img/pic3.jpg';
});

trigger.addEventListener('mouseleave', function() {
    target.src = '../task5/img/pic2.jpg';
});
