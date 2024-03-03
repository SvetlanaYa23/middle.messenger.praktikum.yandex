import { Component } from "../../services/component/component";
import { IProps } from "../../types";
import './button.scss';

interface IButtonProps extends IProps  {
    value: string;
    onClick?: () => void,
}

export class Button extends Component {
  constructor(props: IButtonProps) {
    super("button", props);
  }

  protected render(): string {
    const { value } = this.props;

    return `<button class="button">${value}</button>`;
  }
}
