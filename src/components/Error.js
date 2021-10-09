import React from 'react'
import './../styles/Error.css'
function Error({mensaje}) {
    return (
        <div className="Error">
            {mensaje}
        </div>
    )
}

export default Error
