import React from 'react'
import { CSSTransition } from 'react-transition-group'
// import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

export interface ITransitionProps  {
    animation?: AnimationName;
    classNames?: string;
    in: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    timeout: number;
    wrapper?: boolean
}


const Transition: React.FC<ITransitionProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props
    return (
        <CSSTransition 
        classNames={classNames? classNames : animation} 
        {...restProps}>
            {wrapper?<div>{children}</div>:children}
        </CSSTransition>
    )
}
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
    timeout: 300
}
export default Transition