import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route } from 'react-router-dom';
import { store, persistor } from './store/store';
import { RoutePath } from './common/enums';
import { Details, Main } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path={RoutePath.MAIN} element={<Main />} />
          <Route path={`${RoutePath.DETAILS}/:id`} element={<Details />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
