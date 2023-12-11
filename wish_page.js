// Функція, яка викликається при натисканні на кнопку "Підтвердити" у формі вибору виставки
function submitForm() {
    // Отримання значень полів форми за їхніми ідентифікаторами
    var category = document.getElementById('category').value;
    var timeFrom = document.getElementById('timeFrom').value;
    var timeTo = document.getElementById('timeTo').value;
    var additionalInfo = document.getElementById('additionalInfo').value;

    // Виведення повідомлення зі зібраною інформацією про вибір виставки
    alert('Побажання надіслано!\nКатегорія: ' + category + '\nЧас від: ' + timeFrom + '\nЧас до: ' + timeTo + '\nДодаткова інформація: ' + additionalInfo);
}