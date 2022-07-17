import { useState, useRef } from "react";
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
	const notificationRef = useRef();
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	const createNotification = (notificationText, notificationColor) => notificationRef.current.addNotification(notificationText, notificationColor);

	return (
		<div className="page">
			<NavigationBar isLoggedInState={loggedIn} setIsLoggedInState={setLoggedIn} setUserState={setUser} />
			<Notifications ref={notificationRef} />
			<Routes>
				<Route exact path='/my-webpage' element={<HomePage />} />
				<Route exact path='/gallery' element={<GalleryPage />} />
				<Route exact path='/info' element={<AboutMePage />} />
				<Route exact path='/photo' element={<AddPicturesPage errorMsg={createNotification}/>} />
				<Route exact path='/data' element={<AddBlogPostPage userName={user?.displayName} userImg={user?.photoURL} />} />
				<Route exact path='/colors' element={<ColorReferencePage notification={createNotification}/>} />
				<Route exact path='/projects' element={<ProjectDisplayPage />} />
				<Route exact path='/test' element={<TestPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;