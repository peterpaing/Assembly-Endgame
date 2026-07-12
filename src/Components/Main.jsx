import { useState } from "react"
import{languages} from "./languages"
import clsx from "clsx"
import { getFarewellText } from "./utils"

export default function Main(){

    const keyboard = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

    const [lang , setLang] =useState(()=>languagesArr())
    const [guessLetter , setGuessLetter]= useState('react') 
    const [guess , setGuess] =useState([])
    const [keyboardBtn , setKeyboardBtn]= useState(keyboard)
    
    
    const wrongCount = guess.filter(n => !guessLetter.includes(n)).length
    const isGameWon = [...guessLetter].every(letter => guess.includes(letter))
    const isGameOver = wrongCount >= 8
    
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
        
        return <p
             className={clsx(isGameOver && !guess.includes(n) ? "wrong" : '')}>
            {isGameOver || guess.includes(n) ? n.toUpperCase():''}
            </p>
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

    function newGameBtn (){
        
    }
    
    return (
        <main>

            {isGameWon ? (
                <section className="game-status won">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </section> 
            ) : isGameOver ? (
                <section className="game-status lost">
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </section>
            ) : wrongCount>=1 ?(
                <section className="game-status going">
               <p className="farewell">{getFarewellText(lang[wrongCount-1]?.n)}</p>
               </section>
            ) :''}


            <section className="languages">
                {RenderLanguages}
            </section>

            <section className="guess-letter">
                {RenderGuessLetter}
            </section>

            <section className="keyboard">
                {RenderKeyboard}
            </section>

            { isGameWon || isGameOver ?<button className="new-game" onClick={newGameBtn}>New Game</button>:''}

        </main>
    )
}