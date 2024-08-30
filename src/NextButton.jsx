import './NextButton.css'
import imageSrc from './imgs/button.png'

const NextButton = (props) => {
    return <div id="enter">
    <a href={props.next} id="enter-button">
        <img id="buttonimg" src={imageSrc} alt="Button Icon"></img>
    </a>
  </div>
};

export default NextButton;