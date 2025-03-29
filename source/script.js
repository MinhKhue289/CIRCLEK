document.getElementById("products").addEventListener("click",function() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"  
    })
});

document.getElementById("client").addEventListener("click",function() {
    document.getElementById("client").scrollIntoView( {
        behavior: "smooth"
    })
});

document.body.classList.add("light"); // Thêm class mặc định là 'light'

document.getElementById("btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

function changeImage() {
  let img = document.getElementById("img");
  let body = document.body;
  let currentSrc = img.getAttribute("src"); // Lấy đúng giá trị src từ HTML
  img.setAttribute("src", currentSrc === "/image/on.png" ? "/image/off.png" : "/image/on.png");
    body.classList.toggle("dark");
}