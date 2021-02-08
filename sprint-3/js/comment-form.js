"use strict";

console.log("Comment Section");

// global variables

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "api_key=638e8b45-470d-4e3c-9d54-8719b38a2a1e";
const commentsBlock = document.getElementById("commetBlock");
const buttonEvent = document.querySelector(".form__fill-out-form");

// GET data from URL

// function getComments() {
axios
  .get(`${apiUrl}/comments?${apiKey}`)
  .then(function (response) {
    // console.log(response.data.length);
    // console.table(response.data); // currently working
    function sortDate(arr) {
      const sortedArray = arr.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      // console.log(sortedArray.length);
      return sortedArray;
    }
    appendCommentsToDOM(sortDate(response.data));
    // console.log(sortDate(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

// console.log(getComments());

// SORT incomming data by timestamp

// Append GET to DOM,
// Formate timestamp

// code snippit

//   function formate(formateObjDate) {
//     const fomateArray = formateObjDate.toLocaleDateString("en-US")
//     return formateObjDate;
//   };
//   return fomateArray;
// };

function appendCommentsToDOM(responseArr) {
  // console.log(commentArr);
  // commentsBlock.innerHTML = "";
  // console.log(commentArr);

  for (let i = 0; i < responseArr.length; i++) {
    console.log(responseArr[i]);
    const commentObj = responseArr[i];

    const Avatar = document.createElement("div");
    Avatar.classList.add("form__avatar-small");

    const userName = document.createElement("h2");
    userName.classList.add("form__user-name");
    userName.innerText = commentObj.name;

    const postDate = document.createElement("h4");
    postDate.classList.add("form__date");
    postDate.innerText = commentObj.date;

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
  // const today = new Date();
  // const inputDate =
  //   today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  // Event conditions

  if (name === "") {
    alert("Please add a User name");
  } else if (comment === "") {
    alert("Please add a comment");
  } else {
    axios
      .post(`${apiUrl}/comments?${apiKey}`, {
        name: name,
        comment: comment,
      })
      .then(function (response) {
        console.log(response);
        appendCommentsToDOM(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  event.target.reset();
}

// POST data to URL
