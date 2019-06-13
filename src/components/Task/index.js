import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default class Task extends React.Component {
    
    render() {
        return (
            <Draggable draggableId={this.props.task.id} 
                index={this.props.index}
                isDragDisabled={this.props.task.id === 'task-1'}>
                {(provided, snapshot) =>
                    <div ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}>
                        <div style={{
                            ...style.container, 
                            backgroundColor: snapshot.isDragging ? 'yellow' : 'green' 
                        }}>
                            {/* <div style={style.handle}
                                {...provided.dragHandleProps}></div> */}
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
        backgroundColor: 'green',
        display: 'flex'
    },
    title: {
        padding: '8px'
    },
    taskList: {
       padding: '8px'
    },
    handle: {
        width: '20px',
        height: '20px',
        backgroundColor: 'orange',
        borderRadius: '4px'
    }
}