import Component from '../../services/component/component';
import tpl from './chat-layot';

export class ChatLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
