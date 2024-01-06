# REACT MOVIES APP

Online demo here: https://monika-piras.github.io/react-movies-example

This project is an example about how to build a responsive and mobile friendly app with [ReactJS] using the TvMaze REST API (https://static.tvmaze.com/apidoc/).

The purpose of the project is to create an interactive online movie catalog to allow users to search films and retrieve useful informations about them.
This implementation uses real & updated data coming from a public API movie source called TvMaze.

When the user browses the website, it will be displayed an homepage showing a list of movies.
That list that can be filtered using a search box displayed in a fixed position at the top of the page.

That interactive global search automatic applies a filter when the user types inside the input field, making a real AJAX call to the API server.
When the user has found his searched film, he can open the details by clicking the corresponding movie poster.
This interaction will bring the user to a detail page, that will show all the informations about that movie, including plot, actors and movie's categories.

## Architecture:

After the main component of the app is mounted (App), it automatically executes an API call to retrieve the main movies list from TvMaze.

The global input search component (SearchBox) does real time API calls for filtering the movies based on the input field.
The SearchBox uses the Debouce Input Component to delay the user input, in order to trigger the API fetch by 500 milliseconds in order to preserve performance and improve the User Experience.

The movie detail page shows title, poster card, description, language, categories and the complete cast for each movie.
This component updates his state (via React Hooks) making a GET request to the TvMaze APis in order to retrieve the movie details.

The navigation of the app is configured with HashRouter in two routes, Home page and Moviedetail page.
The Moviedetail page expects an ID path parameter.

It's also present an error catching component (ErrorBoundary) for the CardList Component on the Home Page.
In case of errors, a message will be prompt to the user as fallback UI.

The UI layout it is creted by using the fast and lightweight CSS library Tachyons.

Presentation Video link:

video link:


## Install
```
npm install
```

### Run locally
```
npm start
```

### Deploy 
```
npm run build
```
If you want to change the address for a custom deployment, change it to package.json:

"homepage": "/react-movies-example"

## License
MIT

## Version
0.1.0



[ReactJS]: <https://legacy.reactjs.org/>
