'use client'

import Logo from '../Logo/Logo'
import AccAndCartLinks from './AccAndCartLinks'
import BurgerBtn from './BurgerBtn'
import Links from './Links'

const Nav = (): JSX.Element => {
	return (
		<nav className='w-full px-4 bg-lightBackground border-b-[1px] border-darkText fixed z-[9999]'>
			<div className='container flex justify-between items-center max-w-[1600px] text-2xl'>
				<Logo />
				<Links />
				<AccAndCartLinks />
				<BurgerBtn />
			</div>
		</nav>
	)
}

export default Nav
