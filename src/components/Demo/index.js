import React from 'react'
import Styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Demo = ({ name }) => {
  return <Style>{name}</Style>
}

Demo.propTypes = {
  name: PropTypes.string.isRequired
}

Demo.defaultProps = {
  name: 'Demo'
}

const Style = Styled('div')`
  label: Demo;

  text-align: center;
  font-size: 20px;
`

export default Demo
