export const tasksData = [
  {
    id: 1,
    title: "Fix Production Bug",
    description: "Investigate the urgent issue reported in production. Identify the root cause, implement a fix, and deploy it safely. Make sure to test thoroughly and notify the QA team once resolved.",
    category: "Work",
    priority: "high",
    status: "pending",
    assignedTo: {
      name: "Arun Kumar",
      role: "Frontend Developer",
      email: "arun.kumar@example.com",
      avatar: "/assets/img/team/arun.png"
    },
    schedule: {
      startTime: "2:00 PM",
      deadline: "Today",
    },
    tags: ["Bug", "Critical"],
    notify: true,
    attachment: null
  },
  {
    id: 2,
    title: "Design Today Task UI",
    description: "Create a responsive and clean UI layout for the 'Today Tasks' page. Include task cards, priority indicators, filters, and actions buttons. Ensure consistency with the existing design system.",
    category: "UI",
    priority: "medium",
    status: "pending",
    assignedTo: {
      name: "Priya Reddy",
      role: "UI/UX Designer",
      email: "priya.reddy@example.com",
      avatar: "/assets/img/team/priya.png"
    },
    schedule: {
      startTime: "6:00 PM",
      deadline: "Today",
    },
    tags: ["UI", "Frontend"],
    notify: false,
    attachment: null
  },
  {
    id: 3,
    title: "Refactor CSS",
    description: "Review all existing CSS files and remove unused or redundant styles. Organize stylesheets for better maintainability. Implement consistent naming conventions and optimize for responsiveness.",
    category: "Dev",
    priority: "low",
    status: "pending",
    assignedTo: {
      name: "Karthik Nair",
      role: "Frontend Developer",
      email: "karthik.nair@example.com",
      avatar: "/assets/img/team/karthik.png"
    },
    schedule: {
      startTime: "Anytime",
      deadline: "Today",
    },
    tags: ["Cleanup"],
    notify: false,
    attachment: null
  },
  {
    id: 4,
    title: "Team Meeting",
    description: "Conduct the daily standup meeting with the development team. Discuss completed tasks, current blockers, upcoming priorities, and ensure everyone is aligned on project goals.",
    category: "Meeting",
    priority: "medium",
    status: "completed",
    assignedTo: {
      name: "Divya Iyer",
      role: "Project Manager",
      email: "divya.iyer@example.com",
      avatar: "/assets/img/team/divya.png"
    },
    schedule: {
      startTime: "10:00 AM",
      deadline: "Today",
    },
    tags: ["Scrum"],
    notify: true,
    attachment: null
  },
  {
    id: 5,
    title: "Deploy New Feature",
    description: "Deploy the latest feature updates to the production environment. Coordinate with backend and QA teams to ensure smooth deployment and minimal downtime.",
    category: "Work",
    priority: "high",
    status: "pending",
    assignedTo: {
      name: "Raghav Menon",
      role: "Full Stack Developer",
      email: "raghav.menon@example.com",
      avatar: "/assets/img/team/raghav.png"
    },
    schedule: {
      startTime: "4:00 PM",
      deadline: "Today",
    },
    tags: ["Deployment", "Critical"],
    notify: true,
    attachment: null
  },
  {
    id: 6,
    title: "Write Documentation",
    description: "Document the new API endpoints and update the project README. Ensure clear instructions for frontend integration and testing.",
    category: "Dev",
    priority: "medium",
    status: "pending",
    assignedTo: {
      name: "Lakshmi Narayan",
      role: "Backend Developer",
      email: "lakshmi.narayan@example.com",
      avatar: "/assets/img/team/lakshmi.png"
    },
    schedule: {
      startTime: "Anytime",
      deadline: "This Week",
    },
    tags: ["Documentation"],
    notify: false,
    attachment: null
  }
];
