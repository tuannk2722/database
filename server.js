import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Render yêu cầu phải lắng nghe trên 0.0.0.0 và PORT động
const PORT = process.env.PORT || 3001;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
