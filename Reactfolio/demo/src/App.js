import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate'
import Card from './components/Card'

function App() {
  const itemThreeName="Surf-Excel";
  const response = [
    {
      itemName:"Tide",
      itemDate:"22",
      itemMonth:"May",
      itemYear:"2000"
    },
    {
      itemName:"Rin",
      itemDate:"30",
      itemMonth:"June",
      itemYear:"1999"
    },
    {
      itemName:"Vim",
      itemDate:"19",
      itemMonth:"September",
      itemYear:"2002"
    }
  ]
  return (
    
    <div>

      {/* Card , item, itemdate all are custom html element  */}


      <Card>
      <Item name={response[0].itemName}>
      Main hu giyan
     </Item>
     <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

     <Item name={response[1].itemName}>
      Main hoon bda takatwar
     </Item>
     <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

     <Item name={itemThreeName}>
      Mera gala hai bhut sureela
     </Item>
     <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      
     <div className="App"> Hello ji </div>

     
      </Card>
     
     
    
    </div>
   
  );
}

export default App;
