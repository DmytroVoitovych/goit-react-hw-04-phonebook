import { ContactBook } from "./ContactBook/ContactBook";

export const App = () => {
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

      
      <ContactBook />      
    </div>
  );
};
