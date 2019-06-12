// Empty JS for your own code to be here
var TOKEN = '';
if (localStorage.getItem('token')) {
    TOKEN = localStorage.getItem('token');
}

setUserOnHeader();

function setUserOnHeader() {
    if (TOKEN) {
        $('#login-block').css({'display':'none'});
        $('#getstarted-block').css({'display':'none'});
        $('#username-block').css({'display':'block'});
        var user = JSON.parse(localStorage.getItem('user'));
        $('#username-text').text(user.name + " " + user.surname);
    }
    else {
        $('#getstarted-block').css({'display':'block'});
        $('#username-block').css({'display':'none'});
    }
}

$('.download_1').click(function(e) {
        e.preventDefault(); 
        window.location.href = './files/Privacy_Policy_13V.docx';
});

$('.download_2').click(function(e) {
        e.preventDefault(); 
        window.location.href = './files/Terms_of_Service_13V.docx';
});