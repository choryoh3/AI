const env = require("./config/env");

console.log("================================");
console.log("Application started");
console.log("================================");

console.log("Environment:", env.nodeEnv);
console.log("Port:", env.port);

console.log("Database:");
console.log("  Host:", env.db.host);
console.log("  Port:", env.db.port);
console.log("  Name:", env.db.name);
console.log("  User:", env.db.user);
console.log("  Password:", env.db.password);
