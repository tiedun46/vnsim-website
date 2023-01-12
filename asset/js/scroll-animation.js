const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('show01');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements01 = document.querySelectorAll('.hidden01');
hiddenElements.forEach((el)=> observer.observe(el));
hiddenElements01.forEach((el)=> observer.observe(el));