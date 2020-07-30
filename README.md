# Web interface

## Estado del build
[![Build Status](https://travis-ci.com/chotuve-grupo10/chotuve-web-interface.svg?branch=dev)](https://travis-ci.com/chotuve-grupo10/chotuve-web-interface)


## Descripción
La web interface brinda una GUI que permite la administración de archivos, usuarios y de application servers. Solo pueden acceder usuarios con permisos de administrador.

## Contenidos
1. [Correr la web interface localmente](#set-up-para-correr-la-web-interface-localmente)
2. [CI/CD](#CI/CD)

## Set up para correr la web interface localmente

Para poder correr la web interface localmente usaremos **Docker**. A continuación detallamos los comandos a ejecutar:

1. Buildear la imagen ejecutando en el directorio raiz del repo
```docker build . -t web-interface```

2. Corremos el container ejecutando
 ```docker run -it -p 3000:3000 --name web-interface web-interface```

3. Si queremos eliminar el container creado
```docker rm -f web-interface```

## CI/CD

### CI

Cada push que se haga al repo (sin importar la rama) lanzará un build en [Travis](https://travis-ci.com/).


### CD

Una vez que se haya terminado una tarea, se deberá crear un pull request para mergear a dev. Este pull request deberá ser revisado por al menos un miembro del equipo y deberá ser aprobado. Dejamos a continuación las direcciones del auth server tanto de desarrollo como productivo:

- [Web interface dev](https://chotuve-web-interface-dev.herokuapp.com/)

- [Web interface prod](https://chotuve-web-interface-prod.herokuapp.com/)