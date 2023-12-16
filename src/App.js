import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import { useState } from "react";
import { ShowItems } from "./components/ShowItems";

function App() {
 const [items,setItems] = useState([]);
 const [editItem,setEditItem] = useState({})
  return (
    <div className="App">
      <Header />
      <TaskList items={items} setItems={setItems} editItem={editItem} setEditItem={setEditItem}/>
      <ShowItems items={items} setItems={setItems} editItem={editItem} setEditItem={setEditItem}/>
    
    </div>
  );
}

export default App;
