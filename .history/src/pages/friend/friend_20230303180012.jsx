import { useState } from "react"

function Friend() {
    const [isOnline, setIsOnline] = useState(null)

    return isOnline ? 'online':'offline'
}

export  default Friend