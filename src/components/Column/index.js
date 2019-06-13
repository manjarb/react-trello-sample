import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Task from '../Task'

export default class Column extends React.Component {
    
    render() {
        return (
            <div style={style.container}>
                <h3 style={style.title}>{this.props.column.title}</h3>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <div style={style.taskList}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            // isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}

const style = {
    container: {
        margin: '8px',
        border: '1px solid lightgrey',
        borderRadius: '2px',
        width: '220px',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        padding: '8px'
    },
    taskList: {
       padding: '8px',
       backgroundColor: 'red',
       flexGrow: '1',
       minHeight: '100px'
    }
}