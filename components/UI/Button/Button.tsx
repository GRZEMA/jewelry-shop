interface ButtonProps {
	children: React.ReactNode
	href?: string
	action?: () => void
	customClasses?: string
	dark?: boolean
}

const Button = ({
	children,
	href,
	action,
	customClasses,
	dark,
}: ButtonProps): JSX.Element => {
	const lightClasses =
		'text-lightText border-lightText hover:bg-lightText hover:text-darkText'
	const darkClasses =
		'text-darkText border-darkText hover:bg-darkText hover:text-lightText'
	const themeClasses = dark ? darkClasses : lightClasses

	const btnClasses =
		'px-10 py-2 bg-transparent border-[1px] transition-all duration-300 ease-in-out text-xl sm:text-2xl md:text-3xl items-center justify-center flex w-fit' +
		' ' +
		themeClasses

	if (action) {
		return (
			<button onClick={action} className={btnClasses}>
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
