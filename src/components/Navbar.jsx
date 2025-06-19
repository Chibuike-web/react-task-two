import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useMediaQuery } from "../Hooks";

export default function Navbar() {
	const isDesktop = useMediaQuery("(min-width: 701px)");
	return isDesktop ? <DesktopNav /> : <MobileNav />;
}

const DesktopNav = () => {
	return (
		<nav className="bg-white">
			<header className="max-w-[1170px] mx-auto px-4 xl:px-0 py-4 flex items-center justify-between">
				<img src="/blackbrandlogo.png" alt="Brand Logo" className="w-[70px]" />

				<ul className="flex gap-6 text-sm font-medium text-gray-700 items-center">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${
									isActive ? "border-b border-t border-[##333333] py-1" : ""
								} text-[#333333]  cursor-pointer tracking-[0.2em] text-[12px]`
							}
						>
							MAIN
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/photo-gallery"
							className={({ isActive }) =>
								`${
									isActive ? "border-b border-t border-[##333333] py-1" : ""
								} text-[#333333]  cursor-pointer tracking-[0.2em] text-[12px]`
							}
						>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/our-projects"
							className={({ isActive }) =>
								`${
									isActive ? "border-b border-t border-[##333333] py-1" : ""
								} text-[#333333]  cursor-pointer tracking-[0.2em] text-[12px]`
							}
						>
							PROJECTS
						</NavLink>
					</li>
					<li className="text-[#333333]  cursor-pointer tracking-[0.2em] text-[12px]">
						CERTIFICATIONS
					</li>
					<li className="text-[#333333]  cursor-pointer tracking-[0.2em] text-[12px]">CONTACTS</li>
				</ul>
			</header>
		</nav>
	);
};

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white">
			<header className="max-w-[1170px] mx-auto px-4 xl:px-0 py-4 flex items-center justify-between">
				<img src="/blackbrandlogo.png" alt="Brand Logo" className="w-[70px]" />

				<button
					className="text-[#333333] cursor-pointer tracking-[0.2em] text-[12px]"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? "CLOSE" : "MENU"}
				</button>

				{isOpen && (
					<div className="bg-white text-gray-700 left-0 right-0 h-screen fixed top-[76px] px-6 z-50">
						<div className="flex flex-col gap-12 text-sm font-medium py-16 w-full">
							<NavLink
								to="/"
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`${
										isActive ? "border-b border-t border-[#333333] py-4" : ""
									} text-[#333333] cursor-pointer tracking-[0.2em] text-[16px] block`
								}
							>
								MAIN
							</NavLink>

							<NavLink
								to="/photo-gallery"
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`${
										isActive ? "border-b border-t border-[#333333] py-4" : ""
									} text-[#333333] cursor-pointer tracking-[0.2em] text-[16px] block`
								}
							>
								GALLERY
							</NavLink>

							<NavLink
								to="/our-projects"
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`${
										isActive ? "border-b border-t border-[#333333] py-4" : ""
									} text-[#333333] cursor-pointer tracking-[0.2em] text-[16px] block`
								}
							>
								PROJECTS
							</NavLink>

							<a className="text-[#333333] cursor-pointer tracking-[0.2em] text-[16px]">
								CERTIFICATIONS
							</a>
							<a className="text-[#333333] cursor-pointer tracking-[0.2em] text-[16px]">CONTACTS</a>
						</div>
					</div>
				)}
			</header>
		</nav>
	);
};
