import styled from 'styled-components';

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.75rem;
  box-shadow: 1px 0px 5px gray;
  margin-bottom: 0.5rem;
  z-index: 10;

  @media screen and (min-width: 768px) {
    height: 7.5vh;
  }

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid transparent;
    font-size: 1rem;
    border-radius: 20px;
    padding: 0 0.5rem 0 0;
    transition: all 0.5s ease;
    margin-right: 0.5rem;

    &:hover {
      border: 1px solid #9ae5e6;
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }

  .arrow-left {
    display: ${(props) => (props.url === '' ? 'none' : 'block')};
    font-size: 2rem;
    cursor: pointer;
    padding: 0.2rem;
    transition: all 0.5s;
  }

  .logo {
    color: #fa9900;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: 1.2;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      letter-spacing: 2;
      font-size: 1.8rem;
    }
  }

  .logo span {
    color: ${({ theme }) => theme.colors.text};
  }

  .header-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    max-width: 60%;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    max-width: 60%;    
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .search-icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.5s;

    &:hover {
      border: 1px solid #9ae5e6;
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }

  .settings-tab {
    display: flex;
    margin-left: 0.5rem;
    .btn-setting,
    .btn-microphone,
    .btn-home {
      background-color: transparent;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.text};
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.5s ease-out;

      &:hover {
        border: 1px solid #9ae5e6;
        background-color: ${({ theme }) => theme.colors.cyan};
      }
    }
  }
`;

export default Nav;
