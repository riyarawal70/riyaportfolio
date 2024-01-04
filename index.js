const intersectionCallback = (items) => {
    console.log(items);
    for (const item of items) {
      if (item.isIntersecting) {
        if (item.target.id == "skills") {
          item.target.classList.add("techskills");
        }
        if (item.target.id == "about") {
          item.target.classList.add("about-animate");
        }
        if (item.target.id == "contact") {
            item.target.classList.add("about-animate");
          }
      }
    }
  };
  
  const observer = new IntersectionObserver(intersectionCallback);
  
  const items = document.getElementsByClassName("animate");
  for (const item of items) {
    observer.observe(item);
  }