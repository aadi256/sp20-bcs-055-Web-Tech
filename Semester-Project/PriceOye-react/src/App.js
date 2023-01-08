import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/views/Homepage";
import Mobiles from "./components/views/Mobiles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "mobiles",
		element: <Mobiles />,
	},
]);

function App() {
	return (
		<>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}

export default App;
