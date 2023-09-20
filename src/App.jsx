import './App.css'
import LineChart from './Component/LineCharts/Linechart';
import Navbar from './Component/Navbar/Navbar';
import Phones from './Component/Phones/Phones';
import PriceOptions from './Component/PriceOptions/PriceOptions';

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
