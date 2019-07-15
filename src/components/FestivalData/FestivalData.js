import React from 'react';
export default function FestivalData (props) {  
   const DisplayMapObject = ({mapObject}) => {     
    const sortedMap = new Map([...mapObject].sort());
    return sortedMap ?[...sortedMap.keys()].map((element,key) =>{   
     return (
       <ul>
         <li key={key}>
             {element}
             <DisplayArray key={key} arraytoDisplay = {mapObject.get(element)} />
         </li>
        </ul>
     );
     }) :null;
   }

   const display = Object.values(props.data).map((d, key) => {
     
        return (
          <div key={key} >
            <li key={key}>
              {d.recordLabel
              }
            </li>
            <DisplayMapObject  mapObject={d.bands} />
          </div>
          );
        });

        const DisplayArray = ({arraytoDisplay}) => {
            return arraytoDisplay ?arraytoDisplay.map((element,key) =>{
           return(  <ul>
                 <li key={key}>
                     {element}
                 </li>
             </ul>
            )}):null;
       
           }
        
    
        return(
          <div>
            <ul>
              { props.data ?display:null }
            </ul>
          </div>
        );
}