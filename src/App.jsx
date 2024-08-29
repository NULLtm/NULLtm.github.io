import './App.css';
import imageSrc from './imgs/button.png'
import linkedin from './imgs/linkedin.png'
import github from './imgs/github.png'
import YearsCounter from './YearsCounter';

const App = () => {
  return (
    <>
    <div className='text' id='title'>
      <div>
        <span>Hi</span><span id='aftertitle'>_</span>
      </div>
      <a href='#name' className="enter-button">
          <img id="buttonimg" src={imageSrc} alt="Button Icon"></img>
      </a>
    </div>
    <div className='about'>
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
      <div className='links'>
        <a target="_blank" href='https://www.linkedin.com/in/nullthemoment/' className="linkedin">
          <img id="linkedin" src={linkedin} alt="Linkedin Icon"></img>
        </a>
        <a className="github" target="_blank" href='https://github.com/NULLtm'>
            <img id="github" src={github} alt="Github Icon"></img>
        </a>
      </div>
      <a href='#name' id="to_projects" className="enter-button">
          <img id="buttonimg" src={imageSrc} alt="Button Icon"></img>
      </a>
    </div>
    <div className='projects'>

    </div>
    </>
  );
};

export default App;
