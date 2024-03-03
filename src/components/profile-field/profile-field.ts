import { Component } from '../../services/component/component';
import './profile-field.scss';

interface IProps {
    fieldName: string;
    fieldValue: string;
}

export class ProfileField extends Component {
  constructor(props: IProps) {
    super("div", props);
  }

  protected render(): string {
    const { fieldName, fieldValue } = this.props;

    return `<div class="field">
                <div class="field__name">${fieldName}</div>
                <div class="field__value">${fieldValue}</div>
            </div>`
  }
}