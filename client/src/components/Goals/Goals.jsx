import { useState } from 'react'
import Modal from './modalCreate'
import CardGoals from "./CardGoals"
import { useSelector } from 'react-redux'
import { BiMessageAdd } from 'react-icons/bi'

// all swiper imports
import Spinner from "../Spinner/Spinner"
import { FreeMode, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const Goals = ({ goals, setIsOpenDonate, shelterId, shelterName, loading }) => {
	const { userDetail } = useSelector(state => state.localStorage.userState)
	const [isOpen, setIsOpen] = useState(false)
	const closeModal = () => setIsOpen(false)

	return (
		<div className="flex flex-col w-full">
			<div className='flex flex-row mb-[20px]'>
				<h2 className="text-2xl font-semibold text-[#838788] dark:text-[#b3b8b9]">Goals</h2>

				{(userDetail.Shelter.id === shelterId) ?
					<button
						className="w-[120px] py-[5px] text-white transition duration-300 rounded-[20px] bg-[#FF7272] hover:bg-[#e76464] ml-auto"
						onClick={() => setIsOpen(true)}>
						Create goal
					</button>
					: undefined}
			</div>

			{!loading ?
				<div className='mr-[-60px]'>
					{goals.length ?
						<Swiper
							loop={false}
							slidesPerView={1}
							spaceBetween={0}
							freeMode={true}
							direction={"horizontal"}
							modules={[FreeMode, Autoplay]}
							className="min-h-[340px] max-h-[380px]"

							breakpoints={{
								1440: {
									width: 1440,
									slidesPerView: 4
								},
								1024: {
									width: 1024,
									slidesPerView: 3
								},
								768: {
									width: 768,
									slidesPerView: 2
								},
								640: {
									width: 640,
									slidesPerView: 2,
									direction: "horizontal"
								},
								320: {
									width: 320,
									slidesPerView: 1,
									direction: "horizontal"
								}
							}}>

							{goals?.length > 0 && goals?.map((g, index) =>
								<SwiperSlide key={index} >
									<CardGoals
										budget={g.budget}
										content={g.content}
										goal={g.goal}
										title={g.title}
										key={g.id}
										id={g.id}
										setIsOpenDonate={setIsOpenDonate}
										shelterId={shelterId}
										shlterName={shelterName}
									/>
								</SwiperSlide>)}

							{(window.innerWidth > 1200 && goals.length < 5) ?
								(goals?.map((g, index) =>
									<SwiperSlide key={index} >
										<div className="w-[280px] h-[235px] flex items-center rounded-xl bg-[#EFF0F3] hover:mt-[10px]
								opacity-50 shadow-[6px_20px_54px_-10px_rgba(133,133,133,0.5)] transition-all duration-300">
											<div className='flex mx-auto'>
												<BiMessageAdd className="text-8xl text-[#bebebe] flex mx-auto" />
											</div>
										</div>
									</SwiperSlide>))
								: undefined}

						</Swiper> : 
						<div className='flex h-[150px] w-full'>
							<div className='flex mx-auto mt-[20px]'>
								<h1 className='text-2xl'>This shelter has no goals yet.</h1>
							</div>
						</div>
						}
				</div> : <Spinner />}

			<Modal isOpen={isOpen} closeModal={closeModal} shelterId={shelterId} />
		</div>
	)
}

export default Goals