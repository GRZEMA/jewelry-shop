'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const links = [
	{
		name: 'Store',
		href: '/store',
		sublist: [
			{
				name: 'Neklaces',
				href: '/store/necklaces',
			},
			{
				name: 'Earrings',
				href: '/store/earrings',
			},
			{
				name: 'Bracelets',
				href: '/store/bracelets',
			},
			{
				name: 'Rings',
				href: '/store/rings',
			},
		],
	},
	{
		name: 'About Us',
		href: '/about',
		sublist: [
			{
				name: 'Our Story',
				href: '/about/#story',
			},
			{
				name: 'Careers',
				href: '/about/#careers',
			},
			{
				name: 'FAQ',
				href: '/about/faq',
			},
		],
	},
	{
		name: 'Contact',
		href: '/contact',
		sublist: [
			{
				name: 'Contact Information',
				href: '/contact/#info',
			},
			{
				name: 'Contact Form',
				href: '/contact/#form',
			},
			{
				name: 'Locations',
				href: '/contact/#locations',
			},
			{
				name: 'Business Hours',
				href: '/contact/#business-hours',
			},
		],
	},
]

const Links = (): JSX.Element => {
	return (
		<ul className='hidden md:flex items-center justify-between'>
			<div className='flex mr-12'>
				{links.map((link) => (
					<motion.li
						variants={{
							hidden: {},
							visible: {},
						}}
						initial='hidden'
						whileHover='visible'
						key={link.name}
						className='relative py-4 px-4 hover:bg-hoverBackground'>
						<Link
							href={link.href}
							className='hover:text-hover transition-colors'>
							{link.name}
						</Link>
						<motion.ul
							variants={{
								hidden: {
									display: 'none',
									scale: 0,
								},
								visible: {
									display: 'block',
									transformOrigin: 'top left',
									scale: 1,
								},
							}}
							className='absolute left-0 top-full min-w-max p-2 bg-hoverBackground text-xl'>
							{link.sublist?.map((sublink) => (
								<li
									key={sublink.name}
									className='border-b-[1px] border-b-darkText last:border-b-0 p-2'>
									<Link href={sublink.href}>{sublink.name}</Link>
								</li>
							))}
						</motion.ul>
					</motion.li>
				))}
			</div>
		</ul>
	)
}

export default Links
