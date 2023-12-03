// popup.js
export function setupPopupHandling() {
    const consultationButton = document.querySelector('.consultation-button');
    const popup = document.querySelector('.popup');

    document.addEventListener('click', function(e) {
        if (e.target !== consultationButton && e.target !== popup) {
            popup.style.opacity = '0';
            setTimeout(function () {
                popup.style.display = "none";
            }, 500);
        }
    });

    popup.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            popup.style.opacity = '0';
            setTimeout(function () {
                popup.style.display = "none";
            }, 500);
        }
    });
}

export function setupPopup() {
    const nameInput = document.querySelector('.popup-input-name')
    const phoneNumberInput = document.querySelector('.popup-input-number-phone')
    const questionInput = document.querySelector('.popup-input-question')
    const popup = document.querySelector('.popup');
    const consultationButton = document.querySelector(".consultation-button");

    function clearInputs() {
        nameInput.value = ''
        phoneNumberInput.value = ''
        questionInput.value = ''
    }

    document.addEventListener('DOMContentLoaded', function() {
        consultationButton.addEventListener('click', function(e) {
            popup.style.display = 'flex';
            clearInputs(); // очищаем перед открытием формы
            setTimeout(function () {
                popup.style.opacity = '1';
            }, 0)
            e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не дошло до document
        });

        setupPopupHandling();
    });

    // при обновлении страницы страница возвращается на начальную позицию
    window.addEventListener("beforeunload", function () {
        window.scrollTo(0, 0); // Перемещаем страницу наверх при обновлении
    })
}
