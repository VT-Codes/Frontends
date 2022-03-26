# 🧑‍💻 Codebase

This is all of my Codebase cramped into one monorepo.
Its a mix of websites, servers, libraries and packages!

### [Structure](#frontend-sructure) **·** [Projects](#🔧-projects)

---

## Frontend Sructure

Apps are divided into 4 library-types. These apps are not developed like monoliths but will be bundled together for ease of deployment. These library types are:

- `ui`: This is a library which only contains **dumb** components for _other libraries_ to use
- `data-access`: This library holds all api-calls to other sources/servers. This also contains all state-management stores.
- `feature`: These libraries hold all logic, but do not contain the code to execute that logic. This only imports functions and code from other libraries. They also import components from `core-ui`
- `shell`: This library acts like a middleman between the feature libraries and the app project

---

## 🔧 Projects

| 🕶️ Alias              | 🏷️ Name                   |              |                           |                           |
| --------------------- | -------------------------- | :----------: | :-----------------------: | :-----------------------: |
| **Apps**              |                            |  ⚡ **Done** |     🚧 **In Development** | 🤔 **Planning to build** |
| **Thunder**           | _Movie Reviewer App_       |               |           👷🏾             |                           |
| **Honey**             | _Subscription Handler_     |               |                          |            🚦             |
| **Butler**            | _New tab extention_        |               |                          |            🚦             |
|   **Servers**         |                            | ⚡ **Done**   | 🚧 **In Development**    | 🤔 **Planning to build** |
| **Thunderbolt**       | _Server to Thunder_        |               |            👷🏾            |                           |
| **Nightclubguard**    | _Server to Clubguard_      |               |                          |            🚦             |
|   **Packages**        |                            | ⚡ **Done**   | 🚧 **In Development**    | 🤔 **Planning to build** |
| **Structer**          | _Data Structures_          |               |           👷🏾             |                           |
| **Algos**             | _General simple algorithms_|               |           👷🏾             |                           |
| **Other software**    |                            | ⚡ **Done**  | 🚧 **In Development**    | 🤔 **Planning to build**  |
| **Clubguard**         | _Auth Discord Bot_         |               |                          |             🚦            |

---
