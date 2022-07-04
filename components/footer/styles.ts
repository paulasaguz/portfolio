import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: var(--tertiary);
  padding: 48px 0;
`
const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  height: 48px;
  padding: 24px 0;
`

const StyledList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
`


export { StyledFooter, StyledUl, StyledList }
