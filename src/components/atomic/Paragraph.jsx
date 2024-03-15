import PropTypes from 'prop-types'

const Paragraph = ({ text }) => {
  return <p className='para'>{text}</p>
}

export default Paragraph

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
}
