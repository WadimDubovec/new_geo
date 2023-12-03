import { setupPopupHandling } from "./popup.js";

export function openingAPopup() {
    // Получите ссылку на всплывающее окно и элементы с классом "popup-link"
    const popup = document.querySelector('.popup')
    const popupLinks = document.querySelectorAll(".popup-link");
    const nameInput = document.querySelector('.popup-input-name')
    const phoneNumberInput = document.querySelector('.popup-input-number-phone')
    const questionInput = document.querySelector('.popup-input-question')

    let isPopupOpen = false; // Переменная для отслеживания состояния всплывающего окна

    function clearInputs() {
        nameInput.value = ''
        phoneNumberInput.value = ''
        questionInput.value = ''
    }

    document.addEventListener('DOMContentLoaded', function() {
        popupLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                if (!isPopupOpen) {
                    popup.style.display = 'flex';
                    clearInputs();
                    setTimeout(function () {
                        popup.style.opacity = '1';
                    }, 0);
                    isPopupOpen = true; // Устанавливаем флаг, что всплывающее окно открыто
                }
                e.stopPropagation();
                console.log("isPopupOpen = " + isPopupOpen);

                let text_service = link.textContent
                console.log(text_service)
            });
        });

        setupPopupHandling()

        // Добавьте обработчик события на всплывающее окно для закрытия
        popup.addEventListener("click", (e) => {
            if (isPopupOpen) {
                // Предотвращаем закрытие всплывающего окна при клике внутри него
                e.stopPropagation();
            }
        });

        // Добавьте обработчик события на document для закрытия всплывающего окна
        document.addEventListener("click", () => {
            if (isPopupOpen) {
                popup.style.display = 'none';
                isPopupOpen = false; // Сбрасываем флаг, что всплывающее окно закрыто
                console.log("isPopupOpen = " + isPopupOpen);
            }
        });
    })
}


