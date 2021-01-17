import { createContainer, createDiv } from '../../tools/helpers';

export const Loader = () => createContainer({
  type: 'div',
  className: 'lds-ellipsis',
  children: createDiv(4),
});
