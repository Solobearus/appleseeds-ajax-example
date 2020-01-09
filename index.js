

$('#mybtn').click(() => {

    console.log('started click');
    $('#mydiv').html('<h4>Loading...</h4>');
    
    $.getJSON('https://icanhazdadjoke.com/',
        (res) =>
            $('#mydiv').html(res.joke)
    );

    console.log('ended click');

})