import React from "react";
import Brands from "../Brands";
import Carousel from "../Carousel";
import MobileCard from "../MobileCard";
function Mobiles() {
	return (
		<>
			<Brands />
			<Carousel />
			<div className='flex flex-col text-left justify-around p-2 h-20 mx-28 mb-2'>
				<h4 className='font-semibold'>Buy Mobile Phone in Pakistan 2023</h4>
				<p>
					198 results for Mobiles. Find a wide range of mobiles at the lowest
					rates in Pakistan, only at PriceOye.
				</p>
			</div>
			<MobileCard />
		</>
	);
}

export default Mobiles;
