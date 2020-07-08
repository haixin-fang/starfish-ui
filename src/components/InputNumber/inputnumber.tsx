import React, {FC, useState, useEffect} from 'react'
import classNames from 'classnames'

export type sizeType = 'lg' | 'sm' 

export interface IInputNumber {
    /**是否禁用计数器 */
    disabled?: boolean;
    /**计数器步长 */
    step?: number;
    /**是否只能输入 step 的倍数 */
    stepStrict?: boolean;
    /**设置计数器允许的最小值 */
    min?: number;
    /**设置计数器允许的最大值	 */
    max?: number;
    /**计数器尺寸 */
    size?: sizeType;
    /**绑定值 */
    num?: number;
    /**绑定值被改变时触发 */
    change?: (index: number) => void
}
/**
 * 仅允许输入标准的数字值，可定义范围
 * ### 引用方法
 * 
 * ~~~js
 * import { InputNumber } from 'starfish-ui'
 * ~~~
 */
export const InputNumber: FC<IInputNumber> = (props) => {
    const {disabled, step, min, max, stepStrict, change, num} = props;
    const [number, setNumber] = useState<number>((stepStrict && step?step:num?num:1))
    const inputClass = classNames('input-number', {
        'disabled': disabled
    })
    const classes = classNames('left', {
        'is-disabled': min && number<(min+(step?step:1))?true: false,
    })
    const rightClasses = classNames('right', {
        'is-disabled': max && number>(max-(step?step:1))?true: false,
    })
    const handleCut = () => {
        if(min && number>=(min+(step?step:1)) && !disabled){
            setNumber(number-(step?step:1))
            if(change){
                change(number-(step?step:1))
            }
        }else if(!min && !disabled){
            setNumber(number-(step?step:1))
            if(change){
                change(number-(step?step:1))
            }
        }
    }
    const handleAdd = () => {
        if(max && number<=(max-(step?step:1)) && !disabled){
            setNumber(number+(step?step:1))
            if(change){
                change(number+(step?step:1))
            }
        }else if(!max && !disabled){
            setNumber(number+(step?step:1))
            if(change){
                change(number+(step?step:1))
            }
        }
    }
    return (
        <div className={inputClass}>
            <span className={classes} onClick={handleCut}>-</span>
            <div className="number">{number}</div>
            <span className={rightClasses} onClick={handleAdd}>+</span>
        </div>
    )
}



export default InputNumber;
