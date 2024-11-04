// Function to scale the element up by 2x
function scaleUp(id) {
    const micElement = document.getElementById(`${id}mic`);
    micElement.style.transform = "scale(1.5)"; // Scale up by 2x
    micElement.style.color = "red"; // Scale up by 2x
}

// Function to scale the element back down to its original size
function scaleDown(id) {
    const micElement = document.getElementById(`${id}mic`);
    micElement.style.transform = "scale(1)"; // Scale back to original size
    micElement.style.color = "rgb( 255 ,255 ,255 )"; // Scale up by 2x

  

}
