# GraphQL-News-Hub
Simple application that harnesses the capabilities of GraphQL and the adaptability of React to deliver a straightforward news search experience.

<img width="1840" alt="Screenshot 2023-11-20 at 10 59 33" src="https://github.com/eriksalsborn/GraphQL-News-Hub/assets/26621152/e03d2734-aa3a-43e8-8d04-d072cccb1983">

## Project Prerequisites:

1. **Get an API key:**

This project utilizes NewsAPI for retrieving news articles.
Authorization for this API is contingent upon the provision of an API key.

Get one for free at: https://newsapi.org

2. **Create an .env and add your API key:**

Once you have retrived your API key, create a *.env* file in the *news-server* directory.
Subsequently, include the API key in this file:
```bash
  NEWS_API_KEY=<YOUR_API_KEY>
  ```

## Docker with Kubernetes:

(If you are running minkube with the docker driver, run:

  ```bash
  eval $(minikube docker-env)
  ```
This simply sets some environment variables in your current shell to point the *docker client* to the *docker host* that is running the *minikube* K8s cluster. This prevents that pods running in the minikube docker container can't access the images that are built on the host machine.)

1. **Build Docker Images:**

   ```bash
   docker build -t news-client .
   docker build -t news-server .
   ```

2. **Apply Kubernetes Configurations:**
   
    ```bash
    kubectl apply -f kubernetes/deployments/server-deployment.yaml
    kubectl apply -f kubernetes/services/server-service.yaml
    kubectl apply -f kubernetes/deployments/client-deployment.yaml
    kubectl apply -f kubernetes/services/client-service.yaml
    ```
    
3. **Access Applications:**

**Server:**

```bash
    kubectl port-forward service/server-service 4000:80
```
**Client:**

```bash
    kubectl port-forward service/client-service 3000:80
```

#### Hurray! Now you can access the client on http://localhost:3000/

## Local Development:

### Start Server

1. **Navigate To The Server Directory:**
```bash
    cd news-server
```
2. **Install Dependencies:**
```bash
   npm install
```
3. **Run the Server:**
```bash
   npm start
```

### Start Client

1. **Navigate To The Client Directory:**
```bash
    cd news-client
```
2. **Install Dependencies:**
```bash
   npm install
```
3. **Run the React App:**
```bash
   npm start
```

#### Hurray! Now you can access the client on http://localhost:3000/
