// Code goes here

$(document).ready(function() {
  $("button").click(function() {
/**
    $.getJSON(url:"http://10.72.86.107:5500/test?callback=?", function(data) {
       if( data != null) {
       alert(data.result + ", " + data.go);
 	}
    });
*/
    $.ajax({
      url: "http://10.72.86.107:5500/test",
      dataType: "jsonp",
      jsonpCallback: "myCallback",
      success: function(data,status,xhr) {
        alert("call success " + status + "header="+xhr);
        $("#update").html("whomai");
        if (data != null) {
          alert(data.result + ", " + data.go);
        } else {
		  alert( "data is null");
		}
      },
	 error: function(xhr) {
        alert("call error");
        if (xhr!= null) {
          alert(xhr);
		}
     }
    });

  });
});
