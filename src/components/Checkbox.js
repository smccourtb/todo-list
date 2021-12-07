import '../styles/Checkbox.css'
import {useState} from 'react';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    
    function handleClick() {
        setChecked(!checked)
    }
    console.log(checked)
    return(
        <div className='checkbox-container' onClick={handleClick}>
            <div className={`checkbox__border ${checked && 'checked'}`}>
                <div className={`checkbox__inner ${checked ? 'checked' : "unchecked"}`}></div>
            </div>
        </div>
    )
}

export default Checkbox;