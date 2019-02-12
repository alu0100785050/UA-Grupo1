# UA-practica1

#Práctica 1. Introducción al protocolo HTTP

¿Qué peticiones desencadena la consulta?

En la página 1: El acceso al directorio /istac/api/ produce la descarga del documento html que desencadena el resto de consultas GET para indexar todos los documentos de la página que sería el iniciador de las peticiones.

En la página 2: La consulta explícita en la URL operations?limit=5 desecadena la respuesta html. 


¿Qué tipo de petición estás realizando?

En ambas páginas la peticiones que se están realizando son peticiones GET.


¿Qué código de estatus devuelve?

En la página 1: Se devuelve 200 correspondiente a las peticiones GET y 302 que corresponde al acceso a la memoria caché. 

En la página 2: Se devuelve 200 que corresponde a las peticiones GET y 404 que corresponde a que no se puede encontrar el documento (NOT FOUND).


¿Qué DNS tiene el servidor?

En la página 1: El DNS del servidor es www.gobiernodecanarias.org

En la página 2: El DNS del servidor es www3.gobiernodecanarias.org


¿Qué IP tiene tiene el servidor?

En la página 1: La IP del servidor es 93.188.137.123:80

En la página 2: La IP del servidor es 93.188.137.126:443


¿La página tiene alguna cookie?, ¿Cuáles?.

En la página 1: Si. La cookie es _ga: GA1.2.764515505.1549477570 

En la página 2: No hay cookies.


¿Qué idioma acepta?.

Dependiendo de la configuración del navegador aceptará un idioma u otro. En nuestro caso a la mayoría del grupo el idioma que acepta es el Español e Inglés.


Alguna línea de código JavaScript.

En ambas páginas no hay ni ficheros ni peticiones JavaScript.


Alguna línea de código CSS que se aplique.

En la página 1 si hay:

.top {
	/* width: 100%; */
	border-bottom: 2px solid rgb(214, 214, 214);
	padding: 0px 4px 8px 0px !important;
	margin-left: auto;
	margin-right: auto;
}

En la página 2 no hay ni código ni peticiones CSS.


Alguna línea de código HTML que se aplique.

En la página 1 si hay:
![Html](ua.PNG)


En la página 2 no hay ni código ni peticiones HTML.

