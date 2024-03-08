import Component from "../component/component";

export const renderDOM = (query: string, block: Component) => {
  const root = document.querySelector(query);

  root?.appendChild(block.getContent() as Node);

  block.dispatchComponentDidMount();

  return root;
};
