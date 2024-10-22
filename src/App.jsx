import { useEffect, useState } from 'react';
import './App.css';
import DropDown from './DropDown';
import YearsCounter from './YearsCounter';
import cornbear from './imgs/whynot.png';
import sample from './resources/sample.txt';
import sampleoutput from './resources/sampleoutput.txt';
import owenpic from './imgs/IMG_5388.PNG';


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
      <p>aspiring professor and all encompassing nerd</p>
      <p>incoming <a className='bsms' href="https://www.cs.washington.edu/academics/bsms">bsms</a> @ University of Washington</p>
      <YearsCounter startDate={new Date(2003, 8, 24)}/>
      <p><a className='links' href="https://www.linkedin.com/in/nullthemoment/overlay/1724919185322/single-media-viewer/?profileId=ACoAADMPyrwBtcOe0KQopVuz5z0L4snRrD9taVQ">resume    </a>      
      <a className='links' href="https://www.linkedin.com/in/nullthemoment/">linkedin    </a>
      <a className='links' href="https://github.com/NULLtm/cornbear">github</a></p>

      <p className='title'>Goals <DropDown container='goals-container'/></p>
      <div className='goals-container'>
        <p className='goals'>Get an Internship: ✅</p>
        <p className='goals'>TA: ✅</p>
        <p className='goals'>TA for CSE311: ✅</p>
        <p className='goals'>TA for CSE421: ✅</p>
        <p className='goals'>TA for CSE312: ❌</p>
        <p className='goals'>Summer Instruct: ❌</p>
        <p className='goals'>Graduate from Undergrad: ❌</p>
        <p className='goals'>Finish BSMS: ❌</p>
        <p className='goals'>Get Employed as a Teacher: ❌</p>
        <p className='goals'>Run a sub 1:23 Half-Marathon: ❌</p>
        <p className='goals'>Run a sub 3:00 Marathon: ❌</p>
        <p className='goals'>Run a sub 2:52 Marathon: ❌</p>
      </div>

      <p className='title'>Teaching <DropDown container='teaching-container'/></p>
      <div className='teaching-container'>
        <p className='assignment'>Spring 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse123/23sp/">CSE123</a> @ University of Washington</p>
        <p className='assignment'>Summer 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse123/23su/">CSE123</a> @ University of Washington</p>
        <p className='assignment'>Autumn 2023 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/23au/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Winter 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/24wi/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Spring 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse311/24sp/">CSE311</a> @ University of Washington</p>
        <p className='assignment'>Autumn 2024 : Teaching Assistant for <a href="https://courses.cs.washington.edu/courses/cse421/24au/">CSE421</a> @ University of Washington</p>
      </div>

      <p className='title'>Employment / Experience <DropDown container='jobs-container'/></p>
      <div className='jobs-container'>
        <p><a className='aws' href='https://aws.amazon.com/media-services/elemental/'>AWS</a> Software Engineer Intern</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Jun - Sep 2024</p>
        <p className='jobs-point'>- Built an internal tool to automate support engineers’ work to address customer use cases while using AWS Elemental services which saves hours of manual work</p>
        <p className='jobs-point'>- Learned build tools, version control hygiene, and code practices for working with large code bases</p>
        <p className='jobs-point'>- Met with advisors and team members to discuss project milestones, assess concerns, and to brainstorm ideas for the
        project</p>
        </div>

        <p><a className='aws' href='https://www.cs.washington.edu/students/ta'>CSE</a> Teaching Assistant</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Mar 2023 - Present</p>
        <p className='jobs-point'>- Taught students in introductory programming, discrete math, and theoretical computer science courses</p>
        <p className='jobs-point'>- Led sections of 30 students to communicate new material and answer questions</p>
        <p className='jobs-point'>- Met with students both in office hours and in one-on-one meetings to help address their questions and concerns</p>
        </div>

        
        vv Where did I start? :) vv

        <p><a className='aws' href='https://www.harbormontessori.org/'>HMS</a> Maintenance Intern</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Jun 2022 - Sep 2022</p>
        <p className='jobs-point'>- Helped school with a variety of maintenance projects on both campuses</p>
        <p className='jobs-point'>- Learned skills in power tools, knots, plumbing, driving various vehicles, and painting</p>
        </div>

        <p><a className='aws' href='https://www.thehubgigharbor.com/'>Hub</a> Dish Washer</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Jun 2022 - Aug 2022</p>
        <p className='jobs-point'>- Washed dishes, cleaned kitchen, helped out around the restaurant, and emptied garbage</p>
        </div>

        <p><a className='aws' href='https://www.invitedclubs.com/clubs/canterwood-golf-country-club'>Canterwood Country Club</a> Dish Washer</p>
        <div className='line'></div>
        <div className='block'>
        <p className='sub'>Jun 2021 - Sep 2021</p>
        <p className='jobs-point'>- Washed dishes, cleaned kitchen, helped out around the restaurant, and emptied garbage</p>
        </div>
      </div>

      <p className='title'>Projects / Research <DropDown container='projects-container'/></p>
      <div className='projects-container'>
      <div className='block'>
        <p className='subtitle'>Cornbear Grading Assistant <img className='cornbear' src={cornbear} alt='cornbear'></img></p>
        <div className='line'></div>
        <p>For the last year I have led a culmination of static analysis and CSEd research project called Cornbear. <br></br> Our goal is to provide an efficient and useful grading assistant to our <a href='https://courses.cs.washington.edu/courses/cse14x/ta/'>CSE12X</a> TAs @ UW!</p>
        <p>Below is a small example of our work, showing some code and the analysis from cornbear</p>
        <div className='example'>
          <p className='code source'>{text}</p>
          <div className='vertline'></div>
          <p className='code output'>{textoutput}</p>
        </div>
      </div>
      <div className='line'></div>
      </div>

      <p className='title'>Courses <DropDown container='skills-container'/></p>
      <div className='skills-container'>
        <p>Computer Science:</p>
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
      </div>
    </div>
    </>
  );
};

export default App;
