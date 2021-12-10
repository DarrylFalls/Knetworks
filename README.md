# Knetworks


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_Knetworks is a website for thinking out loud. Here you can ask questions or present ideas and get educated answers and feedback from other users._

<br>

## MVP

_On Knetworks, a user will be able to create an account and post, edit, and delete questions, ideas, answers, and comments._

<br>

### Goals

- _Create an account_
- _post questions and ideas_
- _post answers and comments on questions and ideas_
- _able to edit and delete all posts created by individual user_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes


https://www.figma.com/file/nwz4kDLFONfgceeNgJ33YW/Knetworks?node-id=0%3A1

- Desktop Landing

![image](https://user-images.githubusercontent.com/65515839/145598265-ed8cd92d-0278-449b-84b8-7f943fd8115a.png)

![image](https://user-images.githubusercontent.com/65515839/145598736-9952ba0d-eddc-41af-930e-be27780b3d25.png)


#### Component Tree

> https://whimsical.com/SnNcjpgJ5S36syqWZw7J9d


![image](https://user-images.githubusercontent.com/65515839/145608656-0cf936eb-34e8-4afa-b045-d8c504b3f8fd.png)


#### Component Architecture
 

``` structure

src
|__ screens/
      |__ Home/
            |__ Home.jsx
            |__ Home.css
      |__ Login/
            |__ Login.jsx
            |__ Login.css
      |__ SignUp/
      |__ Welcome/
      |__ QuestionCategories/
      |__ QCList/
      |__ QuestionDetail/
      |__ CreateQuestion/
      |__ IdeaCategories/
      |__ ICList/
      |__ IdeaDetail/
      |__ CreateIdea/
|__ components/
      |__ Layout.jsx
      |__ Nav.jsx
      |__ Hamburger.jsx
      |__ Answer.jsx
      |__ AnswerComment.jsx
      |__ IdeaComment.jsx
|__ services

```

#### Time Estimates


| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| build backend        |    H     |     6 hrs      |               |             |
| testing backend      |    H     |     2 hrs      |               |             |
| building react frame |    H     |     2 hrs      |               |             |
| building services    |    H     |     3 hrs      |               |             |
| building components  |    H     |     5 hrs      |               |             |
| building screens     |    H     |    10 hrs      |               |             |
| testing              |    H     |     2 hrs      |               |             |
| CSS styling          |    M     |     8 hrs      |               |             |
| TOTAL                |          |    38 hrs      |     TBD       |     TBD     |


<br>

### Server (Back End)

#### ERD Model


![image](https://user-images.githubusercontent.com/65515839/145620935-878280ba-727f-4cf1-9cfd-2990dad13950.png)

<br>

***

## Post-MVP

- Add likes and dislikes to answers and comments
- Add sub-categories
- Make about page
- Make rules page

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
