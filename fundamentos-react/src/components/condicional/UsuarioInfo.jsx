import React from 'react';
import If, { Else } from './If';

export default function UsuarioInfo(props) {
    return (
        <div>
            <If test={props.usuario && props.usuario.nome}>
                Seja bem vindo <strong>{props.usuario.nome ?? 'Sem usuario'}</strong>!
                <Else >
                    Seja bem vindo <strong>Amigao</strong>!
                </Else>
            </If>

        </div>
    )
}