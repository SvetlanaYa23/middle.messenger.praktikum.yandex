const tpl = 
`<main class="chat">
    <div class="chat__container">
        <div class="chat__left-part">
            <div class="chats__header">
                <a class="chats__profile-link" href="/profile" target="_blank">Profile</a>
            </div>
            <div class="chats__items">
                {{{ chatTabs }}} 
            </div>
        </div>
        <div class="chat__right-part">
            <div class="message__profile-info">
                <div class="message__user-image">
                    <img src="../../../static/image.png" alt="user image">
                </div>
                <div class="message__user-name">Антон</div>
            </div>
            <div class="message__send">
                <input class="message__input" type="text" name="message" id="message" placeholder="Сообщение">
                <button class="message__send-button"></button>
            </div>
        </div>
    </div>
</main>`;

export default tpl;
