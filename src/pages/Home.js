import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
// import {faTrash} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Home({userData}) {
    const navigate = useNavigate()
    const [data,setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
        fetch("http://localhost:5000/getAllUser",{
            method:"GET",
        })
        .then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userData");
            setData(data.data);
            console.log(data);
        })
    }, [])
    // const deleteUser=(id,name)=>{
    //     if(window.confirm(`Delete ${name} for sure?`)){
    //         fetch("http://localhost:5000/deleteUser",{
    //         method:"POST",
    //         crossDomain: true,
    //         headers:{
    //             "Content-Type" : "application/json",
    //             Accept:"application/json",
    //             "Access-Control-Allow-Origin":"*",
    //         },
    //         body: JSON.stringify({
    //             userid:id,
    //         }),
    //     })
    //     .then((res) =>res.json())
    //     .then((data) =>{
    //         alert(data.data);
    //     });
    // }
    //     else{

    //     }
    // };

    return (
        <div>
            <table style={{width:900,textAlign:"center" }}>
                <th>Name</th>
                <th>Rollno</th>
                <th>Email</th>
                <th>Password</th>
                    {data.map(i =>{
                        return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.rollno}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                            </tr>
                        )
                    })}
            </table>
        <div className="card">
            <span> {localStorage.getItem('EMAIL')} </span>
                 <button style={{ color: "firebrick" }}
                     onClick={() => {
                         localStorage.clear()
                         navigate('/signin')
                     } }
                 > Logout </button>
        </div>
        </div>
    )
}


export default Home