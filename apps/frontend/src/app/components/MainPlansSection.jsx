import Image from "next/image"
import MainLinkToPlans from "./MainLinkToPlans"
import beginnerUserIcon from "@/images/beginner_user_icon.png"
import advancedUserIcon from "@/images/advanced_user_icon.png"

export default function MainPlansLink() {
	return (
		<div className="bg-[#0C2033] py-12">
			<div className="mx-[5%] text-center sm:mx-[20%] xl:mx-[30%]">
				<div className="lg:m-auto lg:w-[80%]">
					<div className="grid sm:grid-cols-3 sm:grid-rows-[repeat(2,_minmax(0,_200px))_max-content]">
						<div className="row m-auto w-32 xl:h-[200px] xl:w-[200px] 2xl:m-0 2xl:justify-self-end">
							<Image alt="PC Icon" width={200} height={200} src={beginnerUserIcon} />
						</div>
						<div className="m-auto w-32 sm:col-[3] sm:row-[2] xl:h-[200px] xl:w-[200px] 2xl:m-0">
							<Image alt="Server Icon" width={200} height={200} src={advancedUserIcon} />
						</div>
						<div className="sm:text-medium row-[2_/_span_3] mx-auto self-start justify-self-start px-4 py-4 text-sm font-semibold sm:col-[2_/_span_3] sm:row-auto sm:w-[70%] sm:self-center lg:justify-start xl:text-xl">
							<p>Whether you&apos;re a first-time server owner looking to host your own Minecraft server at a low cost</p>
						</div>
						<div className="sm:text-medium row-[2_/_span_3] mx-auto self-start py-4 text-sm font-semibold sm:col-[1_/_span_2] sm:row-auto sm:w-[70%] sm:self-center xl:text-xl">
							<p>Or you&apos;re a more advanced server owner seeking reliable, high-uptime, and cost-effective Minecraft Server Hosting</p>
						</div>
					</div>
				</div>

				<div className="p-4 text-sm font-semibold sm:text-lg">
					<p>CraftCore Hosting is the choice for you! We offer dependable servers with an intuitive control panel at a competitive price!</p>
				</div>
				<MainLinkToPlans />
			</div>
		</div>
	)
}
