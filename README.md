# First MERN Project

## Introduction

- Following a Full Stack MERN Project Video Tutorial:
- https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu

* Concurrently, looked through relevant additional documentation to learn more
* Added comments for reference on interesting learning points, code examples

## Key Learning Points

- Allowed me to get a initial introduction to making a fully-functional website

* MERN Stack: MongoDB, Express, React, Node
* Additional JS frameworks/libraries: Redux, Material-UI
* Additional middleware/modules: cors, dotenv

### Process for implementing a Key Functionality (e.g. CRUD Features)

Backend:

1. Create a new route (in server/route)
2. Create the respective handler for the route (in server/controllers)

Frontend:

3. Create the API function (in client/src/api)
4. Create the action creator (in client/src/actions)
5. Update reducer with new action (in client/src/reducers)
6. Dispatch action in the relevant components (e.g. onClick in client/src/components/Form)
