import Component from '../../services/component/component';
import tpl from './error-page';
import './error-page.scss';
export class ErrorPage extends Component {
    render() {
        return this.compile(tpl);
      }
}
