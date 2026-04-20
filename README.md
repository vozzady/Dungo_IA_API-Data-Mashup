# Task Manager with Notion API

## 1. Project Description
This project is a simple task manager that lets a user enter a task name and choose a priority level in a web form. When the form is submitted, the Express backend sends the data to the Notion API and creates a new task entry in a connected Notion database.

Track: CommTech

## 2. APIs Used
- [Notion API](https://developers.notion.com/)
  Used to create a new page inside a Notion database. In this project, each submitted task is saved with a task name, priority, and default status of `To Do`.

## 3. Setup Instructions
1. Clone the repository.
2. Open the project folder, then go to `task-manager`.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file inside `task-manager` and add:

```env
NOTION_API_KEY=your_notion_integration_secret
NOTION_DATABASE_ID=your_notion_database_id
```

5. Make sure your Notion integration has access to the target database.
6. In the Notion database, create these properties with matching names and types:
- `Task Name` as `Title`
- `Priority` as `Select`
- `Status` as `Select`

To run locally:

```bash
cd task-manager
npm run dev
```

Then open `http://localhost:5000`.

## 4. Data Integration Explanation
This project follows a CommTech workflow where user input moves through a small automation pipeline. First, the user types a task name and selects a priority in the browser form. The frontend JavaScript captures that input and sends it as JSON to the backend route `/api/create-task`.

The Express server receives the request, checks that both `task` and `priority` are present, and then builds a Notion API request. That request maps the submitted values into Notion database properties:
- `task` becomes `Task Name`
- `priority` becomes `Priority`
- `Status` is automatically set to `To Do`

After that, the backend calls `notion.pages.create()` to insert a new page into the configured database. If the request succeeds, the server returns a success response and the page shows `Task created successfully!`. If something fails, such as a missing field, wrong database property name, invalid API key, or unavailable Notion resource, the server returns an error message and the UI shows the failure state.

Example flow:
1. User enters `Finish README` and selects `High`.
2. The browser sends `{ "task": "Finish README", "priority": "High" }`.
3. The server sends the mapped data to Notion.
4. A new Notion database item is created with:
- Task Name: `Finish README`
- Priority: `High`
- Status: `To Do`

## 5. Known Limitations
- The app only creates tasks; it does not edit, delete, filter, or mark tasks as completed.
- There is no loading spinner beyond text feedback and no task list displayed on the page.
- The app depends on exact Notion database property names and valid select options.
- If the `.env` values are missing or incorrect, task creation will fail.
- There is only basic validation, so edge cases such as duplicate tasks or very long task names are not handled.

## 6. AI Usage Disclosure
I implemented and understood the main application logic myself, including the frontend form submission, Express route handling, environment variable setup, and Notion database integration.