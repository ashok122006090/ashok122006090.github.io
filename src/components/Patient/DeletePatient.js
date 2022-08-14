import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DeletePatient()
{
    const [userRole, setUserRole] = useState("Admin");
    const [id, setId] =useState();
    useEffect(()=> {

        if(userRole === "Admin")
        {
            let URL = "http://127.0.0.1:8080/patient" + id ;
            axios.delete(URL)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             })    
        }
    });
    return <div>
        <div className="container">
            <div className="color3 head-font-1">
                <h1>Delete Patient</h1>
                <hr />
            </div>
            <section className="query">
                <div className="flex-row container">
                    <div className="left">
                
                <form>
                <div className="input__wrapper">
                    <input className="input"
                        type="numeric"
                        id="id"
                        placeholder="Patient Id" 
                        required value={id}
                        onChange={(e) => setId(e.target.value)}/>    
                </div>
                <button className="btn form-btn" id="form-submit-btn" onClick={DeletePatient} disabled={!id}>
                    Delete
                </button>
                </form>
                </div>
                </div>
            </section>
        </div>
    </div>
}