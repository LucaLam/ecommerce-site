import React from 'react';

import './custombtn.scss';

const CustomBtn = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
    {children}
    </button>
)

export default CustomBtn;