import styled from 'styled-components'
import { FlexContainerInterface } from './types'
import { BREAKPOINTS_VALUES } from '../breakpoints'

const Container = styled.div<FlexContainerInterface>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};

  @media (max-width: ${BREAKPOINTS_VALUES.screenDesktop}) {
    max-width: 940px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.tabletLandscape}) {
    max-width: 720px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    max-width: 640px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.middleTablets}) {
    max-width: 500px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneXl}) {
    max-width: 360px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneLg}) {
    max-width: 350px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneMd}) {
    max-width: 330px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneSm}) {
    max-width: 320px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneXs}) {
    max-width: 280px;
  }

  @media (max-width: ${BREAKPOINTS_VALUES.phoneXxs}) {
    max-width: 250px;
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