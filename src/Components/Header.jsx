import logo from '../assets/logo.png';

export default function Header(){
    return (
        <header>
            <img src={logo} alt='logo'/>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </header>
    )
}