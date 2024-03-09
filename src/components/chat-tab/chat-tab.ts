const tpl = `
  <div class="chats__item">
  <div class="chats__info_left">
      <div class="chats__user-image">
          <img src="../../../../image.png" alt="user image">
      </div>
      <div class="chats__container">
          <div class="chats__user-name">{{ userName }}</div>
          <div class="chats__user-messenge">{{ messenge }}</div>
      </div>
  </div>
  <div class="chats__info_right">
      <div class="chats__time">{{ time }}</div>
  </div>
  </div>
`;

export default tpl;
