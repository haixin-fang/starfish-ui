import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AutoComplete, {DataSourceType} from './autocomplete'
interface LakerPlayerProps {
    value: string;
    number: number;
  }
const AutoCompleteDefault = () => {
    // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    // 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
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
    // const handleFetch = (query: string) => {
    //     return fetch(`https://api.github.com/search/issues?q=${query}`)
    //         .then(res => res.json())
    //         .then(({item}) => {
    //             console.log('item' +item)
    //             const formatItems = item.slice(0, 10).map((item: any) => ({
    //                 value: item.login, ...item
    //             }))
    //             return formatItems
    //         })
    // }
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
        // renderOption={handleRender}
        onSelect={action('select')}/>
    )
}

storiesOf('AutoComplete ', module)
    .add('AutoComplete', (AutoCompleteDefault))

