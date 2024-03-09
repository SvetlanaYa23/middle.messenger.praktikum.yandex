const tpl = `
  <div class="avatar__image-container">
    <img class="avatar__image" src="../../../../image.png" alt="avatar">
    <div class="avatar__change-avatar" >
        <label for="{{ name }}">Поменять<br>аватар</label>
        <input type="file" id="{{ name }}" name="{{ name}}" accept="image/png, image/jpeg"/>
    </div>
  </div>
`;

export default tpl;
