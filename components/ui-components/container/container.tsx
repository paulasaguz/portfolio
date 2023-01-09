import styled from 'styled-components'
import { FlexContainerInterface } from './types'
import { BREAKPOINTS_VALUES } from '../breakpoints'

const Container = styled.div<FlexContainerInterface>`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};

  @media (max-width: ${BREAKPOINTS_VALUES.screenDesktop}) {
    max-width: 1140px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.tabletLandscape}) {
    max-width: 720px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    max-width: 640px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneXl}) {
    max-width: 380px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneLg}) {
    max-width: 350px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneXs}) {
    max-width: 300px;
  }
`;

const FlexContainer = (props: FlexContainerInterface): JSX.Element => <Container {...props} />

FlexContainer.defaultProps = {
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
}

export default FlexContainer;