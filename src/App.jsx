import Card from './assets/Card'
function App(){
  return(
    <>
    <img src="/public/img/OLX-Symbol.png" alt="" className='img'/>
    <div className='flex'>
      <div>
      <Card src="/public/img/SamsungGalaxyS23Ultra.webp" res=" Re: 30,00" name="Galaxy S23" dr="Model Town Lin Road, Lahore "></Card>

      </div>
      <div>
      <Card src="/public/img/0b8db853c28c9d32552b0217b17a4623.jpg" res="Res: 40,00" name="Galaxy S45" dr="Model Town Lin Road, karachi"></Card>

      </div>
      <div>
      <Card src="/public/img/pk-galaxy-a05-sm-a055-sm-a055flggpkd-539152011.webp" res="Res : 50,000" name="Galaxy A20" dr="pib krachi"></Card>

      </div>
      <Card/>
    </div>
    </>
  )
}

export default App