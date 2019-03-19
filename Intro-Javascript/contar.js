<body onload="paul_amount()">

<script>
function paul_amount(){
var parrafos = document.getElementsByTagName("p").length;
var enlaces = document.getElementsByTagName("a").length;
var elementos_ul = document.getElementsByTagName("ul").length;

document.write("Elemento parrafos: " + parrafos + "<br/>");
document.write("Elemento enlaces: " + enlaces + "<br/>");
document.write("Elemento ul: " + elementos_ul + "<br/>");

}
</script>
</body>

