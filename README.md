docker compose up -d

1. Create the directory that will hold your entire app. From the root directory of your app, create server and front-end directories. cd into the server directory.
[x] -> "client", "server".

2. Create your server and verify that it works.
[x] -> localhost:3001

3. Create a database directory in your server directory.
[x]

4. Create your database and verify that it works. Make sure to link your database container's volume and your newly created database directory so that data can persist even after container removal.
[x]

5. Connect your database with your server and verify that you are getting back data from a query (notice that you always verify that each step is working before moving on. Keep doing this!). Make sure that your database is dropped (or tables truncated) and seeded with new data every time you start your containers. For example, your database shouldn't contain duplicate seeded entries after starting up your container several times.
[x]

6. HINT: Think about how you will automate starting your database and your server and seeding it with data. This will require multiple commands. How can you invoke multiple commands when you start your server?
[x]


7. Create a Dockerfile for your server. You should be able to run your server with a docker run ... command after you have built the image.
[x]

8. Navigate to the front-end directory and create your React app. Are you still verifying that things are working after every step?
[x]

9. Display the result of an AJAX request to your server in a <div>.
[x]

10. Create a Dockerfile for your React app.
[x]

11. In the root level of your app directory, one level up from your server and front-end directories, create a docker-compose.yml file to create and launch all of your services with a docker-compose up command.
[x]


References:

https://stackoverflow.com/questions/50505078/docker-compose-making-knex-work-with-postgres

```
# docker-compose.yaml
version: "3.7"

services:
  db:
    image: postgres:12.2
    restart: always
    ports:
      - 5432:5432
    volumes:
      - my-postgres-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=me
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=my-data

  node-app:
    image: node:12.16.2
    command: sh -c "npm install && npm install -g knex && knex migrate:latest && npm start"
    ports:
      - 3001:3001
    working_dir: /home/node/app
    volumes:
      - ./:/home/node/app
    environment:
      - NODE_ENV=development
      - DB_HOST=db
      - DB_USER=HG
      - DB_PASSWORD=password
      - DB_DATABASE=my-data
    depends_on:
      - db
    links:
      - db

volumes:
  my-postgres-data:
```