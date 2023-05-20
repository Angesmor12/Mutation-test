
Ejecutar código de manera local:

1 - Descarga o clona el repositorio.
2 - Desde la consola, entra en la carpeta del proyecto y ejecuta el siguiente comando npm i.
3 - Crea un archivo .env y introduce lo siguiente:
USER=admin
PASSWORD=del111112
HOST=db-test-2.ciuh7m591njg.us-east-1.rds.amazonaws.com
DATABASE=test
4 - Una vez descargadas las librerías, inicia el proyecto con npm start.

El código lo he subido a Amazon Web Services y lo he hecho a través de máquinas virtuales(EC2), creando balanceadores de manera manual, para hacer que la aplicación sea escalable.
en una aplicación profesional usaría el escalado automático, para que se creen instancias automáticas acorde a las necesidades y compraría un certificado ssl para poder agregar el
Protocolo HTTPS a mi página web. Para la base de datos use MySQL principal y otra secundaria, para que vaya copiando los datos de la primera y en caso de que la segunda no funcione,
esta quede a cargo, en un caso real usaría Aurora y usaría el escalado automático que brinda esta.

