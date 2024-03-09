const tpl = `<main class="authorization-form">
                <div class="authorization-form__container">
                    <form id="authorization-form" class="authorization-form__form" action="" method="post">
                        <h2 class="authorization-form__title">Вход</h2>
                        <div class="authorization-form__inputs">
                            {{{ fields }}}
                        </div>
                        <div class="authorization-form__button">
                            {{{ button }}}
                        </div>
                        <div class="authorization-form__link">
                            {{{ link }}}
                        </div>
                    </form>
                </div>
            </main>`;

export default tpl;
