interface SectionProps {
	children: React.ReactNode
	heading: string
}

const Section = ({ heading, children }: SectionProps): JSX.Element => {
	return (
		<section>
			<h2 className='font-greatVibes'>{heading}</h2>
			{children}
		</section>
	)
}

export default Section
