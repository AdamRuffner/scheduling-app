import { toast } from "react-toastify";

export  function handleRegister(email, username, password, navigate) {
    try {
        const request =  fetch('http://localhost:4000/users', {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
                email, 
                username, 
                password,
            }),
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
            },
        });
        
        let data = request
        if(data.error) {
            toast.error({message: "heelo"});
            console.log(request,"YOOOO")
        } else {
            toast.success("Account Created!");
            console.log(email, username, password)
            navigate('/');
        }
    } catch (err) {
        console.error(err)
        toast.error("Account Creation Failed")
    }
};

export function handleLogin(username, password, navigate) {
    try {
        const request =  fetch('http://localhost:4000/users/login', {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
                username,
                password,
            }),

            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
            },
        });
        
        const data = request;
        if(data.error) {
                toast.error(data.error)
            } else {
                    toast.success("Login Successful")
                
                    navigate('/book');
                }
            } catch (err) {
                toast.error("Login Failed")
                
    }
}