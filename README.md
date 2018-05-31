# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.5.



## 0. Instructions

### Getting started

>1.  Downloading code
>       * Download the skeleton APP from "https://github.com/uscdev/hello/tree/master/my-app"
>2. Install local angular and node_modules
>       * run "npm install --save-dev @angular/cli@latest" in the your project folder
>3. Deploy the skeleton with docker
>       * run  "docker stack deploy --compose-file docker-compose.yml 'name-of-your-app' "
>       * go to http://localhost/
>5. Deploy the app locally with npm
>       * run 'ng serve'
>       * go to http://localhost:4200/
#### Common Errors
 1. Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
       * run "npm i webpack --save-dev" in your project folder.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.
#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 1. Framework vs Library

## 2. Angular4

>Definition from Thinkster.io :-

>It is a JavaScript framework that embraces extending HTML into a more expressive and readable format. It allows you to decorate your HTML with special markup that synchronizes with your JavaScript leaving you to write your application logic instead of manually updating views. Whether you're looking to augment existing JavaScript applications or harness the full power of the framework to create rich and interactive SPA's (single page applications), Angular can help you write cleaner and more efficient code.


For learning Angular4, there are three sites that will suffice your purpose.
1. [YouTube](https://www.youtube.com/watch?v=k5E2AVpwsko)
2. [Udemy](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content)
3. [Angular4 Tour of Heros](https://angular.io/tutorial)

### Libraries Used
- [Angular ui-router](https://github.com/angular-ui/ui-router)
> Routing is what allows AngularJS to make transition between pages without loading the entire page again. The ui-router library does everything that the ng-route functionality does and much more.
[Why should we use Ui-router over ng-route? ](http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router)
- [UI-Grid](http://ui-grid.info) For tables.
- [Angular DaterangePicker](https://github.com/fragaria/angular-daterangepicker)
> Angular DaterangePicker has dependencies on the Bootstrap DaterangePicker.  You will also require the library  ["Bootstrap DaterangePicker"](https://github.com/dangrossman/bootstrap-daterangepicker)
- [Google Charts - Angular](https://github.com/angular-google-chart/angular-google-chart)
> We utilize Bar Charts and Pie charts in our application. Follow the examples on the official page.
- [Moment](https://momentjs.com)
> Moment is the goto library for date manipulations in Javascript.


### Files that have been edited.
We have utilized the Metronic Framework as the basis of the Project template. While we haven't implemented the use of UI-router ourselves, it is by all means a better alternative to Angular's ng-route.
The very first commit of this repository has untainted Metronic code.
We have used admin_1 angular code as the base template for our application.
The assets directory will contain assets for the Metronic layout.

- The index file uses "data-ng-include" directive to set the layout of the page. The "tpl" directory consists of the html files which include the layout for each section.

- The bower components holds all of the scripts and css of the plugins as described above
- In the "js" directory we have controllers and other scripts. The "main.js" file handles the routing between pages when the buttons in the sidebar are clicked.
>We shall refer to the section where we have the content of the website as the "panel" section.

- The panel section is routed to the dashboard.html page by default. Other routings are done in the main.js file. See file for implementation details. Whenever we want to move to another page, the source for the panel section is switched.(We do not require to reload the page) Hence the paradigm of SPA is preserved.
- While going through the main.js code, please note that the ui-router module allows for lazy loading of files.
- The controller for dashboard.html is inside "js/controllers/" directory.
- Currently the controller for searchpage.html is inside the "js" directory.

> Please note that searchpage.html makes use of nested views. So in depth study of main.js and itsdashboard-shreya.js will be needed.



## 3. Node.js

> We use the express framework and the mysql package in the backend to facilitate REST calls and connections to the SQL database.

List of packages used
* [express](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework for node.
* [body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware.
* [mysql](https://www.npmjs.com/package/mysql#introduction) Node.js driver for mySQL
* [morgan](https://www.npmjs.com/package/morgan) Logs

We use express to create REST request handlers.

Serverpool.js consist of our main node file.
* Inside package.json, when we use npm install --save package_name, the dependencies are added to the file.
* Note : We have configure the entrypoint of the node project to be serverpool.js and set the start script as "node serverpool.js". The start script will be used during deploymen
## 4. Docker
Docker is a container technology. It makes it easier to deploy and run applications by using containers.

> [What is Docker?](https://www.docker.com/what-docker)
- Currently, the Docker documentation is the best source of all things Docker. Stick to the documentation. The Docker basic tutorial and
> For this project, stick to the basic tutorial. It should cover the basic requirements.
 [Docker documentation](https://docs.docker.com/)

 The following steps assume that you have basic knowledge about containers and images atleast.

 #### Deployment on Docker

 We have to now deploy the application on the USC docker swarm.
 > [What is Docker Swarm?](https://docs.docker.com/engine/swarm/key-concepts/)


 The Docker swarm is located at swarm.docker.usc.edu.
 Please note that you cannot access swarm through the web browser. It is used to host other applications.

Before you get started on this part, please talk to Don Corley in 302W-18B. Ask him for the digital certificates to connect to the Docker swarm and the credentials(username/password) for the nexus repository.

1. We will first create a docker image of our application.
> -  Go to the root of our project. This is the "theme" directory. As you can see it contains a "[Dockerfile](https://docs.docker.com/engine/reference/builder/)".
> - To build an image, we use the "docker build". "docker build" uses instructions in a "Dockerfile" to build an image for our application.
>- Inside the Dockerfile
```
FROM nginx
EXPOSE 12345
COPY ./admin_0_angjs/ /usr/share/nginx/html
```
> - In the first line we specify that we will use the nginx image. If not found locally it will pull from dockerhub.(Requires internet connection)
> - In the second line, we are specifying that the container which runs the image will listen to incoming requests on port 12345.
> - In the third line, we are copying the content of the project to the nginx directory. Whenever a request arrives, the index.html file will be served.
> - Run the following command inside of the "theme" directory to generate an image from the Dockerfile. (Will take some time)
```
$ docker build -t dashboardImage .
```
> "docker build" signifies we want to build an image. -t specifies that we are giving a tag to the image. The "." at the end specifies that all files are to be used. The phrase dashboardImage can be replaced by anything else. It is just a tag to identify the image with.

2. Push the image to the USC nexus repository.
You will require the login credentials mentioned earlier.
> - Login to the registry
```
docker login registry.docker.usc.edu
```
> - You will get a prompt to enter the usernama and password.
> - Read this till the end of the section before executing the listed commnads
 ```
docker tag dashboardImage registry.docker.usc.edu/itsdashboard:v1
docker push registry.docker.usc.edu/itsdashboard:v1
```
> - The first command allows us to know that the dashboardImage is associated with a dashboardImage on the repo. They will have the same image ID. Removing the image locally doesn't remove it from the repository.
> - We then push to the registry. We specify the location of the registry. and the name of the image that will be stored on the repo.
The target location should be specified in this way "address_of_registry/image_name:version".
Currently we have "itsdashboard:v1" already deployed.
Please use the same convention and deploy the future versions as "registry.docker.usc.edu/itsdashboard:v(n)" where (n) specifies version number.

3. Connect to the swarm
> The swarm is up on swarm.docker.usc.edu (not a website
> You will require the certificates as mentioned earlier in the document
> For Windows Users( Users who have Hyper-V on Windows), Open Powershell and run  the following commands to set the environment variables to talk to the swarm. The $ sign is a part of the command. Please copy it.
```
$env:DOCKER_CERT_PATH="absolute_path/swarm-tls"
$env:DOCKER_HOST="tcp://dcorley-swarm-mgr01.usc.edu:2376"
$env:DOCKER_TLS_VERIFY=1
```
> For Linux Users, (the commands should work for MacOS too but have not been tested)
```
export DOCKER_CERT_PATH="/home/path_to/swarm-tls"
export DOCKER_TLS_VERIFY=1
export DOCKER_HOST=tcp://dcorley-swarm-mgr01.usc.edu:2376
```
> By the above commands we are setting the environmental variables temporarily. they will persist till the end of the commandline session.
> Use "docker version" to check if you are talking to the swarm. You should get client and server version information.
You are now talking to the swarm. All the docker commands will be run on the swarm now.

4. The USC swarm (Not a part of deployment, but necessary information)
> - When you are talking to the swarm, you cannot access your local docker environment. To access your local environment again, start a new command line session.
> - If you run docker images, you will be able to see all the images on the swarm.
> - **DO NOT DELETE OR STOP ANY OF THE IMAGES OR SERVICES OR CONTAINERS UNLESS YOU ARE ABSOLUTELY SURE. THERE ARE CRITICAL SERVICES AND ASSOCIATED IMAGES AND CONTAINERS ON THE DOCKER SWARM**
>- You will not see your image at first because, the image is in the Docker registry not on the swarm.
> - "docker service ls" will give you a list of online services.
> - "docker service rm service_name" should be used to remove unwanted services
> - "docker ps -a" and "docker rm" work as usual.

5. Deploying the application.
> - Provided you did all the steps correctly, you should be talking to the swarm now.
>- [How do Docker services work?](https://docs.docker.com/engine/swarm/how-swarm-mode-works/services/)
> We will now create a service for itsdashboard. Run the commands
 ```
docker service create --name itsdashboard -p 8082:12345 dtr.docker.usc.edu/itsdashboard
```
> - "--name itsdashboard" specifies the name of the application.
> - "-p 8082:12345" We map all incoming requests at 8082 to the exposed port 12345 as specified in the Dockerfile.
> - "dtr.docker.usc.edu/itsdashboard" specifies that the latest image on the registry should be used.
> - visit [itsdashboard.docker.usc.edu:8082]()
> - Note:- Most of the times you might get a port mapping issue. Try assigning a different port  but most importantly remove the service that was created using "docker service rm itsdasboard"


## 5. Build Automation using Jenkins

> We use jenkins to automate the deployment process. For deployment we use the "docker stack deploy" command instead of "docker service" as explained above. A docker-compose.yml file has the deployemnt information.

```
version: '3.1'
services:
  account-translator:
    image: dtr.docker.usc.edu/account-translator
    ports:
      - 8980:8080
    deploy:
      replicas: 1
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
```

>  Jenkins is located at jenkins.docker.usc.edu. Jenkins is an open source build automation tool. For access to Jenkins, contact Don Corley(dcorley@usc.edu). Go to Workday. open account-translator. Click on build now to complete the deplyment process.

> If you click on Configure, the list of configs for the build are listed.
* Add the project name
* Add the git repository and credentials in Source Code management
* In the Build section, under Docker Build and publish add the docker registry and credentials. click on advanced and set "Build context" to FDMApp, so that Jenkins knows that the dockerfile is in that directory.
* These setting will take care of building the image and pushing it to nexus.
* Execute shell after docker build and publish is the last build step.

```
export DOCKER_CERT_PATH=/run/secrets
export DOCKER_TLS_VERIFY=1
export DOCKER_HOST=tcp://dcorley-swarm-mgr01.usc.edu:2376
cd FDMApp
docker stack deploy --compose-file docker-compose.yml account-translator
```


* We are setting the environment variables as before, navigating to the FDMApp directory and using the docker-compose.yml file to deploy the application.
* docker stack deploy has the advantage or redeployment over docker service. This way, we won't get any port mapping errors and don't have to stop the service everytime
* To run the build process go to account-translator in jenkins and click on "Build now". You can see the console output in Jenkins.
