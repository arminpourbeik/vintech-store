import styled, { css } from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'

const StyledLink = ({ children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

const AnchorButton = styled(StyledLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Staatliches', cursive;
  padding: 0.5rem 0.7rem;
  background-color: ${(p) => p.theme.secondaryBlue};
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s linear;
  border: 2px solid ${(p) => p.theme.secondaryBlue};
  border-radius: 5px;
  letter-spacing: 2px;

  &:hover {
    background-color: transparent;
    color: ${(p) => p.theme.secondaryBlue};
    border: 2px solid ${(p) => p.theme.secondaryBlue};
  }

  ${(p) =>
    p.block &&
    css`
      display: block;
      width: 100%;
      text-align: center;
    `}

  ${(p) =>
    p.green &&
    css`
      background-color: ${(p) => p.theme.mainGreen};
      border: 2px solid ${(p) => p.theme.mainGreen};
      &:hover {
        color: ${(p) => p.theme.mainGreen};
        border: 2px solid ${(p) => p.theme.mainGreen};
        background-color: transparent;
      }
    `}
`

const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Staatliches', cursive;
  padding: 0.5rem 0.7rem;
  background-color: ${(p) => p.theme.secondaryBlue};
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s linear;
  border: 2px solid ${(p) => p.theme.secondaryBlue};
  border-radius: 5px;
  letter-spacing: 2px;

  &:hover {
    background-color: transparent;
    color: ${(p) => p.theme.secondaryBlue};
    border: 2px solid ${(p) => p.theme.secondaryBlue};
    cursor: pointer;
  }

  ${(p) =>
    p.block &&
    css`
      display: block;
      width: 100%;
      text-align: center;
    `}

  ${(p) =>
    p.green &&
    css`
      background-color: ${(p) => p.theme.mainGreen};
      border: 2px solid ${(p) => p.theme.mainGreen};
      &:hover {
        color: ${(p) => p.theme.mainGreen};
        border: 2px solid ${(p) => p.theme.mainGreen};
        background-color: transparent;
      }
    `}
`

export { AnchorButton, Button }
