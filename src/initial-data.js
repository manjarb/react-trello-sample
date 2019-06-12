const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Task 01 Content' },
        'task-2': { id: 'task-2', content: 'Task 02 Content' },
        'task-3': { id: 'task-3', content: 'Task 03 Content' },
        'task-4': { id: 'task-4', content: 'Task 04 Content' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'Doing',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2']
}

export default initialData