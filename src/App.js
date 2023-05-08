
import './App.css';
import React from "react";
import {Button, TextField, Fab , InputAdornment , FormControl, FormHelperText} from "@mui/material";
import { useState , useEffect } from 'react';
import { db } from "./firebase";
import TimeOfDay from './date';
import { collection , getDocs, addDoc, deleteDoc, doc, query, where} from "firebase/firestore";


function App() {
 


  const [items , setItems] = useState([]);

  const [newBill, setBill] = useState();
  const [newDueDate, setDueDate] = useState();
  const [newAmount, setAmount] = useState();
  const listCollectionRef = collection(db, "tracker"); // removed from function and added here

  

  


  const addItem = async () => {
    await addDoc(collection(db, "tracker"), {company: newBill , dueDate: newDueDate, amount: newAmount});
    window.location.reload(true);
  }


  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "tracker", id));
    window.location.reload(true);
  }


 
  useEffect(() => {
    //const listCollectionRef = collection(db, "tracker");

    const getItems =  async () => {
      const data = await getDocs(listCollectionRef);
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
     
    }
    getItems();
  },[])

  



  
    
  

  
  
  


  //with the function above


  return (
    <div>
    
    
   

  
  
    
      
    <header>
    <h1>Bill Tracker</h1>
    </header>

    <main>

    <div className='time'><TimeOfDay/></div>
    

    <section className='textfield'>
     
    
    <TextField    className = "tf" onChange = { (event) => setBill(event.target.value)} InputProps={{
          endAdornment: 
          
          (

            <InputAdornment position="end">
              Billing Company
            </InputAdornment>
          ),
        }}/> 
    
   
    
   
    <TextField   className = "tf" onChange = {(event) => setDueDate(event.target.value)}   InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              Due Date (Format: MM/DD/YYYY)
            </InputAdornment>
          ),
        }}/>
 

   
    <TextField    className = "tf" onChange = {(event) => setAmount(event.target.value)}   InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              $ Amount
            </InputAdornment>
          ),
        }} />
   
    <Button  className = ".MuiButton-outlined" variant="contained" onClick={addItem}>Add to List</Button>
    
    </section>
    

      <div className='list'>
    
      <h2>Bills due</h2>
    
  <ul>
      {items.map((item) => (

      
        <li style={{ backgroundColor: Date.now() > Date.parse(item.dueDate) ? "yellow" : "lightgrey" } } >
          <Fab variant = "extended" className="resize" size="small" aria-label="remove" onClick={() => { deleteItem(item.id) }}>DELETE</Fab> 
          Company: {item.company} &nbsp; &nbsp; &nbsp; &nbsp; 
          Due Date: {item.dueDate} &nbsp; &nbsp; &nbsp; &nbsp; 
          Amount owed: {item.amount}   </li>

      
      
    ))}; 
  </ul>
  <h3>Overdue Bills are highlighted yellow</h3>
</div>

</main>

    
</div>
  );
}








export default App;
