import React, {FC, useState, DetailsHTMLAttributes } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import Transition from '../Transition'
import PropTypes from 'prop-types'
export type TypeName = "success" | "default" | "danger" | "warning"
export interface IAlertProps {
    /**	标题 */
    title: string,
    /**类型 四种可选 针对四种不同的场景 */
    type?: TypeName,
    /**描述 */
    description?: string,
    /**关闭alert时触发的事件 */
    onClose?: () => void,
    /**是否显示关闭图标 */
    closable?: boolean
}

// ButtonHTMLAttributes<HTMLElement>
type newAlertProps = IAlertProps & DetailsHTMLAttributes<HTMLDivElement>
/**
 * Alert提示框 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失。
 * ### 引用方法
 * 
 * ~~~js
 * import { Alert } from 'starfish-ui'
 * ~~~
 */
export const Alert: FC<newAlertProps> = (props) => {
    const {title, type, description, closable, onClose, ...restProps} = props
    const [close, setClose] = useState<boolean>(false)
    const handleClick = () => {
        setClose(true)
        if(onClose){
            onClose()
        }
    }

    const classes = classNames('alert', {
        [`alert-${type}`]: !!type
    })
    const iconClasses = classNames('close-icon-alert', {
        'hidden-icon': closable
    })
    return (
        <Transition
            timeout={300}
            in={!close}
            animation="zoom-in-top"
            >
            <div 
            className={classes}
            {...restProps}>
                {description?
                   <>
                        <span>{title}</span>
                        <p>{description}</p>
                   </>:<span>{title}</span>
                }
                <span
                    onClick={handleClick} 
                    className={iconClasses}>
                    <Icon
                        icon="times"
                        size="1x"
                    />
                </span>
            </div>
        </Transition>
    )
}
Alert.propTypes = {
    title: PropTypes.string.isRequired
}

export default Alert;