import Component from '../../services/component/component';
import tpl from './form-field';
import './form-field.scss';
export class FormField extends Component {
    render() {
        return this.compile(tpl);
      }
}
