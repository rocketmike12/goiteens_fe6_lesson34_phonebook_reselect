import { useSelector } from "react-redux";
import { Contact } from "./Contact";

import styles from "./ContactList.module.scss";

export const ContactList = function () {
	const filter = useSelector((state) => state.filter);
	const contacts = useSelector((state) => state.contacts.filter((contact) => contact.name.toLowerCase().includes(filter)));

	return (
		<>
			{Boolean(contacts.length) && (
				<ul className={styles["contact-list"]}>
					{contacts.map((contact) => (
						<Contact id={contact.id} name={contact.name} number={contact.number} key={contact.id} />
					))}
				</ul>
			)}
		</>
	);
};
