
var numposts = 999;
var standardstyling = true;
function showrecentposts(json) { for (var i = 0; i < numposts; i++) { 
var entry = json.feed.entry[i]; 
var posttitle = entry.title.$t; 
var posturl; if (i == json.feed.entry.length) break; 
for (var k = 0; k < entry.link.length; k++) { 
if (entry.link[k].rel == 'alternate') { posturl = entry.link[k].href; break; }} posttitle = posttitle.link(posturl); 
if (standardstyling) document.write('<li>'); document.write(posttitle);} if (standardstyling) document.write('</li>'); } 

<script src="https://noroianime.blogspot.co.id/feeds/posts/default?orderby=published&amp;alt=json-in-script&amp;callback=showrecentposts&amp;max-results=6"></script>

