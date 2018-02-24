import React from 'react';
import '../../public/css/shop.pcss';
import utils from '../../public/js/utils';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: '小蚁云存1'},
                {id: 2, title: '小蚁云存2'},
                {id: 3, title: '小蚁云存3'},
                {id: 4, title: '小蚁云存4'},
                {id: 5, title: '小蚁云存5'},
                {id: 6, title: '小蚁云存6'},
                {id: 7, title: '小蚁云存7'},
                {id: 8, title: '小蚁云存8'},
                {id: 9, title: '小蚁云存9'}
            ]
        };
    }
    handleItemDel(id) {
        let list = this.state.list;
        list.splice(list.findIndex(data => data.id === id), 1);
        this.setState({list: list})
    }
    render() {
        let {list} = this.state;
        return (
            <div className="content">
                <div>获取url中参数name的值：{utils.urlParam('name')}</div>
                <div>15910678888：这{utils.isMobile('15910678888') ? '是' : '不是'}手机号</div>
                <div>11111111111：这{utils.isMobile('11111111111') ? '是' : '不是'}手机号</div>
                {
                    list.map(data => <li key={data.id}>{data.title}<button onClick={() => this.handleItemDel(data.id)}>删除</button></li>)
                }
            </div>
        );
    }
}

export default Index;
