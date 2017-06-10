import React, { Component } from 'react';
import './List.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class List extends Component {
  constructor(props){
    super(props);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.editListItem = this.editListItem.bind(this);
    this.counter = 1;

    // this.state = {
    //   todoList: [{id: 1000, item: "one thousand", status: "complete"}, {id: 2000, item: "second item", status: "incomplete"}]
    // }
    this.state = {todoList: []};


    setTimeout(function(){
      this.addListItem("Fancy New Item", "fancy item descriptions");
      this.addListItem("Dead item", "dead item descriptions");
      this.addListItem("Learn React", "This is way better than jquery!!!");
      this.addListItem("Learn React Router", "maybe do this on monday");
      this.addListItem("Learn to play tennis", "It's a great game!");
      this.addListItem("Learn to play golf", "You're the next Arnold Palmer!");
    }.bind(this),300)
    // setState is asynchonus.. does this fail for that reason?

    // setTimeout(function(){
    //   this.removeListItem(2);
    // }.bind(this),1600)
    
  }
  

  addListItem(newItem, newDescription=""){
    let newTodoList = this.state.todoList.slice();
    newTodoList.push({
      id: this.counter + 1,
      status: "incomplete",
      item: newItem,
      description: newDescription
    })
    this.counter ++;
    this.setState({todoList: newTodoList});
  }

  editListItem(itemId,newItem="",newDescription="",slideUp=null){
    let newTodoList = this.state.todoList.slice();
    let itemIdx = this.state.todoList.findIndex((cur) => itemId === cur.id)
    if (newItem) newTodoList[itemIdx].item = newItem;
    if (newDescription) newTodoList[itemIdx].description = newDescription;
    this.setState({todoList: newTodoList});
    // Now lets close the slideout.
    slideUp();
  }

  removeListItem(targetId){
    let newTodoList = this.state.todoList.filter(function(cur){
      if (cur.id !== targetId){
        return cur;
      }
      return null;
    });
    this.setState({ todoList: newTodoList });
  }

  completeListItem(targetId){
    let newTodoList = this.state.todoList.map(function(cur){
      if (cur.id === targetId){
        cur.status = "complete";
        return cur;
      }else{
        return cur;
      }
    });
    this.setState({ todoList: newTodoList });
  }


  render() {

    // var renderTodo = [];
    // for (let i =0; i< this.state.todoList.length; i++){
    //   // renderTodo.push(<li><Todo obj={{key: i, state: "state", item: "list item"}}/></li>);
    //   renderTodo.push(<li><Todo key={i} status={this.state.todoList[i].status} item="list item"/></li>);
    // }


    // var _this = this;
    // var renderTodo = this.state.todoList.map(function(cur,idx){
    //   return (
    //       <Todo 
    //         key={cur.id} status={cur.status}
    //         item={cur.item}
    //         description={cur.description}
    //         handleRemove={_this.removeListItem.bind(_this,cur.id)}
    //         handleComplete={_this.completeListItem.bind(_this,cur.id)}
    //       />
    //     )
    // })

    // handleSubmit={this.handleFormSubmit.bind(this)}

    var renderTodo = this.state.todoList.map(function(cur,idx){
      return (
          <Todo 
            key={cur.id} status={cur.status}
            item={cur.item}
            id={cur.id}
            description={cur.description}
            handleRemove={this.removeListItem.bind(this,cur.id)}
            handleComplete={this.completeListItem.bind(this,cur.id)}
            editListItem={this.editListItem.bind(this)}
          />
        )
    },this)

    return (
      <div className="list">
        <div>
          <TodoForm addListItem={this.addListItem}/>
        </div>
        <div>
          {renderTodo}
        </div>
      </div>
      );
  }
}

export default List;