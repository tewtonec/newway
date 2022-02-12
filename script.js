//get chat wind
let chatWind = document.querySelector('.chat-content');

//get form and send mess
let chatForm = document.querySelector('.chat-form');
let chatMessToSend = chatForm.querySelector('.chat-form-input');

//get template
let messTemplate = document.querySelector('#message-template').content;
let newMessTemplate = messTemplate.querySelector('.chat-message');
//get template

// function del messages
let messRemover = function (item) {
    let remButton = item.querySelector('.chat-message-button');
    remButton.addEventListener('click', function () {
        item.remove();
    });
};

//function send messages
chatForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let MessageText = chatMessToSend.value;
    let message = newMessTemplate.cloneNode(true);
    let newMessageText = message.querySelector('.chat-message-text');

    newMessageText.textContent = MessageText;
    messRemover(message);
    chatWind.appendChild(message);
    chatMessToSend.value = '';
});



/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
