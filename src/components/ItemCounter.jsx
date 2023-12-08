import { useState } from "react";



export const ItemCounter = ({ onAdd, stock,initial }) => {
    const[count,setCount]=useState(initial);
   
   const handleIncreaseCount=()=>{

    if(stock>count){
        setCount(prev=>prev + 1)
    }
    
   }

   const handleDecreaseCount=()=>{

    if(1<count){
        setCount(prev=>prev - 1)
    }
    
   }

  const  handleAdd=()=>{
    onAdd(count)
    setCount(initial);
   }
   
    return (
        <>
        <div className="ContenedorDetail2">
        <div style={{display:"flex"}}>
                <div className="buttonCount" onClick={handleDecreaseCount}> - </div>
                <input className="inputCount" value={count} />
                <div className="buttonCount" onClick={handleIncreaseCount}> + </div>
            </div>

            <button className="BotonCard" onClick={handleAdd}>Agregar al Carrito</button>

        </div>
         

        </>
    );
}