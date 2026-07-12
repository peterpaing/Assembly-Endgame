import { useState } from "react"
import{languages} from "./languages"

export default function Main(){

    const [lang , setLang] =useState(()=>languagesArr())

    function languagesArr(){
        const langArray= languages.map(n=>{
            return {
                n : n.name,
                b : n.backgroundColor,
                c : n.color
            }
        })

        return langArray
    }

    const RenderLanguages =lang.map(n=>{
        return  <p style={{backgroundColor :n.b,
                   color: n.c}
                  }>{n.n}</p>
    })

    return (
        <main>
            <section className="game-status">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
            </section>
            <section className="languages">
                {RenderLanguages}
            </section>
        </main>
    )
}