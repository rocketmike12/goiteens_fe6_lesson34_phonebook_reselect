import { Container } from "./components/Container/Container";

import { ContactEditor } from "./components/ContactEditor/ContactEditor";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";

export const App = function () {
	return (
		<>
			<Container>
				<h1>Contacts</h1>
				<ContactEditor />

				<Filter />

				<ContactList />
			</Container>
		</>
	);
};
