<div id='carousel' class='carousel slide' data-ride='carousel'></div>
<script>

var url_domain = "https://lthwbootstrap4.blogspot.com";
var url_json = url_domain + "/feeds/posts/default?alt=json";
var numPost = 4

$.ajax({
    url: url_json,
    type: "get",
    dataType: "jsonp",
    success: function(data) {
        console.log(data);
        updateCarousel(data);
    }
});

// Build carousel
function updateCarousel(json_data){
    var htmlCode = '<div class="carousel-inner">';
    for (var i = 0; i < numPost; i++) {
        // Get Post Title
        // var postTitle = json_data.feed.entry[i].title.$t; 
        // Get Featured Imange - the first image in post's content
        var featuredImageUrl;
        s = json_data.feed.entry[i].content.$t;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"");
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b -5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
            featuredImageUrl = d;
        } else {
            featuredImageUrl = "";
        }

        if (i == 0){
            htmlCode += '<div class="carousel-item active"><img class="d-block w-100" src="' + featuredImageUrl + '"></div>';
        } else {
            htmlCode += '<div class="carousel-item"><img class="d-block w-100" src="' + featuredImageUrl + '"></div>';
        }
    }
    htmlCode += '</div>';
    document.getElementById('carousel').innerHTML = htmlCode;
}

// Get featured image for each posts
function getFeaturedImage(json_data){
    var thumburl;
    try {
        thumburl = entry.media$thumbnail.url;
    } catch (error) {
        s = entry.content.$t;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
            thumburl = d
        } else thumburl = no_thumb
    }
}

    </script>


    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="..." alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide">
            </div>
        </div>
    </div>