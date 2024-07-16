let str = "";
let val = 0.0;
let preCal = 0;
let currenCal = 0;

function isArithimatic(content) {
    if (content == '+' || content == '-' || content == '*' || content == '/' || content == '%' ) {
        return true;
    } else {
        return false;
    }
}

function printScreen(content) {

    if (isArithimatic(content)) {
        let len = str.length;
        console.log(len);
        if (isArithimatic(str[len - 1])) {
            // str[len-1] = content;
            str = str.substring(0, len - 1) + content;
            console.log(str);
            $('.screen').val(str);
            return;
        }
    }



    if (content == "=") {
        currenCal = eval(str);
        str = currenCal.toString();
    } else if (content == 'AC') {
        str = "";
        val = 0.0;
    } else if (content == 'del') {
        str = str.slice(0, -1);
    }
    else {
        str = str + content;
    }
    console.log(str);
    $('.screen').val(str);
}


$(document).keypress(function(event) {
    let content = String.fromCharCode(event.which);
    if (event.key === 'Enter') {
        content = '=';
    }
    else if (event.key === 'Backspace') {
        content = 'del';
    }

    printScreen(content);
    // event.preventDefault(); // Prevent the default action
});


$('.items').click(function() {
    let content = $(this).html();
    printScreen(content);
    // console.log(content);
    // str = str + content.toString();
    // console.log(str);
    // printScreen();
})

$('.items').hover(
    function() {
        $(this).addClass('hover');
    }, 
    function() {
        $(this).removeClass('hover');
    }
)