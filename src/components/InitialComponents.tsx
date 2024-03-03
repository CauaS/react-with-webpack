import React from 'react';

export const InitialComponent: React.FC = () => {
    React.useEffect(() => {
        callsDynamicImport()
    });

    const [lowerCase, setLowerCase] = React.useState('');
    
    const callsDynamicImport = () => {
        // import('./formatter/customFormatter').then(async formatter => {
        //     setLowerCase(await formatter.transforToUpperCase('Hello World React+webpack test'))
        // })
        import('./formatter/customFormatter').then(formatter => {
            setLowerCase(formatter.transforToLowerCase('Hello World React+webpack test'))
        })
    }

    return (
        <>
            <h1>{lowerCase}</h1>
        </>
    )
}