import React, { useEffect, useState } from "react";
import { FaAngleRight, FaPlusSquare, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'


interface IProps {
    currentPath: string;

}

const Breadcrumb = ({currentPath}: IProps) => {

    
    const animation = useSpring({to: {x: 1, opacity: 1}, from: {x:-23, opacity: 0}, reset: true})
    return  (
        <header className="h-[9%] text-white flex items-center justify-between pr-4">
            <nav className="basis-3/6 flex items-center font-medium">
                {currentPath !== 'dashboard' ?
                <animated.div style={animation} className="flex items-center">
                    <FaAngleRight size='1em' className='ml-1'/> 
                        <span className='ml-1 text-sm'>
                            {currentPath.toUpperCase()}
                        </span>
                </animated.div>
                : ''}
            </nav>
        </header>
    )
}

export default Breadcrumb