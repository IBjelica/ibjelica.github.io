import { createContext, useState } from "react";

export const HoveredContext = createContext(null)

export default function HoveredContextProvider({children}) {
    const [hovered, setHovered] = useState(false)

    return (
        <HoveredContext.Provider value={{ hovered, setHovered }}>
            {children}
        </HoveredContext.Provider>
    )
}