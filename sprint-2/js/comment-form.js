'use strict';

console.log("Comment Section");

// Arrays + Objects

const listPostedComments = [
    {
    inputName: 'Micheal Lyons',
    inputDate: '12/18/2018',
    addComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
    inputName: 'Gary Wong',
    inputDate: '12/12/2018',
    addComment: 'Every time I see his shred I feel so motivated to get off my couch and hop on my board. He\'s so talanted!.'
    },
    {
    inputName: 'Theodore Ducan',
    inputDate: '11/15/2018',
    addComment: 'How can someone be so good!!!'
    },
];

// global variables

const buttonEvent = document.querySelector('.message-form__fill-out-form');
const commentsBlock = document.getElementById('commetBlock'); 

// populate the page with stored array
// Append Post to DOM, formate structure

function appendCommentBlock() {
    commentsBlock.innerHTML = ""; 

    for (let i = 0; i < listPostedComments.length; i++) {
      const commentObj = listPostedComments[i];

    const commentBlockLi = document.createElement('li');
    commentBlockLi.classList.add('message-form__comment-block');

    const containerAvatar = document.createElement('div');
    containerAvatar.classList.add('message-form__avatar');

    const containerUserName = document.createElement('div');
    containerUserName.classList.add('message-form__container--user');

    const userName = document.createElement('h2');
    userName.classList.add('message-form__user-name');
    userName.innerText = commentObj.inputName;

    const containerDate = document.createElement('div');
    containerDate.classList.add('message-form__container--date');

    const postDate = document.createElement('h4');
    postDate.classList.add('message-form__date');
    postDate.innerText = commentObj.inputDate;

    const containerComments = document.createElement('div');
    containerComments.classList.add('message-form__container--comments');

    const postComments = document.createElement('p');
    postComments.classList.add('message-form__user-name');
    postComments.innerText = commentObj.addComment;

    commentBlockLi.appendChild(containerAvatar);
    commentBlockLi.appendChild(containerUserName);
    containerUserName.appendChild(userName);
    commentBlockLi.appendChild(containerDate);
    containerDate.appendChild(postDate);
    commentBlockLi.appendChild(containerComments);
    containerComments.appendChild(postDate);
    commentBlockLi.appendChild(postComments);

    commentsBlock.appendChild(commentBlockLi);
    }
};

appendCommentBlock();

// Submit Event

buttonEvent.addEventListener('submit', handleFormSubmit);

// console.log(buttonEvent);

function handleFormSubmit(event) {
    event.preventDefault();
    const inputName = event.target.inputName.value;
    const today = new Date();
    const inputDate =  today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    const addComment = event.target.addComment.value;

    if (inputName === '') {
        alert('Please add a User name');
    } else if (addComment === '') {
        alert('Please add a comment');
    } else {
      listPostedComments.push({inputName, inputDate, addComment});
      console.log(listPostedComments)
      event.target.reset(); 
      appendCommentBlock();
    }
};

// appendCommentBlock();