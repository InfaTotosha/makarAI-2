const button = document.getElementById('colorBtn');

button.addEventListener('click', function() {
    // Змінюємо колір фону сторінки на випадковий
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});