import { app } from "./app";

let port: number = 3333

app.listen(port, () => console.log(`server is running on port ${port}`));