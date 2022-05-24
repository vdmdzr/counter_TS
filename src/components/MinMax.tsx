import React, {ChangeEvent, memo} from 'react';

type MinMaxType = {
    name: string
    value: number
    condition: boolean
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}

const MinMax = memo((props: MinMaxType) => {
    console.log('minmax')
    return (
        <div>
            <span className={'minMax'}>{props.name}</span>
            <input className={props.condition ? 'redInput' : ''}
                   value={props.value} onChange={props.callback} type="number"/>
        </div>
    )
})

export default MinMax;