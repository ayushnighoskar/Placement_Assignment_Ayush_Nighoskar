const card  = document.querySelector(".card")
document

const Blogdata = [];

const fetchdata = async() =>{
const res = (await fetch(`https://jsonplaceholder.typicode.com/posts`))
const data = await res.json()
// console.log(data[0].title);
// console.log(data[0].userId);

data.map((element)=>{
    card.insertAdjacentHTML(
        "afterbegin",
        `<div class="subcard"><h3 class="title">${element.title.toUpperCase()}</h3>
            <p class="body">${element.body}</p><div/>`
    )


})
}
fetchdata()


const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const userBlogContainer = document.querySelector(".my-blog");
const deleteButton = document.querySelector(".btn");

const addData = async (event) => {
  event.preventDefault();

  if (!titleInput.value || !textInput.value) {
    alert("Please enter data in both section");
  }
  else{
    deleteButton.classList.remove("hidden");

  const title = titleInput.value;
  const text = textInput.value;

  userBlogContainer.insertAdjacentHTML(
    "afterbegin",

    `<div class="subcard add"><h3 class="title">${title}</h3>
    <p class="body">${text}</p><div/>`
 
  );

  titleInput.value = "";
  textInput.value = "";
  }


  
};

deleteButton.addEventListener("click", () => {
  location.reload();
});



