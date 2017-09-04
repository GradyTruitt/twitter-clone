$(document).ready(function(){

$('.tweet-compose').on('click', function() {

    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').css('display','block');
});

var tweet = '';   

$('.tweet-compose').on('click', function() {

    $('#tweet-submit').prop('disabled',true);
    
    $('.tweet-compose').on('keyup', function() {
        var tweetLength = $(this).val().length;
        var count = 140 - tweetLength;
            $('#tweet-submit').prop('disabled',false);
        if (count <= 10 && count >= 0) {
            $('#char-count').css('color', 'red');
            $('#char-count').text(count);
            }
        else if (count <= 140 && count > 10) {
            $('#char-count').css('color', '#999');
            $('#char-count').text(count);
            }
        else if (tweetLength === 0) {
            $('#tweet-submit').prop('disabled',true);
        }
        });

    $('#tweet-submit').on('click', function() {
        var tweet = $('.tweet-compose').val().length;
        if (tweet > 140) {
            $('#char-count').text("Too many characters.");

        }
        else if (tweet <= 140 && tweet > 0) {
            var newTweet = $('.tweet').first().clone();
            newTweet.find('.avatar').attr('src', './img/alagoon.jpg');
            newTweet.find('.fullname').text($('.myname').text());
            newTweet.find('.username').text('@thisGuy');
            newTweet.find('.teet-text').text($('.tweet-compose').val());
            newTweet.find('.time').text(Date.now());
            
            $('#stream').prepend(newTweet);
        }
        else if (!tweet) {
            $('.tweet-compose').attr('placeholder','Enter your thoughts to tweet...');
        }
    });
});


});