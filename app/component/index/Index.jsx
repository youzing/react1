import React from 'react';
import '../../public/css/index.pcss'
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
            <div className="cont">
                <div className="top">
                  <div className="bd_logo1">  这是首页222222</div>

                </div>
                <div className="bottom">
                    Seconds: {this.state.seconds}
                </div>
            </div>
        );
    }
}

export default Index;