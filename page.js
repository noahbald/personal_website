$(document).ready(function(){main();});

function main()
{
    var params = (new URL(document.location)).searchParams;
    var iframe = document.getElementById("page_src");
    if (params.has("id"))
    {
        var id = params.get("id");
        var json = $.getJSON("file:///D:/Projects/personal_website/page_id/" + id + "/page.json", function(obj){loadContents(obj);})
        //$("#page").load("https://noahwbaldwin.me/page_id/" + id + "/page.json", alert("hi"))
        //iframe.src = 'https://noahwbaldwin.me/page_id/' + id + '/page.json';
        //iframe.src = "file:///D:/Projects/personal_website/page_id/" + id + "/page.json";
    }
}

function loadContents(obj)
{
    var content = $("#page_src").contents().find('body').html;
    console.log("hi");
}
