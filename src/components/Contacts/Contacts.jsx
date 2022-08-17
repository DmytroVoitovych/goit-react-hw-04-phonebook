import PropTypes from 'prop-types';
import { ListCon } from './Contacts.styled';

export const Contacts = ({ contacts, away }) => {
    return (<ListCon>
        {contacts.map(contact => <li key={contact.id}>
            {contact.name}: {contact.number} <button type="button" onClick={()=> away(contact.id) } >delete</button>
        </li>)}
    </ListCon>)
};


Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    away: PropTypes.func.isRequired
};