import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Navigation.module.css';

const Shoes = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={styles.drop_container}>
				<div className={styles.drop_categories}>
					<div className={styles.drop_category}>
						<Link to={'/winter-boots'}>
							<span className={styles.drop_title}>Winter boots</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/shoes-keds'}>
							<span className={styles.drop_title}>Shoes, keds</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shoes;
