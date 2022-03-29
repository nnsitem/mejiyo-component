import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { hexToRgb } from '../utils'

function getButtonSize(size) {
  switch (size) {
    case 'small':
      return '30px'
    case 'large':
      return '42px'
    default:
      return '36px'
  }
}

const StyledButton = styled.button`
  /* typography */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => props.color};

  /* identical to box height, or 100% */
  text-align: right;
  text-transform: capitalize;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: ${(props) => (props.fullWidth ? 1 : 0)};
  margin: 0;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => getButtonSize(props.size)};
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 1px rgba(31, 84, 141, 0.15), 0px 3px 8px -1px rgba(31, 84, 141, 0.1);
  &:hover {
    box-shadow: 0px 0px 1px rgba(31, 84, 141, 0.1), 0px 10px 16px rgba(31, 84, 141, 0.06);
  }
  ${(props) => props.variant === 'outlined' && outlinedStyle}
`

const outlinedStyle = (props) => css`
  background: transparent;
  border: 1px solid ${props.color};
  color: ${props.color};
  box-shadow: none !important;
  &:hover {
    color: rgba(${hexToRgb(props.color)}, ${props.alpha});
    border: 1px solid rgba(${hexToRgb(props.color)}, ${props.alpha});
  }
`

const Button = ({ variant, size, name, color, icon, fullWidth, onClick, ...rest }) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      color={color}
      onClick={onClick}
      {...rest}
    >
      {icon && <i class='fa-light fa-user'></i>}
      {name}
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['color', 'outlined', 'link']),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button color, provided in HEX mode as it would be converted to rgba by default.
   */
  color: PropTypes.string,
  alpha: PropTypes.number,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'color',
  name: 'Button',
  size: 'medium',
  color: '#000',
  alpha: 0.65,
  fullWidth: false,
}

export default Button
