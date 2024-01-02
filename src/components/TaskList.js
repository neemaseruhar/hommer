import { useItem } from "../context/ItemContext";

import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';




export const TaskList = ({editItem,setEditItem}) => {

  const {addItem,items} = useItem();
    
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(editItem.id){
          const updatedItemList = items.map(todo => (
            editItem.id === todo.id ? {id:editItem.id, title:editItem.title , link: e.target.link.value, icon:e.target.icon.value } : todo
          ))
          addItem(updatedItemList)
          setEditItem({})
       
    }
    else{
          const newlist ={
        id: new Date().getTime(),
        title: e.target.title.value,
        // textarea: e.target.details.value,
        link: e.target.link.value,
        icon:e.target.icon.value
    }
    addItem([...items,newlist])
    setEditItem({})
   
    }
   
    
   }
   
 
  return (
    <div >
        <form onSubmit={handleSubmit} className="create-note">
          <button type="submit" > {editItem.id ? <UpdateIcon /> : <AddIcon />}</button>
          <div class="input-group">
            <label htmlFor="title" className="labelfield" >App Name</label>
            <input type="text" name="title"  autoComplete="off" value={editItem.title || ""} onChange={e => setEditItem({...editItem,title:e.target.value})} className="inputfield" />
          </div>

          <div class="input-group">
            <label htmlFor="link" className="labelfield">Website Url</label>
            <input type="text" name="link"   value={editItem.link || ""} onChange={e => setEditItem({...editItem, link: e.target.value})} autoComplete="off"  className="inputfield"  />
          </div>

          <div class="input-group">
            <label htmlFor="icon" className="labelfield">App icon</label>
            <input type="text" name="icon"   value={editItem.icon || ""} onChange={e => setEditItem({...editItem, icon: e.target.value})} autoComplete="off" className="inputfield"  />
          </div>

          {/* <div class="input-group">
            <label htmlFor="details" className="labelfield">Notes</label>
            <textarea  type="text" name="details"  value={editItem.textarea || ""} onChange={e =>setEditItem({...editItem, textarea: e.target.value}) } autoComplete="off" className="inputfield"  />
           
          </div>   */}
        </form>
    </div>
  )
}
