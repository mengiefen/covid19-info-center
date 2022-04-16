import styled from 'styled-components';

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.75rem;
  box-shadow: 1px 0px 5px gray;
  margin-bottom: 0.5rem;
  z-index: 10;

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

  .arrow-left {
    display: ${(props) => (props.url === '' ? 'none' : 'block')};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 50%;
    transition: all 0.5s;

    &:hover {
      border: 1px solid #9ae5e6;
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }

  .header-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    max-width: 60%;
    overflow: hidden;
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
    .btn-setting,
    .btn-microphone {
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
