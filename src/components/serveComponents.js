import { createContainer } from '../tools/helpers';

export const EmphasisText = (innerText) => createContainer({
  type: 'span',
  innerText,
  className: 'text-emphasis',
});
