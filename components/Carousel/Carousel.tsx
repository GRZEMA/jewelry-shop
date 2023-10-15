'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarouselItem from './CarouselItem'

interface CarouselProps {
	items: {
		category: string
		crystal: string | null
		id: number
		isBestseller: boolean
		isFeatured: boolean
		isNew: boolean
		metal: string
		name: string
		price: number
	}[]
	theme: string
}

const CarouselComponent = ({ items }: CarouselProps): JSX.Element => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	}

	const CustomRightArrow = ({ onClick }: any) => {
		return (
			<button
				className='absolute top-1/2 right-0 -translate-y-1/2 text-4xl lg:text-5xl'
				onClick={() => onClick()}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		)
	}

	const CustomLeftArrow = ({ onClick }: any) => {
		return (
			<button
				className='absolute top-1/2 left-0 -translate-y-1/2 text-4xl lg:text-5xl'
				onClick={() => onClick()}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
		)
	}

	return (
		<div className='flex justify-center relative text-darkText w-full'>
			<Carousel
				responsive={responsive}
				className='w-full'
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
				autoPlay={true}
				infinite={true}
				containerClass='!gap-2'
				itemClass='p-8'>
				{items.map((item) => (
					<CarouselItem item={item} key={item.id} />
				))}
			</Carousel>
		</div>
	)
}

export default CarouselComponent
