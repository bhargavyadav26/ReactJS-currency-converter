
import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Dropdown, Menu, Segment, Grid, Container, Input, Icon } from 'semantic-ui-react';
import Axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalData: [],
            options: []
        }
    }

    componentDidMount() {
        console.log("header");
        const { totalData } = this.state;
        const options = [];
        Axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
            this.setState({
                totalData: data
            });
            data.forEach((country, i) => {
                options.push(
                    {
                        key: i, text: country.name+" "+"("+country.currencies[0].code+")", value: country.currencies[0].code
                    }
                )
            })
            this.setState({
                options
            })

    })          
    }
    render() {
        console.log("home")
        return (
            <>
            <Grid width={16}>
    <Grid.Row>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
            <Input />
        </Grid.Column>
        <Grid.Column width={4}>
            <Dropdown placeholder="select" options={this.state.options} selection clearable search/>
        </Grid.Column>
        <Grid.Column width={2}>
        <Icon name="arrow right" size="big" />
        </Grid.Column>
        <Grid.Column width={4}>
            <Dropdown placeholder="select" options={this.state.options} selection clearable search/>
        </Grid.Column>
    </Grid.Row>
    </Grid>
            </>
        );
    }
}
const options = [
    { key: 1, text: 'Feet', value: 1 },
    { key: 2, text: 'Meter', value: 2 },
    { key: 3, text: 'Inch', value: 3 },
  ]
  const mapDispatchToProps = {};
  export default withRouter(Home);
