import { Route, Switch } from 'react-router-dom';
import NavigationBar from './layout/navigation';
import GalleryPage from './pages/photoGallery';
import HomePage from './pages/homePage';
import ProjectInfoPage from './pages/aboutProject';

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/gallery'>
          <GalleryPage />
        </Route>
        <Route path='/info'>
          <ProjectInfoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
