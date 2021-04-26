import React from 'react';
import axios from 'axios';
import styles from './index.module.scss';

export default class Store extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        let promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/foodstore.json').then(response => {
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
        })
        promise.then(response => {
            this.setState({ products: response.data });
        })
    }

    render() {
        return (
            <React.Fragment>
                Test
            </React.Fragment>
        )
    }
}
