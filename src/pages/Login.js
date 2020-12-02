import { useState } from 'react'
import styled from 'styled-components'
import PageLayout from '../components/PageLayout'

import { Button } from '../components/common'

const FormContainer = styled.main`
  width: 40%;
  margin: 4rem auto;
  font-family: 'Roboto';
  padding: 2rem;
  & h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  box-shadow: 5px 5px 5px black;
  background-color: white;

  p {
    text-align: center;
    text-transform: capitalize;
    margin-top: 1rem;
  }

  p.error {
    color: red;
  }

  p.toggle:hover {
    cursor: pointer;
  }

  & p:nth-of-type(1) {
    color: ${(p) => p.theme.secondaryBlue};
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  border-radius: 5px;
  border: 2px solid ${(p) => p.theme.mainBlue};
`

export default function Login() {
  // States
  const [formInputs, setFormInputs] = useState({
    username: 'username',
    password: '',
    email: '',
  })
  const [isMember, setIsMember] = useState(true)

  function toggleIsMember() {
    setIsMember((oldState) => {
      setFormInputs({ ...formInputs, username: '' })
      return !oldState
    })
  }

  function handleChange(e) {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  const { username, password, email } = formInputs

  const isEmpty = !username || !password || !email

  return (
    <PageLayout>
      <FormContainer>
        <h2>login</h2>
        <Form>
          <Input
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => handleChange(e)}
          />
          {!isMember && (
            <Input
              type='text'
              name='username'
              placeholder='username'
              value={username}
              onChange={(e) => handleChange(e)}
            />
          )}
          <Button type='submit' onClick={handleSubmit}>
            {isMember ? 'login' : 'register'}
          </Button>
        </Form>
        <p className='toggle' onClick={toggleIsMember}>
          {isMember ? 'not register yet?' : 'already register?'}
        </p>
        {isEmpty && <p className='error'>please fill out all the fields</p>}
      </FormContainer>
    </PageLayout>
  )
}
