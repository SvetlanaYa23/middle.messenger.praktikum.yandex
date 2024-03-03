import { Component } from '../../services/component/component';
import '../../style.scss';

export class Page404 extends Component {

     render(): string {
        return `<div class="error-page-404">
                    {{{>error-page/error-page statusCode="404" description="Не туда попали" linkHref="/" linkText="Назад к чатам" }}}
                </div>`;
      }
}
