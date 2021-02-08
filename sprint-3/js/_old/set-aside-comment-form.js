"use strict";

console.log("Comment Section");

// global variables

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "api_key=198b2aad-e43c-4254-a784-baf19da9a83d";
const commentsBlock = document.getElementById("commetBlock");

function getComments() {
  axios
    .get(`${apiUrl}/comments?${apiKey}`)
    .then(function (response) {
      console.table(response.data); // currently working
      newCommentBlock(transformSortDate(response.data));
      //   return response.data; // currently working
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Try top understand this below - critical to solve problem

// function transformSortDate(arr) {
//   const sortedArray = arr.sort((a, b) => {
//     return b.timestamp + a.timestamp;
//   });
//   return sortedArray;
// }

// const myArray = newCommentBlock();
// myArray.forEach((entry) => {
//   console.log("This is a " + entry);
// });

// function dataSort = response.data.sort(function (a, b) {
//     return b.timestamp - a.timestamp;
//     // return b.name - a.name;
//   });

// function appendCommentBlock() {
//   commentsBlock.innerHTML = "";

//   for (let i = 0; i < newCommentBlock.length; i++) {
//     const commentObj = newCommentBlock.data[i];

// myArray.forEach((date) => {
//   console.log("I have a " + date);
// });
//this is previously where js gets the array data
// commentData.forEach(timeStamp => {
//     console.log('This is the current time spamp " + (commentObj) {
// content

//     const Avatar = document.createElement("div");
//     Avatar.classList.add("form__avatar-small");

//     const userName = document.createElement("h2");
//     userName.classList.add("form__user-name");
//     userName.innerText = commentObj.name;

//     const postDate = document.createElement("h4");
//     postDate.classList.add("form__date");
//     postDate.innerText = commentObj.timestamp;

//     const postComments = document.createElement("p");
//     postComments.classList.add("form__comments");
//     postComments.innerText = commentObj.comment;

//     // container divs

//     const containerAvatar = document.createElement("div");
//     containerAvatar.classList.add("form__container--avatar");

//     const containerUserName = document.createElement("div");
//     containerUserName.classList.add("form__container--user");

//     const containerDate = document.createElement("div");
//     containerDate.classList.add("form__container--date");

//     const containerComments = document.createElement("div");
//     containerComments.classList.add("form__container--comments");

//     // flex containers

//     const userDateBlock = document.createElement("div");
//     userDateBlock.classList.add("form__block--user-date");

//     const userDateCommentBlock = document.createElement("div");
//     userDateCommentBlock.classList.add("form__block--user-date-comment");

//     const postBlockLi = document.createElement("li");
//     postBlockLi.classList.add("form__block--post");

//     // append

//     containerAvatar.appendChild(Avatar);
//     containerUserName.appendChild(userName);
//     containerDate.appendChild(postDate);
//     containerComments.appendChild(postComments);

//     userDateBlock.appendChild(containerUserName);
//     userDateBlock.appendChild(containerDate);

//     userDateCommentBlock.appendChild(userDateBlock);
//     userDateCommentBlock.appendChild(containerComments);

//     postBlockLi.appendChild(containerAvatar);
//     postBlockLi.appendChild(userDateCommentBlock);

//     commentsBlock.appendChild(postBlockLi);
//   }
// }

// appendCommentBlock();

// buttonEvent.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log(event.target);

//   const name = event.target.name.value;
//   //   const today = new Date();
//   const date = Date.now();
//   // today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
//   const comment = event.target.comment.value;

//   if (inputName === "") {
//     alert("Please add a User name");
//   } else if (addComment === "") {
//     alert("Please add a comment");
//   } else {
//     listPostedComments.unshift({ name, date, comment });

//     event.target.reset();
//     appendCommentBlock();
//   }
// }

// let newArray = oldArray.map(())
