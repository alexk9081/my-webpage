import { Route, Switch } from 'react-router-dom';
import GalleryPage from '../pages/photoGallery';
import HomePage from '../pages/homePage';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/gallery'>
        <GalleryPage />
      </Route>
    </Switch>
  );
}

export default App;
