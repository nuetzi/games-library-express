# games-library-express
 Back-end code for Games Library app


Technologies used:
IGDB API (Documentation: https://api-docs.igdb.com)
MongoDB
Express
React
Node.js
Postman (used to generate auth-token for API and to query data - responses were saved in JSON format and stored on MongoDB as a workaround solution)
AWS Proxy API Gateway (set up and functioning, but still had CORS issues within the app; if CORS problem can be resolved, this would be used to access API through the app)
Heroku
GitHub (obviously)

Back-end hosted at: https://nuetzi-games-express.herokuapp.com

Front-end repo: https://github.com/nuetzi/games-library-react
Front-end hosted at: https://nuetzi-game-library.herokuapp.com/



Things to fix / improve:
Make README more detailed (input images and explain step-by-step process)
Figure out why some consoles (ex: Wii) are not mapping data properly (data appears correct on back-end, but I must have made a mistake somewhere in the code)
Format page for viewing on mobile devices
Improve styling and navigation between pages (maybe add a sidebar?)
Paginate imported data for better loading and easier usage (the console pages right now are just an overload of data)
Fix Show page for imported game data
Implement authorization, so my library cannot be editted without permission (or make it so each user can make their own library)
Figure out a more efficient way of querying data from IGDB API (I brute-forced and worked around problems with API access; if those problems can be solved, the code could be vastly improved)
Figure out how to use imported data to efficiently add games to user library without manually having to input data