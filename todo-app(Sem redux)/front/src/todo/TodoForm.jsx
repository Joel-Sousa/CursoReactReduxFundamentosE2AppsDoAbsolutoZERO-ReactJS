import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

export default props => {

    const keyHandler = (e) => {
        // console.log("e", e.key);
        
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === 'Escape'){
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    onKeyUp={keyHandler}
                    placeholder='Adicionar uma tarefa'
                    onChange={props.handleChange}
                    value={props.description} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton
                    style='primary'
                    icon='plus'
                    onClick={props.handleAdd}>
                </IconButton>
                <IconButton
                    style='info'
                    icon='search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}>
                </IconButton>
            </Grid>
        </div>
    )
}

