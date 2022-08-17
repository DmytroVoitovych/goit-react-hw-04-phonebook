import styled from '@emotion/styled';

export const ListCon = styled.ul`
display: flex;
    flex-direction: column;
    font-size: 4vh;
    gap: 8px;

    li{
        display: flex;
    gap: 12px;
    align-items: center;

    ::before{
         display: inherit;
    content: "";
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;

    }
    }

  li  button{
      
    padding: 4px 8px;
    font-size: 16px;
    display: inline-flex;
    max-width: 120px;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid ghostwhite;
    cursor: pointer;

    &:active{
    background-color: #82B1FF;   
    border:  1px solid #82B1FF;
        }

        @media (min-width: 420px) {
         
         padding: 8px;
      }

       @media (min-width: 768px) {
         
         padding: 8px 12px;
      }

      

    }

`;