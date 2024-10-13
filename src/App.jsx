import Card from './assets/Card'
import Galaxy from '../src/Img/Galaxy.webp'
import Mobile from '../src/Img/Mobile.jpg'
import Oppo from '../src/Img/Oppo.webp'
import OLX from '../src/Img/OLX-Symbol.png'
function App(){
  return(
    <>
    <img src="/src/Img/OLX-Symbol.png" alt="" className='img'/>
    <div className='flex'>
      <div>
      <Card src="/src/Img/Mobile.jpg" res=" Re: 30,00" name="Galaxy S23" dr="Model Town Lin Road, Lahore "></Card>

      </div>
      <div>
      <Card src="/src/Img/Oppo.webp" res="Res: 40,00" name="Galaxy S45" dr="Model Town Lin Road, karachi"></Card>

      </div>
      <div>
      <Card src="/src/Img/Galaxy.webp" res="Res : 50,000" name="Galaxy A20" dr="pib krachi"></Card>

      </div>
      <Card/>
    </div>
    </>
  )
}

export default App