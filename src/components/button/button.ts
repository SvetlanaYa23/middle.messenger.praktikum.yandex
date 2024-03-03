import { Component } from "../../services/component/component";
import './button.scss';

interface IProps {
    value: string;
}

export class Button extends Component {
  constructor(props: IProps) {
    super("button", props);
  }

  protected render(): string {
    const { value } = this.props;

    return `<button class="button">${value}</button>`;
  }
}
