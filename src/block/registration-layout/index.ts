import Component from '../../services/component/component';
import tpl from './registration-layout';

export class RegistrationLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
