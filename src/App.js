import { Route, Switch } from 'react-router-dom';
import NavigationBar from './layout/navigation';
import GalleryPage from './pages/photoGallery';
import HomePage from './pages/homePage';
import ProjectInfoPage from './pages/aboutMePage';
import AddInfo from './pages/addInfoPage';
import AddPicture from './pages/addPicturesPage';
import TestPage from './pages/testPage';
import Login from './pages/loginPage';

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/my-webpage' component={HomePage} />
        <Route path='/gallery' component={GalleryPage} />
        <Route path='/info' component={ProjectInfoPage} />
        <Route path='/login' component={Login} />
        <Route path='/photo' component={AddPicture} />
        <Route path='/data' component={AddInfo} />
        <Route path='/test' component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
