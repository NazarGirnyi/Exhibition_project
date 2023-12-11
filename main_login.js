// Функція для перевірки введених даних під час входу користувача
function validateLogin(event) {
    // Забороняє стандартну поведінку відправки форми
    event.preventDefault(); 

    // Отримання значень із полів для введення імені користувача та пароля
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Перевірка, чи введені ім'я та пароль вірні
    if (username === 'unit' && password === 'unit') {
        // Перенаправлення на головну сторінку у разі успішного входу
        window.location.href = 'main_page.html';
    } 
    else {
        // Повідомлення про помилку у разі невірного імені чи пароля
        alert('Невірне ім\'я користувача або пароль. Будь ласка, спробуйте ще раз.');
    }
}

// Функція для перемикання видимості пароля
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var showPasswordBtn = document.getElementById('showPasswordBtn');

    // Зміна типу введеного тексту з пароля на звичайний текст та навпаки
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordBtn.textContent = 'Сховати пароль';
    } else {
        passwordInput.type = 'password';
        showPasswordBtn.textContent = 'Показати пароль';
    }
}