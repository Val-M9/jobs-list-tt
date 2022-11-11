import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './common/enums';
import { Details, Main } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={RoutePath.MAIN} element={<Main />} />
      <Route path={RoutePath.DETAILS_PAGE} element={<Details />} />
    </Routes>
  );
};

export default App;
