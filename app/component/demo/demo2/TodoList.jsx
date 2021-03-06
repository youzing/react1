import React from 'react';
import '../../../public/css/todoList.pcss';
import List from './List';
import "babel-polyfill";
import apiRequestAsync from '../../../public/js/apiResquestAsync';
import apiRequest from '../../../public/js/apiRequest';
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[        {
                id:1,
                title:'小蚁云存1',
                status:1,/*0 删除,1 正常*/
            },
                {
                    id:2,
                    title:'小蚁云存2',
                    status:1,/*0 删除,  1 正常*/
                }]
        };
        this.handleItemEdit = this.handleItemEdit.bind(this);
    }
    componentDidMount(){
        // alert("11");

        this.handleTodoList()
    }

    handleAdd(){
        let item = this.refs['todoInput'].value;
        if(item){
            let list = this.state.list;
            list.push({id:list.length+1,title:item,status:1});
            this.setState({list:list},()=>console.log(this.state.list))
        }else{
            alert('不能为空')
        }
    }
    handleItemEdit(id, type) {
        let list = this.state.list;
        list.find(data => data.id === id).status = type;
        this.setState({list: list})
    }
    async handleTodoList() {
        let todoList = await apiRequestAsync.post('todoList');
        this.setState({list: todoList.list});
        // let todoList1 = await apiRequestAsync.post('todoList');
        // console.log(todoList1);
        // let todoList2 = await apiRequestAsync.post('todoList');
        // console.log(todoList2);
    }
    render(){
        let {location} = this.props;
        return(
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={this.handleItemEdit}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List list={this.state.list}  handleItemEdit={this.handleItemEdit} type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List list={this.state.list} handleItemEdit={this.handleItemEdit} type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List list={this.state.list} handleItemEdit={this.handleItemEdit} type={2}/>
                    </div>
                </div>
                {
                    location ?
                        <div>
                            <div>hash:{location.hash}</div>
                            <div>pathname:{location.pathname}</div>
                            <div>search:{location.search}</div>
                            <div>state:{location.state && location.state.fromDashboard}</div>
                        </div>
                        :
                        null
                }
            </div>

        )
    }
}
export default TodoList;