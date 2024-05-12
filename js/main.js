// eventListener = preventDefault method 

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
})
const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
    /* in our form element we don't have any action
    still it wants to store some action when we hit 
    enter or submit button. you can see flashing elements
    and we can't even see text that we have entered it will 
    just... just everything will disappear in just seconds 
    so to prevent that default behavior happening we have 
    preventDefault() method ***/
}


























