import { useEffect, useState } from 'react';
import './App.css';
import YearsCounter from './YearsCounter';
import github from './imgs/github.png';
import linkedin from './imgs/linkedin.png';
import portrait from './imgs/IMG_7719.jpg';

const tabs = ['Profile', 'Research', 'Employment', 'Teaching', 'Courses', 'Goals', 'CV'];
const birthDate = new Date(2003, 8, 24);
const resumeUrl = process.env.PUBLIC_URL + '/resume.html';

const goals = [
  { label: 'Get an Internship', complete: true },
  { label: 'TA', complete: true },
  { label: 'TA for CSE311', complete: true },
  { label: 'TA for CSE421', complete: true },
  { label: 'TA for CSE312', complete: true },
  { label: 'TA for CSE431', complete: true },
  { label: 'Do Research', complete: true },
  { label: 'Get my research published', complete: false },
  { label: 'Graduate from Undergrad', complete: true },
  { label: 'Finish BSMS', complete: true },
  { label: 'Work a normal job', complete: true },
  { label: 'Run a sub 1:23 Half-Marathon', complete: false },
  { label: 'Run a sub 3:00 Marathon', complete: false },
  { label: 'Run a sub 2:52 Marathon', complete: false },
  { label: 'Run an Ultra-Marathon', complete: true },
  { label: 'Get into a PhD program', complete: false },
];

function currentTab() {
  return tabs.find(tab => '#' + tab.toLowerCase() === window.location.hash) || 'Profile';
}

