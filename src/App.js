import { Container} from "react-bootstrap";
import { person } from "./data";
import Datescount from "./components/Datescount";
import { DatesLists } from "./components/DatesLists";
import { DatesAction } from "./components/DatesAction";
import React,{ useState } from "react";
function App() {
  const [personData,setPersonData] = useState(person)
  const onDelete=()=> {
    setPersonData([])
  }
  const onViewData=()=> {
    setPersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Datescount person = {personData}/>
        <DatesLists person={personData}/>
        <DatesAction deleteData={onDelete}  onViewData={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
