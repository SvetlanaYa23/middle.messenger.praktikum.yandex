import Component from '../../services/component/component';
import { handleBlur, handleSubmit } from '../../services/validation/validation';
import tpl from './password-edit-layout';

export class PasswordEditLayout extends Component {
  addEvents() {
    super.addEvents();
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('password-edit');

      if (form) {
        form.addEventListener('submit', handleSubmit);
        
        form.querySelectorAll('input').forEach((input: HTMLInputElement) => {
          input.addEventListener('blur', handleBlur);
        });
      }
    });
  }

  removeEvents() {
    super.removeEvents();

    document.removeEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('password-edit');
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
