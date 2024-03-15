import React from 'react'
import Card from './Card'
import Button from './atomic/Button'
import { sculptureList } from '../data'

const Gallery = () => {
  const endIndex = sculptureList.length
  const [index, setIndex] = React.useState(0)
  const [card, setCard] = React.useState(sculptureList[index])

  const nextCard = () => {
    if (index >= endIndex) {
      setIndex(0)
      setCard(sculptureList[index])
    } else {
      setIndex(index + 1)
      setCard(sculptureList[index])
    }
  }
  const prevCard = () => {
    if (index <= 0) {
      setIndex(0)
      setCard(sculptureList[index])
    } else {
      console.log(index)
      setIndex(index - 1)
      console.log(index)
      setCard(sculptureList[index])
    }
  }

  return (
    <div className="container">
      <article className="article">
        <div className="article-title">
          <Button
            text={'Next'}
            clickHandler={nextCard}
            disabled={index == endIndex}
          >
            Next Sculpture
          </Button>
          <Button
            text={'Previous'}
            clickHandler={prevCard}
            disabled={index == 0}
          >
            Previous Sculpture
          </Button>
        </div>
        <Card
          title={card.name}
          author={card.author}
          img_url={card.url}
          alt_text={card.alt}
          description={card.description}
          current={index}
          total={endIndex}
        />
      </article>
    </div>
  )
}

export default Gallery
