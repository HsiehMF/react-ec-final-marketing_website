import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

export default class Store extends React.Component {
    state = {
        stores: []
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
            this.setState({ stores: response.data });
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.stores.map(store => (
                    <Card style={{ maxWidth: '45%' }} >
                        <CardHeader
                            title={store.name}
                            subheader={store.address}
                            action={
                                <IconButton aria-label="facebook">
                                    <a href={store.link} target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                                </IconButton>
                            }
                        />                        
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>{store.description}</p>
                                <p>創意料理：{store.cooking_name}<span className="text-danger mx-2">${store.price}</span></p>
                                <p>店家電話：{store.tel}</p>
                            </Typography>
                        </CardContent>
                    </Card>                       
                ))}
          
            </React.Fragment>
        )
    }
}
