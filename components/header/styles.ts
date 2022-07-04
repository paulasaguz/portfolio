import styled from 'styled-components'

const StyledHeader = styled.header`
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

const StyledList = styled.li`
  list-style: none;
  padding: 0 10px;
  height: 80px;
  display: flex;
  align-items: center;
`;

export { StyledHeader, StyledUl, StyledList }