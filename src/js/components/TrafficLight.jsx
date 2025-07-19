import React, { useState } from 'react';
 
const TrafficLight= ()=>{

    const [ stopGlow, setstopGlow ] = useState('0 0 0 10px rgba(255, 0, 0, 0.8)')
    const [ WarningGlow, setWarningGlow ] = useState('0 0 0 0 rgba(255, 255, 0, 0.8)')
    const [ GoGlow, setGoGlow ] = useState('0 0 0 0 rgba(0, 255, 76, 0.8)')
    
    
    function StopcolorGlow(){
        if (stopGlow == '0 0 0 0 rgba(255, 0, 0, 0.8)'){
            setstopGlow('0 0 20px 10px rgba(255, 0, 0, 0.8)')
             setGoGlow('0 0 0 0 rgba(0, 255, 76, 0.8)')
              setWarningGlow('0 0 0 0 rgba(255, 255, 0, 0.8)')
         }
        else{setstopGlow('0 0 0 0 rgba(255, 0, 0, 0.8)')
            }
            
        }

     function WarningcolorGlow(){
          if (WarningGlow == '0 0 0 0 rgba(255, 255, 0, 0.8)'){
            setstopGlow('0 0 0 0 rgba(255, 0, 0, 0.8)')
             setGoGlow('0 0 0 0 rgba(0, 255, 76, 0.8)')
              setWarningGlow('0 0 20px 10px rgba(255, 255, 0, 0.8)')
         }
        else{setWarningGlow('0 0 0 0 rgba(255, 255, 0, 0.8)')
            }
            
        }

    function GocolorGlow(){
         if (GoGlow =='0 0 0 0 rgba(0, 255, 76, 0.8)'){
            setstopGlow('0 0 0 0 rgba(255, 0, 0, 0.8)')
             setGoGlow('0 0 20px 10px rgba(0, 255, 76, 0.8)')
              setWarningGlow('0 0 0 0 rgba(255, 255, 0, 0.8)')
         }
        else{setWarningGlow('0 0 0 0 rgba(255, 255, 0, 0.8)')
            }
            
        }
    
       

        
    return(
        <>
        <div className='container row justify-content-center  '>
        <div className='bg-secondary col-1  p-2'> 
            <button onClick={StopcolorGlow} style={{boxShadow:stopGlow}} className='bg-danger rounded-circle p-4'></button>
             <button onClick={WarningcolorGlow} style={{boxShadow:WarningGlow}} className='bg-warning rounded-circle p-4'></button>
              <button onClick={GocolorGlow} style={{boxShadow:GoGlow}} className='bg-success rounded-circle p-4'></button>
          
        </div>
        </div>
        </>
    )    
};

export default TrafficLight;
