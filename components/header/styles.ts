import styled from 'styled-components'

import LinkedInIcon from '../../static/icons/linkedin.svg'
import GithubIcon from '../../static/icons/github.svg'

const StyledGithubIcon = styled(GithubIcon)`
  cursor: pointer;
  path:hover {
    fill: var(--primary);
  }
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  cursor: pointer;
  path:hover {
    fill: var(--primary);
  }
`;

const StyledHeader = styled.header`
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  background: var(--background);
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
  cursor: pointer;

  a {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 600;
    height: inherit;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: var(--primary);
    }
    path {
      fill: var(--primary);
    }
  }
`;

const LogoContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

export { LogoContainer, StyledHeader, StyledUl, StyledList, StyledGithubIcon, StyledLinkedInIcon }