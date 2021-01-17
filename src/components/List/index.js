import { createContainer } from '../../tools/helpers';

export const DirectionHeader = (innerText) => createContainer({
  type: 'h2',
  innerText,
  className: 'direction-header',
});

export const DirectionSubheader = (innerText) => createContainer({
  type: 'h3',
  innerText,
  className: 'direction-subheader',
});

export const DirectionAvatar = () => createContainer({
  type: 'div',
  className: 'direction-avatar',
});

export const ListWrapper = () => createContainer({
  className: 'list-wrapper',
  type: 'ul',
});

export const MainWrapper = () => createContainer({
  className: 'main-wrapper',
  type: 'div',
});

export const TextContainer = (textNodes) => createContainer({
  type: 'div',
  className: 'text-container',
  children: textNodes,
});

export const ListHeader = (children) => createContainer({
  type: 'h1',
  className: 'main-header',
  children,
});

export const ListItem = (item) => {
  const header = DirectionHeader(item.title);
  const subheader = DirectionSubheader(item.numberOfCourses);
  const textContainer = TextContainer([header, subheader]);
  return createContainer({
    type: 'li',
    className: 'list-item',
    children: [textContainer, DirectionAvatar()],
  });
};
