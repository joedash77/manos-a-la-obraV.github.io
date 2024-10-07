export const dataList = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Description for Project Alpha',
      epics: [
        { 
            id: 101, 
            name: 'Epic 1 for Alpha Project',  
            description: 'Description for Epic Alpha',
            Story: [
                {
                    id: 201,
                    name: 'Story 1 for Alpha Epic',
                    description: 'Description for story Alpha',
                    task: [
                    {
                        id: 301,
                        name: 'Task 1 for Alpha Story',
                        description: 'Description for task Alpha',
                    }
                    ]
                }
            ]
        },
        { id: 102, name: 'Epic 2 for Alpha' }
      ]
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Description for Project Beta',
      epics: [
        { 
            id: 201, 
            name: 'Epic 1 for Beta Project',
            Story: [
                {
                    id: 201,
                    name: 'Story 1 for Alpha Epic',
                    description: 'Description for story Beta',
                    task: [
                    {
                        id: 301,
                        name: 'Task 1 for Beta Story',
                        description: 'Description for task Beta',
                    }
                    ]
                }
            ]
        }
      ]
    }
  ];