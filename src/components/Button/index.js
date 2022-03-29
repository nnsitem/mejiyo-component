import PropTypes from 'prop-types'

import styled from '@emotion/styled'
// import { css } from '@emotion/react'

const Button = ({ variant, name, fullWidth, ...rest }) => (
  <StyledButton variant={variant} fullWidth={fullWidth} {...rest}>
    {name}
  </StyledButton>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['color', 'outlined', 'link']),
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  variant: 'color',
  name: 'Button',
  fullWidth: false,
}

const StyledButton = styled.button(({ fullWidth }) => ({
  textAlign: 'center',
  cursor: 'pointer',
  minHeight: '36px',
  border: 'none',
  width: fullWidth ? '100%' : 'auto',
  boxShadow: '0px 0px 1px rgba(31, 84, 141, 0.15), 0px 3px 8px -1px rgba(31, 84, 141, 0.1)',
  borderRadius: '6px',
  background: 'pink',
  padding: '12px',
  '&:hover': {
    boxShadow: '0px 0px 1px rgba(31, 84, 141, 0.1), 0px 10px 16px rgba(31, 84, 141, 0.06)',
  },
}))

export default Button
