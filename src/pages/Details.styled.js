import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 1rem 5%;
  }

  form {
    width: 60%;
    margin: 0 auto;
    position: relative;
  }

  .country-search {
    width: 100%;
    padding: 0.6rem 0.5rem;
    outline: none;
    border: 1px solid #1ff1f5;
    background-color: ${({ theme }) => theme.colors.semiDark};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  .btn-search {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    color: #1ff1f5;
  }

  .country-map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 0.1;
    text-align: center;
    z-index: -1;
  }

  .country-flag {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 1.5rem;
    
    div{
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50%; 
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {    
      width: 100px;
      height: auto;
    }

    .country-name {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem 1.5rem;  
  }

    @media screen and (min-width: 768px) {
      right: 5rem;
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 2;
    padding: 1rem;
  }
`;

const RegionCard = styled.div`
  min-height: 80px;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.semiCyan};
  margin: 0.01rem 0;
  border: 2px solid transparent;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.semiDark},
    2px 2px 5px ${({ theme }) => theme.colors.semiDark};

  .open-icon {
    font-size: 1.5rem;
    color: #1ff1f5;
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  .summary {
    display: flex;
    gap: 0.1rem;
    border-radius: 4px;
    box-shadow: 0 2px 5px ${({ theme }) => theme.colors.dark};

    h3 {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 1px;
      line-height: 2;
    }

    h4 {
      font-size: 0.7rem;
      font-size: 400;
      line-height: 2;
    }

    .col-1,
    .col-2,
    .col-3 {
      width: 33%;
      display: flex;
      flex-direction: column;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }

  &:hover {
    @media screen and (min-width: 768px) {
      border: 2px solid darkcyan;
      opacity: 0.95;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.1rem;

  @media screen and (min-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const Table = styled.div`
  min-height: 80px;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.semiDark};
  margin: 0.01rem 0;
  border: 2px solid transparent;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.semiDark},
    2px 2px 5px ${({ theme }) => theme.colors.semiDark};

  .open-icon {
    font-size: 1.5rem;
    color: #1ff1f5;
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  .country-detail {
    width: 100%;

    tr {
      text-align: left;
    }

    .head {
      padding: 0.5rem;
      font-weight: 600;
    }

    td {
      padding: 0.5rem 1rem;
      border: 1px solid ${({ theme }) => theme.colors.semiDark};
    }
  }
`;

export {
  RegionCard, CardWrapper, Container, Table,
};
