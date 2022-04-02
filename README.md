

<div align="center">
<img src="media/logo.png" width="600px" />

<br />

# 🧑‍💻 Codebase

</div>

<p align="center">
This is all of my Codebase cramped into one monorepo.
Its a mix of websites, servers, libraries and packages!
</p>

<div align="center">

### [Tech used](#tech-used) **·** [Structure](#frontend-sructure) **·** [Projects](#projects)

</div>


<div align="center" id="tech-used">

<br />

![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
![Prisma ORM](https://img.shields.io/badge/prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)

![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![](https://shields.io/badge/-Nx-blue?style=for-the-badge&logo=nx)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---
<!--
# Idea!!

**<https://projects.v-thomas.xyz>**

modal about which projects i have deployed
-->


## Frontend Sructure

Apps are divided into 4 library-types. These apps are not developed like monoliths but will be bundled together for ease of deployment.

All these library types are scoped to the projects they belong to **unless** the path is prefixed with `shared` (ex `shared/ui`). These library types are:

- `ui`: This is a library which only contains **dumb** components for _other libraries_ to use.
- `data-access`: This library holds all api-calls to other sources/servers. This also contains all state-management stores.
- `app`: This is the actuall app, but does not contain any logic, instead it takes logic from `data-access` and then displays it to the user.

---


<h2 id="projects">🔧 Projects</h2>

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
