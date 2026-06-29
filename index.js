import ServiceModule from "@iprokit/service";
const Service = ServiceModule.default;
const service = new Service("DemoService");

// Home Route
service.get("/", (req, res) => {
    res.end("Welcome to IProKit 🚀");
});

// Get Users
service.get("/users", (req, res) => {
    res.end(JSON.stringify([
        { id: 1, name: "Ritam" },
        { id: 2, name: "Rahul" }
    ]));
});

// Get User By ID
service.get("/users/:id", (req, res) => {
    res.end(`User ID: ${req.params.id}`);
});

// Create User
service.post("/users", (req, res) => {
    res.end("User Created Successfully");
});

// Update User
service.put("/users/:id", (req, res) => {
    res.end(`User ${req.params.id} Updated`);
});

// Delete User
service.delete("/users/:id", (req, res) => {
    res.end(`User ${req.params.id} Deleted`);
});

service.on("start", () => {
    console.log("✅ Service Started");
});

await service.start(3000, 6000, 5000, "224.0.0.2");