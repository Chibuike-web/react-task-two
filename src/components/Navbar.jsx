export default function Navbar() {
	return (
		<nav className="bg-white ">
			<header className="max-w-[1170px] mx-auto px-4 xl:px-0 py-4 flex items-center justify-between">
				<img src="/blackbrandlogo.png" alt="Brand Logo" className="w-[70px]" />

				<ul className="flex space-x-6 text-sm font-medium text-gray-700">
					<li className="hover:text-blue-600 cursor-pointer tracking-[0.2em] text-[12px]">MAIN</li>
					<li className="hover:text-blue-600 cursor-pointer tracking-[0.2em] text-[12px]">
						GALLERY
					</li>
					<li className="hover:text-blue-600 cursor-pointer tracking-[0.2em] text-[12px]">
						PROJECTS
					</li>
					<li className="hover:text-blue-600 cursor-pointer tracking-[0.2em] text-[12px]">
						CERTIFICATIONS
					</li>
					<li className="hover:text-blue-600 cursor-pointer tracking-[0.2em] text-[12px]">
						CONTACTS
					</li>
				</ul>
			</header>
		</nav>
	);
}
