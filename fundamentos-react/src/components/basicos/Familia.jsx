import React, { cloneElement } from 'react';
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props){
    return(
        <div>
            {props.children.map((e, i) => {
                return cloneElement(e, {...props, key: i});
            })}
            {/* {React.cloneElement(props.children, props)} */}
            {/* {props.children} */}
            {/* <FamiliaMembro nome='pedro' sobrenome={props.sobrenome}/>
            <FamiliaMembro nome='ana' {...props}/>
            <FamiliaMembro nome='carla' sobrenome='silva'/> */}
        </div>
    )
}