import React from 'react'
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
export default function Loading(){
    const LoadingStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        filter:'grayscale(50%)',
    }
    return (
        <div style={LoadingStyle}>
        <Spinner size={SpinnerSize.large} label='Loading...' />
        </div>
    )
}