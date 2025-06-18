import {
	EmailIcon,
	FacebookLogo,
	LinkedInLogo,
	LocationIcon,
	PhoneIcon,
	PinterestLogo,
	TwitterLogo,
} from "../assets/icons";

export default function Footer() {
	return (
		<footer className="bg-[#2C2C2C] pt-[58px] text-white text-sm justify-items-center content-center">
			<div className="max-w-[1170px] mx-auto px-4 pb-[60px] xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.8fr_1fr] justify-between gap-12">
				<img src="/whitebrandlogo.png" alt="Brand Logo" className="w-[145px]" />

				<div className="flex flex-col gap-6">
					<h4 className="text-base font-semibold mb-4">Information</h4>
					<ul className="flex flex-col gap-4">
						<li className="hover:text-gray-300 cursor-pointer">Main</li>
						<li className="hover:text-gray-300 cursor-pointer">Gallery</li>
						<li className="hover:text-gray-300 cursor-pointer">Projects</li>
						<li className="hover:text-gray-300 cursor-pointer">Certifications</li>
						<li className="hover:text-gray-300 cursor-pointer">Contacts</li>
					</ul>
				</div>

				<div className="flex flex-col gap-6">
					<h4 className="text-base font-semibold mb-4">Contacts</h4>
					<div className="flex flex-col gap-11">
						<div className="flex items-start gap-3">
							<LocationIcon className="mt-1" />
							<p>1234 Sample Street, Austin, Texas 78704</p>
						</div>
						<div className="flex items-center gap-3">
							<PhoneIcon />
							<p>512.333.2222</p>
						</div>
						<div className="flex items-center gap-3">
							<EmailIcon />
							<p>sampleemail@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<h4 className="text-base font-semibold mb-4">Social Media</h4>
					<div className="flex items-center gap-10 text-xl">
						<FacebookLogo className="hover:text-gray-300 cursor-pointer" />
						<TwitterLogo className="hover:text-gray-300 cursor-pointer" />
						<LinkedInLogo className="hover:text-gray-300 cursor-pointer" />
						<PinterestLogo className="hover:text-gray-300 cursor-pointer" />
					</div>
				</div>
			</div>
			<span className="block w-full h-[1px] bg-white/10 mb-6" />
			<p className="text-[#C8C8C8]/50 mb-6">© 2021 All Rights Reserved</p>
		</footer>
	);
}
