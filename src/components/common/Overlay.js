import { useContext } from 'react'
import styled, { css } from 'styled-components'

import { AlertContext } from '../../context/UI/alert.context'

const OverlayWrapper = styled.div`
  ${(p) =>
    p.show
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9;
        `
      : css`
          display: none;
        `}
`
export default function Overlay({ show }) {
  // AlertConext
  const { hideAlert } = useContext(AlertContext)

  return <OverlayWrapper show={show} onClick={hideAlert} />
}
