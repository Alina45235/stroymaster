// Обработка клика по кнопке
document.getElementById('ctaButton').addEventListener('click', function() {
    const btn = this;
    const msg = document.getElementById('message');

    // Показываем сообщение, скрываем кнопку
    msg.style.display = 'block';
    btn.style.display = 'none';

    // Через 3 секунды  возвращаем всё обратно
    setTimeout(function() {
        msg.style.display = 'none';
        btn.style.display = 'inline-block';
    }, 3000);
});