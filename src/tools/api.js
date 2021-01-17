import { parseList } from './helpers';

export const fetchList = async (url) => {
  const response = await (await fetch(url)).json();
  return parseList(response.data);
};
