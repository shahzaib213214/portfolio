let mar= document.querySelector("#hello")

mar.addEventListener("mouseenter", function(){
    this.stop()
})

mar.addEventListener("mouseleave", function(){
    this.start()
})