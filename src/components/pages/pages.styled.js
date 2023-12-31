import styled from 'styled-components';

export const ContainerHome = styled.div`
 min-height: calc(100vh - 50px);
     display: flex;
     align-items: center;
     justify-content: center;
     /* background-color: #D9AFD9; */
     /* background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); */
     background-size: cover;
`
export const TitleHome = styled.h1`
 font-weight: 500;
     font-size: 48px;
     text-align: center;
`
export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 50px);
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;