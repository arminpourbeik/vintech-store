import styled from 'styled-components'

import PageLayout from '../components/PageLayout'
import { Section } from '../components/common'

const AboutSection = styled(Section)`
  max-width: 40rem;
`

export default function About() {
  return (
    <PageLayout>
      <AboutSection title='about us'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          unde dolor veritatis blanditiis culpa, explicabo ad, itaque
          perferendis voluptas impedit amet soluta quaerat maiores quod
          consectetur. Similique eligendi culpa odit, officia voluptas accusamus
          eius expedita, aut odio incidunt recusandae quas nihil aspernatur?
          Iusto accusantium velit, incidunt quaerat quae laborum nemo dolorem
          impedit ipsa omnis molestiae placeat amet eaque magni recusandae
          veniam ex tempore repellendus. Odio, assumenda, accusantium recusandae
          sint earum nulla ea eos ex doloremque, iste libero veritatis
          voluptatem. Id saepe, similique quod fugit facere eum a dicta quo
          quidem nobis commodi non nihil illum voluptates voluptatibus sapiente
          consectetur aliquam!
        </p>
      </AboutSection>
    </PageLayout>
  )
}
