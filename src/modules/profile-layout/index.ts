import Component from '../../services/component/component';
import tpl from './profile-layout';

export class ProfileLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
