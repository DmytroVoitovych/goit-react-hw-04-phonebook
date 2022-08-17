import React from "react";
import { nanoid } from 'nanoid';
import { Phonebook } from "components/Phonebook/Phonebook";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactBook extends React.Component {

state = {
  contacts: [],
    name: '',
    number: '',
    filter: ''
    }

     componentDidUpdate(prevProps, PrevState) { //изменяем хранилище если есть обновление стейта
        if (this.state.contacts !== PrevState.contacts) { // сверка нового стейта и преведущего
            console.log('поле обновилось');
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

    componentDidMount() { // при первом рендере если что то есть в хранилище обновляем стейт 
        if (JSON.parse(localStorage.getItem('contacts'))) { // если true
            this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
        }
    }
    
   

    getValueInput = (e) => { // получение значений инпутов формы
        // https://ru.reactjs.org/docs/forms.html  по примеру с документации
          const target = e.target;
    const value = target.type === 'text' || target.type === 'tel' ?  target.value: " ";
    const elem = target.name; // целевой елемент(ы) 
console.log(elem);
    this.setState({
        [elem]: value
        
    });
       }; 

    setContactsName = (e) => {  // сабмит 
         
        e.preventDefault();
        this.setState({number: '', name: ''});      
        this.chekingContacts(e); // проверка уникальности имени в контактах 

       };
    
    changeFilter = (e) => { this.setState({ filter: e.currentTarget.value, }) }; // значение фильтра

    contactFiltering = () => { // фильтрация контактов
        const { filter, contacts } = this.state;

        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)
            || contact.number.toLowerCase().includes(normalizeFilter));
    }  //добавил еще фильтер и по номеру

    deleteContact = (id) => { // удаление контакта
        
        const { contacts } = this.state;// деструктуризация
        contacts.splice(id, 1);// удаляем 
        this.setState({
            contacts, // возвращаем обновленный стейт с удаленным обьектом
        });
        console.log(this.state.contacts) //тесты
        Notify.success('The contact has been successfully deleted.');
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        
    };
   
    chekingContacts = (e) => {// проверка уникальности имени
        const { contacts, name, } = this.state; // деструктуризация
        const chek = contacts.find((contact) =>contact.name === name); //ищем одинаковое 

          if (chek) { // если есть уже
             Report.failure('Error', 'This name is already in your contact list, enter another name, and try again.', 'OK');
                 }
                       
            else { // если нет
              this.setState({ contacts: this.state.contacts.concat({ id: nanoid(), name: this.state.name, number: this.state.number }) });
              return Notify.success('Contact has been successfully added.');
              }
    };
    
   
     

        render() {
            const name = this.state.name;
            const tel = this.state.number;
            const filter = this.state.filter;
            const contacts = this.contactFiltering();
            const remove = this.deleteContact;
            
        return (< section >
            {<Phonebook input={this.getValueInput} val={{ name: name, tel: tel }} btn={this.setContactsName} />}
           <div> <h3>Contacts</h3>
            {<Filter changes={this.changeFilter}  filter={filter}/> }
                {<Contacts contacts={contacts} away={remove} />}
                </div>
        </section >)
     

    }
}