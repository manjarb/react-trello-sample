import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default class Task extends React.Component {
    
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) =>
                    
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div style={{
                            ...style.container, 
                            backgroundColor: snapshot.isDragging ? 'yellow' : 'green' 
                        }}>
                            {this.props.task.content}
                        </div>
                    </div> 
                }
            </Draggable>
        )
    }
}

const style = {
    container: {
        marginBottom: '8px',
        border: '1px solid lightgrey',
        borderRadius: '2px',
        padding: '8px',
        backgroundColor: 'green'
    },
    title: {
        padding: '8px'
    },
    taskList: {
       padding: '8px'
    }
}