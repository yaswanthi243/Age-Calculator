document.addEventListener('DOMContentLoaded', function() {
    const ageOutput = document.getElementById('age-output');
    const birthdayOutput = document.getElementById('birthday-output');
    const genderOutput = document.getElementById('gender-output');
    const imagePreview = document.getElementById('image-preview');
  
    const ageYears = localStorage.getItem('ageYears');
    const ageMonths = localStorage.getItem('ageMonths');
    const ageDays = localStorage.getItem('ageDays');
    const dob = localStorage.getItem('dob');
    const gender = localStorage.getItem('gender');
    const image = localStorage.getItem('image');
  
    if (ageYears && ageMonths && ageDays) {
      ageOutput.innerHTML = `
        Your age is <span>${ageYears}</span> years, 
        <span>${ageMonths}</span> months, and 
        <span>${ageDays}</span> days
      `;
    }
  
    if (dob) {
      birthdayOutput.textContent = `Born on ${dob}`;
    }
  
    if (gender) {
      genderOutput.textContent = `Gender: ${gender.charAt(0).toUpperCase() + gender.slice(1)}`;
    }
  
    if (image) {
      imagePreview.innerHTML = `<img src="${image}" alt="Profile Preview">`;
    } else {
      imagePreview.innerHTML = '<div class="placeholder">No image uploaded</div>';
    }
  });