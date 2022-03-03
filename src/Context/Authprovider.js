import React, { createContext, useState } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [gender, setGender] = useState("");
    const [status,setStatus] = useState("");
    const [species, setSpecies] = useState("")
    

    const [datalist, setDatalist] = useState({})
    return (
        <AuthContext.Provider
            value={{
                gender, setGender, datalist, setDatalist, status,setStatus,species,setSpecies
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}