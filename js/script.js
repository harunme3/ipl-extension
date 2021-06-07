
function renderFeed(){
    $('#fb_frame').html('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIPL&tabs=timeline&width=500&height=559&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=424211458129688" width="500" height="559" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
}

$(document).ready(function(){
    
    $('#name').text(chrome.app.getDetails().name);
    
    setTimeout(function(){
        renderFeed();
    },100);
    
 
	
});