import Component from '../../services/component/component';
import { handleBlur, handleSubmit } from '../../services/validation/validation';
import tpl from './chat-layot';

export class ChatLayout extends Component {

  addEvents() {
    super.addEvents();
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('message');
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
      const form = document.getElementById('message');
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
