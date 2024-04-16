import { createContext } from "react";
import React from "react";
import { DentistContextType, IDentist } from "../../Types/Types";


export const dentistContext = React.createContext<DentistContextType | null>(null)


export const DentistProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [currentDentist, setCurrentDentist] = React.useState<IDentist[]>([{
        name: "Hannes Berglund",
        index: 0,
        title: "Dentist",
        description: "Hannes is a dentist with 10 years of experience",
        image: ""

    },
    {
        name: "Sara Berglund",
        index: 1,
        title: "Dentist",
        description: "Sara is a dentist with 10 years of experience",
        image: ""
    },
    {
        name: "Kalle Berglund",
        index: 2,
        title: "Dentist",
        description: "Kalle is a dentist with 10 years of experience",
        image: ""
    }]);
    
    const setDentist = (index: number) => {
        setCurrentDentist(currentDentist.filter(dentist => dentist.index === index));
    }

    return (
        <dentistContext.Provider value={{
            currentDentist,
            setDentist,
            }}>
            {children}
        </dentistContext.Provider>
    )
}

