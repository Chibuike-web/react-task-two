import { LeftArrowIcon, RightArrowIcon } from "../assets/icons";
import photoGalleryTwo from "../assets/photo-gallery/photo-gallery-two.png";
import photoGalleryThree from "../assets/photo-gallery/photo-gallery-three.png";
import photoGalleryFour from "../assets/photo-gallery/photo-gallery-four.png";
import photoGalleryFive from "../assets/photo-gallery/photo-gallery-five.png";
import photoGallerySix from "../assets/photo-gallery/photo-gallery-six.png";
import photoGallerySeven from "../assets/photo-gallery/photo-gallery-seven.png";
import photoGalleryEight from "../assets/photo-gallery/photo-gallery-eight.png";
import photoGalleryNine from "../assets/photo-gallery/photo-gallery-nine.png";
import photoGalleryTen from "../assets/photo-gallery/photo-gallery-ten.png";

export default function PhotoGalleryPage() {
	return (
		<main className="mt-16 mx-auto w-full max-w-[1170px] flex flex-col gap-[30px] px-6 xl:px-0">
			<div>
				<h1 className="font-light text-[#BDBDBD] text-[4rem] leading-[64px]">Photo</h1>
				<p className="font-bold text-[#333333] text-[4rem] leading-[64px]">Gallery</p>
			</div>
			<span className="bg-[#F2F2F2] block w-full h-[1px]" />

			<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-[30px]">
				<div className="bg-[#c4c4c4] w-full h-[260px]"></div>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryTwo} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryThree} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryFour} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryFive} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGallerySix} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGallerySeven} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryEight} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryNine} alt="" className="w-full h-full object-cover" />
				</figure>
				<figure className="w-full h-[260px]">
					<img src={photoGalleryTen} alt="" className="w-full h-full object-cover" />
				</figure>
			</div>

			<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-[60px] mb-[60px] lg:mb-[120px]">
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
