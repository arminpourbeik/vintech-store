import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 1rem auto;

  & p {
    font-family: 'Noto Sans JP', sans-serif;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
  margin: 2rem;
`

const Section = ({ className, title, children }) => {
  return (
    <SectionWrapper className={className}>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  )
}

export { Section, Title }
