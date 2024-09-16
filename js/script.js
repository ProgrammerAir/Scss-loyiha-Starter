window.addEventListener('DOMContentLoaded', () => {
    const lies = document.querySelectorAll('header ul li a');
    
    function removeClassName() {
        lies.forEach(item => { 
            item.classList.remove("active")
        })
    }

    function addClassname(i = 0) {
        lies[i].classList.add("active")
    }

    removeClassName()
    addClassname()

    document.addEventListener("click", (e) => {
        lies.forEach((item, idx) => {
            if(e.target == item) {
                removeClassName()
                addClassname(idx)
            }
        })
    })
})