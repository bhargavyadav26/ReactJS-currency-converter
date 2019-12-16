
import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react'
import Axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
class HeaderComp extends React.Component {
    constructor(props) {
        super(props);
       
    }

    // componentDidMount() {
    //     console.log("header");
    //     Axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
    //         this.setState({
    //             totalData: data
    //         });
    // })          
    // }

    render() {
        const { children } = this.props;
        return (
            <Container>
            <Segment inverted attached="top">
                <Header textAlign="center">
                    Currency Converter
                </Header>
            </Segment>
                {children}
            </Container>
        );
    }
}

export default HeaderComp;
