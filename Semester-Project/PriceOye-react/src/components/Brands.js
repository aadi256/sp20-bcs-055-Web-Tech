import React from "react";
import { Link } from "react-router-dom";

function Brands() {
	return (
		<div className='flex flex-row items-center justify-center'>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/samsung.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Samsung</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/infinix.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Infinix</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/tecno.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Tecno</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/xiaomi.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Xiaomi</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/apple.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Apple</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/oppo.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>OPPO</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/realme.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Realme</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/vivo.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Vivo</p>
			</Link>
			<Link
				to='mobiles'
				className='flex flex-col justify-center text-center py-2'
			>
				<img
					src='https://static.priceoye.pk/images/brands/svg/huawei.svg'
					alt=''
					width='70%'
					height='70%'
					className='mx-auto'
				/>
				<p className='text-center'>Huawei</p>
			</Link>
		</div>
	);
}

export default Brands;
