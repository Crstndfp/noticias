import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">-- Selecione --</option>
            {
                opciones.map(op => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                ))
            }
        </select>
    );

    return [state, SelectNoticias];

}

export default useSelect;