import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background: rgb(21, 21, 21);
  .nav-link {
    padding: 16px 8px;
    text-decoration: none;
    color: white;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <nav className="d-flex">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
