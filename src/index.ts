import './main.global.scss';

import Handlebars from 'handlebars';

import indexPageTmpl from './index.hbs?raw';
import { Chat } from './pages/chat/chat';
import { Authorization } from './pages/authorization/authorization';
import { Page404 } from './pages/404-page/404-page';
import { Page500 } from './pages/500-page/500-page';
import { Profile  } from './pages/profile/profile';
import { Registration  } from './pages/registration/registration';
import { Component } from './services/component/component';
import { render } from './utils/render';

const compiledIndexPageTmpl = Handlebars.compile(indexPageTmpl);

function getLocationPathname() {
  const pathname = window.location.pathname;

  return `${pathname}${pathname.at(-1) === '/' ? '' : '/'}`;
}

function route() {
  const pathname = getLocationPathname();
  let compiledPage: string | null;
  let pageComponent: Component | null;

  switch (pathname) {
    case '/': {
      compiledPage = compiledIndexPageTmpl({
        username: 'Svetlana',
      });
      pageComponent = null;
      break;
    }
    case '/authorization/': {
      compiledPage = null;
      pageComponent = new Authorization();
      break;
    }
    case '/registration/': {
      compiledPage = null;
      pageComponent = new Registration ();
      break;
    }
    case '/profile/': {
      compiledPage = null;
      pageComponent = new Profile();
      break;
    }
    case '/chats/': {
      compiledPage = null;
      pageComponent = new Chat();
      break;
    }
    case '/500/': {
      compiledPage = null;
      pageComponent = new Page500();
      break;
    }
    default: {
      compiledPage = null;
      pageComponent = new Page404();
    }
  }

  const root = document.querySelector('#root');

  if (root && pageComponent) {
    root.innerHTML = '';
    render('#root', pageComponent);
  }

  if (root && compiledPage) {
    root.innerHTML = compiledPage;
  }
}

window.addEventListener('popstate', () => {
  route();
});

window.addEventListener('click', (event) => {
  const { target } = event;
  const { id: targetId } = target as HTMLElement;
  const closestLink = (target as HTMLElement).closest('a');

  if (targetId === 'profile-change-data') {
    const modal = document.querySelector(
      '#profile-change-data-modal-dialog',
    ) as HTMLDialogElement;
    modal.showModal();
  }

  if (closestLink === null) {
    return;
  }

  event.preventDefault();

  window.history.pushState('', '', closestLink.href);

  route();
});

route();