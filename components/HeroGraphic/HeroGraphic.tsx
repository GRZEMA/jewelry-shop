import Image from 'next/image'
import Button from '../UI/Button/Button'

const HeroGraphic = (): JSX.Element => {
	return (
		<section className='relative w-full h-screen'>
			<Image
				src='/hero/image1.jpg'
				alt='Crown Hero Image'
				fill
				style={{ objectFit: 'cover', objectPosition: '65%' }}
			/>
			<h1 className='relative text-lightText font-greatVibes text-2xl xxs:text-3xl xs:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 sm:w-1/2'>
				<span className='absolute bottom-0 left-0'>Elegance Adorned</span>
				<span className='absolute top-0 right-0'>Beauty Defined</span>
			</h1>
			<Button
				href='/store'
				customClasses='absolute bottom-16 left-1/2 -translate-x-1/2 lg:px-12 lg:py-3'>
				Store
			</Button>
		</section>
	)
}

export default HeroGraphic
