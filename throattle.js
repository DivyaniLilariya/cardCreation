// Throttling Function
const throttleFunction=(func, delay)=>{
 
  // Previously called time of the function
  let prev = 0; 
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime(); 
 
    // Logging the difference between previously 
    // called and current called timings
     
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){ 
      prev = now;
 
      // "..." is the spread operator here 
      // returning the function with the 
      // array of arguments
      return func(...args);  
    }
  }
}
document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dets)=>{
 var div = document.createElement('div');
 div.style.left=dets.clientX+'px';
 div.style.top= dets.clientY+'px'
 div.classList.add("imagediv");
 var img = document.createElement("img");
 img.setAttribute("src","https://images.unsplash.com/photo-1696920861875-35e708b89f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80");
 div.appendChild(img);
 
 document.body.appendChild(div);
 gsap.to(img, {
    y:"0",
    ease: Power1,
    duration:0.6
 })
 gsap.to(img, {
    y:"100%",
    delay:.6,
    ease: Power2,
   
 })
 setTimeout(() => {
    div.remove()
 }, 2000);
}, 500));


