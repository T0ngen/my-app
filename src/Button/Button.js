
import React, { useEffect, useState } from 'react';

// import StickyFooter from './Footer/Footer';

const Button = (props) => {

    const [click, setClick] = useState(0)
    useEffect(()=>{
        document.title = `Вы нажали ${click}`
    });
    return (
        <button onClick={()=> setClick(click+1)}>{props.text} {click}</button>
    );

}

Button.defaultProps = {
    text: "Button"
}


export default Button;


