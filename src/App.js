import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import GalleryPage from "./pages/PhotoGallery";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import AddBlogPostPage from "./pages/AddBlogPostPage";
import AddPicturesPage from "./pages/AddPicturesPage";
import TestPage from "./pages/TestPage";
import ColorReferencePage from "./pages/ColorReferencePage";
import ProjectDisplayPage from "./pages/ProjectDisplayPage";
import Notifications from "./components/Notifications";

function App() {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="page">
			<NavigationBar isLoggedInState={loggedIn} setIsLoggedInState={setLoggedIn} setUserState={setUser} />
			<Notifications />
			<Routes>
				<Route exact path='/my-webpage' element={<HomePage />} />
				<Route exact path='/gallery' element={<GalleryPage />} />
				<Route exact path='/info' element={<AboutMePage />} />
				<Route exact path='/photo' element={<AddPicturesPage />} />
				<Route exact path='/data' element={<AddBlogPostPage userName={user?.displayName} userImg={user?.photoURL} />} />
				<Route exact path='/colors' element={<ColorReferencePage />} />
				<Route exact path='/projects' element={<ProjectDisplayPage />} />
				<Route exact path='/test' element={<TestPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;