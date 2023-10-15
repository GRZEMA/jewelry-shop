import Carousel from '@/components/Carousel/Carousel'
import HeroGraphic from '@/components/HeroGraphic/HeroGraphic'
import Section from '@/components/Section/Section'

const DUMMY_ITEMS = [
	{
		id: 43,
		category: 'Bracelets',
		name: 'Silver Tennis Bracelet',
		price: 119.99,
		metal: 'Silver',
		crystal: null,
		isFeatured: false,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 44,
		category: 'Rings',
		name: 'Princess Cut Diamond Ring',
		price: 449.99,
		metal: 'White Gold',
		crystal: 'Diamond',
		isFeatured: true,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 45,
		category: 'Necklaces',
		name: 'Topaz and Diamond Pendant Necklace',
		price: 269.99,
		metal: 'Yellow Gold',
		crystal: 'Topaz',
		isFeatured: false,
		isNew: true,
		isBestseller: false,
	},
	{
		id: 46,
		category: 'Earrings',
		name: 'Amethyst Drop Earrings',
		price: 109.99,
		metal: 'Silver',
		crystal: 'Amethyst',
		isFeatured: false,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 47,
		category: 'Bracelets',
		name: 'Leather Wrap Bracelet',
		price: 69.99,
		metal: 'Leather',
		crystal: null,
		isFeatured: true,
		isNew: true,
		isBestseller: true,
	},
]

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-white'>
			<HeroGraphic />
			<Section heading='Featured' background='vector1'>
				<Carousel theme='dark' items={DUMMY_ITEMS} />
			</Section>
		</main>
	)
}
