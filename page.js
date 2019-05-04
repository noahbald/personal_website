$(document).ready(function(){main();});

function main()
{
    var params = (new URL(document.location)).searchParams;
    var iframe = document.getElementById("page_src");
    if (params.has("id"))
    {
        var id = params.get("id");
        var json = $.getJSON("https://www.noahwbaldwin.me/page_id/" + id + "/page.json", function(obj){loadContents(obj, id);}).fail(function(){
            var json = $.getJSON("https://www.noahwbaldwin.me/page_id/404/page.json", function(obj){loadContents(obj, "404");});
        });
    }
}

function loadContents(obj, id)
{
    var gallery = document.getElementById("gallery");
    var header = document.getElementsByTagName("header")[0];
    var article = document.getElementById("article");

    header.innerHTML = '<h1>' + obj.header.title + ' | <a>' + obj.header.category + '</a></h1><div class="block double"></div><h2>' + obj.header.description + '</h2><div class="block"><br/></div>';

    for (i in obj.gallery)
    {
        gallery.innerHTML += '<figure><img src="/page_id/' + id + '/' + obj.gallery[i].img_src + '"/><figcaption><p>' + obj.gallery[i].caption + '</p></figcaption></figure>';
    }

    for (i in obj.article)
    {
        article.innerHTML += '<p>' + obj.article[i] + '</p>';
        article.innerHTML += '<div class="block"></div>';
    }

    document.title = 'Noah Baldwin | ' + obj.header.title;

    console.log("page loaded successfully");
}
