window.addEventListener("load", () => {
    const loader = document.querySelector(".landing-loader");
    document.body.style.overflow = "hidden";
  
    setTimeout(() => {
      loader.remove();
      document.body.style.overflow = "auto";
    }, 800)
  });