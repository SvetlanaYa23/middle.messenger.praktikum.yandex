import { Component } from '../../services/component/component';

interface ILinkProps {
    linkHref: string;
    linkText: string;
}

export class Link extends Component {
  constructor(props: ILinkProps) {
    super("a", props);
  }

  protected render(): string {
    const { linkHref, linkText } = this.props;

    return `<a class="link" href="${linkHref}">${linkText}</a>`;
  }
}
