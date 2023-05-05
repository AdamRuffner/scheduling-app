import { toast } from "react-toastify";

export async function handleRegister(email, username, password, navigate) {
    try {
        const request = await fetch('http://localhost:4000/register', {
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
        
        let data = await request
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

export async function handleLogin(username, password, navigate) {
    try {
        const request = await fetch('http://localhost:4000/login', {
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
        const data = await request
        if(data.error) {
            toast.error(data.error)
        } else {
            toast.success("Login Successful")
            localStorage.setItem('_id', data._id);
            localStorage.setItem('_myEmail', data._email);
            navigate('/book');
        }
    } catch (err) {
        toast.error("Login Failed")
    }
}