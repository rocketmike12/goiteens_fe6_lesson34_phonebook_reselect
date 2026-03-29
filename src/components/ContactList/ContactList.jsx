import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

import { Contact } from "./Contact";

import styles from "./ContactList.module.scss";

export const ContactList = function () {
	const contacts = useSelector(getContacts);

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
