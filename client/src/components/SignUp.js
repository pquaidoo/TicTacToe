import React, {useState} from "react";

function SignUp(){
        const [user, setUser] = useState(null);
    return(
    <div className = "signUp">
        <label>Sign Up</label>
        <input
         placeholder ="First Name" 
         onChange={(event) => {
            setUser({...user,firstName: event.target.value });
        }}
        />
    </div>
    );
}

export default SignUp;