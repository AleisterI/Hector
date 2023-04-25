const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('#myForm form');

submitBtn.addEventListener('click', function() {
  form.submit();
});

function toggleForm() {
  var form = document.getElementById("myForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

