import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions";

import styles from "./Filter.module.scss";

export const Filter = function () {
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles["filter"]}>
				<h2 className={styles["filter__title"]}>Find contacts by name</h2>
				<input type="text" onChange={(e) => dispatch(setFilter(e.currentTarget.value))} className={styles["filter__input"]} />
			</div>
		</>
	);
};
