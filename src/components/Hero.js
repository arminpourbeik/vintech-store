import styled from 'styled-components'

import bannerImage from '../assets/images/mainBcg.jpeg'

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  height: 60vh;
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.8) 0%,
      rgba(0, 0, 0, 0.5326505602240896) 78%,
      rgba(0, 212, 255, 0.8) 100%
    ),
    url(${bannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: 'Staatliches', cursive;

  & h1 {
    font-family: 'Staatliches', cursive;
    font-size: 4rem;
  }

  & p {
    font-size: 2rem;
  }
`

export default function Hero({ children }) {
  return (
    <Banner>
      <BannerInfo>
        <h1>think, code, deploy</h1>
        <p>embrace your choices, we do</p>
        {children}
      </BannerInfo>
    </Banner>
  )
}
