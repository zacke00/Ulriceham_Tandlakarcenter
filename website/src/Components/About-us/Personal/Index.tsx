import React from "react"
import "./Personal.css"

interface PersonalProps {
    called: number; // 0 or 1
}

export const Sted:React.FC<PersonalProps> = ({called}) => {
    return(
        <div>
            <div className={called === 0 ? "Profile-Picture-Sted" : "Profile-Picture-Called Sted"}>

            </div>
        </div>
    )
}

export const Hannes: React.FC<PersonalProps> = ({called}) => {

    return(
        <div>
            <div className={called === -1 ? "Profile-Picture-Hannes" : "Profile-Picture-Called Hannes"}>

            </div>
        </div>
    )
}
