const tpl = `<main class="password-edit">
                <div class="password-edit__container">
                    <div class="password-edit__user">
                        {{{ avatar }}}
                    </div>
                    <form class="password-edit__form" action="" method="post">
                        <div class="password-edit__info">
                            {{{ fields }}}
                        <div class="password-edit__button">
                            {{{ button }}}
                        </div>
                    </form>
                </div>
            </main>`;

export default tpl;
