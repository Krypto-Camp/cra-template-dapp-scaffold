import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div``;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <div className="container">{children}</div>
    </StyledLayout>
  );
};

export default Layout;
