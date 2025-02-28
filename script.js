function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const imageInput = document.getElementById('image');

  if (!dobInput) {
    alert('Please select your date of birth');
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  // Adjust for negative months/days
  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Store results in localStorage
  localStorage.setItem('ageYears', ageYears);
  localStorage.setItem('ageMonths', ageMonths);
  localStorage.setItem('ageDays', ageDays);
  localStorage.setItem('dob', dob.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));
  localStorage.setItem('gender', gender);

  // Handle image preview
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem('image', e.target.result);
      window.location.href = 'result.html';
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    localStorage.removeItem('image');
    window.location.href = 'result.html';
  }
}