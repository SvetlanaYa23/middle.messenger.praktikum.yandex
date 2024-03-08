const tpl = `<main class="profile-edit">
                <div class="profile-edit__container">
                    <div class="profile-edit__user">
                        {{{ avatar }}}
                    </div>
                    <form class="profile-edit__form" action="" method="post">
                        <div class="profile-edit__info">
                            {{{ fields }}}
                        </div>
                        <div class="profile-edit__button">
                            {{{ button }}}
                        </div>
                    </form>
                </div>
            </main>`;

export default tpl;
