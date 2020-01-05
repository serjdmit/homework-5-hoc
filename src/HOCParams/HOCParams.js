import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (WrappedComponent) => {
    return (props) => {
        return class extends Component{
            render(){
                return <WrappedComponent data={props} {...this.props} />
            }
        }
    }
}
