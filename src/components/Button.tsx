import React, {memo} from 'react';

type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

const Button = memo((props: ButtonType) => {
    console.log('button')
    return (
        <button onClick={props.callback} disabled={props.disabled}>{props.name}</button>
    )
})

export default Button;