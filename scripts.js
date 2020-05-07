$('.buttonOne').click(() => {
    $('.buttonOne').text("Yeah, you clicked me")
});

$('.buttonTwo').click(()=>{
    $('.buttonOne').text("button 2 is da BEST!")
});

$('.buttonThree').click(()=>{
    $('button').css('background',$('#color').val())
});


$('#buttons').css({'display':'flex','flex-direction':'column','width':'150px'})

$('.buttonTwo').css({'margin-top':'10px','margin-bottom':'10px'})
