import { Route, Switch } from 'react-router-dom';
import NavigationBar from './layout/navigation';
import GalleryPage from './pages/photoGallery';
import HomePage from './pages/homePage';
import ProjectInfoPage from './pages/aboutProject';
import AddInfo from './pages/addInfo';
import TestPage from './pages/testPage';


function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/my-webpage/'>
          <HomePage />
        </Route>
        <Route path='/gallery'>
          <GalleryPage />
        </Route>
        <Route path='/info'>
          <ProjectInfoPage />
        </Route>
        <Route path='/data'>
          <AddInfo />
        </Route>
        <Route path='/test'>
          <TestPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
