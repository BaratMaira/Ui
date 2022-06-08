import React from 'react'
import '../styles/bigButtons.css'

const BigButtons = (props) => {
    const {text,textColor,bgColor,iconColor, hideIcon, disabled} = props
    const customStyle = {
        block: {
            color: textColor,
            textTransform: 'upperCase',
            backgroundColor: bgColor
        }
    }

    return (
        <div className='btn-container' onClick={props.onClick}>
            <button className={disabled ? 'disabled-big-btn' : 'big-btn'} style={customStyle.block}>
                {text}
            </button>
        </div>
    )
}

export default BigButtons