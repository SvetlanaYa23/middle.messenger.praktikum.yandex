import Component from '../../services/component/component';
import tpl from './profile-field';
import './profile-field.scss';
export class ProfileField extends Component {
    render() {
        return this.compile(tpl);
      }
}
