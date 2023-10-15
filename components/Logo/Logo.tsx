'use client'

import { faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Logo = (): JSX.Element => {
	return (
		<Link href='/'>
			<p className='font-greatVibes text-2xl sm:text-3xl md:text-4xl min-w-fit flex items-center'>
				<span className='mr-4'>Jewel Haven</span>
				<FontAwesomeIcon icon={faGem} />
			</p>
		</Link>
	)
}

export default Logo
