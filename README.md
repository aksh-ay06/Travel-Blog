# Travel-Blog
A Responsive Website(Travel blog) where user can perform CRUD operations. 

Technologies Used:
Express: Express is a fast and minimalist web framework for Node.js, used to handle HTTP requests and responses, making it easy to build robust APIs and web applications.

Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to interact with MongoDB, defining schemas, models, and querying the database.

Multer: Multer is a middleware used for handling file uploads. It enables the application to process image uploads from users.

Cookie-parser: Cookie-parser is middleware used to parse cookies from the incoming HTTP request headers. It simplifies handling cookies for user sessions.

EJS: EJS (Embedded JavaScript) is a templating engine that allows embedding JavaScript code in HTML templates. It's used for rendering dynamic HTML content on the server-side.

MongoDB: MongoDB is a NoSQL database used to store the blog's data, including posts and other information.

Additional Modules:
auth: This module contains controllers and functions related to user authentication and token verification.

routes: The routes directory contains modules that define different routes for the blog application.

models: The models directory contains the schema and model definition for the Post data.

Middleware:
Static Assets: Express serves static assets (e.g., CSS, images) from the public directory using the express.static() middleware.

JSON Parsing: The express.json() middleware parses incoming requests with JSON payloads, making it easy to handle JSON data.

Image Upload: Multer is used as middleware to handle image uploads. It stores uploaded images in the public/images directory.

Database Connection:
The application connects to a MongoDB database hosted on MongoDB Atlas, using the connection string mongodb+srv://dbUser:srbUeTdHIek0YdSz@cluster0.bqqyvuz.mongodb.net/travels.

Routes:
The application defines different routes for handling various actions:

/posts: Handles routes related to blog posts.
/callback-requests: Handles routes related to callback requests.
/emails: Handles routes related to emails.
/users: Handles routes related to users.
Page Rendering:
The application renders the following pages using the EJS templating engine:

/landmark: Renders a landmark page with information retrieved from the MongoDB database.
/admin: Renders the admin page if a valid authentication token is present; otherwise, redirects to the login page.
/login: Renders the login page if no valid authentication token is present; otherwise, redirects to the admin page.
Server Configuration:
The application listens on the specified port, which is either taken from the environment variable PORT or defaults to port 3000. It logs a message indicating that the server is running.

Note:
The tech stack mentioned above represents the core technologies and modules used in the travel blog application. However, keep in mind that there might be additional configurations, libraries, and modules utilized in the overall application depending on the complete project structure.
