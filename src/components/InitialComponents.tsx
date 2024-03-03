import React from 'react';
import { transforToUpperCase } from "../formatter/CustomFormatter"

export const InitialComponent: React.FC = () => {
    return (
        <h1>{transforToUpperCase("Hello World React+webpack test")}</h1>
    )
}