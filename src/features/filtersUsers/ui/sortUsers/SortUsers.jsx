import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { SelectListUI } from "@/shared/ui/selectListUI/SelectListUI";
import cls from "classnames";
import { useState } from "react";
import { sortOptionsList } from "../../const/filterConst";
import styles from "./SortUsers.module.sass";

export const SortUsers = ({ sortClick, className }) => {
	const [value, setValue] = useState(sortOptionsList[0].value);
	const [order, setOrder] = useState("asc");

	const handleChangeSort = (value) => {
		setValue(value);
		sortClick(value, order);
	};

	const handleChangeOrder = () => {
		const newSortOrder = order === "asc" ? "desc" : "asc";
		setOrder(newSortOrder);
		sortClick(value, newSortOrder);
	};

	return (
		<div className={cls(styles.sortUsersWrapper, className)}>
			<span>Сортировка</span>
			<div className={styles.sortUsers}>
				<SelectListUI value={value} options={sortOptionsList} onChange={handleChangeSort} />
				<ButtonUI onClick={handleChangeOrder} className={styles.orderBtn}>
					{order === "asc" ? "▲" : "▼"}
				</ButtonUI>
			</div>
		</div>
	);
};
