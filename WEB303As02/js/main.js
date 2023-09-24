// WEB303 Assignment 2
// Name : Akshit Mehta
// Student id : 0789986

$(document).ready(function()
{
    $("#prospect").click(function()
    {
        $("#content").css("height","500");
        $('div#content').load("prospect.html").hide().slideToggle("fast");
    });
    
    $("#convert").click(function()
    {
        $("#content").css("height","500");
        $('div#content').load("convert.html").hide().slideToggle("fast");
    });
    
    $("#retain").click(function()
    {
        $("#content").css("height","500");
        $('div#content').load("retain.html").hide().slideToggle("fast");
    });
});

