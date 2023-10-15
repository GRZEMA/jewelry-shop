import Image from 'next/image'
import Button from '../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

interface CarouselItemProps {
	item: {
		category: string
		crystal: string | null
		id: number
		isBestseller: boolean
		isFeatured: boolean
		isNew: boolean
		metal: string
		name: string
		price: number
	}
}

const CarouselItem = ({ item }: CarouselItemProps) => {
	return (
		<div className='p-4 xs:p-8 xl:p-8 md:p-4 border-[1px] border-darkText h-full w-full relative bg-lightBackground'>
			<div className='relative aspect-square w-full'>
				<Image src={'/images/id' + item.id + '.png'} alt={item.name} fill />
			</div>
			<div className='flex flex-col pt-4 justify-between mb-8 xs:p-4'>
				<p className='text-center mb-4 xs:text-lg sm:text-2xl md:text-xl xl:text-2xl'>
					{item.name}
				</p>
				<div className='flex justify-between absolute bottom-0 left-0 p-4 xs:p-8 md:p-4 xl:p-8  w-full'>
					<p className='text-2xl xs:text-3xl md:text-2xl xl:text-3xl font-bold'>
						{item.price}$
					</p>
					<Button
						href={'/store/' + item.id}
						dark
						customClasses='px-4 py-[2px] xs:px-6 xs:py-2 md:px-4 md:py-1 xl:px-6 xl:py-1'>
						<FontAwesomeIcon icon={faArrowRightLong} />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CarouselItem
