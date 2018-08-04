var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/all-agents/Council_of_Fashion_Designers_of_America/daily/20000101/20180805', true);

request.onload = function () {
  		
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	
	if (request.status >= 200 && request.status < 400) {
		console.log(data);
	} 
	else {
		console.log('error');
	}
}

request.send();
