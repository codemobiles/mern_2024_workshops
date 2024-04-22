# Private Container Registry

using Docker "registry" image

Comparable why using private container registry

**Docker Hub**
Public repository:

- Unlimited number of public repositories.
- Image pull rate limit applies to unauthenticated or anonymous users
- allowing 100 pulls per six hours per IP address.

Private repository:

- Only one private repository is allowed for free accounts.
- Image pull rate limit applies to unauthenticated or anonymous users, allowing 100 pulls per six hours per IP address.
- Docker Registry Image Self-Hosted:

**Self-hosted Docker Registry**

- the limitations are mainly determined by the resources and capacity of your server or hosting infrastructure.
- There are no specific limits on the number of private repositories or image pull rates set by Docker itself since you are in control of your registry.

## SETUP

### Step 1: Install Docker Compose (if not already installed)

Docker Compose is a tool for defining and managing multi-container Docker applications. If you don't have it installed, you can follow the official Docker documentation to install it on your Linux Rocky OS: <https://docs.docker.com/compose/install/>

### Step 2: Set up a directory structure

Create a directory where you'll store the configuration files for the Docker registry. For example, let's call it docker_registry:

```bash
    mkdir docker_registry
    cd docker_registry
```

### Step 3: Create a Docker Compose file

```yaml
version: "3.8"
services:
  registry:
    image: registry:latest
    container_name: private_registry
    restart: always
    ports:
      - "$IP_ADDRESS:5000:5000"
    volumes:
      - $DOCKER_REGISTRY/data:/var/lib/registry
    environment:
      REGISTRY_HTTP_ADDR: 0.0.0.0:5000
    networks:
      - registry-net

networks:
  registry-net:
    driver: bridge
```

For HTTP

```bash
Error response from daemon: Get "https://192.168.1.57:5000/v2/": http: server gave HTTP response to HTTPS client

```

The error message you encountered indicates that Docker is trying to communicate with the private registry over HTTPS but is receiving an HTTP response from the server. By default, Docker attempts to use HTTPS when communicating with a registry.

However, if your private registry is not configured to support HTTPS, you'll need to configure Docker to allow insecure communication with the registry over plain HTTP.

Inside the `docker_registry` directory, create a file named `docker-compose.yml` and add the following configuration:

Open the `docker-compose.yml` file and add the `insecure-registries` option under the registry service to allow insecure communication with the registry:

On final `docker-compose.yml` i had modified networks configuration to using same network with gitlab container

[Docker-compose](/readme/readme_docker_compose.md)

This Compose file defines a service called registry, which uses the official Docker image for the registry.

It maps port 5000 of the host to port 5000 of the container, where the private registry will be accessible. It also sets up a volume to persistently store the registry data in the `./data` directory.

### Configure Docker to allow insecure registries

Now, you need to configure Docker on your client machine (the machine where you are running docker login) to allow insecure registries:

On Linux, you can do this by creating or modifying the `/etc/docker/daemon.json` file. If the file doesn't exist, create it with the following content:

```yaml
{ "insecure-registries": ["$IP_ADDRESS:5000"] }
```

If the file already exists, add the "insecure-registries" option to the existing configuration.

**Restart Docker**
After making changes to the Docker configuration, restart the Docker daemon:

```bash
    sudo systemctl restart docker
```

This time, it should work without the previous HTTPS error, as Docker is now configured to communicate with the registry over HTTP.

Remember that using plain HTTP for your private registry might pose security risks, especially if it's exposed to the internet or untrusted networks. Be cautious and consider additional security measures if necessary.

### Step 4: Start the private registry

Use Docker Compose to start the private registry:

```bash
    docker-compose up -d
```

The -d flag runs the containers in the background.

### Step 5: Push and pull images to/from the private registry

You can now push your Docker images to the private registry and pull them from there. Here's an example of how to do it:

```bash
[user@localhost ~]$ docker login $IP_ADDRESS:5000
Username: root
Password: Wasd1234
WARNING! Your password will be stored unencrypted in /home/user/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
```

### Containerize an application (TESTING IMAGE)

Clone the repository that ready to build the image (have Dockerfile installed with application)

```bash
    git clone https://github.com/docker/getting-started.git
```

[getting-started](https://docs.docker.com/get-started/02_our_app/)

### Testing Container Registry

```bash
    # Log in to the private registry
    docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY_ADDRESS

    # Build the registry using Dockerfile in the project to current working directory
    docker build -t "$CI_REGISTRY_ADDRESS/$CI_REGISTRY_IMAGE" . #CI_REGISTRY_IMAGE can look at docker hub of our repository / naming as you like it

    # Push the image to the private registry
    docker push "$CI_REGISTRY_ADDRESS/$CI_REGISTRY_IMAGE"

    # Pull the image from the private registry
    docker pull "$CI_REGISTRY_ADDRESS/$CI_REGISTRY_IMAGE"

    # Running image as container
    docker run -p $PORT:80 -d --name $APP_NAME "$CI_REGISTRY_ADDRESS/$CI_REGISTRY_IMAGE"
```

```bash
# redcats002/demo_app:vite_react_1.0.0
    # Log in to the private registry
    docker login -u "root" -p "Wasd1234" 192.168.1.57:5000

    docker tag <image_name>:<tag> localhost:5000/<image_name>

    # Build the registry using Dockerfile in the project to current working directory
    docker build -t "192.168.1.57:5000/getting-started" . #CI_REGISTRY_IMAGE can look at docker hub of our repository / naming as you like it

    # Push the image to the private registry
    docker push "192.168.1.57:5000/getting-started"

    # Pull the image from the private registry
    docker pull "192.168.1.57:5000/getting-started"

    # Running image as container
    docker run -p 4000:80 -d --name demoapp "192.168.1.57:5000/getting-started"
```

### Listing images/tags in the registry

Usage:

```bash
[user@localhost /]$ curl -X GET http://192.168.1.57:5000/v2/_catalog
{"repositories":["getting-started"]}
[user@localhost /]$ curl -X GET http://192.168.1.57:5000/v2/getting-started/tags/list
{"name":"getting-started","tags":["latest"]}
[user@localhost /]$
```

To list the images:

```bash
curl -X GET http://$IP_ADDRESS:5000/v2/_catalog
```

To list tags in that image:

```bash
curl -X GET http://$IP_ADDRESS:5000/v2/<repository_name>/tags/list
```

### CICD Variables

- CI_REGISTRY_USER
- CI_REGISTRY_PASSWORD
- CI_REGISTRY_ADDRESS
- CI_REGISTRY_IMAGE

### Future more you can

- set HTTPS on your registry

references:<https://docs.docker.com/registry/deploying/>
