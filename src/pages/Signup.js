import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)
function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const[rollno,setRollno] =useState('')
    
    const handleSubmit = () => {
        console.log(email, password,name,rollno)
        axios.post('http://localhost:5000/signup',
            {
                name: name,
                rollno:rollno,
                email: email,
                password: bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <h1 className="center"> Registration page for Students </h1>
        <div>

            Name:
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
                className="inputs" type="text" /> <br /> <br />
            Rollno:
            <input
                onChange={(e) => {
                    setRollno(e.target.value)
                }}
                value={rollno}
                className="inputs" type="text" /> <br /> <br />
            Email:
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password:
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/signin'}> ADD STUDENT </Link>
        </div>
    </>
    )
}


export default Signup