import './App.css';
import linkedin from './imgs/linkedin.png'
import github from './imgs/github.png'
import YearsCounter from './YearsCounter';
import NextButton from './NextButton';

const invert = (e) => {
  alert(e.clicked)
}

const App = () => {
  return (
    <>
    <label class="switch">
      <input type="checkbox" onChange={(e) => {
        if(e.target.checked) {
          document.body.style.filter = "invert(1)";
          document.body.style.backgroundColor = "#222222";
        } else {
          document.body.style.filter = "invert(0)";
          document.body.style.backgroundColor = "#dddddd";
        }
      }}/>
      <span class="slider round"></span>
    </label>
    <div id='title'>
      <div id="hi">
        <span>Hi</span><span id='aftertitle'>_</span>
      </div>
      <NextButton next='#about'/>
    </div>
    <div id='about'>
      <div id="name">Owen Boseley</div>
      <YearsCounter startDate="09/24/2003"></YearsCounter>
      <div className="school"><a target="_blank" href="https://www.cs.washington.edu/academics/bsms">bsms</a> @ <span>university of washington</span></div>
      <div>
        <a target="_blank" href='https://www.linkedin.com/in/nullthemoment/details/featured/1724919185322/single-media-viewer/?profileId=ACoAADMPyrwBtcOe0KQopVuz5z0L4snRrD9taVQ' className="resume">{'>'} resume {'<'}</a>
      </div>
      <div className='code-block'>
        Hi, my name is <span className='highlighted'>Owen</span>. I am a <span className='highlighted'>bsms</span> student, aspiring <span className='highlighted'>professor</span>, and enjoyer of all things
        <br/><span className='highlighted'>problem</span> solving! You can click any of the links on this page to learn more, <br/>or click down to see some of my projects.
      </div>
      <div id='links'>
        <a target="_blank" href='https://www.linkedin.com/in/nullthemoment/' className="linkedin">
          <img id="linkedin" src={linkedin} alt="Linkedin Icon"></img>
        </a>
        <a className="github" target="_blank" href='https://github.com/NULLtm'>
            <img id="github" src={github} alt="Github Icon"></img>
        </a>
      </div>
      <NextButton next='#projects'/>
    </div>
    <div id='projects'>
      <div className='project-container'>
          <div className="project-line">h</div>
          <div className='project-title'>Cornbear Grading Assistant<span id='aftertitle'>_</span></div>
          <div className='project-link'><a onClick={(e) => {
            alert('Repository is private at the moment, apologies...')
          }} target="_blank" className="prolink" href="">{'>'} Repository {'<'}</a></div>
          <div className='project-description'>
            <div className='code-block'>
              <span className='highlighted'>Project Overview:</span><br/><br/>

              I helped start a small project to build autograding and static analysis tools for help in
              grading<br/> CSE123 work at UW! We might have started small, but we have grown as a team to over 20 active members!

              <br/>
              <br/><span className='highlighted'><a className='plainlink' href='https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html'>X (What):</a></span><br/><br/>

              Programmed and researched using static analysis libraries in Java to create a tool for pulling
              <br/>and analyzing student code according to course grading policies.

              <br/>
              <br/><span className='highlighted'><a className='plainlink' href='https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html'>Y (Proof):</a></span><br/><br/>

              Our <span className='highlighted'><a className='plainlink' href=''>project</a></span> has helped cut down grading times dramatically, by upwards of <span className='highlighted'>3</span> hours.<br/>Additionally we have also been able to make more accurate grades than TAs alone.<br/>In a study of <span className='highlighted'>500</span> student submissions, Cornbear found errors TAs did not in up to <span className='highlighted'>25%</span> of submissions.

              <br/>
              <br/><span className='highlighted'><a className='plainlink' href='https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html'>Z (How):</a></span><br/><br/>

              Throughout the quarter we as a team meet weekly to discuss projects, ideas, and distribution of work.<br/>Additionally we have been meeting with teaching staff and plan to further our work by<br/>
              presenting our research and meeting with professors in the field.
              
           
            </div>
          </div>
      </div>
      
    </div>
    </>
  );
};

export default App;
