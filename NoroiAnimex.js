function random_posts(json) {for (var i = 0; i < randomdesu_number; i++) {var entry = json.feed.entry[i];var randomdesutitle = entry.title.$t;if ('content' in entry) {var randomdesunippet = entry.content.$t} else {if ('summary' in entry) {var randomdesunippet = entry.summary.$t} else {var randomdesunippet = "";}};for (var j = 0; j < entry.link.length; j++) {if ('thr$total' in entry) {var randomdesu_commentsnum = entry.thr$total.$t + ' ' + randomdesu_comments} else {randomdesu_commentsnum = randomdesu_commentsd}; if (entry.link[j].rel == 'alternate') {var randomdesuurl = entry.link[j].href;var randomdesu_date = entry.published.$t;if ('media$thumbnail' in entry) {var randomdesuthumb = entry.media$thumbnail.url} else {randomdesuthumb = "https://2.bp.blogspot.com/-d1lPGC5wgGQ/WBePYBCYCmI/AAAAAAAAAr8/ji8u6T4oPSUHvTdAAeBE2Fc3AWrFCUBcwCLcB/s1600/no-image.png"}}};document.write('<li>');document.write('<a href="' + randomdesuurl + '" rel="nofollow"><img alt="' + randomdesutitle + '" src="' + randomdesuthumb + '" width="' + 200 + '" height="' + 300 + '"/></a>');document.write('<div><a href="' + randomdesuurl + '" rel="nofollow">' + randomdesutitle + '</a></div>');if (randomdesu_details == 'yes') {document.write('<span><div  class="random-info">' + randomdesu_date.substring(8, 10) + '.' + randomdesu_date.substring(5, 7) + '.' + randomdesu_date.substring(0, 4) + ' <br/> ' + randomdesu_commentsnum) + '</div></span>'};document.write('<br/><div class="random-summary">' + randomdesu_snippet + '</div><div style="clear:both"></div></li>')}};
getvalue();for (var i = 0; i < randomdesu_number; i++) {document.write('<script type=\"text/javascript\" src=\"https://noroianime.blogspot.co.id/feeds/posts/default?alt=json-in-script&start-index=' + randomdesu_current[i] + '&max-results=1&callback=random_posts\"><\/script>')};
$(document).ready(function() {$('#random-desz img').attr('src', function(i, src) {
return src.replace( 's72-c', 'w200-h300-c' );});});