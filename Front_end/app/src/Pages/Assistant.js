import React from "react";
import { Button } from "react-bootstrap";
import './Table.css';

const data=[
    {Name:"Assis1",ID:"01",Tele:"012345679",StoreID:"34"},
    {Name:"Assis1",ID:"01",Tele:"012345679",StoreID:"34"}
]

// const Assistant=()=>{
//     return(
        
//         <div className="Table">
//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>ID</th>
//                     <th>Tele</th>
//                     <th>StoreID</th>
//                 </tr>
//                 {data.map((val,key)  => {
//                     return(
//                         <tr key={key}>
//                         <td>{val.Name}</td>
//                         <td>{val.ID}</td>
//                         <td>{val.Tele}</td>
//                         <td>{val.StoreID}</td></tr>
//                     )
//                 })}
//             </table>
//         </div>
//     );
// }

const Assistant=()=>{
    let new=[];
    new.push(<div className="Table">
    <table>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Tele</th>
            <th>StoreID</th>
        </tr>
        {data.map((val,key)  => {
            return(
                <tr key={key}>
                <td>{val.Name}</td>
                <td>{val.ID}</td>
                <td>{val.Tele}</td>
                <td>{val.StoreID}</td></tr>
            )
        })}
    </table>
</div>)
}
export default Assistant;