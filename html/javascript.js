var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
};

var client = new HttpClient();

setInterval(function() {
    if (document.hasFocus() && '{{.TrackingId}}' != '0') {
        client.get("/ping?id={{.TrackingId}}"); // .TrackingId will be filled in via the go templating
    }
}, 5000);