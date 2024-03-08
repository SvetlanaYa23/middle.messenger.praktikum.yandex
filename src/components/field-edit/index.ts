import Component from '../../services/component/component';
import tpl from './field-edit';
import './field-edit.scss';
export class FieldEdit extends Component {
    render() {
        return this.compile(tpl);
      }
}
