import Styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Button = ({ name }) => {
  return <Style>{name}</Style>
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

Button.defaultProps = {
  name: 'Button',
}

const Style = Styled('button')`
  label: Button;

  text-align: center;
  font-size: 20px;
`

export default Button
