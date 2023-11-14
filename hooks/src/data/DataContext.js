import React from 'react';

export const data = {
    number: 123,
    text: 'Context api...',
}

export const data1 = {
    number: 5,
}

export const DataContext = React.createContext({});
export const DataContext1 = React.createContext(data1);