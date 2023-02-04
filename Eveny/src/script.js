
//Observer script
let elementsToWatch = document.querySelectorAll('.watch');
let callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page")
        } else {
            item.target.classList.remove("in-page")
        }
    })
}
let observer = new IntersectionObserver(callback, { threshold: 0.5 });
elementsToWatch.forEach((element) => {
    observer.observe(element);
});


          const eventTitle = document.getElementById("input-title");
          const eventDescription = document.getElementById("input-description");
          const cardCreate = document.getElementById("card-created");
          const title = document.getElementById("event__Title");
          const description = document.getElementById("event__Description");

          const button = document.getElementById("create-event");

          button.onclick = async function createEvent() {
            if (title.innerHTML === "" && description.innerHTML === "") {
              title.innerText = eventTitle.value;
              description.innerText = eventDescription.value;
              if(title.innerHTML!=="" && description.innerHTML!==""){
                cardCreate.classList.remove("opacity-0");
              cardCreate.classList.add("opacity-100");
            }              
            } else {
              alert("L'evento è gia stato creato!");
            }
          };

          if (title.innerHTML === "" && description.innerHTML === "") {
            cardCreate.classList.add("opacity-0");
          } else {
            cardCreate.classList.add("opacity-100");
          }