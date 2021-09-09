import  React, { Component } from 'react'
import { Button } from 'antd';

class TodoInput extends Component{
    constructor({todoAdd}){
        super()
        this.add = todoAdd
        this.addvalue=this.addvalue.bind(this)        
    }

    addvalue(){
        const input=document.querySelector('.todo__input__value')
        const value = document.querySelector('.todo__input__value').value
        input.value=""

         if(value.length==0){
           console.log('hello')
            return
         }else{
             return value 
        }
    }

    render(){
        return(          
            <div className="todo__create">
                <input className="todo__input__value" type='text' placeholder="Новая задача" />
                <Button type="primary" className='input__btn' onClick={()=>this.add(this.addvalue())}>Добавить задачу</Button>
            </div>             
        )
    }
}

 export default TodoInput