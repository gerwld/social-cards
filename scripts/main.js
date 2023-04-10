let activeIndex = 0;

const groups = document.getElementsByClassName("card-group")

const handleDisikeClick = () => {
  const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);
 
 
        currentGroup.dataset.status = "before";
        prevGroup.dataset.status = "becoming-active-from-after";
 
        setTimeout(() => {
          prevGroup.dataset.status = "active";
         activeIndex = prevIndex;
        }, 400)
}

const handleLikeClick = () => {
 const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0

 const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
       nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);


       currentGroup.dataset.status = "after";
       nextGroup.dataset.status = "becoming-active-from-before";

       setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
       }, 400)       
}
