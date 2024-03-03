import { Component } from '../../services/component/component';
import './avatar.scss';

interface IProps {
    name: string;
}

export class Avatar extends Component {
  constructor(props: IProps) {
    super("button", props);
  }

  protected render(): string {
    const { name } = this.props;

    return `<div class="avatar__image-container">
                <img class="avatar__image" src="../../../static/image.png" alt="avatar">
                <div class="avatar__change-avatar" >
                    <label for="${name }">Поменять<br>аватар</label>
                    <input type="file" id="${name }" name="${name}" accept="image/png, image/jpeg"/>
                </div>
            </div>`;
  }
}
