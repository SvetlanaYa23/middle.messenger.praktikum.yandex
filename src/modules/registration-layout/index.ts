import Component from '../../services/component/component';
import { handleBlur, handleSubmit } from '../../services/validation/validation';
import tpl from './registration-layout';

export class RegistrationLayout extends Component {
  addEvents() {
    super.addEvents();
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('registration');

      if (form) {
        form.addEventListener('submit', handleSubmit);
        console.log(form, 'form');
        form.querySelectorAll('input').forEach((input: HTMLInputElement) => {
          input.addEventListener('blur', handleBlur);
          console.log(input, 'input');
        });
      }
    });
  }

  removeEvents() {
    super.removeEvents();

    document.removeEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('registration');
      if (form) {
        form.removeEventListener('submit', handleSubmit);
        form.querySelectorAll('input').forEach((input: HTMLInputElement) => {
          input.removeEventListener('blur', handleBlur);
        });
      }
    });
  }
  
  render() {
    return this.compile(tpl);
  }
}
