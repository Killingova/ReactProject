import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Anmeldung',
    description:
      'Der erste Schritt in unserem Check-In-System, wo Sie sich einfach und sicher anmelden können.',
  },
  {
    image: jsxImg,
    title: 'QR-Code Scan',
    description:
      'Nutzen Sie unseren schnellen QR-Code-Scan für einen zügigen Check-In ohne Wartezeiten',
  },
  {
    image: propsImg,
    title: 'Termin',
    description:
      'Planen und verwalten Sie Ihre Termine direkt über unser System für eine effiziente Zeitgestaltung.',
  },
  {
    image: stateImg,
    title: 'Mitteilungen',
    description:
      'Erhalten Sie wichtige Updates und Mitteilungen in Echtzeit, um immer auf dem Laufenden zu bleiben.',
  },
];

export const EXAMPLES = {
  anmeldung: {
    title: 'Anmeldung ',
    description: 'This component provides the front-end for user authentication. It is a crucial part of securing the application and managing user sessions.',
    code: `
function Login() {
  return <h1>Please Log In</h1>;
}`
  },
  qrcodescan: {
    title: 'QR-Code Scan',
    description: 'This component integrates QR code scanning functionality, allowing users to quickly scan QR codes as part of the application workflow.',
    code: `
<div>
  <h1>Scan QR Code</h1>
  <p>Position your QR code within the frame to scan.</p>
</div>`
  },
  termin: {
    title: 'Termin',
    description: 'This component allows users to manage their appointments, displaying both upcoming and past appointments in a simple format.',
    code: `
<div>
  <h1>Your Appointments</h1>
  <p>See all your appointments here.</p>
</div>`
  },
  mitteilungen: {
    title: 'Mitteilungen',
    description: 'This component displays notifications and alerts to the user, ensuring they remain informed about important updates.',
    code: `
<div>
  <h1>Notifications</h1>
  <p>Check here for recent alerts and messages.</p>
</div>`
  },
};

