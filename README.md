# REST-on-kubernetes
Basic application that performs CRUD operations. The goals of this project are the following:
- To build the project's docker image. To be hosted on DockerHub.
- Deploy the docker image on a ```Kubernetes``` cluster created with ```KOPS``` (Hosted on ```AWS```).

    #### Implies:
        - Creation of a ```Kubernetes``` cluster with 1 master and 2 nodes.
        - Creation of a ```Deployment``` object with 3 replicas.
        - Creation of a ```Service``` object to route traffic to my ```Docker``` container.


HTTP method | Endpoint
------------ | -------------
GET | /movies
POST | /add
UPDATE | /update
DELETE | /delete
