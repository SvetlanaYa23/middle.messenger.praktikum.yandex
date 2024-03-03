import { Component } from '../services/component/component';

export function render(query: string, component: Component): HTMLElement {
    const root = document.querySelector(query) as HTMLElement;

    const content = component.getContent();
    if (content) {
      root.appendChild(content);
    }
    
    component.dispatchComponentDidMount();    

  return root;
}