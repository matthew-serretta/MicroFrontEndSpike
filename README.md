# MicroFrontEndSpike
This is a spike to experiment with Micro Frontend (MFE) architecture. 

# Description
In `/packages` are 2 basic MFEs (Dashboard & People) using module federation to share code.

Dashboard imports `mockData` from People in `DashboardPage.vue`.
Peolpe imports `Header.vue` from Dashboard in `App.vue`.

# To run
In root run `yarn start` to start both services. Or run it in `/people`/`/dashboard` to start them individually.

Hypothetically you could only run one MFE (e.g. for development) however you would need to remove the import from the other MFE. 