# Full Stack Development Test - Week Five

This assessment tests your understanding of building a full stack app using React, Node/Express, and MySQL.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called facebook: `create database facebook`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=facebook
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'students' in your database.

- Make sure you understand how the `students` table is constructed. In your MySQL console, you can run `use facebook;` and then `describe students;` to see the structure of the students table.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.

## Basic Requirements

Create a webpage with the following functionality:

- [X ] A list of students.
- [X ] A form to add new students. There should be fields to input the first and last names, separately.
  - After submitting the form, the new student should be added to the database and displayed on the page.
- [X ] Each student can be deleted with a delete button. After clicking on this button, student should be deleted from the database and the updated list of students shown on the page
- [ ] Style the app to make it look as polished as possible. Bootstrap is already loaded in the index.html file, so you can use it if you want to.
- [ ] (Optional/bonus) Clicking on a student should show the student's profile to the right of the students list. The info to display this profile should be obtained from a fetch request to `/students/:id`

To accomplish this, you will need to:

- [X ] Finish the routes in the API server (`/routes/students.js`).
- [X ] Finish the front end (`/client/src/`). Create as many components as you need.

## Guidelines

- Do not use any presentations from the class or any notes you have taken.
- Try to do the test **without looking at code you have previously written**. If you get stuck for more than 30min, you may look at your previous code - but make sure you let your instructor know.
- The only resources you may use online are:
  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
- Make sure you give yourself a grade before turning it in!

## Tips

Suggested Process:

1. Try and write the correct query in `mysql`.
1. Use that query to finish the endpoints in `/routes/students.js`.
1. Test your endpoints using Postman.
1. Call the endpoints from the front end.

## Self-Assessment

Give yourself a grade for each question. Explain why you gave yourself that grade.

| Grade | Explanation                                                        |
| :---: | ------------------------------------------------------------------ |
|   4   | I understood this completely and did not struggle answering it.    |
|   3   | I think I did well, but I didn't totally understand why it worked. |
|   2   | I think I was close, but I didn't get the answer.                  |
|   1   | I am struggling with this question.                                |
|   0   | I did not attempt this question (explain why)                      |

### 1. API Endpoints & MySQL

- Grade: 2
- Explanation:

### 2. Frontend

- Grade: 2
- Explanation: I haven't had time to do any css, but I made the form and the display. Can't test them, explanation down here.

I put a 2 on both of them because I haven't been able to test them. I have gone over my code several times and I think it's correct. I would very much like to know where my mistake is. Help!!

I attached some screenshots that might be of use (on folder screenshots).

The problem is on line 81 of the file routes/students.js.

For some reason it is not detecting the columns of my table. It does get the information from App.js, and the values that I try to insert exist, and get there correctly. But this error keeps appearing:

"error":"ER_BAD_FIELD_ERROR: Unknown column 'undefined' in 'field list'" column exists

It is connecting to my table correctly and I think the routes are also ok. I tried to do all the other elements without being able to test them, and to do that I used my code from the homework activity. As I was super stucked I checked my own code and compared everything (my hw code works); and still can't see anything wrong.

I looked up some solutions on google, and after trying some yarn upgrades and npm ungrades, it is still not working. I am sorry :(

Also, the RegisteredStudents.js component is commented to avoid clustered errors on the console log, but I believe the display is correct.
