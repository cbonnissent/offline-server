/**
 * 
 */

function getClientOs() {
  if( window.navigator.platform.indexOf("Linux") != -1 ) {
    return "linux";
  }
  if( window.navigator.platform.indexOf("Mac") != -1 ) {
    return "mac";
  }
  if( window.navigator.platform.indexOf("Win") != -1 ) {
    return "win";
  }
  return "unknown";
}

function filterClientByOs() {
    var os = getClientOs();
    $(".os-list-col").removeClass('pre-selected');

    if( os == "unknown" ) {
	return;
    }
    
    $("."+os).each( function() {
	$(this).addClass('pre-selected');
	console.log($(this));
    });


}

