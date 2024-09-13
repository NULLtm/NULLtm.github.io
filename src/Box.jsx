import './Box.css'

const Box = (props) => {
    return (
        <div className='box'>
            <img src={props.image} alt="icon" className='machine-icon'></img>
        </div>
    )
}

export default Box;