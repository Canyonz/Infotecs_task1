import { ModalUI } from "@/shared/ui/modalUI/ModalUI";
import styles from "./UsersList.module.sass";
import cls from "classnames";
import { useState } from "react";

export const UsersList = ({ users = [], className }) => {
	const [selectedUser, setSelectedUser] = useState(null);

	const handleClickOpenUserDetails = (user) => () => {
		setSelectedUser(user);
	};

	const handleClickCloseUserDetails = () => {
		setSelectedUser(null);
	};

	return (
		<>
			<table className={cls(styles.usersList, className)}>
				<thead className={styles.table_thead}>
					<tr>
						{["ФИО", "Возраст", "Пол", "Номер телефона", "Адрес"].map((column, index) => (
							<th key={index}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.table_tbody}>
					{!!users.length &&
						users.map((user) => (
							<tr key={user.id} onClick={handleClickOpenUserDetails(user)}>
								<td>{`${user.lastName} ${user.firstName} ${user.maidenName}`}</td>
								<td>{user.age}</td>
								<td>{user.gender}</td>
								<td>{user.phone}</td>
								<td>{`${user.address.city} ${user.address.address}`}</td>
							</tr>
						))}
				</tbody>
			</table>
			{selectedUser && (
				<ModalUI onClose={handleClickCloseUserDetails}>
					<h2 className={styles.userDetailsHeader}>Детальная информация пользователя</h2>
					<div className={styles.userDetailsWrapper}>
						<span>ФИО: {`${selectedUser.lastName} ${selectedUser.firstName} ${selectedUser.maidenName}`}</span>
						<span>Возраст: {selectedUser.age}</span>
						<span>Адрес: {`${selectedUser.address.city} ${selectedUser.address.address}`}</span>
						<span>Рост: {selectedUser.height}</span>
						<span>Вес: {selectedUser.weight}</span>
						<span>Номер телефона: {selectedUser.phone}</span>
						<span>Email: {selectedUser.email}</span>
					</div>
				</ModalUI>
			)}
		</>
	);
};
