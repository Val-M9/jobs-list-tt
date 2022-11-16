import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { RoutePath } from './common/enums';
import { Details, Main } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={RoutePath.MAIN} element={<Main />} />
        <Route path={`${RoutePath.DETAILS}/:id`} element={<Details />} />
      </Routes>
    </Provider>
  );
};

export default App;
