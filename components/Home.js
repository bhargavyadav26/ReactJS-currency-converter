
import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Dropdown, Menu, Segment, Grid, Container, Input, Header, Button, Divider } from 'semantic-ui-react';
import Axios from 'axios';
import { FaExchangeAlt } from "react-icons/fa";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalData: [],
            options: [],
            firstCurr: '',
            secondCurr: '',
            firstValue: 0,
            secondValue: 0,
            date: '',
            exchangeData: [],
            spinner: false,
        }
    }

    componentDidMount() {
        console.log("header");
        const { totalData } = this.state;
        const options = [];

        let date = new Date();
        date.setDate(date.getDate() - 1);
        console.log("date ", date);
        date = date.toISOString().split('T')[0];
        console.log("after-date ", date);
        this.setState({
            date
        })
        Axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
            this.setState({
                totalData: data
            });
            data.forEach((country, i) => {
                options.push(
                    {
                        key: i, text: country.name + " " + "(" + country.currencies[0].code + ")", value: country.currencies[0].code
                    }
                )
            })
            this.setState({
                options
            })

        })
    }

    firstDD = (event, { value }) => {
        const { firstCurr, secondCurr, date } = this.state;
        console.log("firstDD", event.target, { value });
        this.setState({
            firstCurr: value
        })
        if ({ value } !== '' && secondCurr !== '') {
            Axios.get(`https://api.ratesapi.io/api/latest?symbols=${secondCurr}&base=${value}`
            ).then((res) => {
                console.log("res ", res);
                this.setState({
                    exchangeData: res.data
                })
            })
                .catch((error) => { console.log(error); });
        }
    }

    secondDD = (event, { value }) => {
        const { firstCurr, secondCurr, date } = this.state;
        console.log("secondDD", value);
        this.setState({
            secondCurr: value
        })

        if (firstCurr !== '' && { value } !== '') {
            Axios.get(
                `https://api.ratesapi.io/api/latest?symbols=${value}&base=${firstCurr}`
            ).then((res) => {
                console.log("res ", res);
                this.setState({
                    exchangeData: res.data
                })
            })
                .catch((error) => { console.log(error); });
        }
    }

    firstValue = (event) => {
        console.log("firstValue", event.target.value);
        this.setState({
            firstValue: event.target.value
        })
        const calc2 = (event.target.value) * (this.state.exchangeData.rates[this.state.secondCurr]);
        console.log("calc2 ", calc2)
        this.setState({
            secondValue: calc2
        })
    }

    secondValue = (event) => {
        console.log("secondValue", event.target.value);
        this.setState({
            secondValue: event.target.value
        })
        const calc1 = (event.target.value) / (this.state.exchangeData.rates[this.state.secondCurr]);
        console.log("calc1 ", calc1);
        this.setState({
            firstValue: calc1
        })
    }

    onExchangeClick = () => {
        const { firstCurr, secondCurr, firstValue, secondValue } = this.state;
        this.setState({
            spinner: true
        })
        let firstCurrConst = firstCurr;
        let secondCurrConst = secondCurr;
        let firstValueConst = firstValue;
        let secondValueConst = secondValue;

        Axios.get(`https://api.ratesapi.io/api/latest?symbols=${firstCurr}&base=${secondCurr}`
        ).then((res) => {
            console.log("res ", res);
            this.setState({
                exchangeData: res.data, spinner: false
            })
        })
            .catch((error) => { console.log(error); });


        this.setState({
            firstCurr: secondCurrConst, secondCurr: firstCurrConst, firstValue: secondValueConst, secondValue: firstValueConst
        })
    }

    moreConversions = (x, y, multiplyValue) => {
        console.log("x,y ", x, y, multiplyValue);
        const num = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
        const loop = [];
        for (let i = 0; i < num.length; i++) {
            loop.push(
                <Grid.Row textAlign="center" key={i}>
                    <Grid.Column width={8}>
                        <Header>
                            {num[i]}{"  "}{x}
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header>
                            {(num[i] * multiplyValue).toFixed(3)}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            )
        }
        return loop;
    }

    render() {
        const { firstCurr, secondCurr, exchangeData } = this.state;
        console.log("home")
        return (
            <Container>
                <Segment.Group>
                    <Segment clearing inverted color="violet">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column textAlign="center" width={7}>
                                    <Dropdown placeholder="select" options={this.state.options} selection clearable search onChange={(e, { value }) => this.firstDD(e, { value })} value={this.state.firstCurr} />
                                </Grid.Column>
                                <Grid.Column textAlign="center" verticalAlign="middle" width={2}>
                                    <FaExchangeAlt onClick={this.onExchangeClick} style={{ cursor: "pointer" }} />
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={7}>
                                    <Dropdown placeholder="select" options={this.state.options} selection clearable search onChange={this.secondDD} value={this.state.secondCurr} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column textAlign="center" width={7}>
                                    <Input onChange={this.firstValue} value={this.state.firstValue} />
                                </Grid.Column>
                                <Grid.Column textAlign="center" verticalAlign="middle" width={2}>
                                    <FaExchangeAlt onClick={this.onExchangeClick} style={{ cursor: "pointer" }} />
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={7}>
                                    <Input onChange={this.secondValue} value={this.state.secondValue} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment.Group>
                {
                    this.state.spinner ?
                        <Segment loading />
                        :
                        <Segment.Group horizontal>
                            <Segment>
                                {
                                    firstCurr !== '' && secondCurr !== ''
                                        ?
                                        <Header attached='top' as='h3' textAlign='center' block>
                                            Convert {firstCurr} to {secondCurr}
                                        </Header>
                                        :

                                        <Header attached='top' as='h3' textAlign='center' block>
                                            Select any 2 currencies
                    </Header>
                                }
                                <Segment attached>

                                    <Grid divided>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as="h3" textAlign="center">
                                                    {firstCurr}
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header as="h3" textAlign="center">
                                                    {secondCurr}
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Divider />
                                        {
                                            exchangeData.rates
                                                ?
                                                this.moreConversions(firstCurr, secondCurr, exchangeData.rates[this.state.secondCurr])
                                                :
                                                null
                                        }
                                    </Grid>

                                </Segment>
                            </Segment>
                            <Segment>
                                {
                                    firstCurr !== '' && secondCurr !== ''
                                        ?
                                        <Header attached='top' as='h3' textAlign='center' block>
                                            Convert {firstCurr} to {secondCurr}
                                        </Header>
                                        :

                                        <Header attached='top' as='h3' textAlign='center' block>
                                            Select any 2 currencies
                    </Header>
                                }
                                <Segment attached>
                                    <Grid divided>
                                        <Grid.Row textAlign="center">
                                            <Grid.Column width={8}>
                                                <Header as="h3" textAlign="center">
                                                    {secondCurr}
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header as="h3" textAlign="center">
                                                    {firstCurr}
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Divider />
                                        {
                                            exchangeData.rates
                                                ?
                                                this.moreConversions(firstCurr, secondCurr, 1 / (exchangeData.rates[this.state.secondCurr]))
                                                :
                                                null
                                        }
                                    </Grid>
                                </Segment>
                            </Segment>
                        </Segment.Group>
                }
            </Container>
        );
    }
}
const mapDispatchToProps = {};
export default withRouter(Home);
