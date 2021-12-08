import '../styles/Checkbox.css'

function Checkbox({ completed }) {

    return(
        <div className='checkbox-container'>
            <div className={`checkbox__border ${completed && 'checked'}`}>
                <div className={`checkbox__inner ${completed ? 'checked' : "unchecked"}`}></div>
            </div>
        </div>
    )
}

export default Checkbox;