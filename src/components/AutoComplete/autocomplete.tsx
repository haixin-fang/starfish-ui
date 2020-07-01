 import React, { FC, useState, ChangeEvent, useRef, KeyboardEvent, ReactElement, useEffect } from 'react'
 import Input, {InputProps} from '../Input/input'
 import classNames from 'classnames'
 import Icon from '../Icon/icon'
 import useDebounce from '../../hooks/useDebounce'
 import useClickOutside from '../../hooks/useClickOutside'
 import Transition from '../Transition/transition'
 interface DataSourceObject {
     value: string;

 }
 export type DataSourceType<T = {}> = T & DataSourceObject

 export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
     /**返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise
type DataSourceType<T = {}> = T & DataSourceObject
 */
     fetchSuggestions: (item: string) => DataSourceType[] | Promise<DataSourceType[]>, // 输入关键词，返回数组
     /**点击选中建议项时触发的回调 */
     onSelect?: (item: DataSourceType) => void,
     /**支持自定义渲染下拉项，返回 ReactElement */
     renderOption?: (item: DataSourceType) => ReactElement
 }
 /**
    * ~~~js
      const lakersWithNumber = [
        {value: 'bradley', number: 11},
        {value: 'pope', number: 1},
        {value: 'caruso', number: 4},
        {value: 'cook', number: 2},
        {value: 'cousins', number: 15},
        {value: 'james', number: 23},
        {value: 'AD', number: 3},
        {value: 'green', number: 14},
        {value: 'howard', number: 39},
        {value: 'kuzma', number: 0},
    ]
    const handleFetch = (query: string) => {
        return lakersWithNumber.filter(item => item.value.includes(query))
    }
    const handleRender = (item: DataSourceType) => {
        const items = item as DataSourceType<LakerPlayerProps>
        return (
            <>
                <h3>
                    {items.value}
                </h3>
                <p>{items.number}</p>
            </>
        )
    }
    return (
        <AutoComplete 
            fetchSuggestions={handleFetch}
            renderOption={handleRender}
            onSelect={action('select')}/>
    )
    * ~~~
    * 输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择 
    * ### 引用方法
    * 
    * ~~~js
    * import { AutoComplete } from 'roadsign'
    * ~~~
  */
 export const AutoComplete: FC<AutoCompleteProps> = (props) => {
     const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        ...restProps
     } = props
     const [inputValue, setInputValue] = useState(value as string)
     const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
     const [loading, setLoading] = useState(false)
     const [ highlightIndex, setHighlightIndex] = useState(-1)
     const triggerSearch = useRef(false)
     const componentRef = useRef<HTMLDivElement>(null)
     const debouncedValue = useDebounce(inputValue)
     //  在输入框那个div外面点击则说明不需要自动补全了
     useClickOutside(componentRef, () => {setSuggestions([])})
     useEffect(() => {
        if(debouncedValue && triggerSearch.current){
            const results = fetchSuggestions(debouncedValue)
            if(results instanceof Promise){
               setLoading(true)
               results.then(data => {
                   setSuggestions(data)
                   setLoading(false) 
               })
            }else{
               setSuggestions(results)
            }
        }else{
            setSuggestions([])
        }
        setHighlightIndex(-1)
     }, [debouncedValue])
     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
         const value = e.target.value.trim()
         setInputValue(value)
         triggerSearch.current = true
         
     }
     const handleSelect = (item: DataSourceType) => {
         setInputValue(item.value)
         setSuggestions([])
         if(onSelect){
             onSelect(item)
         }
         triggerSearch.current = false
     }
     const highlight = (index: number) => {
         if(index < 0) index = 0
         if(index >= suggestions.length) {
            index=suggestions.length-1
         }
         setHighlightIndex(index)
     }
     const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        switch(e.keyCode){
            case 13: // 回车
                if(suggestions[highlightIndex]){
                    handleSelect(suggestions[highlightIndex])
                }
                break
            case 38:
                highlight(highlightIndex-1)
                break // 向上
            case 40: // 向下
                highlight(highlightIndex+1)
                break
            case 27: //esc
                setSuggestions([])
                break
            default: 
                break
        }
     }
     const RenderTemplate = (item: DataSourceType) => {
         return renderOption? renderOption(item) : item.value
     }
     const FilterSuggest = () => {
         return (
             <Transition
                in={ !!inputValue}
                animation="zoom-in-top"
                timeout={300}
                onExited={() => {setSuggestions([])}}
             >
                <ul className="suggestion-list">
                    { loading &&
                        <div className="suggstions-loading-icon">
                            <Icon icon="spinner" spin/>
                        </div>
                        }
                    {
                        suggestions.map((item, index) => {
                            console.log(index)
                            console.log('highlightIndx'+highlightIndex)
                            const classes = classNames('suggestion-item', {
                                'is-active': index === highlightIndex
                            })
                            return (
                            <li key={index} className={classes} onClick={() => handleSelect(item)}>
                                {RenderTemplate(item)}
                            </li>
                            )
                        })
                    }
                </ul>
             </Transition>
         )
     }
     return (
         <div className="auto-complete" ref={componentRef}>
             <Input 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
             />
             {(suggestions.length > 0) && FilterSuggest()}
         </div>
     )
 }

 export default AutoComplete;