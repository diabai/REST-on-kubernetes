# REST-on-kubernetes
Basic application that performs CRUD operations. The goals of this project are the following:
- To build the project's docker image. To be hosted on DockerHub.
- Deploy the application on a ```Kubernetes``` cluster created with ```KOPS``` (Hosted on ```AWS```):
    - Creation of a ```Kubernetes``` cluster with 1 master and 2 nodes.
    - Creation of a ```Deployment``` object hosting the ```Docker``` container. This ```Deployment``` object has 3 replicas.
    - Creation of a ```Service``` object to route traffic to my ```Docker``` container.


HTTP method | Endpoint
------------ | -------------
GET | /movies
POST | /add
UPDATE | /update
DELETE | /delete
