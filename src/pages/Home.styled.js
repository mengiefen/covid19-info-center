import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden; 
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width:768px){
    padding : 2rem 5% ;  
    gap: 2rem ;
  }
`;

const Card = styled.div`
  position: relative;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 30vh;
  border: 0.4px solid ${({ theme }) => theme.colors.cyan};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.dark};
  border-radius: 2px;
  transition: transform 0.75s ease-in-out;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  transition: all 0.5s ease-in-out;

  .continent-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }

  .open-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.02);
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 0.6;
  }

  @media screen and (min-width:768px){
    width: 25vw;  
    
    &:hover {
      opacity: 0.8;
      border:2px solid #ccc;
      transform: scale(1.1);
    }
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: $ ${({ theme }) => theme.colors.bg};
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: all 0.35s;
  &:hover {
    transform: scale(0.98);
  }
`;

export {
  Container, Card, Button, CardWrapper,
};
