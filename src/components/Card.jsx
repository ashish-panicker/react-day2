import PropTypes from 'prop-types'
import Paragraph from './atomic/Paragraph'

const Card = ({
  title,
  author,
  img_url,
  alt_text,
  description,
  current,
  total,
}) => {
  return (
    <div className="card">
      <Paragraph text={`${current} of ${total}`} />
      <h2>
        {title} by {author}
      </h2>
      <img src={img_url} alt={alt_text} />
      <Paragraph text={description} />
    </div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  img_url: PropTypes.string,
  alt_text: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.number,
  total: PropTypes.number,
}
