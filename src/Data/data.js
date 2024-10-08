export const dataList = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Description for Project Alpha',
      epics: [
        { 
            id: 1, 
            name: 'Epic 1 for Alpha Project',  
            description: 'Description for Epic Alpha',
            stories: [
                {
                    id: 1,
                    name: 'Story 1 for Alpha Epic 1',
                    description: 'Description for story Alpha 1',
                    task: [
                    {
                        id: 1,
                        name: 'Task 1 for Alpha Story',
                        description: 'Description for task Alpha 1',
                    }
                    ]
                }
            ]
        },
        { 
            id: 2, 
            name: 'Epic 2 for Alpha Project',
            description: 'Description for Epic Alpha 2',
            stories: [
                {
                    id: 2,
                    name: 'Story 1 for Alpha Epic 2',
                    description: 'Description for story Alpha 2',
                    task: [
                    {
                        id: 2,
                        name: 'Task 1 for Alpha Story 2',
                        description: 'Description for task Alpha 2',
                    }
                    ]
                }
            ]
        }
      ]
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Description for Project Beta',
      epics: [
        { 
            id: 1, 
            name: 'Epic 1 for Beta Project',
            stories: [
                {
                    id: 1,
                    name: 'Story 1 for Beta Epic 1',
                    description: 'Description for story Beta 1',
                    task: [
                    {
                        id: 1,
                        name: 'Task 1 for Beta Story 1',
                        description: 'Description for task Beta 1',
                    }
                    ]
                }
            ]
        }
      ]
    }
  ];