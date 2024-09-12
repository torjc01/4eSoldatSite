# Projeto Le Site du 4e Soldat

Site pour le téléchargement de la documentation du 4e Soldat. 

## Criação do projeto Node 

Criar a aplicaçao React 

```bash
npm create-react-app <nome da aplicacao>
```

Faça o build 

```bash 
npm run build
```


## Dockerizando a aplicação

Crie o arquivo Dockerfile na raiz da aplicação

```dockerfile

# Specify the base image
FROM node:alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]
```
Faça o build da imagem 

```bash
docker build -t 4soldat .
```

Execute o container 

```bash
docker run -d -p 3000:3000 4soldat &
```

Acesse a aplicacao via browser pelo endereço : http://localhost:3000

Para acessar a estrutura do container docker: 

```bash
docker exec -it 4soldat /bin/sh
```


# Referências

Configuracao Digital Ocean para novo site

How To Configure Nginx as a Reverse Proxy on Ubuntu 22.04
https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-reverse-proxy-on-ubuntu-22-04

NGINX as Reverse Proxy for Node or Angular application
https://www.digitalocean.com/community/tutorials/nginx-reverse-proxy-node-angular

How To Secure Nginx with Let's Encrypt on Ubuntu 20.04
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

