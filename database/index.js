import server from "./src/server.js";

/*
import models from "./src/database/index.js";

models.Film.list().then(res => console.log(res));
models.Character.list().then(res => console.log(res));
models.Character.get(1).then(res => console.log(res));
models.Character.insert({
    _id: "200",
    name: "Wizz",
    birth_year: "1994"
}).then(res => console.log(res));
*/

server.listen(8004, () => {
    console.log("Server listening on port 8004");
});
