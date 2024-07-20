import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { InputUI } from "@/shared/ui/inputUI/InputUI";
import { SelectListUI } from "@/shared/ui/selectListUI/SelectListUI";
import cls from "classnames";
import { useState } from "react";
import { fieldOptionsList } from "../../const/filterConst";
import styles from "./SearchUsers.module.sass";

export const SearchUsers = ({ searchClick, cancelClick, className }) => {
	const [selectField, setSelectField] = useState(fieldOptionsList[0].value);
	const [value, setValue] = useState("");

	const handleSearchClick = () => {
		if (!value) return;
		searchClick(selectField, value);
	};

	const handleCancelClick = () => {
		cancelClick();
		setValue("");
	};

	return (
		<div className={cls(styles.searchUsers, className)}>
			<div className={styles.selectSearchWrapper}>
				<span>Поиск по</span>
				<SelectListUI value={selectField} options={fieldOptionsList} onChange={setSelectField} />
			</div>
			<div className={styles.searchWrapper}>
				<InputUI /* title="Поиск"  */ value={value} onChange={setValue} />
				<ButtonUI onClick={handleSearchClick}>Найти</ButtonUI>
				<ButtonUI onClick={handleCancelClick}>Отмена</ButtonUI>
			</div>
		</div>
	);
};
