# Laboratorio Sistemas Distribuidos
## Universidad de Santiago de Chile
### Carlos Álvarez, Williams Álvarez y Patricia Melo

---------------------

## PARA HACER FUNCIONAR EL PROYECTO NUEVO:

1) docker-compose up -d
	(si no funciona por culpa de node modules, probar con yarn install en el cygwin)
2) acceder cygwin: cd /cygdrive/c
3) cd Users/(usuario)/Desktop/USACH/Sistemas distribuidos/lab_sist_dist
4) ./config.sh
5) boto y vuelvo a correr el docker lab_sist_dist_kafka_1
6) Revisa en Robo 3T, base de datos se llama kafka, ingresa a Collections y doble click en Temperature
7) docker-compose down --volumes

* Para botar solo django:
docker-compose up -d --no-deps --build web

---------------------

# docker build -t vuejs-cookbook/dockerize-vuejs-app . 


   vue:
        image: vuejs-cookbook/dockerize-vuejs-app
        build: ./docker/vue
        container_name: vue
        ports: ["8085:8085"]

# Instrucciones generales
Para iniciar todo los contenedores, ejecutar el siguiente comando en directorio raiz (en donde se encuentra el archivo "docker-compose.yml" y este mismo archivo "README.md"):
sudo docker-compose up -d

Para cerrar y destruir todos los contenedores creados, ejecutar este comando en una nueva ventana de comandos:
sudo docker-compose down


# Instrucciones Django-PostgreSql
El siguiente comando crea una carpeta "backend_lab" con el codigo para backend en django y un archivo "manage.py" en carpeta raiz del proyecto. Si estos archivos ya existen no es necesario ejecutar el comando: 
sudo docker-compose run web django-admin startproject backend_lab .


El siguiente comando genera una lista con los archivos en carpeta raíz, indicando los permisos para cada archivo:
ls -l

Para el caso en que se use SO Windows, de forma predeterminada los archivos se encuentran con los permisos necesarios para ejecución con DOCKER, en caso de que esté usando Linux, es posible que este no sea el caso, por lo que se aconseja usar el siguiente comando para cambiar los permisos de todos los archivos en carpeta raíz:
sudo chown -R $USER:$USER .


Para compilar y ejecutar cambios guardados use el comando: 
sudo docker-compose up 

Para verificar el inicio del backend, ingresar a http://localhost:8000/

# Enlaces
## Django + Postgres
https://docs.docker.com/compose/django/