import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import GalleryPage from "./pages/PhotoGallery";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import AddInfoPage from "./pages/AddInfoPage";
import AddPicturesPage from "./pages/AddPicturesPage";
import TestPage from "./pages/TestPage";
import ColorReferencePage from "./pages/ColorReferencePage";

function App() {
  const [user, setUser] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <NavigationBar loginState={loggedIn} setLoginState={setLoggedIn} userState={user} setUserState={setUser} />
      <Routes>
        <Route exact path='/my-webpage' element={<HomePage/>} />
        <Route exact path='/gallery' element={<GalleryPage />} />
        <Route exact path='/info' element={<AboutMePage />} />
        <Route exact path='/photo' element={<AddPicturesPage />} />
        <Route exact path='/data' element={<AddInfoPage />} />
        <Route exact path='/colors' element={<ColorReferencePage />}/>
        <Route exact path='/test' element={<TestPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
