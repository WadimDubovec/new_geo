export function setupFormValidation() {

    $(document).ready(function () {
        $('#form').submit(function (e) {
            e.preventDefault();

            // Валидация формы
            var name = $('#nameInput').val();
            var phone = $('#phoneInput').val();
            var question = $('#questionInput').val();

            if (!name || !phone || !question) {
                alert('Пожалуйста, заполните все поля');
                return;
            }

            // Валидация номера телефона
            if (!isValidPhoneNumber(phone)) {
                $('#phoneError').text('Введите корректный номер телефона');
                return;
            }

            // Проверка на XSS-уязвимость
            if (containsXSS(name) || containsXSS(phone) || containsXSS(question)) {
                alert('Обнаружена уязвимость. Пожалуйста, введите корректные данные.');
                return;
            }
            console.log("1");


            //E-mail Ajax Send
            $("form").submit(function() { //Change
                var th = $(this);
                console.log("2");

                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    console.log("3");
                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });
        });

        function isValidPhoneNumber(phone) {
            // Проверка на соответствие белорусскому формату номера телефона +375XXXXXXXXX
            var pattern = /\+375[0-9]{2}[0-9]{7}/;
            return pattern.test(phone);
        }

        function containsXSS(text) {
            // Проверка на наличие HTML и JavaScript кода, который может быть использован для XSS
            var pattern = /<[\s\S]*?script[\s\S]*?>|<[\s\S]*?javascript[\s\S]*?>/gi;
            return pattern.test(text);
        }
    });
}





