import styled from 'styled-components'

import { AnchorButton } from '../common'

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  box-shadow: 2px 2px 5px black;
  transition: all 0.3s linear;
  background-color: white;

  & p {
    text-align: center;
    font-family: 'Roboto';
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  & .product-title {
    color: ${(p) => p.theme.mainBlue};
    font-weight: bold;
  }

  &:hover {
    box-shadow: 3px 3px 8px black;
    cursor: pointer;

    & img {
      opacity: 0.3;
      transition: all 0.3s linear;
    }

    ${AnchorButton} {
      opacity: 1;
    }
  }

  & .image-container {
    position: relative;
    margin-bottom: 2.5rem;
  }

  ${AnchorButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`

export default function Product({ id, image, title, price }) {
  return (
    <ProductContainer>
      <div className='image-container'>
        <img src={image} alt={title} />
        <AnchorButton to={`/products/${id}`}>details</AnchorButton>
      </div>
      <p className='product-title'>{title}</p>
      <p>${price}</p>
    </ProductContainer>
  )
}
