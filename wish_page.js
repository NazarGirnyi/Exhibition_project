function submitForm() {
    var category = document.getElementById("category").value.toLowerCase();
    var timeFrom = document.getElementById("timeFrom").value;
    var timeTo = document.getElementById("timeTo").value;
    var additionalInfo = document.getElementById("additionalInfo").value;

    // Визначення умов для перенаправлення
    var redirectToPage;

    if (category !== '') {
        switch (category) {
            case 'антикваріат':
                redirectToPage = 'antiques_page.html';
                break;
            case 'живопис':
                redirectToPage = 'paintings_page.html';
                break;
            // Інші категорії за потреби
            default:
                redirectToPage = 'default_page.html';
                break;
        }
    }     if (new Date(timeFrom) >= new Date(timeTo)) {
        alert("Час від повинен бути менше за час до. Будь ласка, виправте це.");
        return;
    }

    // Перенаправлення на визначену сторінку
    window.location.href = redirectToPage;
}