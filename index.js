import ServiceModule from "@iprokit/service";
const Service=ServiceModule.default
// Create Service
const service = new Service("DemoService");

// Events
service.on("start", () => {
    console.log("✅ Service Started");
});

service.on("stop", () => {
    console.log("❌ Service Stopped");
});

// Start Service
await service.start(
    3000,   // HTTP Port
    6000,   // SCP Port
    5000,   // SDP Port
    "224.0.0.2"
);

console.log('Service is running on:3000 (HTTP), 6000 (SCP), 5000 (SDP)');