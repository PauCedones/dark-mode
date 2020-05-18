import React, {useRef, useEffect} from 'react';
import './switch.css';

function Switch () {
    //referencia a un valor que puede cambiar
    const ref = useRef(null);

    function handleChange (event) {
        if (ref.current.checked) {
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        } else {
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

   

   /*  useEffect(()=>{
        if(Window.matchMedia('(prefers-color-scheme: dark)').matches) {
            ref.current.setAttribute('checked',true)
        }
    }, [])
 */




    return (
        <div className="dark-mode" >
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange }  type="checkbox" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    )
}

export default Switch;
