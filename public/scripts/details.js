// --- Account Details Logic ---
function generateAvatar(letter) {
    const canvas = document.createElement("canvas");
    canvas.width = 80;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#2196F3";
    ctx.beginPath();
    ctx.arc(40, 40, 40, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 36px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(letter.toUpperCase(), 40, 40);
    
    return canvas.toDataURL();
  }

  function updateProfile() {
    const username = localStorage.getItem("loggedInUser");
    const userDetailsElement = document.getElementById("user-details");
    const profileAvatarElement = document.getElementById("profile-avatar");
  
    if (username) {
      userDetailsElement.textContent = `Username: ${username}`;
      profileAvatarElement.src = generateAvatar(username.charAt(0));
      profileAvatarElement.alt = `Avatar for ${username}`;
    } else {
      // Show a login form instead of redirecting
      document.getElementById("login-form").style.display = "block";
    }
  }
  

  document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    // Redirect to homepage after logout.
    window.location.href = "index.html";
  });

  document.addEventListener("DOMContentLoaded", updateProfile);