import React from 'react';
import '../../../public/css/todoList.pcss';
import List from './List';
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
        this.handleAdd = this.handleAdd.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
    }
    componentDidMount(){
        // alert("11");
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
    handleItemDel(id){
        let list = this.state.list;
        list.find(data => data.id === id).status = 0;
        this.setState({list: list})
    }
    render(){
        return(
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={this.handleAdd}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List list={this.state.list} handleItemDel={this.handleItemDel} type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List list={this.state.list} handleItemDel={this.handleItemDel} type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List list={this.state.list} handleItemDel={this.handleItemDel} type={2}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList;