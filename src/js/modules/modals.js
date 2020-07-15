// модуль всплывающего окна
const modals = () => {
    //ф-я всплывающего окна
    function bindModal(triggerSelector, modalSelector, closeSelector) 
    {
        // ищем элементы
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        // выбираем элементы 
        trigger.forEach(item => {
            // при клике на элемент 
            item.addEventListener('click', (event) => {
                if (event.target) 
                {
                    event.preventDefault();
                }
    
                // добавляем класс показа и скрываем скролл
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        // при клике на крестик
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        // при клике на подложку
        modal.addEventListener('click', (e) => {
            if (e.target === modal) 
            {
                modal.style.display = "none";
                document.body.style.overflow = ""; 
                // document.body.classList.remove('modal-open');
            }
        });
    }

    // показываем форму каждые 60 сек
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    // вызываем ф-я
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

// экспорт по умолчанию
export default modals;