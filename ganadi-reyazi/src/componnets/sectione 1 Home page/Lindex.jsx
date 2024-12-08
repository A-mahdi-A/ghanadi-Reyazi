import React from 'react'
import LogoMotione from '../../assets/vidio/Logo Motione.mp4'
function Leftside() {
    return (
        <><div id='Logomotione'><video src={LogoMotione} width="95%"
            autoPlay
            muted
            loop
            playsInline></video></div>
        </>
    )
}

export default Leftside
