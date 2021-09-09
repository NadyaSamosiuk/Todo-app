import  React, { Component } from 'react'
import { Button } from 'antd';
import { Checkbox } from 'antd';

class TodoItem extends Component{
    constructor({item, todoDone, todoDelete}){
        super()
          this.doneForItem= todoDone 
          this.info = item
          this.deleteItem = todoDelete
    }

    render(){
        return(          
            <li>
                <div className="todo__item__wrapper">
                    
                    <Checkbox  className="todo__item__checkbox" type='checkbox' checked={this.info.flag} onChange={()=>{this.doneForItem(this.info.id)}}></Checkbox>
                    {console.log(this.info.flag)}
                    <span className={this.info.flag ? 'todo__item__description todo__item-done' : 'todo__item__description'}>{this.info.description}</span>
                </div>
                <Button className="todo__item-delete" style={{ background: "rgba(177, 233, 255, 0.89)"}} onClick={()=>this.deleteItem(this.info.id)}>Удалить</Button>                
            </li>               
        )
    }
}

 export default TodoItem