const currentTime = moment().format("Do, MMMM, h:mm");

const title = (() => {
  $(".current-time").append(`The Current Date and Time is ${currentTime}`);
})();

const submitBtn = $("#submit-button");
const tableBodyEl = $("#table-body");
let projectName = $("#project-name");
let projectType = $("#project-type");
let hourlyRate = $("#hourly-rate");
let dueDate = $("#due-date");
let storeUserAnswers = [{
  

}


]

submitBtn.on("click", (e) => {
  e.preventDefault();
  projectName = $("#project-name").val();
  projectType = $("#project-type").val();
  hourlyRate = $("#hourly-rate").val();
  dueDate = $("#due-date").val();
  if (!projectName || !hourlyRate || !dueDate) {
    alert("Please enter some values.");
  } else {
    generateTableRow(projectName, projectType, hourlyRate, dueDate);
  }

});

function generateTableRow() {
  const userAnswers = {
    name: `${projectName}`,
    type: `${projectType}`,
    rate: `${hourlyRate}`,
    date: `${dueDate}`,
  };

  tableBodyEl.append(`
    <tr>
    <td>
    ${userAnswers.name}
    </td>
    <td>
    ${userAnswers.type}
    </td>
    <td>
    ${userAnswers.rate}
    </td>
    <td>
    ${userAnswers.date}    
    </td>
    </tr>
    `);
}


var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

$("#hourly-rate").on("change", (e) => {
  if (isNaN(e.target.value)) {
    e.target.value = "";
  } else {
    e.target.value = formatter.format(e.target.value);
  }
});
// $('#due-date').on('change', (e)=>{
//   if(isNaN(e.target.value)){
//       e.target.value = ''
//   }else{
//     e.target.value = moment().format('MM-DD-YYYY');
//   }
// })
