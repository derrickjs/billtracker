import React from 'react';
import { useEffect , useState } from 'react';



const TimeOfDay = () => {

  
  const [date, setDate] = useState(new Date());
 

  
  


  

  

  useEffect(
    () => {
      const d = setInterval(() => {
        setDate(new Date);
      }, 1000);
      return() => clearInterval(d);
    }
  );
  
 

  return (
    <div className='tyme'>
      
      <h2> Today is: {date.toLocaleDateString()}</h2>

     
    </div>
  );
};

export default TimeOfDay;
