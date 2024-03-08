import Component from '../../services/component/component';
import tpl from './password-edit-layout';

export class PasswordEditLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
