/***************************Variables*******************************/


$('#red').click(function(){
    var animationName='animated shake clickButton';
    var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    
    $('#red').addClass(animationName).one(animationEnd,function(){
            $(this).removeClass(animationName);
        })
})

$('#yellow').click(function(){
    var animationName='animated shake clickButton';
    var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    
    $('#yellow').addClass(animationName).one(animationEnd,function(){
            $(this).removeClass(animationName);
        })
})

$('#blue').click(function(){
    var animationName='animated shake clickButton';
    var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    
    $('#blue').addClass(animationName).one(animationEnd,function(){
            $(this).removeClass(animationName);
        })
})

$('#green').click(function(){
    var animationName='animated shake clickButton';
    var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    
    $('#green').addClass(animationName).one(animationEnd,function(){
            $(this).removeClass(animationName);
        })
})


