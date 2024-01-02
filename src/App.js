import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import {  useState } from "react";
import { ShowItems } from "./components/ShowItems";



function App() {

 const [editItem,setEditItem] = useState({})
 

  return (
    <div className="App">
      <Header />
      <TaskList  editItem={editItem} setEditItem={setEditItem}/>
      <ShowItems editItem={editItem} setEditItem={setEditItem}/>
     
    </div>
  );
}

export default App;
