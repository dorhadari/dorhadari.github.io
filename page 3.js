$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 170){
            $(".section:nth-child(1)").css({"opacity" : "0.3"})
        }
        else {
            $(".section:nth-child(1)").css({"opacity" : "1"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000){
            $(".section:nth-child(2)").css({"opacity" : "0.3"})
        }
        else {
            $(".section:nth-child(2)").css({"opacity" : "1"})
        }
    })
})



