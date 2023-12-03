import {setupPopup } from './popup.js';
import {setupFormValidation} from './validationAndSendForm.js';
import {notificationSubmission} from "./notificationOfSuccessfulRequestSubmission.js";
import {openingAPopup} from "./openingAPopupViaServices.js";

document.addEventListener("DOMContentLoaded", function () {
    // плавная прокрутка
    const links = document.querySelectorAll(".punk_1");
    const nameCompanyLink = document.querySelector(".name_lending"); // Ссылка на "NAME COMPANY"

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Получаем ID якоря
            const targetElement = document.getElementById(targetId); // Находим соответствующий элемент

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Позиция элемента от верхней границы окна
                    behavior: "smooth" // Плавная анимация
                });
            }
        });
    });

    // Обработка прокрутки к "NAME COMPANY"
    nameCompanyLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Получаем ID якоря
        const targetElement = document.getElementById(targetId); // Находим соответствующий элемент

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Позиция элемента от верхней границы окна
                behavior: "smooth" // Плавная анимация
            });
        }
    });
});

setupPopup();
setupFormValidation();
notificationSubmission();
openingAPopup();