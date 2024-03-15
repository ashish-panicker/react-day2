import Buttonbar from './components/Buttonbar'
import Card from './components/Card'
import { sculptureList } from './data'

function App() {

  let startIndex = 1
  let endIndex = sculptureList.length

  return (
    <div className="container">
      <article className="article">
        <div className="article-title">
          <Buttonbar />
        </div>
        <Card
          title={'Title'}
          author={'Author'}
          img_url={'img'}
          alt_text={'alt'}
          description={'desc'}
          current={startIndex}
          total={endIndex}
        />
      </article>
    </div>
  )
}

export default App
