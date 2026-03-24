import { useEffect, useState } from 'react';
import './App.css';
import DropDown from './DropDown';
import YearsCounter from './YearsCounter';
import cornbear from './imgs/whynot.png';
import sample from './resources/sample.txt';
import sampleoutput from './resources/sampleoutput.txt';
import owenpic from './imgs/IMG_7719.jpg';


const App = () => {

  const [text, setText] = useState('');
  const [textoutput, setTextoutput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetch(sample); // Replace with your file path
      const data1 = await res1.text();
      const res2 = await fetch(sampleoutput); // Replace with your file path
      const data2 = await res2.text();
      setText(data1);
      setTextoutput(data2);
    };

    fetchData();
  }, []);

  return (
    <>
    <img className='owen' src={owenpic} alt='owen'></img>
    <div className='textbox'>
      <p className='title'>Owen Boseley</p>
      <p>I like to learn.</p>
      <p>nulltm01 [at] gmail [dot] com</p>
      <p><a className='bsms' href="https://www.cs.washington.edu/academics/bsms">bsms</a> @ University of Washington</p>
      <YearsCounter startDate={new Date(2003, 8, 24)}/>
      <p><a className='links' href="https://www.linkedin.com/in/nullthemoment/details/featured/1772130911222/single-media-viewer/?profileId=ACoAADMPyrwBtcOe0KQopVuz5z0L4snRrD9taVQ">resume    </a>      
      <a className='links' href="https://www.linkedin.com/in/nullthemoment/">linkedin</a>
      <a className='links' href="https://github.com/NULLtm/cornbear">github</a></p>

      <a className='parag'>Hi. I am always seeking new opportunities in academia, industry, education, and in personal life. Please reach out if you have any ideas! Click the arrows on each category to see more.</a>

      <p className='title'>Goals <DropDown container='goals-container'/></p>
      <div className='goals-container-clicked'>
        <p className='goals'>Get an Internship: ✅</p>
        <p className='goals'>TA: ✅</p>
        <p className='goals'>TA for CSE311: ✅</p>
        <p className='goals'>TA for CSE421: ✅</p>
        <p className='goals'>TA for CSE312: ✅</p>
        <p className='goals'>TA for CSE431: ✅</p>
        <p className='goals'>Do Research: ✅</p>
        <p className='goals'>Graduate from Undergrad: ✅</p>
        <p className='goals'>Finish BSMS: ❌</p>
        <p className='goals'>Run a sub 1:23 Half-Marathon: ❌</p>
        <p className='goals'>Run a sub 3:00 Marathon: ❌</p>
        <p className='goals'>Run a sub 2:52 Marathon: ❌</p>
        <p className='goals'>Run an Ultra-Marathon ❌</p>
      </div>

      <p className='title'>Teaching <DropDown container='teaching-container'/></p>
      <div className='teaching-container-clicked'>
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
      </div>

      <p className='title'>Employment <DropDown container='jobs-container'/></p>
      <div className='jobs-container-clicked'>
        <p><a className='aws' href='https://www.amazonfuse.com/'>AWS</a> Software Development Intern</p>
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
      </div>

      <p className='title'>Research <DropDown container='projects-container'/></p>
      <div className='projects-container-clicked'>
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
      </div>

      <p className='title'>Courses <DropDown container='skills-container'/></p>
      <div className='skills-container-clicked'>
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
      </div>
    </div>
    </>
  );
};

export default App;
