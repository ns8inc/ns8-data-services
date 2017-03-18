var ns8DataServices = require("ns8-data-services")

var options = {
    ip: '72.211.250.156',
    ua: 'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko)',
    referrer: 'http://bing.com/search?q=bicycle',
    url: 'http://mysite.com'
};

ns8DataServices.score(options,function(err,results){

    console.log(results)

});