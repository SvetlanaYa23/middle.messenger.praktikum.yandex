import { Component } from '../../services/component/component';
import './link.scss';

interface IProps {
    linkHref: string;
    linkText: string;
}

export class Link extends Component {
  constructor(props: IProps) {
    super("a", props);
  }

  protected render(): string {
    const { linkHref, linkText } = this.props;

    return `<a class="link" href="${linkHref}">${linkText}</a>`;
  }
}
