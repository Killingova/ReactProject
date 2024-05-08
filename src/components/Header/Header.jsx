import reactImg from '../../assets/fREY-removebg.png';
import './Header.css';


const FreyTitle = ['Quincy', 'QR-Code', 'Check-In'];



// Funktion zur Generierung einer zufälligen Ganzzahl
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }


export default function Header() {
    // Achtung: genRandomInt sollte das letzte Element des Arrays berücksichtigen können
    const wowWort = FreyTitle[genRandomInt(FreyTitle.length - 1)];

    return (
      <header>
        <img src={reactImg} alt="Frey ADV" />
        <h1>{wowWort} Express</h1>
        <p>Nutzen Sie unseren schnellen QR-Code-Scan zum einfachen Check-in.</p>
      </header>
    );
  }