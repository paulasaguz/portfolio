import styled from 'styled-components'
import { FlexContainerInterface } from './types'

const Container = styled.div<FlexContainerInterface>`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
`;

const FlexContainer = (props: FlexContainerInterface): JSX.Element => <Container {...props} />

FlexContainer.defaultProps = {
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
}

export default FlexContainer;