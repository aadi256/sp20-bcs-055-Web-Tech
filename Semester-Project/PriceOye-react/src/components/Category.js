import React from "react";
import { Link } from "react-router-dom";

function Category() {
	return (
		<div className='flex flex-row justify-center  '>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/mobiles.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Mobiles</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/smart-watches.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Smart Watches</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/wireless-earbuds.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Wireless Earbuds</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/bluetooth-speakers.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>
					Bluetooth Speakers
				</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/power-banks.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Power Banks</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/laptops.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Laptops</h6>
			</Link>
			<Link
				to='mobiles'
				class='flex flex-col justify-around items-center p-2 w-25 h-30 hover:bg-gray-200 hover:border-b-2 border-sky-500'
			>
				<img
					src='https://static.priceoye.pk/images/home/tablets.svg'
					alt=''
					width='50%'
					height='auto'
				/>
				<h6 className='text-center font-semibold text-sm'>Tablets</h6>
			</Link>
		</div>
	);
}

export default Category;
