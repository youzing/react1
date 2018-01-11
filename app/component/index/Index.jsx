import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        //已渲染出真实dom
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        //销毁时触发
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                这是首页
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

export default Index;