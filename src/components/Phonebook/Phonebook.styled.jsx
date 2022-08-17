import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: flex-start;
    padding: 12px;
    border: 3px solid black;

    & label{
    font-size: 3vh;   
    }

    & input {
        padding: 8px;
    min-width: 280px;
   transition: all 300ms;
   border-radius: 5px;

    :focus {
     outline: 2px solid #82B1FF;
    border: none;
    }

     @media (max-width: 420px) {
         min-width: 200px;
         
      }

    }


`;

export const Button = styled.button`
    padding: 4px 8px;
    font-size: 16px;
    display: flex;
    min-width: 80px;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid ghostwhite;
    cursor: pointer;

    &:active{
    background-color: #82B1FF;   
    border:  1px solid #82B1FF;
        }

        @media (min-width: 420px) {
         min-width: 130px;
         padding: 8px;
      }

       @media (min-width: 768px) {
         min-width: 230px;
         padding: 8px 12px;
      }

      
`;