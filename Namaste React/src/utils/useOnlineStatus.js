import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const[onlineStatus, setOnlinetatus] = useState(true);

    useEffect(() =>{
        window.addEventListener("offline", ()=>{
            setOnlinetatus(false);
        });

        window.addEventListener("online", () => {
            setOnlinetatus(true);
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;