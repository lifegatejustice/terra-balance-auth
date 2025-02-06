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
    if (username) {
      document.getElementById("user-details").textContent = "Username: " + username;
      const avatarSrc = generateAvatar(username.charAt(0));
      document.getElementById("profile-avatar").src = avatarSrc;
    } else {
      // If no user is logged in, show the the login form.
      window.location.href = "index.html";
    }
  }

  document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    // Redirect to homepage after logout.
    window.location.href = "index.html";
  });

  document.addEventListener("DOMContentLoaded", updateProfile);