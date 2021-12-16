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


|     Library      | Description                                     |
| :--------------: | :---------------------------------------------- |
|      React       | _Front end framework for javascript and HTML_   |
|   React Router   | _Alows the use of routing on a single page app_ |
|    Material UI   | _Provides pre-built components for front end_   |
|  Ruby on Rails   | _Back end framework for building API_          |

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
|__ services.js

```

#### Time Estimates


| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| build backend        |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| testing backend      |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| building react frame |    H     |     2 hrs      |     4 hrs     |    4 hrs    |
| building services    |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| building components  |    H     |     5 hrs      |     4 hrs     |    4 hrs    |
| building screens     |    H     |    10 hrs      |    12 hrs     |   12 hrs    |
| testing              |    H     |     2 hrs      |     3 hrs     |    3 hrs    |
| CSS styling          |    M     |     8 hrs      |    12 hrs     |   12 hrs    |
| TOTAL                |          |    38 hrs      |    45 hrs     |   45 hrs    |


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

- code to have edit and add forms on the same page as where the information is being displayed

``
{loggedIn && user?.id == question.user_id && edittingQuestion == false ? <div onClick={handleEditClick} className='edit-question-button'>edit question</div> : null}
{loggedIn && addingAnswer == false ? <div onClick={handleAnswerClick} className='add-answer-button'>+ add answer</div> : null}
{addingAnswer &&
  <div className='adding-answer-display-div'>
    <div className='your-answer-div'>Your Answer</div>
    <div className='add-answer-form-div'>
      <form onSubmit={handleAddAnswer} className='add-answer-form'>
        <textarea value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} />
        <br/>
        <input type='submit' className='add-answer-content-input'/>
      </form>
    </div>
  </div>
}
``

## Code Issues & Resolutions

- I had issues with getting multiple layers on the api. I added 'dependent: :destroy' on the models to fix this.
