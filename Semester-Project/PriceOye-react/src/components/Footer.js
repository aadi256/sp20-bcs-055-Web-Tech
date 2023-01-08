import React from "react";
export default function Footer() {
	return (
		<div className='bg-sky-500 text-white py-10 px-32 flex flex-row justify-between '>
			<div className='flex flex-col'>
				<img
					src='https://static.priceoye.pk/images/logo.svg'
					width='50%'
					alt=''
					className='mb-4'
				/>
				<a href='/' className='mb-2'>
					About Us
				</a>
				<a href='/' className='mb-2'>
					FAQs
				</a>
				<a href='/' className='mb-2'>
					Contact Us
				</a>
				<a href='/' className='mb-2'>
					Careers
				</a>
				<a href='/' className='mb-2'>
					Press & Blog
				</a>
				<a href='/' className='mb-2'>
					Terms & Condition
				</a>
			</div>
			<div className='flex flex-col'>
				<h4 className='mb-6 font-bold '>Customer Service</h4>
				<a href='/' className='mb-2'>
					Help Center
				</a>
				<a href='/' className='mb-2'>
					Privacy Policy
				</a>
				<a href='/' className='mb-2'>
					Installments Plan
				</a>
				<a href='/' className='mb-2'>
					E-Warranty Activation
				</a>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold mb-6'>Secure Payment Methods</h4>
				<img
					src='https://static.priceoye.pk/images/payment_method.svg'
					alt=''
					width='100%'
				/>
			</div>
		</div>
	);
}
