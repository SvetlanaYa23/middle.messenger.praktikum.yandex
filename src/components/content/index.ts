import Component from '../../services/component/component';
import { tpl } from './content';

export class Content extends Component {
  render() {
    return this.compile(tpl);
  }
}
