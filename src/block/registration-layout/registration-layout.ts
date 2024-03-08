const tpl = `<main class="registration-form">
                <div class="registration-form__container">
                    <form class="registration-form__form" action="" method="post">
                        <h2 class="registration-form__title">Регистрация</h2>
                        <div class="registration-form__inputs">
                            {{{ fields }}}
                        </div>
                        <div class="registration-form__button">
                            {{{ button }}}
                        </div>
                        <div class="registration-form__link">
                            {{{ link }}}
                        </div>
                    </form>
                </div>
            </main>`;

export default tpl;
