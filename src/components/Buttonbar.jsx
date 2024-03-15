import Button from "./atomic/Button"

const Buttonbar = () => {
  return (
    <>
      <Button text={'Next'} clickHandler={() => {console.log('Next')}}/>
      <Button text={'Previous'} clickHandler={() => {console.log('Previous')}}/>
    </>
  )
}

export default Buttonbar
