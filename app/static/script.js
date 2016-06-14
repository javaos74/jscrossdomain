// Code goes here

$(document).ready(function() {
  $("button").click(function() {
    $.ajax({
      url: "http://10.72.86.107:5500/test",
      dataType: "jsonp",
      jsonpCallback: "myCallback",
      success: function(data,status,xhr) {
        $("#update").html( data.name);
        if (data != null) {
          alert(data.result + ", " + data.name);
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
