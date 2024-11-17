const apiUrl = process.env.REACT_APP_API_BASE_URL || "https://final-proj-restaurant-res-app-backend.onrender.com";
fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => console.log(data));

const app = require("./app");
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