export default function App() {
  const [active, setActive] = useState(currentTab);
  useEffect(() => {
    const change = () => setActive(currentTab());
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);

  return <div className="shell">
    <header>
      <nav aria-label="Portfolio sections">{tabs.map(tab =>
        <a key={tab} href={'#' + tab.toLowerCase()} aria-current={active === tab ? 'page' : undefined}>{tab}</a>
      )}</nav>
      <nav className="socials" aria-label="Social profiles">
        <a href="https://github.com/NULLtm/" title="GitHub"><img src={github} alt="GitHub"/></a>
        <a href="https://www.linkedin.com/in/nullthemoment/" title="LinkedIn"><img src={linkedin} alt="LinkedIn"/></a>
      </nav>
    </header>
    <main key={active}>
      {active === 'Profile' && <section className="profile">
        <div><p className="kicker">Software Development Engineer · Amazon</p>
          <h1>Owen Boseley</h1>
          <p>A little about me ~ I care a lot about making math digestable for everyone (that includes me!). I dabble a bit in every part of theoretical computer science, but the following questions fill a lot of my time currently:</p>
          <ul>
            <li>What is the correct measure of hardness in computation?</li>
            <li>How best can we utilize hardness?</li>
            <li>What are the limits of communication between two parties?</li>
            <li>Is quantum information more powerful than classical?</li>
            <li>In what ways is QIP different than its twin, IP?</li>
          </ul>
          <p>And some more exotic questions of mine:</p>
          <ul>
            <li>How best can we navigate math, learning, and merit in the age of AI?</li>
            <li>How best can we convince the next generation to care about theoretical computer science?</li>
            <li>How best can we teach them about this field?</li>
          </ul>
          <p>If any of these questions also interest you, please reach out!!</p>

          <p className="email">nulltm01 [at] gmail [dot] com</p>
          <div className="age"><span>Age in years</span><YearsCounter startDate={birthDate}/></div>
        </div>
        <figure><div className="photo"><img src={portrait} alt="Owen Boseley"/></div>
        </figure>
      </section>}
      {active !== 'Profile' && <section className="panel"><h1>{active === 'CV' ? 'Résumé / CV' : active}</h1>
      {active === 'Goals' && <ul className="goal-list">
        {goals.map(({ label, complete }) => <li key={label}>
          <span>{label}</span>
          <span className={complete ? 'status achieved' : 'status'}>{complete ? 'Achieved' : 'Open'}</span>
        </li>)}
      </ul>}
      {active === 'Teaching' && <div className='entries teaching'>
<p className='assignment'>Spring 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse123/23sp/">CSE123</a> @ University of Washington</p>
        <p className='assignment'>Summer 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse123/23su/">CSE123</a> @ University of Washington</p>
        <p className='assignment'>Autumn 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/23au/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Winter 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/24wi/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Spring 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/24sp/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Autumn 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse421/24au/">CSE421</a> @ University of Washington</p>
        <p className='assignment'>Winter 2025 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse421/25wi/">CSE421</a> @ University of Washington</p>
        <p className='assignment'>Spring 2025 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse421/25sp/">CSE421</a> @ University of Washington</p>
        <p className='assignment'>Autumn 2025 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse431/25au/">CSE431</a> @ University of Washington</p>
        <p className='assignment'>Winter 2026 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse312/26wi/">CSE312</a> @ University of Washington</p>
        <p className='assignment'>Spring 2026 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse421/26sp/">CSE421</a> @ University of Washington</p>
      </div>}
      {active === 'Employment' && <div className='entries employment'>
<p><a className='aws' href='https://amazon.jobs/content/en/teams/amazon-security'>Amazon</a> Software Development Engineer I</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Austin TX, Current</p>
        </div>

        <p><a className='aws' href='https://www.amazonfuse.com/'>Amazon</a> Software Development Intern</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Seattle WA, Jun - Sep 2025</p>
        </div>

        <p><a className='aws' href='https://aws.amazon.com/media-services/elemental/'>AWS</a> Software Engineer Intern</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Portland OR, Jun - Sep 2024</p>
        </div>

        <p><a className='aws' href='https://www.cs.washington.edu/students/ta'>Paul G. Allen</a> Teaching Assistant</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Seattle WA Mar 2023 - Jun 2026</p>
        </div>

        <p><a className='aws' href='https://www.harbormontessori.org/'>HMS</a> Maintenance Intern</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Gig Harbor WA, Jun 2022 - Sep 2022</p>
        </div>

        <p><a className='aws' href='https://www.thehubgigharbor.com/'>Hub</a> Dish Washer</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Gig Harbor WA, Jun 2022 - Aug 2022</p>
        </div>

        <p><a className='aws' href='https://www.invitedclubs.com/clubs/canterwood-golf-country-club'>Canterwood Country Club</a> Dish Washer</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Gig Harbor WA, Jun 2021 - Sep 2021</p>
        </div>
      </div>}
      {active === 'Research' && <div className='entries research'>
<div className='block'>
        <p className='subtitle'>Additional Communication Upper Bounds in Quantum Verification</p>
        <div className='line'></div>
        <p className='sub'>Jun 2026 - Dec 2026</p>
        <p>I did a project with a few friends under Chinmay Nirkhe regarding the communication complexity of quantum verification. We tackled QIP and QMA[k]. We proved upperbounds for QMA[k] and developed mathematics to understand how Cliffords affect the structure of QIP. Preprint to come!</p>
      </div>
        <div className='block'>
        <p className='subtitle'>Simple Proof Tools for Quantum Hardness of Approximation Results</p>
        <div className='line'></div>
        <p className='sub'>Oct 2025 - Jun 2026</p>
        <p>I worked on a small project with Professor Mitali Bafna to come up with a new, simpler proof for a famous result in quantum complexity called the "Detectability Lemma." We worked on extending such a proof to more complex cases.</p>
      </div>
        <div className='block'>
        <p className='subtitle'>WXML Quantum Measurement Models</p>
        <div className='line'></div>
        <p className='sub'>Mar 2025 - Jun 2025</p>
        <p>I participated in the UW Mathematics WXML Research Group. A few other undergrads and I worked alongside Professor Benjamin Feintzeig to investigate models of how quantum measurement works. Specifically we worked with the "method of arbitrary functions" to show that the state collapse that occurs during measurment could be an approximate collapse instead of full. We met weekly to assess progress and ideas, and we presented our work at the end of the quarter to the department.</p>
      </div>
      <div className='block'>
        <p className='subtitle'>Cornbear Grading Assistant</p>
        <div className='line'></div>
        <p className='sub'>Jun 2023 - Dec 2024</p>
        <p>I led a culmination of static analysis and CSEd research project called Cornbear. <br></br> Our goal is to provide an efficient and useful grading assistant to our <a href='https://courses.cs.washington.edu/courses/cse14x/ta/'>CSE12X</a> TAs @ UW!</p>
      </div>
      </div>}
      {active === 'Courses' && <div className='entries courses'>
<p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse121/'>CSE121</a>: Introduction to Computer Programming I</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse122/'>CSE122</a>: Introduction to Computer Programming II</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse123/'>CSE123</a>: Introduction to Computer Programming III</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse311/'>CSE311</a>: Foundations of Computing I</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse312/'>CSE312</a>: Foundations of Computing II</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse331/'>CSE331</a>: Software Design and Implementation</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse332/'>CSE332</a>: Data Structures and Parallelism</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse333/'>CSE333</a>: Systems Programming</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse421/'>CSE421</a>: Introduction to Algorithms</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse422/'>CSE422</a>: Advanced Toolkit for Modern Algorithms</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse431/'>CSE431</a>: Introduction to Theory of Computation</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse521/'>CSE521</a>: Design and Analysis of Algorithms I</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse493g1/24wi/'>CSE493G</a>: Deep Learning</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse525/'>CSE525</a>: Randomized Algorithms and Probabilistic Analysis</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse426/'>CSE426</a>: Cryptography</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse526/'>CSE526</a>: Graduate Cryptography</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse434/'>CSE434</a>: Quantum Computation</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse534/'>CSE534</a>: Graduate Quantum</p>
        <p className='assignment'><a href='https://www.washington.edu/students/crscat/math.html'>MATH521</a>: Graduate Probability 1</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse599k/25au/'>CSE599K</a>: Algorithmic Robust Statistics</p>
        <p className='assignment'><a href='https://www.andreacoladangelo.com/teaching/modernquantumcryptowi26'>CSE599C</a>: Modern Quantum Cryptography</p>
        <p className='assignment'><strong>CSE590Z1</strong>: Analysis of Boolean Functions Seminar</p>
        <p className='assignment'><a href='https://courses.cs.washington.edu/courses/cse446/26sp/'>CSE546</a>: Graduate Machine Learning</p>
        <p className='assignment'><strong>CSE531</strong>: Graduate Computational Complexity I</p>
        <p className='assignment'><strong>CSE481</strong>: Robotics Capstone</p>
        <p className='assignment'><strong>CSE599I</strong>: Recent Developments in Communication Complexity</p>
        <p className='assignment'><strong>CSE599C</strong>: Quantum Complexity Theory</p>
      </div>}
      {active === 'CV' && <><div className="contacts"><a href={resumeUrl}>Open standalone CV</a></div>
      <iframe title="Owen Boseley curriculum vitae" src={resumeUrl}/></>}
      </section>}
    </main>
  </div>;
}
