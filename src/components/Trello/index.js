import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from '../../initial-data'
import Column from '../Column'

export default class Trello extends React.Component {
    state = initialData

    onDragStart = result => {

    }

    onDragUpdate = result => {

    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }

            this.setState(newState)
            return
        }

        // Moving to another column
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }
        this.setState(newState)
    }

    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}>
                <div style={{ display: 'flex' }}>
                    {
                        this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId]
                            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                            return <Column key={column.id} column={column} tasks={tasks} />
                        })
                    }
                </div>
            </DragDropContext>
        )
    }
}