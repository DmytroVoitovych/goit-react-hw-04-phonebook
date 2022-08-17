import {useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import { Phonebook } from "components/Phonebook/Phonebook";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

   const deleteContact = (id) => { // удаление контакта
    contacts.splice(id, 1);// удаляем 
     setContacts([...contacts],); // возвращаем обновленный стейт с удаленным обьектом
       Notify.success('The contact has been successfully deleted.');
        localStorage.setItem('contacts', JSON.stringify(contacts));
      };

  useEffect(() => { window.localStorage.setItem('contacts', JSON.stringify(contacts));} , [contacts]);
 
  const getValueInput = (e) => { // получение значений инпутов формы
    // https://ru.reactjs.org/docs/forms.html  по примеру с документации
    const target = e.target.type;
    const val = e.target.value;
     switch (target) {
      case 'text':
        setName(val);
        break;
      case 'tel':
         setNumber(val);
      default:
        return;
    }
   }; 
  
  const chekingContacts = () => {// проверка уникальности имени
     const chek = contacts.find((contact) =>contact.name === name); //ищем одинаковое 
          if (chek) { // если есть уже
             Report.failure('Error', 'This name is already in your contact list, enter another name, and try again.', 'OK');
                 }
                       
            else { // если нет
              setContacts(contacts.concat({ id: nanoid(), name: name, number: number }));
              return Notify.success('Contact has been successfully added.');
              }
    };
  
  const setContactsName = (e) => { e.preventDefault(); setName(''); setNumber(''); chekingContacts();}; // проверка уникальности имени в контактах 
 
  const  changeFilter = (e) => { setFilter( e.currentTarget.value) }; // значение фильтра
   
 const contactFiltering = () => { // фильтрация контактов
     const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)
            || contact.number.toLowerCase().includes(normalizeFilter));
    }  //добавил еще фильтер и по номеру

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '0 15px'
      }}
    >
      < section >
            {<Phonebook input={getValueInput} val={{ name: name, tel: number }} btn={setContactsName} />}
           <div> <h3>Contacts</h3>
            {<Filter changes={changeFilter}  filter={filter}/> }
          {<Contacts contacts={contactFiltering()} away={deleteContact} />}
                </div>
        </section >
    </div>
  );
};
