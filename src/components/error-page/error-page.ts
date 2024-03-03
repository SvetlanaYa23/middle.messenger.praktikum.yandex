import { Component } from '../../services/component/component';
interface IErrorPageProps {
    statusCode: number;
    description: string;
    linkHref: string;
    linkText: string;
}
export class ErrorPage extends Component {
  constructor(props: IErrorPageProps) {
    super("div", props);
  }

  protected render(): string {
    const { statusCode, description, linkHref, linkText }  = this.props;
    return `<div class="error-page__container">
                <div class="error-page__wrapper">
                    <div class="error-page__status-code">${statusCode}</div>
                    <div class="error-page__description">${description}</div>
                    <a class="error-page__link" href="${linkHref}">${linkText}</a>
                </div>
            </div>`;
  }
}
