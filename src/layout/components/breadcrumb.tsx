import React, { useEffect, useState } from "react";
import { FaAngleRight, FaPlusSquare, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'


interface IProps {
    currentPath: string;
    showAction: boolean;
    isInForm?: boolean;
    goToForm: () => void;
}

const Breadcrumb = ({currentPath, showAction, goToForm, isInForm}: IProps) => {

    const AnimatedLink = animated(Link);
    const AnimatedIcon = animated(FaPlusSquare);
    
    const animation = useSpring({to: {x: 1, opacity: 1}, from: {x:-23, opacity: 0}, reset: true})
    const animation1 = useSpring({to: {x: 1, opacity: 1}, from: {x:23, opacity: 0}, reset: true})
    return  (
        <header className="h-[9%] bg-neutral-400 text-blue-900 lg:rounded-tr-lg flex items-center justify-between pr-4 border-b border-black">
            <nav className="basis-3/6 flex pl-3 items-center font-medium">
                <AnimatedLink to='/' className="text-lg" style={currentPath === 'dashboard' ? animation : {}}>
                    DASHBOARD
                </AnimatedLink>
                {currentPath !== 'dashboard' ?
                <animated.div style={animation} className="flex items-center">
                    <FaAngleRight size='1em' className='ml-1'/> 
                        <span className='ml-1 text-sm'>
                            {currentPath.toUpperCase()}
                        </span>
                        {isInForm ?
                            <animated.div style={animation} className="flex items-center"> 
                                <FaAngleRight size='1em' className='ml-1'/> 
                                <span className='ml-1 text-sm'>
                                    ADD NEW {currentPath.slice(0,currentPath.length - 1).toUpperCase()}
                                </span>
                            </animated.div>
                        : ''}
                </animated.div>
                : ''}
            </nav>
            {showAction ? 
                <AnimatedIcon size='3em' style={animation1} onClick={goToForm}/>
            : ''}
        </header>
    )
}

export default Breadcrumb