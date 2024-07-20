import { SearchUsers } from "./searchUsers/SearchUsers";
import { SortUsers } from "./sortUsers/SortUsers";
import styles from "./FiltersUsers.module.sass";
import cls from "classnames";

export const FiltersUsers = ({ searchClick, sortClick, cancelClick, className }) => {
	return (
		<div className={cls(styles.filtersUsers, className)}>
			<SearchUsers searchClick={searchClick} cancelClick={cancelClick} />
			<SortUsers sortClick={sortClick} />
		</div>
	);
};
