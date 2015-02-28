var i = 0;
while(i < 100) {
i++;
if (i % 3 === 0) {

  $( "#main" ).append( "<p>fizz</p>" );
}

else if (i % 5 === 0) {
   $( "#main" ).append( "</p>buzz</p>" );
}

else if (i % 3 === 0 && i % 5 === 0) {
   $( "#main" ).append( "<p>fizz buzz</p>" );
}

else {
   $( "#main" ).append("<p>" + i + "</p>");
}
}


