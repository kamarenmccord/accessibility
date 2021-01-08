import { useState } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Visual from './Visual';
import Auditory from './Auditory';
import Seizures from './Seizures';
import Cognitive from './Cognitive';
import Motor from './Motor';
import Divelop from './Divelop';
import Buttons from './Buttons';
import Colors from './Colors';
import FontSize from './FontSize';
import TLDR from './TLDR';

function App() {

  const [content, setContent] = useState(MainContent);
  const [subContent, setSubContent] = useState('');

  return (
    <body className='app'>
      <Header returnFunc={setContent} />
      <main className='app__main'>
        <aside className='app__left'>
        <h3>Types of impairments</h3>
        <ul>
          <li onClick={()=>setContent(Visual)}><button>Visual</button></li>
          <li onClick={()=>setContent(Motor)}><button>Motor/mobility</button></li>
          <li onClick={()=>setContent(Auditory)}><button>Auditory</button></li>
          <li onClick={()=>setContent(Seizures)}><button>Seizures</button></li>
          <li onClick={()=>setContent(Cognitive)}><button>Cognitive</button></li>
        </ul>
        </aside>

        <div className='app__right'>
          {content}
          <div className='app__developerInfo'>
            <div className='controls'>
              <h3>How to improve accessibility as a developer</h3>
              <ul>
                <li onClick={()=>setSubContent(Divelop)}><button>Div-eloping</button></li>
                <li onClick={()=>setSubContent(Buttons)}><button>Buttons</button></li>
                <li onClick={()=>setSubContent(Colors)}><button>Colors</button></li>
                <li onClick={()=>setSubContent(FontSize)}><button>Font sizing</button></li>
                <li onClick={()=>setSubContent(TLDR)}><button>TL;DR</button></li>
              </ul>
              <div className="app__subcontent">
                {subContent}
              </div>
            </div>
          </div>
        </div>

        <div className='app__rightSubcontent'>
          <h4>Trying it here</h4>
          <p>Try tabbing though this page</p>
        </div>

      </main>
    </body>
  )}

export default App;
