export function notificationSubmission() {
    document.addEventListener('DOMContentLoaded', function () {
        const submitButton = document.getElementById('submitButton');
        const notificationPopup = document.getElementById('notificationPopup');
        const nameInput = document.getElementById('nameInput');
        const phoneInput = document.getElementById('phoneInput');
        const questionInput = document.getElementById('questionInput');


        submitButton.addEventListener('click', function () {
            // Проверяем, заполнены ли все поля
            const boolFormDATA = nameInput.value && phoneInput.value.length === 13;
            console.log("work")
            if (boolFormDATA) {
                // Задержка в 0.5 секунд перед показом notification
                setTimeout(function () {
                    notificationPopup.style.display = 'block';
                    notificationPopup.classList.add('fade-in');
                }, 500);

                // плавное появление и скрытие уведомления (Спасибо за обращение)
                setTimeout(function () {
                    notificationPopup.classList.add('fade-out');
                    setTimeout(function () {
                        notificationPopup.style.display = 'none';
                        notificationPopup.classList.remove('fade-in'); // Убираем класс после анимации
                    }, 500)
                }, 2500)
            }
        });
    });
}
