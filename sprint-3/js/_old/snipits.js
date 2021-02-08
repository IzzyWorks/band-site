"use strict";

console.log("Comment Section");

// global variables

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "api_key=198b2aad-e43c-4254-a784-baf19da9a83d";

// const getComment = axios.get(`${apiUrl}/comments?${apiKey}`);
// const getShowDates = axios.get(`${apiUrl}/showdates?${apiKey}`);

const buttonEvent = document.querySelector(".form__fill-out-form");
const commentsBlock = document.getElementById("commetBlock");

// Server requests

function getComments() {
  axios
    .get(`${apiUrl}/comments?${apiKey}`)
    .then(function (response) {
      console.log(response); // currently working
      appendCommentBlock(transformSortDate(response.data)); // currently working
    })
    .catch(function (error) {
      console.log(error);
    });
}

function transformSortDate(arr) {
  const sortedArray = arr.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return sortedArray;
}

// for(let i = 0; i< date.length; i++){
//     const commentObj = commentData[i];
//     console.log(commentObj.name);
// }

console.log(getComments());

// populate the page with stored array
// Append Post to DOM, formate structure

function appendCommentBlock(commentData) {
  commentsBlock.innerHTML = "";

  //   for (let i = 0; i < listPostedComments.length; i++) {
  //     const commentObj = response.data[i]; //this is previously where js gets the array data
  commentData.forEach(function (commentObj) {
    // content

    const Avatar = document.createElement("div");
    Avatar.classList.add("form__avatar-small");

    const userName = document.createElement("h2");
    userName.classList.add("form__user-name");
    userName.innerText = commentObj.name;

    const postDate = document.createElement("h4");
    postDate.classList.add("form__date");
    postDate.innerText = commentObj.timestamp;

    const postComments = document.createElement("p");
    postComments.classList.add("form__comments");
    postComments.innerText = commentObj.comment;

    // container divs

    const containerAvatar = document.createElement("div");
    containerAvatar.classList.add("form__container--avatar");

    const containerUserName = document.createElement("div");
    containerUserName.classList.add("form__container--user");

    const containerDate = document.createElement("div");
    containerDate.classList.add("form__container--date");

    const containerComments = document.createElement("div");
    containerComments.classList.add("form__container--comments");

    // flex containers

    const userDateBlock = document.createElement("div");
    userDateBlock.classList.add("form__block--user-date");

    const userDateCommentBlock = document.createElement("div");
    userDateCommentBlock.classList.add("form__block--user-date-comment");

    const postBlockLi = document.createElement("li");
    postBlockLi.classList.add("form__block--post");

    // append

    containerAvatar.appendChild(Avatar);
    containerUserName.appendChild(userName);
    containerDate.appendChild(postDate);
    containerComments.appendChild(postComments);

    userDateBlock.appendChild(containerUserName);
    userDateBlock.appendChild(containerDate);

    userDateCommentBlock.appendChild(userDateBlock);
    userDateCommentBlock.appendChild(containerComments);

    postBlockLi.appendChild(containerAvatar);
    postBlockLi.appendChild(userDateCommentBlock);

    commentsBlock.appendChild(postBlockLi);
  });
}

buttonEvent.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const inputName = event.target.inputName.value;
  const today = new Date();
  const inputDate =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const addComment = event.target.addComment.value;

  if (inputName === "") {
    alert("Please add a User name");
  } else if (addComment === "") {
    alert("Please add a comment");
  } else {
    response.push({ inputName, inputDate, addComment });

    event.target.reset();

    // PUSH new comment to network

    function postNewComment() {
      axios
        .post(`${apiUrl}/comments?api_key=${apiKey}`, {
          name: "Luna",
          comment: "A new neato comment",
        })
        .then(function (response) {
          // response from API if success
          console.log(response);
          // maybe you can call a function to reload the comments/refresh the list here
          getComments();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    postNewComment();
  }
}

// Arrays + Objects

// const listPostedComments = [
//     {
//     inputName: 'Micheal Lyons',
//     inputDate: '12/18/2018',
//     addComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going This is still simply the greatest opening of a concert I have EVER witnessed.',
//     },
//     {
//     inputName: 'Gary Wong',
//     inputDate: '12/12/2018',
//     addComment: 'Every time I see his shred I feel so motivated to get off my couch and hop on my board. He\'s so talanted!.',
//     },
//     {
//     inputName: 'Theodore Ducan',
//     inputDate: '11/15/2018',
//     addComment: 'How can someone be so good!!!',
//     }
// ];

// postNewComment();
// appendCommentBlock();

// Submit Event

buttonEvent.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const inputName = event.target.inputName.value;
  const today = new Date();
  const inputDate =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const addComment = event.target.addComment.value;

  if (inputName === "") {
    alert("Please add a User name");
  } else if (addComment === "") {
    alert("Please add a comment");
  } else {
    listPostedComments.unshift({ inputName, inputDate, addComment });

    event.target.reset();

    // PUSH new comment to network

    function postNewComment() {
      axios
        .post(`${apiUrl}/comments?api_key=${apiKey}`, {
          name: "Luna",
          comment: "A new neato comment",
        })
        .then(function (response) {
          // response from API if success
          console.log(response);
          // maybe you can call a function to reload the comments/refresh the list here
          getComments();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    postNewComment();
  }
}

// function conditionalDate() {

//     for (let i = 0; i < listPostedComments.length; i++) {
//       const commentObj = listPostedComments[i];
//

// function sortByDate(arr) {
//   const sortedArray = arr.sort((a, b) => {
//     return b.timestamp - a.timestamp;
//   });
//   return sortedArray;
// }

// console.log();

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// response.data.sort(function (a, b) {
//   return b.timestamp - a.timestamp;
// });

// getComments.sort(function (a, b) {
//     const sortedArray = arr.sort((a, b) => {
//     return b.timestamp - a.timestamp;
// });
