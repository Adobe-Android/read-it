# Read-it
A book review app re-imagined in the style of Reddit.

- Have you ever had a friend recommend a book and then you forgot about it entirely?
- Have you ever just wanted to keep track of all the different books you are currently reading?
That's why this project was started!

## Problems solved

The book review process can also be complicated and hard to parse through.
That's why we streamlined it with some ideas from our friends at Reddit!
You either recommend the book or you don't with a simple upvote or downvote.
From there, you can also leave an official review.

## Future Plans
In the future..we plan to add a few extra features.
1. Fix the front-end toggle on upvoting/downvoting to reflect the database value (we are already doing this right server-side, but that isn't made perfectly clear.
2. Attach reviews from any user to the books on search or maybe make a separate view that does this.
3. Make a visible count available to the user that will change with each upvote and downvote
4. Add some extra polish by making deleted and added content automatically appear.
5. Add error handling for an empty read it list.
6. Add an effect on click to the 'add to read it list' button so the user is aware that it has been successfully added.

## Installation

Clone this repository to your local machine


Install necessary dependencies:

```
npm install

npm install -g sequelize-cli

make sure you have postgres installed on your operating system (https://www.postgresql.org/download/)
(macOS, BSD, and Linux users should install using their package managers).

```

Ready the database:

```
sequelize db:migrate:undo:all (you only need to follow this step if you've previously run the below command)
sequelize db:migrate
```

Start the server:

```
npm start
```

Config.json

You will also need a config.json file. You can contact me for details.

## Use
1. Start by registering a new user
2. Next, you can search for just about any book
3. From here, you can add multiple books to your read it list to keep track of for future reading
4. Go to your Read it List to view all of your added books
5. Feel free to review your books from here
6. Once you review a book, you can see it from here as well.
7. Last, you can give an upvote or a downvote to each book.

More coming soon..

## Technologies

* [Pug](https://pugjs.org/api/getting-started.html)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/) 
* [Sequelize](http://docs.sequelizejs.com/) 
* [PostgreSQL](https://www.postgresql.org/)
* [Google Books API](https://developers.google.com/books/docs/v1/getting_started)

## Author

**David Brown** - [Adobe-Android](https://github.com/Adobe-Android)

## License

[MIT](https://choosealicense.com/licenses/mit/)
