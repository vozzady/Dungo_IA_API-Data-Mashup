**Project Description**

Using the Comtech Track, I have created a website that lets users enter a task name and choose its corresponding priority level in a web form. This task manager website allows the backend to send the data to the Notion API to create a new task entry in a table connected to the Notion database. 

**API Used**

Like in class, Notion API was used to create a new page wherein each submitted task is saved with a task name, priority and default status of  “To Do”.

**Setup Instructions**

To install, we first have to clone the repository of the folder and open the project file. Next is we have to open the task manager to install the needed dependencies to connect everything together. Once we are able to install the npm and node.js we need to create a .env file inside the task manager to add the call ups for the key and id of Notion API. Once everything is called up and that the Notion Integration has access to the target database, it is important to create properties in the table that correspond with the name and types in the code. 

To run locally, in the terminal we have to type npm run dev then open the link it will provide which will redirect the browser to the website page. Ideally, this should connect all things together and the API integration should be completed. 

**Data Integration Explanation**

For the Data integration flow, the user first types a task name and selects a priority of the respective task. This then allows the frontend JavaScript to capture the input and sends it as JSON to the backend.

The server then receives the request and checks both the task and priority if they are present. After this, it builds a Notion API request which then maps the submitted values into the Notion database properties. From this, the task becomes Task Name, priority becomes Priority, and Status is automatically set to To Do. 

After all this, the backend calls Notion to insert a new page into the configured database. If successful, the server returns a response and the page shows “Task created successfully!”. Otherwise, if it fails such as a missing field, wrong database property name, invalid API key, or unavailable Notion resource, the server will then return an error message and the UI shows the failure message. 

**Known Limitations**

In terms of limitations, the website only creates tasks and does not edit, delete, filter, or mark tasks as completed automatically. Additionally, it depends on the exact Notion database property names and valid select options which are the task name and priority level only. Moreover, if the .env file values are missing or incorrect, the task creation will fail and return a invalid API key message. Lastly, this is only a basic validation so cases such as duplicate tasks or long task names are not handled properly by the website. 

**AI Usage Disclosure**

In this Individual Assignment, the use of AI helped me to understand and debug the codes as needed. I implemented and understood the main application, concept and logic myself. However, things such as the installation of API, integration of the API, frontend form submission, route handling, environment variable setup, and Notion database integration was explained by AI to help me better understand how to connect everything. Additionally, Youtube videos such as https://www.youtube.com/watch?v=MDZC8VDZnV8 helped me visualize the codes and integrate them together with the help of AI tools.
