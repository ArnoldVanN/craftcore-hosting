"use client"
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

import styled from "styled-components"

const StyledSwiper = styled(Swiper)`
	.swiper-button-prev,
	.swiper-button-next {
		display: block;
	}

	@media (max-width: 768px) {
		.swiper-button-prev,
		.swiper-button-next {
			display: none;
		}
	}
`

export default function MainFeatures({ features }) {
	return (
		<>
			<div className="relative border-b-3 border-gray-950 bg-[#061124] shadow-lg shadow-[#081624]">
				<div className="mx-[10%] py-4 lg:mx-[25%]">
					<div className="absolute z-20 flex h-24 w-24 items-center justify-center rounded-full bg-[#101e36] shadow-md shadow-black md:h-32 md:w-32">
						<h1 className="flex h-16 w-14 items-center justify-center text-center text-base font-bold shadow-blue-900 text-shadow-lg md:h-32 md:w-28 md:text-2xl">WHAT WE OFFER</h1>
					</div>
					<div className="m-4 ml-6 mt-8 rounded-xl bg-slate-950 shadow-inner shadow-black">
						<StyledSwiper
							slidesPerView={1}
							loop={true}
							speed={250}
							centeredSlides={true}
							spaceBetween={30}
							effect={"fade"}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							pagination={{
								clickable: true,
								dynamicBullets: true,
								dynamicMainBullets: 7,
							}}
							navigation={true}
							modules={[Autoplay, Pagination, Navigation, EffectFade]}
							style={{ "--swiper-pagination-bottom": "35px", "--swiper-navigation-sides-offset": "45px" }}
							className="!px-4 !py-6">
							{features.map((feature, index) => (
								<SwiperSlide key={index} className="px-4">
									<Card className="h-[290px] bg-gray-800 px-[10%] py-5 shadow-md shadow-gray-900 md:h-[200px]">
										<CardHeader>
											<h1 className="text-lg font-semibold text-white md:text-2xl">{feature.title}</h1>
										</CardHeader>
										<Divider />
										<CardBody>
											<p className="text-medium font-semibold text-white lg:text-lg">{feature.description}</p>
										</CardBody>
									</Card>
								</SwiperSlide>
							))}
						</StyledSwiper>
					</div>
				</div>
			</div>
		</>
	)
}
