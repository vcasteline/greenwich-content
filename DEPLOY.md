# Despliegue en Render

Este proyecto está configurado para ser desplegado en Render con almacenamiento en disco (disk storage) y base de datos SQLite.

## Pasos para el despliegue

1. Crea una cuenta en Render.com (si aún no tienes una)
2. Conecta tu repositorio de GitHub con Render
3. Crea un nuevo servicio web desde el Dashboard de Render
4. Selecciona la opción "Blueprint" y apunta al archivo `render.yaml` en tu repositorio
5. Render generará automáticamente la configuración necesaria basada en el archivo render.yaml
6. Haz clic en "Create Blueprint Instance" para desplegar la aplicación

## Configuración

El despliegue utiliza:
- SQLite como base de datos
- Almacenamiento local para los archivos subidos (disk storage)
- Un disco persistente para mantener los datos de la base de datos y archivos subidos

## Variables de entorno

Las variables de entorno necesarias están definidas en el archivo `render.yaml`. Render generará automáticamente valores seguros para las claves secretas cuando se despliegue la aplicación.

## Acceso al panel de administración

Una vez desplegada la aplicación, podrás acceder al panel de administración en:
`https://tu-servicio-render.onrender.com/admin` 