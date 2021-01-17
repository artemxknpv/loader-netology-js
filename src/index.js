import './index.scss';
import {
  ListHeader, ListItem, ListWrapper, MainWrapper,
} from './components/List';
import { Loader } from './components/Loader';
import { AppWrapper } from './containers/App';
import { fetchList } from './tools/api';
import { EmphasisText } from './components/serveComponents';

const rootDiv = document.getElementById('root');
const appWrapper = AppWrapper();
const mainWrapper = MainWrapper();
const loaderComponent = Loader();
rootDiv.append(appWrapper);

export const renderList = (props) => {
  const {
    app, parent, loader, url,
  } = props;
  const listWrapper = ListWrapper();
  app.innerHTML = '';
  app.append(loader);
  setTimeout(() => fetchList(url)
    .then((result) => {
      const emphasisText = EmphasisText('актуальные темы');
      const headerText = 'Изучайте ';
      const mainHeader = ListHeader([headerText, emphasisText]);
      parent.append(mainHeader);
      result.forEach((elem) => {
        const listItem = ListItem(elem);
        listWrapper.append(listItem);
      });
      parent.append(listWrapper);
    })
    .then(() => {
      loader.remove();
      app.append(parent);
    }), 1000); // для демонстрации лоадера
};

renderList({
  url: 'https://gitcdn.link/repo/netology-code/react-task/master/netology.json',
  loader: loaderComponent,
  parent: mainWrapper,
  app: appWrapper,
});
