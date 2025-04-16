"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Typography } from 'antd'
import { useSession } from "next-auth/react";

const Loaderinicioplataforma = () => {
    const { data: session, status } = useSession();
    const [heightText, setHeightText] = useState(false)
    const titleModule = useRef(null)
    const { Title } = Typography

    const searchLetter = () => {
        let search = false
        const letras = ['q', 'y', 'p', 'g', 'j']
        // letras.map(l => {
        //     const value = session?.user.Nombres.includes(l)
        //     if(value){
        //         search = true
        //     }

        //     return true
        // })

        if(search){
            setHeightText(true)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('usuusuario')){
            searchLetter()
            // getAudioGreeting()
        }
    }, [localStorage.getItem('usuusuario')])

    return(
        <div 
        id="iniciarReproduccion"
        className={`Container-Presentation Presentation-Up `}>
            <div style={{marginTop: '-8vh'}}>
                <div className="Container-Item-Top-Presentation" style={{alignItems: 'end'}}>
                    <Title
                        className="Title-Presentacion"
                        ref={titleModule} 
                        style={{lineHeight: heightText ? '100px': '67px'}}
                    >
                        Hola 
                        {/* {session?.user.Nombres?.split(" ")[0] || ''} */}

                    </Title>
                    {/* <audio controls={false} ref={audioRef} muted={true}></audio> */}
                    <Title 
                        className={`Subtitle-Presentacion ${heightText ? 'Height-Big' : 'Height-Regular'}`}
                        level={3}
                    >
                        Bienvenido <br />
                        a la plataforma de
                    </Title>
                </div>
                <div className="Container-Item-Bottom-Presentation">
                    <Title
                        className="Title-Presentacion"
                    >
                        CCD 2025
                    </Title>
                </div>
            </div>
        </div>
    )
}

export default Loaderinicioplataforma