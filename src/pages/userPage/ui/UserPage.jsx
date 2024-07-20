import { UsersList } from "@/entities/users";
import { FiltersUsers } from "@/features/filtersUsers";
import { useCallback, useEffect, useState } from "react";
import styles from "./UserPage.module.sass";

export const UserPage = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchUsers = useCallback(async () => {
		try {
			setIsLoading(true);
			setError("");
			const response = await fetch(
				"https://dummyjson.com/users?select=firstName,lastName,maidenName,age,gender,phone,address,height,weight,email"
			);
			const data = await response.json();

			if (!data.users) {
				throw new Error("Пользователи не найдены");
			}

			setUsers(data.users);
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const handleClickSearch = useCallback(async (field, value) => {
		try {
			setIsLoading(true);
			setError("");
			const response = await fetch(`https://dummyjson.com/users/filter?key=${field}&value=${value}`);
			const data = await response.json();

			if (!data.users) {
				throw new Error("Пользователи не найдены");
			}

			setUsers(data.users);
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const handleClickSort = useCallback(async (field, order) => {
		try {
			setIsLoading(true);
			setError("");
			const response = await fetch(`https://dummyjson.com/users?sortBy=${field}&order=${order}`);
			const data = await response.json();
			if (!data.users) {
				throw new Error("Пользователи не найдены");
			}

			setUsers(data.users);
		} catch (error) {
			console.log(error);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return (
		<main className={styles.userPage}>
			<div className={styles.userPageWrapper}>
				<FiltersUsers searchClick={handleClickSearch} sortClick={handleClickSort} cancelClick={fetchUsers} />
				<UsersList users={users} isLoading={isLoading} error={error} />
				{isLoading && <span>Загрузка...</span>}
				{error && <span className={styles.errorText}>{error}</span>}
				{!users.length && !isLoading && !error && <span>Пользователи не найдены!</span>}
			</div>
		</main>
	);
};
