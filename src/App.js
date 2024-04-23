import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// <Route path=":id" element={<Article />} /> => Outlet 컴포넌트를 통해 보여짐
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/profiles/:username" element={<Profile />} />
			<Route path="/articles" element={<Articles />}>
				<Route path=":id" element={<Article />} />
			</Route>
		</Routes>
	);
};

export default App;
