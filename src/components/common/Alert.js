import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'

import Overlay from './Overlay'

import { AlertContext } from '../../context/UI/alert.context'

const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 24rem;
  background-color: white;
  box-shadow: 10px 10px 10px black;
  transform: translate(-50%, -50%);
  transition: all 0.3s linear;
  font-family: 'Roboto';
  font-size: 1.2rem;
  z-index: 10;
  padding: 2.5rem 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  display: none;

  ${(p) =>
    p.show &&
    css`
      display: block;
    `}
`

const AlertDetails = styled.div``

const CloseButtonContainer = styled.button`
  color: ${(p) => p.theme.mainBlue};
  font-size: 1.5rem;
  background: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 7px;
  cursor: pointer;
  line-height: 0;
`

const CloseButton = ({ children }) => {
  // Alert context
  const { hideAlert } = useContext(AlertContext)

  return (
    <CloseButtonContainer onClick={hideAlert}>
      <FaWindowClose />
    </CloseButtonContainer>
  )
}

const AlertText = styled.p``

export default function Alert() {
  // Alert context
  const { alert } = useContext(AlertContext)

  return (
    <>
      <Overlay show={alert.show} />
      <AlertContainer show={alert.show}>
        <AlertDetails>
          <AlertText>{alert.show && alert.message}</AlertText>
          <CloseButton />
        </AlertDetails>
      </AlertContainer>
    </>
  )
}
