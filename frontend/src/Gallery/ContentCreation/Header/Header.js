import React from 'react'
import './Header.css'
const Header = ({handleSave}) => {
  return (
    <div className='content-creation-header-outer-container'>
        <div className='content-creation-header-title'>
            Add New Image
        </div>
        <div className='cotnent-creation-save-button-container' onClick={handleSave}>
            Save
        </div>
    </div>
  )
}

export default Header