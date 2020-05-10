$('.buttonOne').click(() => {
    $('.buttonOne').text("Yeah, you clicked me")
});

$('.buttonTwo').click(()=>{
    $('.buttonOne').text("button 2 is da BEST!")
});


i=0

$('.buttonThree').click(()=>{

    for (; i<1; i++){

    $('button').css('background',$('#color').val());
    
    }
});

$('#buttons').css({'display':'flex','flex-direction':'column','width':'150px'})

$('.buttonTwo').css({'margin-top':'10px','margin-bottom':'10px'})
