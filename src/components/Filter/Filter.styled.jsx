import styled from '@emotion/styled';

export const Filters = styled.input`
display: block;
    margin-top: 16px;
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
`;