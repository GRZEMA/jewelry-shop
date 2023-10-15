'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
	{
		name: 'Account',
		icon: faUser,
		href: '/account',
		sublist: [
			{
				name: 'Login',
				href: '/account/login',
			},
			{
				name: 'Register',
				href: '/account/login',
			},
			{
				name: 'Profile',
				href: '/account/login',
			},
			{
				name: 'Orders',
				href: '/account/login',
			},
		],
	},
	{
		name: 'Cart',
		icon: faCartShopping,
		href: '/cart',
		sublist: [],
	},
]

const AccAndCartLinks = (): JSX.Element => {
	return (
		<ul className='hidden md:flex items-center justify-between'>
			{links.map((link) => (
				<motion.li
					variants={{
						hidden: {},
						visible: {},
					}}
					initial='hidden'
					whileHover='visible'
					className='relative py-4 px-4'
					key={link.name}>
					<Link href='/account' className='hover:text-hover transition-colors'>
						<FontAwesomeIcon icon={link.icon} />
					</Link>
					<motion.ul
						variants={{
							hidden: {
								display: 'none',
								scale: 0,
							},
							visible: {
								display: 'block',
								transformOrigin: 'top right',
								scale: 1,
							},
						}}
						className='absolute top-full right-0 min-w-max p-2 bg-hoverBackground text-xl'>
						{link.sublist?.map((sublink) => (
							<li
								key={sublink.name}
								className='border-b-[1px] border-b-darkText last:border-b-0 hover:text-hover p-2'>
								<Link href={sublink.href}>{sublink.name}</Link>
							</li>
						))}
					</motion.ul>
				</motion.li>
			))}
		</ul>
	)
}

export default AccAndCartLinks
