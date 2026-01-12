const employees = [
  {
    "id": 1,
    "firstName": "Rahul",
    "email": "rahul@co.com",
    "password": "123",
    "taskStats": {
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false,
        "title": "Login Page UI",
        "description": "Design and implement login page UI",
        "date": "2026-01-05",
        "category": "Frontend"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "title": "Fix Navbar Bug",
        "description": "Resolve navbar alignment issue",
        "date": "2026-01-02",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "title": "Dark Mode",
        "description": "Add dark mode support",
        "date": "2026-01-01",
        "category": "UI"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya@co.com",
    "password": "124",
    "taskStats": {
      "active": 2,
      "completed": 2,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": false,
        "completed": false,
        "newTask": true,
        "failed": false,
        "title": "API Integration",
        "description": "Integrate employee API",
        "date": "2026-01-06",
        "category": "Backend"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "title": "Database Schema",
        "description": "Create user and task schema",
        "date": "2026-01-03",
        "category": "Database"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "title": "Email Service",
        "description": "Setup email notifications",
        "date": "2026-01-04",
        "category": "Service"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Aman",
    "email": "aman@co.com",
    "password": "125",
    "taskStats": {
      "active": 1,
      "completed": 3,
      "failed": 1,
      "newTask": 0
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false,
        "title": "Employee Dashboard",
        "description": "Build employee dashboard layout",
        "date": "2026-01-07",
        "category": "Frontend"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "title": "JWT Auth",
        "description": "Implement JWT authentication",
        "date": "2026-01-02",
        "category": "Security"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "title": "Role Management",
        "description": "Add role-based access",
        "date": "2026-01-04",
        "category": "Auth"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "neha@co.com",
    "password": "126",
    "taskStats": {
      "active": 2,
      "completed": 1,
      "failed": 3,
      "newTask": 3
    },
    "tasks": [
      {
        "active": false,
        "completed": false,
        "newTask": true,
        "failed": false,
        "title": "Task Cards UI",
        "description": "Design task cards component",
        "date": "2026-01-06",
        "category": "UI"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "title": "CSS Optimization",
        "description": "Optimize CSS styles",
        "date": "2026-01-03",
        "category": "Styling"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "title": "Animation Effects",
        "description": "Add smooth animations",
        "date": "2026-01-01",
        "category": "UX"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikas",
    "email": "vikas@co.com",
    "password": "127",
    "taskStats": {
      "active": 1,
      "completed": 3,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": false,
        "completed": false,
        "newTask": true,
        "failed": false,
        "title": "Testing",
        "description": "Write unit tests",
        "date": "2026-01-07",
        "category": "Testing"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "title": "Bug Report",
        "description": "Document known bugs",
        "date": "2026-01-02",
        "category": "Documentation"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "title": "Performance Audit",
        "description": "Analyze app performance",
        "date": "2026-01-04",
        "category": "Performance"
      }
    ]
  }
]




const admin =
  {
    "firstName" : "Shiva",
    "id": 0,
    "email": "admin@company.com",
    "password": "999"
  }
  

 

export const setlocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }

}