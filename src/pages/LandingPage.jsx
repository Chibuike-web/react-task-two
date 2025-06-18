import heroImage from "../assets/LandingPage/heroimage.png";
import aboutOne from "../assets/LandingPage/about-one.png";
import aboutTwo from "../assets/LandingPage/about-two.png";
import aboutThree from "../assets/LandingPage/about-three.png";
import { LeftArrowIcon, RightArrowIcon } from "../assets/icons";
export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<MissionStatement />
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
					<p>01</p>
					<span className="bg-[#E0E0E0] block w-[43.82px] h-[2px] rotate-[134.98deg]" />
					<p>02</p>
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
		<section className="mt-[120px] mb-[150px] bg-[#FBFBFB] py-[30px] mx-auto w-full max-w-[1170px] flex gap-[30px] h-[435px]">
			<aside className="w-full ml-[100px] max-w-[570px] flex gap-[30px] items-start">
				<div className="flex flex-col items-start gap-[30px]">
					<img src={aboutOne} alt="" />
					<img src={aboutTwo} alt="" />
				</div>
				<img src={aboutThree} alt="" className="mt-[30px]" />
			</aside>
			<aside className="flex flex-col w-full max-w-[400px]">
				<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px]">About</h1>
				<p className="font-light">
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
	return <section></section>;
};
