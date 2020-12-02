import styled from 'styled-components'

import Header from './Header'

const Content = styled.main``

export default function PageLayout({ children }) {
  return (
    <Content>
      <Header />
      {children}
    </Content>
  )
}
