import { Component } from '../../services/component/component';

interface IFieldEditProps {
    name: string;
    value: string;
    type: string;
    inputValue: string;
    id: string;
}

export class FieldEdit extends Component {
  constructor(props: IFieldEditProps) {
    super("div", props);
  }

  protected render(): string {
    const { name, value, type, inputValue, id}  = this.props;
    return `<div class="error-page__container">
                <div class="field-edit">
                <label class="field-edit__name" for="${name }">${value }</label>
                <input class="field-edit__value" type="${type }" name="${name }" id="${id}" value="{${inputValue}">
            </div>`;
  }
}
