import styled from 'styled-components'

import { Section, Title, AnchorButton } from '../common'

const EmptyCartSection = styled(Section)`
  text-align: center;
  text-transform: capitalize;
`

export default function EmptyCart() {
  return (
    <EmptyCartSection>
      <Title>empty cart</Title>
      <AnchorButton to='/products'>fill it</AnchorButton>
    </EmptyCartSection>
  )
}
