import Image from 'next/image'

interface SectionProps {
	children: React.ReactNode
	heading: string
	background?: string
}

const Section = ({
	heading,
	children,
	background,
}: SectionProps): JSX.Element => {
	return (
		<section className='w-full py-8 relative'>
			{background ? (
				<Image
					src={'/background/' + background + '.png'}
					alt=''
					fill
					style={{ objectFit: 'cover' }}
				/>
			) : null}
			<div className='container flex flex-col items-center justify-center p-1'>
				<h2 className='font-greatVibes text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 z-50'>
					{heading}
				</h2>
				{children}
			</div>
		</section>
	)
}

export default Section
