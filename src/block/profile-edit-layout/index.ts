import Component from '../../services/component/component';
import tpl from './profile-edit-layout';

export class ProfileEditLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
