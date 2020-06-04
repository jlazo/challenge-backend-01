# Backend Exercise

## Productor

La primera parte del ejercicio solicita conectarse al API de Twitter y leer 2 palabras claves

- **platzi**
- **open source and node**

Para todos aquellos tweets que coincidan con las palabras previamente indicadas, se requiere se envien a una cola de mensajes (RabbitMQ)

Para iniciar el proceso productor ejecutar el siguiente comando (estando en el raíz del proyecto)

    > cd producer
    > node i

Previo a la ejecución, es necesario generar las siguientes variables de entorno o en su defecto generar un archivo `.env` en el raiz del proyecto

Para Twitter configurar las siguiente variables

    CONSUMER_KEY=
    CONSUMER_SECRET=
    ACCESS_TOKEN=
    ACCESS_TOKEN_SECRET=

Para RabbitMQ configurar las siguiente variables

    RABBITMQ_URL=
    RABBITMQ_QUEUE_NAME=

Finalmente ejecutamos el comando

    > npm run dev

## Consumidor

La siguiente parte del ejercicio solicita se obtenga la información de la cola de mensajes (RabbitMQ), se guarde en Redis y se exponga la información a través de un API Rest

Para iniciar el proceso consumidor ejecutar el siguiente comando (estando en el raíz del proyecto)

    > cd consumer
    > node i

Previo a la ejecución, es necesario generar las siguientes variables de entorno o en su defecto generar un archivo `.env` en el raiz del proyecto

Para Redis configurar las siguiente variables

    REDIS_URL=
    REDIS_KEY_NAME=

Para RabbitMQ configurar las siguiente variables

    RABBITMQ_URL=
    RABBITMQ_QUEUE_NAME=

Finalmente ejecutamos el comando

    > npm run dev

## GraphQL

Finalmente se solicita cambian el endpoint de API Rest a GraphQL

Para iniciar el proceso GraphQL ejecutar el siguiente comando (estando en el raíz del proyecto)

    > cd graphql
    > node i

Previo a la ejecución, es necesario generar la siguiente variable de entorno que me permitira consultar el API Rest previo o en su defecto generar un archivo `.env` en el raiz del proyecto

    API_TWEET_URL=

Finalmente ejecutamos el comando

    > npm run dev
