import Component from '../../services/component/component';
import { handleBlur, handleSubmit } from '../../services/validation/validation';
import tpl from './registration-layout';

export class RegistrationLayout extends Component {
  addEvents() {
    super.addEvents();
    document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded);
  }

  removeEvents() {
    super.removeEvents();
    document.removeEventListener('DOMContentLoaded', this.onDOMContentLoaded);
  }

  onDOMContentLoaded() {
    const form = document.getElementById('registration-form');

    if (form) {
      form.addEventListener('submit', handleSubmit);
      form.querySelectorAll('input').forEach((input) => {
        input.addEventListener('blur', handleBlur);
      });
    }
  }
  
  render() {
    return this.compile(tpl);
  }
}
