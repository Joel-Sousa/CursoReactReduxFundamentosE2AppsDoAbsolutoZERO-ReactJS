import React from 'react';

export default function If(props){
    const elseChild = props.children.filter(e => {
        return e.type && e.type.name === 'Else';
    })[0]

    const ifChildren = props.children.filter(e => {
        return e !== elseChild;
    })

    if(props.test)  
        return ifChildren;
    else if(elseChild)
        return elseChild;
    else
        return false;

}

export function Else(props){
    return props.children;
}