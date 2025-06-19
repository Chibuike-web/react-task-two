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
import { Link } from "react-router";

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
		<section className="max-w-[1170px] mx-auto px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-16 lg:justify-between ">
			<aside className="mt-16 lg:mt-[336px]">
				<div>
					<h1 className="font-light text-[#BDBDBD] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] w-full">
						PROJECT
					</h1>
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
			<figure className="w-full lg:max-w-[770px] relative">
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
		<section className="mt-[60px] lg:mt-[120px] bg-[#FBFBFB] py-[30px] mx-auto w-full max-w-[1170px] flex flex-col lg:flex-row gap-[30px]  xl:h-[435px] px-6 xl:px-0">
			<aside className="w-full xl:ml-[100px] xl:max-w-[570px] flex flex-col lg:flex-row gap-[30px] items-start">
				<figure className="flex flex-col items-start gap-[30px] w-full lg:max-w-[270px]">
					<img src={aboutOne} alt="" className="w-full" />
					<img src={aboutTwo} alt="" className="w-full" />
				</figure>
				<img src={aboutThree} alt="" className="mt-[30px] w-full lg:max-w-[270px]" />
			</aside>
			<aside className="flex flex-col w-full xl:max-w-[400px] xl:mr-[70px]">
				<h1 className="font-light mb-[1.5rem] text-[#BDBDBD] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] w-full">
					About
				</h1>
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
		<section className="mt-[60px] lg:mt-[120px] py-[30px] mx-auto w-full max-w-[1170px] flex flex-col gap-[60px] px-6 xl:px-0">
			<h1 className="font-light text-[#BDBDBD] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] w-full">
				Main Focus/Mission Statement
			</h1>
			<div className="flex flex-col lg:flex-row gap-16 lg:justify-between w-full">
				<div className="flex gap-[30px] w-full max-w-[413px]">
					<span className="font-black text-[#F2F2F2] text-[100px] md:text-[200px] leading-[200px] h-[140px] flex items-center justify-center">
						1
					</span>
					<p className="text-[22px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
						facilisis placerat.
					</p>
				</div>
				<div className="flex gap-[30px] w-full max-w-[570px]">
					<span className="font-black text-[#F2F2F2] text-[100px] md:text-[200px] leading-[200px] h-[140px] flex items-center justify-center">
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
		<section className="mt-[60px] lg:mt-[120px] mx-auto w-full max-w-[1170px] flex flex-col items-end gap-[30px] px-6 xl:px-0">
			<h1 className="font-light text-[#BDBDBD] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] w-full">
				Our Projects
			</h1>

			<div className="flex flex-col gap-[30px] w-full">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<figure className="w-full relative">
						<div className="inset-0 bg-[#333333]/80 absolute z-[100] flex items-center px-6 lg:px-[80px]">
							<div className="w-full md:max-w-[233px] flex flex-col gap-4">
								<h2 className="font-bold text-[2rem] md:text-[4rem] md:leading-[4rem] text-white">
									Sample Project
								</h2>
								<a className="flex gap-6 items-center">
									{" "}
									<p className="tracking-[0.2em] text-[12px] leading-[12px] text-white">
										VIEW MORE
									</p>
									<span>
										<RightArrowIcon fill="white" />
									</span>
								</a>
							</div>
						</div>
						<img src={ourProjectsOne} alt="" className="w-full" />
					</figure>
					<img src={ourProjectsTwo} alt="" />
				</div>
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<img src={ourProjectsThree} alt="" />
					<img src={ourProjectsFour} alt="" />
					<img src={ourProjectsFive} alt="" />
				</div>
			</div>
			<Link
				to="/our-projects"
				type="button"
				className=" bg-[#333333] w-[222px] h-[71px] flex items-center justify-center gap-[18px] px-[20px]"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<p className="tracking-[0.2em] text-[12px] leading-[12px] text-white">ALL PROJECTS</p>
				<span>
					<RightArrowIcon fill="white" />
				</span>
			</Link>
		</section>
	);
};

const ContactUs = () => {
	return (
		<section className="my-[60px] lg:my-[120px] mx-auto w-full max-w-[1170px] flex flex-col items-end gap-[30px] px-6 xl:px-0">
			<h1 className="font-light text-[#BDBDBD] text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] w-full">
				Contact Us
			</h1>

			<div className="flex gap-[30px] items-start w-full flex-col lg:flex-row">
				<form className="w-full lg:max-w-[391px] flex flex-col">
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
				<img src={contactUsImage} alt="" className="w-full" />
			</div>
		</section>
	);
};
