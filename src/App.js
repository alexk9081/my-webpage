import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import NavigationBar from "./layout/navigation";
import GalleryPage from "./pages/photoGallery";
import HomePage from "./pages/homePage";
import ProjectInfoPage from "./pages/aboutMePage";
import AddInfo from "./pages/addInfoPage";
import AddPicture from "./pages/addPicturesPage";
import TestPage from "./pages/testPage";
import Login from "./pages/loginPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path='/my-webpage' component={HomePage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/info' component={ProjectInfoPage} />
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/photo' component={AddPicture} />
        <Route exact path='/data' component={AddInfo} />
        <Route exact path='/test' component={TestPage} />
        <Route path='*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
