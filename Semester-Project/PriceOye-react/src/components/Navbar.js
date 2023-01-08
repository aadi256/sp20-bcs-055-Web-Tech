import React from "react";
export default function Navbar() {
	return (
		<div className='bg-sky-500 flex justify-between items-center px-10 py-2'>
			<div className='p-3'>
				<img
					src='https://static.priceoye.pk/images/logo.svg'
					width='50%'
					height='auto'
					alt=''
				></img>
			</div>
			<div>
				<form>
					<label
						for='default-search'
						class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
					>
						Search
					</label>
					<div class='relative'>
						<div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								aria-hidden='true'
								class='w-5 h-5 text-gray-500 dark:text-gray-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								></path>
							</svg>
						</div>
						<input
							type='search'
							id='default-search'
							class='block w-full p-4 px-40 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
							placeholder='Search...'
							required
						/>
						<button
							type='submit'
							class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div>
				<a
					href='/'
					className='btn bg-neutral-50 py-3 px-8 rounded-lg text-sky-500 mr-2'
				>
					Login
				</a>
				<a
					href='/'
					className='btn bg-sky-500 py-3 px-8 border border-slate-50 rounded-lg text-neutral-50'
				>
					Register
				</a>
			</div>
		</div>
	);
}
