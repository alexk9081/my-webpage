import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NavigationBar from "./layout/NavigationBar";
import GalleryPage from "./pages/PhotoGallery";
import HomePage from "./pages/HomePage";
import ProjectInfoPage from "./pages/AboutMePage";
import AddInfoPage from "./pages/AddInfoPage";
import AddPicture from "./pages/AddPicturesPage";
import TestPage from "./pages/TestPage";
import ColorReferencePage from "./pages/ColorReferencePage";

function App() {
  const [user, setUser] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <NavigationBar loginState={loggedIn} setLoginState={setLoggedIn} setUserState={setUser} />
      <Switch>
        <Route exact path='/my-webpage' component={HomePage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/info' component={ProjectInfoPage} />
        <ProtectedRoute exact path='/photo' component={AddPicture} />
        <Route exact path='/data' render={() => (<AddInfoPage userInfo={user} />)} />
        <Route exact path='/colors' component={ColorReferencePage}/>
        <Route exact path='/test' component={TestPage} />
        <Route path='*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
