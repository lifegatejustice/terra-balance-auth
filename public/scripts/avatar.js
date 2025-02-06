// --- Function to generate an avatar image using a canvas.
function generateAvatar(letter) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  
  // Draw a circle background.
  ctx.fillStyle = "#2196F3";
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, 2 * Math.PI);
  ctx.fill();
  
  // Draw the letter.
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 32px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(letter.toUpperCase(), 32, 32);
  
  return canvas.toDataURL();
}

// --- Update all account icons (avatar images) with the dynamic avatar.
function updateUserAvatars() {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    const avatarSrc = generateAvatar(username.charAt(0));
    const avatarImages = document.querySelectorAll('.user-avatar');
    avatarImages.forEach(img => {
      img.src = avatarSrc;
    });
  }
}

// Run updateUserAvatars() when the DOM is ready.
document.addEventListener("DOMContentLoaded", updateUserAvatars);
