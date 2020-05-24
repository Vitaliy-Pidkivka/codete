import React, {Fragment} from 'react';
import styled from 'styled-components';


const Heading = styled.h3`
    margin-top: 6px;
    letter-spacing: 2px;
    color: aqua;
    margin-bottom:4px;
`
const Paragraph = styled.p`
    color: yellow;
    margin-top: 2px;
    margin-bottom: 6px;
`

const TextGroup = ({ heading, text }) => (
  <Fragment>
    <Heading>
      {heading}
    </Heading>
    <Paragraph>
      {text}
    </Paragraph>
  </Fragment>
)

export default TextGroup
