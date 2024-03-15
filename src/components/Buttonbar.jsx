import PropTypes from 'prop-types'
import Button from "./atomic/Button"

const Buttonbar = ({next, prev}) => {
  return (
    <>
      <Button text={'Next'} clickHandler={next}/>
      <Button text={'Previous'} clickHandler={prev}/>
    </>
  )
}

export default Buttonbar

Buttonbar.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func
}