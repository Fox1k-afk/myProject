import React from 'react';

import DiscountsBlock from '../components/main/DiscountsBlock';
import NewClothesBlock from '../components/main/NewClothesBlock';
import s from '../components/main/Parnyam.module.css';
import PodborObrazov from '../components/main/PodborObrazov';
import ScrollButton from '../components/ScrollButton';
import SmallBanners from '../components/main/SmallBanners';
import ParnyamSlider from '../components/slider/boysSlider/ParnyamSlider';

// import Loader from '../components/Loader';
// import upArrow from '../assets/svg/up-arrow.svg';

const Parnyam = () => {
	return (
		<div>
			<div className={s.main__wrapper}>
				<ParnyamSlider />

				<div className={s.main__content_container}>
					<SmallBanners />
					<div>
						<PodborObrazov />
						<DiscountsBlock />
						<NewClothesBlock />
					</div>
				</div>
				<div>
					<ScrollButton />
				</div>
			</div>
		</div>
	);
};

export default Parnyam;
