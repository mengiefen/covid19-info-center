import styled from 'styled-components';

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  box-shadow: 1px 0px 5px gray;
  margin-bottom: 0.5rem;
  z-index: 10;

  .logo{
    color: #991111;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 2;
    text-transform: uppercase;
  }
  .logo span {
    color:  ${({ theme }) => theme.colors.text};
    font-weight: 800;
  }

  .arrow-left {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.5s;

    &:hover {
      border: 1px solid #9ae5e6;
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }

  .header-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  .search-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 50%;
    transition: all 0.5s;

    &:hover {
      border: 1px solid #9ae5e6;
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }

 
`;

export default Nav;
