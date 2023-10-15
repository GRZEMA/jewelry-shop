import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BurgerBtn = (): JSX.Element => {
	return (
		<button className='py-4 px-4 text-3xl md:hidden'>
			<FontAwesomeIcon icon={faBars} />
		</button>
	)
}

export default BurgerBtn
