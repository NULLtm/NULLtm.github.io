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
        <a target="_blank" href='https://www.linkedin.com/in/nullthemoment/overlay/1705017002872/single-media-viewer/?profileId=ACoAADMPyrwBtcOe0KQopVuz5z0L4snRrD9taVQ' className="resume">{'>'} resume {'<'}</a>
      </div>
      <div className='code-block'>
        Hi, my name is Owen. I am a bsms student, aspiring theorist, and enjoyer of all things
        <br/>problem solving!
      </div>
      <div className='links'>
        <a target="_blank" href='https://www.linkedin.com/in/nullthemoment/' className="linkedin">
          <img id="linkedin" src={linkedin} alt="Linkedin Icon"></img>
        </a>
        <a className="github" target="_blank" href='https://github.com/NULLtm'>
            <img id="github" src={github} alt="Github Icon"></img>
        </a>
      </div>
    </div>
    </>
  );
};

export default App;
