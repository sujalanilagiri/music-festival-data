import React from 'react';
export default function FestivalData (props) {  
   const DisplayMapObject = ({mapObject}) => {     
    const sortedMap = new Map([...mapObject].sort());
    return sortedMap ?[...sortedMap.keys()].map((element,key) =>{   
     return (
       <ul key={key+element}>
         <li key={"key1"+element}>
             {element}
             <DisplayArray key={key + element} arraytoDisplay = {mapObject.get(element)} />
         </li>
        </ul>
     );
     }) :null;
   }

   const display = Object.values(props.data).map((d, key) => {
     
        return (
          <div key={key+ d.recordLabel} >
            <li key={d.recordLabel}>
              {d.recordLabel
              }
            </li>
            <DisplayMapObject  key={"bands"+ key} mapObject={d.bands} />
          </div>
          );
        });

        const DisplayArray = ({arraytoDisplay}) => {
            return arraytoDisplay ?arraytoDisplay.map((element,key) =>{
           return(  <ul key={key+ element}>
                 <li key={"bandname"+ element}>
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