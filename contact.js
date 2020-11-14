console.log('it works');

$(document).ready(function() {
    $('.submit-btn').click(function(event) {


        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }
        if (subject.length >= 1) {
            status.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            status.append('<div>Email is not valid</div>')
        }
        if (message.length >= 1) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }

    })
})