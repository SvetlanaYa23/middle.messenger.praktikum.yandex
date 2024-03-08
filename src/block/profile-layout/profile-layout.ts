const tpl = `<main class="profile">
                <div class="profile__container">
                    <div class="profile__user">
                        {{{ avatar }}}
                        <div class="profile__user-name">Светлана</div>
                    </div>
                    <div class="profile__info">
                        {{{ fields }}}
                    </div>
                    <div class="profile__links">
                        {{{ links }}}
                    </div>
                </div>
            </main>`;

export default tpl;
