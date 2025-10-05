// Handle geolocation
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      document.getElementById('lat').value = pos.coords.latitude.toFixed(6);
      document.getElementById('lng').value = pos.coords.longitude.toFixed(6);
    }, err=>{
      alert("Unable to fetch location. Please allow location access.");
    });
  } else {
    alert("Geolocation not supported on this browser.");
  }
}

// Handle form submission
document.getElementById('complaintForm').addEventListener('submit', e=>{
  e.preventDefault();
  const title = document.getElementById('title').value;
  const desc = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const dept = document.getElementById('department').value;
  const lat = document.getElementById('lat').value;
  const lng = document.getElementById('lng').value;

  if(!title || !desc || !category || !dept){
    alert("Please fill in all required fields.");
    return;
  }

  alert(`Complaint submitted!\n\nTitle: ${title}\nCategory: ${category}\nDepartment: ${dept}\nLocation: ${lat}, ${lng}`);
  document.getElementById('complaintForm').reset();
});
