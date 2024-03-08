import Component from '../../services/component/component';
import tpl from './authorization-layout';

export class AuthorizationLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
