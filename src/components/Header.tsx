import React, {memo} from 'react';

type HeaderPropsType = {
    className?: string
    name: string
}

export const Header = memo((props: HeaderPropsType) => {
    console.log('header')
    return (
        <h2><span className={props.className}>{props.name}</span></h2>
    )
})
