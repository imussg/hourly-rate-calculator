import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours:8,
            dayRate: 300
        };
    }

    setHours(hours) {
        console.log(hours);
        this.setState({ hours });
        this.render();
    }

    setDayRate(dayRate) {
        console.log(dayRate);
        this.setState({ dayRate });
    }

    render() {

        const rate = Number(this.state.dayRate) / Number(this.state.hours);
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    onChange={ e=>this.setDayRate(e.target.value) }
                    value = {this.state.dayRate}
                />
                <NumberInput id="hours" label="Hours" min={1} max={12}
                    onChange = { e => this.setHours(e.target.value) }
                    value = {this.state.hours}
                />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}/>
            </form>
        );
    }
}

