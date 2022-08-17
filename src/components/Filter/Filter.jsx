import PropTypes from 'prop-types';
import { Filters } from './Filter.styled';


export const Filter = ({ changes, filter }) => 
  
    
    <>
    <label htmlFor="">Find contacts be name and number</label> 
    <Filters
            type="text"
             name="find"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={changes}
              value={filter}
              
          />
    </>;

Filter.propTypes = {
    changes: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
   };