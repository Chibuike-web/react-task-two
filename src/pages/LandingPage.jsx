import heroImage from "../assets/landing-page/hero-section/heroimage.png";
import aboutOne from "../assets/landing-page/about-us/about-one.png";
import aboutTwo from "../assets/landing-page/about-us/about-two.png";
import aboutThree from "../assets/landing-page/about-us/about-three.png";
import ourProjectsOne from "../assets/landing-page/our-projects/our-projects-one.png";
import ourProjectsTwo from "../assets/landing-page/our-projects/our-projects-two.png";
import ourProjectsThree from "../assets/landing-page/our-projects/our-projects-three.png";
import ourProjectsFour from "../assets/landing-page/our-projects/our-projects-four.png";
import ourProjectsFive from "../assets/landing-page/our-projects/our-projects-five.png";
import { LeftArrowIcon, RightArrowIcon } from "../assets/icons";
import contactUsImage from "../assets/landing-page/contact-us/contact.png";

export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<MissionStatement />
			<OurProjects />
			<ContactUs />
		</>
	);
}

const HeroSection = () => {
	return (
		<section className="max-w-[1170px] mx-auto px-4 xl:px-0 flex items-start justify-between">
			<aside className="mt-[336px]">
				<div>
					<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px]">PROJECT</h1>
					<p className="font-bold text-[#333333] text-[4rem] leading-[64px]">Lorum</p>
				</div>
				<div className="flex gap-4 items-center my-[90px]">
					<button
						type="button"
						className="w-[53px] h-[53px] bg-white border border-[#f2f2f2] flex  items-center justify-center"
					>
						<LeftArrowIcon />
					</button>
					<button
						type="button"
						className="w-[53px] h-[53px] border border-[#f2f2f2] bg-[#f9f9f9] flex items-center justify-center"
					>
						<RightArrowIcon />
					</button>
				</div>
				<div className="flex items-center gap-6">
					<p className="text-2xl text-[#BDBDBD]">01</p>
					<span className="bg-[#E0E0E0] block w-[43.82px] h-[2px] rotate-[134.98deg]" />
					<p className="text-2xl text-[#BDBDBD]">02</p>
				</div>
			</aside>
			<figure className="w-full max-w-[770px] relative">
				<img src={heroImage} alt="" className="w-full" />
				<button
					type="button"
					className=" bg-white w-[222px] h-[71px] flex items-center gap-[18px] absolute left-0 bottom-0 px-[20px]"
				>
					<p className="tracking-[0.2em] text-[12px] leading-[12px] text-[#333333]">VIEW PROJECT</p>
					<span>
						<RightArrowIcon />
					</span>
				</button>
			</figure>
		</section>
	);
};

const AboutSection = () => {
	return (
		<section className="mt-[120px] mb-[150px] bg-[#FBFBFB] py-[30px] mx-auto w-full max-w-[1170px] flex gap-[30px] h-[435px] px-6 xl:px-0">
			<aside className="w-full ml-[100px] max-w-[570px] flex gap-[30px] items-start">
				<div className="flex flex-col items-start gap-[30px]">
					<img src={aboutOne} alt="" className="w-full max-w-[270px]" />
					<img src={aboutTwo} alt="" className="w-full max-w-[270px]" />
				</div>
				<img src={aboutThree} alt="" className="mt-[30px] w-full max-w-[270px]" />
			</aside>
			<aside className="flex flex-col w-full max-w-[400px] mr-[70px]">
				<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px] mb-[20px]">About</h1>
				<p className="font-light mb-[45px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged.S
				</p>
				<button
					type="button"
					className=" bg-white w-[222px] h-[71px] flex items-center gap-[18px] px-[20px]"
				>
					<p className="tracking-[0.2em] text-[12px] leading-[12px] text-[#333333]"> READ MORE</p>
					<span>
						<RightArrowIcon />
					</span>
				</button>
			</aside>
		</section>
	);
};

const MissionStatement = () => {
	return (
		<section className="mt-[120px] mb-[150px] py-[30px] mx-auto w-full max-w-[1170px] flex flex-col gap-[60px]">
			<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px]">
				Main Focus/Mission Statement
			</h1>
			<div className="flex justify-between w-full">
				<div className="flex gap-[30px] w-full max-w-[413px]">
					<span className="font-black text-[#F2F2F2] text-[200px] leading-[200px] h-[140px] flex items-center justify-center">
						1
					</span>
					<p className="text-[22px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
						facilisis placerat.
					</p>
				</div>
				<div className="flex gap-[30px] w-full max-w-[570px]">
					<span className="font-black text-[#F2F2F2] text-[200px] leading-[200px] h-[140px] flex items-center justify-center">
						2
					</span>
					<p className="text-[22px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
						facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
					</p>
				</div>
			</div>
		</section>
	);
};

const OurProjects = () => {
	return (
		<section className="my-[120px] mx-auto w-full max-w-[1170px] flex flex-col items-end gap-[30px]">
			<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px] mb-[20px] w-full">
				Our Projects
			</h1>

			<div className="flex flex-col gap-[30px]">
				<div className="flex gap-[30px]">
					<figure>
						<img src={ourProjectsOne} alt="" />
					</figure>
					<img src={ourProjectsTwo} alt="" />
				</div>
				<div className="flex gap-[30px]">
					<img src={ourProjectsThree} alt="" />
					<img src={ourProjectsFour} alt="" />
					<img src={ourProjectsFive} alt="" />
				</div>
			</div>
			<button
				type="button"
				className=" bg-[#333333] w-[222px] h-[71px] flex items-center justify-center gap-[18px] px-[20px]"
			>
				<p className="tracking-[0.2em] text-[12px] leading-[12px] text-white">ALL PROJECTS</p>
				<span>
					<RightArrowIcon fill="white" />
				</span>
			</button>
		</section>
	);
};

const ContactUs = () => {
	return (
		<section className="my-[120px] mx-auto w-full max-w-[1170px] flex flex-col items-end gap-[30px]">
			<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px] mb-[20px] w-full">
				Our Projects
			</h1>

			<div className="flex gap-[30px] items-start w-full">
				<form className="w-full max-w-[391px] flex flex-col">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="w-full h-11.5 bg-[#f3f3f3] px-4 mb-[10px]"
					/>
					<input
						type="tel"
						name="phoneNumber"
						placeholder="Phone Number"
						className="w-full h-11.5 bg-[#f3f3f3] px-4 mb-[10px]"
					/>
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						className="w-full h-11.5 bg-[#f3f3f3] px-4 mb-[10px]"
					/>
					<input
						type="text"
						name="interestedIn"
						placeholder="Interested In"
						className="w-full h-11.5 bg-[#f3f3f3] px-4 mb-[10px]"
					/>
					<textarea
						type="text"
						placeholder="Message"
						className="w-full h-[147px] bg-[#f3f3f3] px-4 mb-[77px]"
					/>
					<button
						type="button"
						className=" bg-[#333333] w-[222px] h-[71px] flex items-center justify-center gap-[18px] px-[20px]"
					>
						<p className="tracking-[0.2em] text-[12px] leading-[12px] text-white">SEND EMAIL</p>
						<span>
							<RightArrowIcon fill="white" />
						</span>
					</button>
				</form>
				<img src={contactUsImage} alt="" />
			</div>
		</section>
	);
};
