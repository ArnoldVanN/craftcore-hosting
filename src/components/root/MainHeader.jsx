import Image from "next/image"
import headerImage from "@/images/minecraft-header-image.png"

export default function MainHeader() {
	return (
		<>
			<div className="relative z-40 flex h-[32rem] w-full items-center justify-center border-b-3 border-gray-900 text-center shadow-lg shadow-[#02070f]">
				<Image
					src={headerImage}
					fill
					priority={true}
					style={{
						objectFit: "cover",
					}}
					unoptimized
				/>
				<div className="z-10">
					<p className="text-center text-lg font-bold shadow-slate-600 text-shadow-lg sm:text-3xl">MINECRAFT SERVER HOSTING</p>
				</div>
			</div>
		</>
	)
}
