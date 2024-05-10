import {useState} from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

import { QrCode, LogIn, Calendar, Bell } from 'lucide-react';

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'anmeldung', 'qrcodescan', 'termin', 'mitteilungen'
     setSelectedTopic(selectedButton);
     //console.log(selectedTopic);
  }

  let tabContent;

  if (!selectedTopic) {
    tabContent = <p>Please select a topic.</p>;
  } else {
    const { title, description, code } = EXAMPLES[selectedTopic];
    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre><code>{code}</code></pre>
      </div>
    );
  }

    return (
        <section id="examples">
        <h2>Quick-Start-Anleitung</h2>
        <menu>
         <TabButton isSelected={ selectedTopic=== 'anmeldung'} onSelect={() => handleSelect('anmeldung')}>
            <LogIn size={20} color="blue"/>
             Anmeldung</TabButton>
         <TabButton isSelected={ selectedTopic=== 'qrcodescan'} onSelect={() => handleSelect('qrcodescan')}>
            <QrCode size={20} color="green"/>
             QR-Code Scan</TabButton>
         <TabButton isSelected={ selectedTopic=== 'termin'} onSelect={() => handleSelect('termin')}>
            <Calendar size={20} color="red"/>
             Termin</TabButton>
         <TabButton isSelected={ selectedTopic=== 'amitteilungen'} onSelect={() => handleSelect('mitteilungen')}>
            <Bell size={20} color="orange"/> 
            Mitteilungen</TabButton>
         </menu>
         {tabContent}
      </section> 
    );
}