const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");


container.addEventListener("click",(ele)=>{
    //target...> العنصر الذي يتم علية الحدث
    if(ele.target.className=="icon-trash-o icon"){
        ele.target.parentElement.parentElement.remove();
    }

    else if(ele.target.className=="icon-angry icon"){
        ele.target.classList.add("dn")

        const heart = ` <span class="icon-heart"></span> `

        ele.target.parentElement.innerHTML += heart ;   
    }
    else if(ele.target.className=="icon-heart"){
        ele.target.classList.add("dn")
        const angry = ` <span class="icon-angry icon"></span> `
        ele.target.parentElement.innerHTML += angry ; 
    }

    else  if(ele.target.className=="icon-star icon"){
        ele.target.classList.add("orange")
        container.prepend(ele.target.parentElement)
    }

    else  if(ele.target.className == "icon-star icon orange"){
        ele.target.classList.remove("orange")
        container.append(ele.target.parentElement)
    }
}
)





button.addEventListener("click", (eo)=>{
    eo.preventDefault()  //this is code non defolt ..هذا الكود لمنع الافتراضي الريفيش 
    const task =`
    <div class="task">
    <span class="icon-star icon"></span>
     <p>${input.value}</p> 
    
    <div>
    <span class="icon-trash-o icon"></span>
   
    <span class="icon-angry icon"></span>
</div>`

    //container.append(task) هنا يضيف في نهاية الكونتينر
    container.innerHTML += task
    

})
