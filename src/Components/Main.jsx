import { useState } from "react"
import{languages} from "./languages"
import clsx from "clsx"

export default function Main(){

    const keyboard = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

    const [lang , setLang] =useState(()=>languagesArr())
    const [guessLetter , setGuessLetter]= useState('react') 
    const [guess , setGuess] =useState([])
    const [keyboardBtn , setKeyboardBtn]= useState(keyboard)
    
    
    const wrongCount = guess.filter(n => !guessLetter.includes(n)).length
    const isGameWon = [...guessLetter].every(letter => guess.includes(letter))
    
    function languagesArr(){
        const langArray= languages.map(n=>{
            return {
                n : n.name,
                b : n.backgroundColor,
                c : n.color,
            }
        })

        return langArray
    }

    const RenderLanguages =lang.map((n,index)=>{
        return  <p 
                key={index}
                style={{backgroundColor :n.b,
                color: n.c}
                }
                className={clsx({ "dead": wrongCount > index })}
                >{n.n}</p>
    })


    const RenderGuessLetter = guessLetter.split('').map(n=>{
        return <p>{n.toUpperCase()}</p>
    })


    const RenderKeyboard = keyboardBtn.map(n=>{

        const isGuess = guess.includes(n)
        const isCorrect = guessLetter.includes(n)
        let btnClass = "normal-btn"

        if(isGuess){
           btnClass = isCorrect ? "correct" : "wrong"
        }


        return <button 
        className={btnClass}
        onClick={()=>check(n)}
        >{n.toUpperCase()}
        </button>
    })

    function check(letter){
        setGuess(prev => [...prev,letter])
    }

    
    
    return (
        <main>

            {isGameWon || wrongCount>=8 ?<section className="game-status">

            <h2>
                {wrongCount>=8 ?"Game over!": isGameWon ?"You win!" : ''}
            </h2>

            <p>
                {wrongCount>=8 ?"You lose! Better start learning Assembly 😭": isGameWon ? "Well done!🎉" : ''}
            </p>

            </section> : ''}

            <section className="languages">
                {RenderLanguages}
            </section>

            <section className="guess-letter">
                {RenderGuessLetter}
            </section>

            <section className="keyboard">
                {RenderKeyboard}
            </section>

            { isGameWon ||wrongCount >= 8 ?<button className="new-game">New Game</button>:''}

        </main>
    )
}