# reactocomments
The official [React.js](https://facebook.github.io/react/docs/tutorial.html) tutorial, with a [json-server](https://github.com/typicode/json-server) backend, [Dockerized](http://docker.com).

```shell
git clone https://github.com/imjacobclark/reactocomments.git && cd reactocomments
docker build -t reactocomments . 
docker run -d -p 3000:3333 --name reactocomments reactocomments
```
