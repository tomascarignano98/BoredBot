const activity = document.querySelector("#activity");
const type = document.querySelector("#activity-type");
const participants = document.querySelector("#activity-participants");

document.querySelector("#btn").addEventListener("click", () => {
  fetch("http://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      activity.textContent = data.activity;
      type.textContent = data.type;
      participants.textContent = data.participants;
    })
    .catch((error) => console.log(error));
});
