
$(document).ready(function() {
    $('#four').click(function() {
        $.ajax({
            url: 'https://icanhazdadjoke.com',
            headers: {
                'Accept': 'application/json'
            },
            success: function(data) {
                console.log(data);
                var joke = data.joke.toUpperCase();
                $('div').html(joke);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching joke:', error);
            }
        });
    });
});
