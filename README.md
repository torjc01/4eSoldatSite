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
docker run -p 3000:3000 4soldat
```

Acesse a aplicacao via browser pelo endereço : http://localhost:3000
