import { LeftArrowIcon, RightArrowIcon } from "../assets/icons";
import ourProjectOne from "../assets/our-projects/our-project-one.png";
import ourProjectTwo from "../assets/our-projects/our-project-two.png";
import ourProjectThree from "../assets/our-projects/our-project-three.png";

export default function OurProjectsPage() {
	return (
		<main className="mt-16 mx-auto w-full max-w-[1170px] flex flex-col gap-[30px] px-6 xl:px-0">
			<div>
				<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px]">Our</h1>
				<p className="font-bold text-[#333333] text-[4rem] leading-[64px]">Projects</p>
			</div>
			<span className="bg-[#F2F2F2] block w-full h-[1px]" />
			<div className="flex flex-col gap-[30px]">
				{projects.map(({ id, image, heading, description }) => (
					<ProjectCard key={id} id={id} image={image} heading={heading} description={description} />
				))}
			</div>
			<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-[60px] mb-[120px]">
				<div className="flex items-center gap-6">
					<p className="text-2xl text-[#333333]">01</p>
					<span className="bg-[#E0E0E0] block w-[43.82px] h-[2px] rotate-[134.98deg]" />
					<p className="text-2xl text-[#BDBDBD]">05</p>
				</div>
				<div className="flex gap-4 items-center ">
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
			</div>
		</main>
	);
}

const projects = [
	{
		id: 1,
		image: ourProjectOne,
		heading: "Sample Project",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 2,
		image: ourProjectTwo,
		heading: "Sample Project 2",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 3,
		image: ourProjectThree,
		heading: "Sample Project 3",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
];

const ProjectCard = ({ image, heading, description }) => {
	return (
		<article className="flex flex-col lg:flex-row h-auto lg:h-[400px]">
			<figure className="w-full lg:max-w-[670px]">
				<img src={image} alt="" className="w-full h-full object-cover" />
			</figure>
			<div className="bg-[#FBFBFB] p-[16px] md:p-[30px] flex flex-col w-full lg:max-w-[570px]">
				<h2 className="font-light text-[40px] ">{heading}</h2>
				<p className="mt-8 lg:mt-18">{description}</p>

				<button
					type="button"
					className=" bg-white w-[222px] h-[71px] flex items-center gap-[18px] px-[20px] mt-8 lg:mt-auto"
				>
					<p className="tracking-[0.2em] text-[12px] leading-[12px] text-[#333333]">VIEW MORE</p>
					<span>
						<RightArrowIcon />
					</span>
				</button>
			</div>
		</article>
	);
};
