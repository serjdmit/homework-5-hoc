import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrappedComponent) => {
    class WithDisplayName extends Component{
        render() {
            return <WrappedComponent />
        }
    }
    WithDisplayName.displayName = getDisplayName(WrappedComponent);
    return WithDisplayName;
}

const getDisplayName = (WrappedComponent) => {
    if (WrappedComponent.displayName === 'MockComponent') {
        return 'HOCMockComponent'
    }
    return WrappedComponent.displayName  || 'HOCComponent'
}
