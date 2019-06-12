import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from '../../initial-data'
import Column from '../Column'

export default class Trello extends React.Component {
    state = initialData

    onDragEnd = () => {
        
    }

    render() {
        return (
            <DragDropContext
                onDragStart={() => {}}
                onDragUpdate={() => {}}
                onDragEnd={this.onDragEnd}>
                {
                    this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId]
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
        
                        return <Column key={column.id} column={column} tasks={tasks} />
                    })
                }
            </DragDropContext>
        )
    }
}