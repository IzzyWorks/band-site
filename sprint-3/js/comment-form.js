"use strict";

console.log("Comment Section");

// global variables

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "api_key=3579496f-2be7-422a-b252-c5597995b675";
const commentsBlock = document.getElementById("commetBlock");
const buttonEvent = document.querySelector(".form__fill-out-form");

function sortDate(arr) {
  console.log("hello world");
  const sortedArray = arr.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  // console.log(sortedArray.length);
  return sortedArray;
}
console.log("hello world");

// GET data from URL
function getComments() {
  axios
    .get(`${apiUrl}/comments?${apiKey}`)
    .then(function (response) {
      console.log(response);
      // appendCommentsToDOM(sortDate(response.data));
      appendCommentsToDOM(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function appendCommentsToDOM(arr) {
  // console.log(arr);
  commentsBlock.innerHTML = "";
  sortDate(arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr);
    const commentObj = arr[i];
    // console.log(commentObj);
    // arr.timestamp.map() => {
    //   return timestamp =
    // };
    // const newDate = commentObj[i].timestamp.map(Date()); // I'm at a loss here

    const Avatar = document.createElement("div");
    Avatar.classList.add("form__avatar-small");

    const userName = document.createElement("h2");
    userName.classList.add("form__user-name");
    userName.innerText = commentObj.name;

    const postDate = document.createElement("h4");
    postDate.classList.add("form__date");
    postDate.innerText = new Date(commentObj.timestamp).toLocaleDateString();

    // innerText = commentObj.timestamp; //newDate[i].timestamp;

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
  }
}

// appendCommentsToDOM();
// Submit Event

buttonEvent.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;
  if (name === "") {
    alert("Please add a User name");
  } else if (comment === "") {
    alert("Please add a comment");
  } else {
    axios({
      method: "post",
      url: `${apiUrl}/comments?${apiKey}`,
      data: {
        name: name,
        comment: comment,
      },
    });
    getComments();
  }
  console.log("hello world");
  event.target.reset();
}
