import Card from './components/Card'
import rengokuImage from './assets/rengokuImage.webp';
import gyomeiImage from './assets/gyomeiImage.jpg';

function App() {


  return (
    <>
    <Card username="Rengoku" Anime='Demon Slayer' title='Flame Hashira' img={rengokuImage}/>
    <br />
    <Card username="Gyomei"  Anime='Demon Slayer' title='Stone Hashira' img={gyomeiImage}/>
    <br />
    <Card />
      
    </>
  )
}

export default App
