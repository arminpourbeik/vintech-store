import PageLayout from '../components/PageLayout'

import styled from 'styled-components'

import { FaSearch } from 'react-icons/fa'

const InputContainer = styled.section`
  display: flex;
  margin: 2rem auto;
  justify-content: center;
  width: 50%;
  position: relative;

  & svg {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }
`

const Input = styled.input`
  padding: 1rem 2rem;
  width: 100%;
`

export default function Error() {
  return (
    <PageLayout>
      <InputContainer>
        <Input type='text' value='search' />
        <FaSearch />
      </InputContainer>
    </PageLayout>
  )
}
