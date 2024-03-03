import { Component } from '../../services/component/component';

interface IFormFieldProps {
    name: string;
    value: string;
    type: string;
    placeholder: string;
    id: string;
}

export class FormField extends Component {
  constructor(props: IFormFieldProps) {
    super("div", props);
  }

  protected render(): string {
    const { name, value, type, placeholder, id}  = this.props;
    return `<div class="form-field__input">
                <label for="${name }">${value}</label>
                <input type="${type}" name="${name}" id="${id}" placeholder="${placeholder}">
            </div>`;
  }
}
