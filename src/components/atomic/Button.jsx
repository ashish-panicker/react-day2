import PropTypes from 'prop-types'

const Button = ({ disabled, clickHandler, children }) => {
  return (
    <button type="button" className="button" onClick={clickHandler} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}
