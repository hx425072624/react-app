import {observer,inject} from 'mobx-react'
import React from 'react'

@inject('appState')
@observer
class TimerView extends React.Component {
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

export default TimerView

// ReactDOM.render(<TimerView appState={appState} />, document.body);