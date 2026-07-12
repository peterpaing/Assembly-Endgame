import { useState } from "react"
import{languages} from "./languages"

export default function Main(){

    const keyboard = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

    const [lang , setLang] =useState(()=>languagesArr())
    const [guessLetter , setGuessLetter]= useState('react') 
    const [keyboardBtn , setKeyboardBtn]= useState(keyboard)

    
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


    const RenderGuessLetter = guessLetter.split('').map(n=>{
        return <p>{n.toUpperCase()}</p>
    })


    const RenderKeyboard = keyboardBtn.map(n=>{
        return <button>{n.toUpperCase()}</button>
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

            <section className="guess-letter">
                {RenderGuessLetter}
            </section>

            <section className="keyboard">
                {RenderKeyboard}
            </section>

        </main>
    )
}