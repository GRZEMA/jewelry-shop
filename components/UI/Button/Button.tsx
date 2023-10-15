interface ButtonProps {
	children: React.ReactNode
	href?: string
	action?: () => void
	customClasses?: string
}

const Button = ({
	children,
	href,
	action,
	customClasses,
}: ButtonProps): JSX.Element => {
	const btnClasses =
		'px-10 py-2 bg-transparent text-lightText border-[1px] border-lightText hover:bg-lightText hover:text-darkText transition-all duration-300 ease-in-out text-xl sm:text-2xl md:text-3xl lg:px-12 lg:py-3'

	if (action) {
		return (
			<button onClick={action} className={`${customClasses} ${btnClasses}`}>
				{children}
			</button>
		)
	}

	if (href) {
		return (
			<a href={href} className={`${customClasses} ${btnClasses}`}>
				{children}
			</a>
		)
	}

	return <p>No href or action provided</p>
}

export default Button
