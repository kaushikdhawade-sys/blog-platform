function addPost(){

    let title =
    document.getElementById("title").value;

    let content =
    document.getElementById("content").value;

    if(title==="" || content===""){
        alert("Fill all fields");
        return;
    }

    let post =
    document.createElement("div");

    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <input
        type="text"
        placeholder="Add Comment">

        <button onclick="addComment(this)">
        Comment
        </button>

        <div class="comments"></div>
    `;

    document
    .getElementById("posts")
    .appendChild(post);

    document.getElementById("title").value="";
    document.getElementById("content").value="";
}

function addComment(button){

    let input =
    button.previousElementSibling;

    let commentText =
    input.value;

    if(commentText==="") return;

    let comment =
    document.createElement("p");

    comment.textContent =
    commentText;

    button.nextElementSibling
    .appendChild(comment);

    input.value="";
}