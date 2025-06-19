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
				<Route path="/photo-gallery" element={<PhotoGalleryPage />} />
				<Route path="/our-projects" element={<OurProjectsPage />} />
			</Routes>
			<Footer />
		</>
	);
}
