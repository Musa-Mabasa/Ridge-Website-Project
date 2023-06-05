import React from 'react'
import './Popup.css'
import * as AiIcons from 'react-icons/ai';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
          <div id= "close-popup" onClick={() =>props.setTrigger(false)}>
              <AiIcons.AiOutlineClose id='popup-icon'></AiIcons.AiOutlineClose>
          </div>
              {props.children}
        </div>
    </div>
  ) : ""
}

export default Popup
