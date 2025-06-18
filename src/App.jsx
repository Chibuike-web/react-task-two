import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import OurProjectsPage from "./pages/OurProjectsPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/gallery" element={<PhotoGalleryPage />} />
				<Route path="/projects" element={<OurProjectsPage />} />
			</Routes>
			<Footer />
		</>
	);
}
