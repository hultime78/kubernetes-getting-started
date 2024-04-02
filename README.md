  
  

# Understanding Kubernetes

  

![](https://readme-typing-svg.herokuapp.com/?font=Montserrat&color=3A9CDF&size=25&lines=Kubernetes+Series+EP1;Start+K8S+Now)

<img  src="https://github.com/kubernetes/minikube/raw/master/images/logo/logo.png"  width="100"  alt="minikube logo">

</div>

  

Kubernetes, often abbreviated as K8s, is an open-source platform designed to automate the deployment, scaling, and operation of application containers. It allows you to manage containerized applications across a cluster of machines in a more efficient and automated way.

Kubernetes helps you ensure that your applications run where and when you want them to and that they have the resources and tools they need to operate Essentially, it's like a system for controlling a fleet of ships, where each ship is a container that holds your application.

  

# Prerequisites

  

Before you begin, you'll need the following:

  

- A basic understanding of containerization and Docker.

- Access to a Linux-based environment for setting up the cluster.

- Familiarity with command-line tools and YAML syntax.

  

## Step 1 : Setting Up the Environment

  

You can start with a local development environment using tools like Minikube or Kind. These tools allow you to run a Kubernetes cluster locally on your machine. In this tutorial we will be working with Minikube.

  

1. Install [Docker](https://www.docker.com/products/docker-desktop/) on your machine.

2. Install [Minikube](https://minikube.sigs.k8s.io/docs/start/) on your machine, Minukube support many operating system. Follow the instructions on the official [Minikube GitHub](https://github.com/kubernetes/minikube) page

3. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

4. Start Minikube with the following command
    <summary><b>cmd code </b></summary>

    

    ```console
    MiniKube Start
    ```

5. Verify that Minikube is running with the following command
    <summary><b>cmd code </b></summary>

    

    ```console
    MiniKube Status
    ```

  
  

## Step 2 : Exploring Kubernetes Components

Before diving deeper in Kubernetes, you need to familiarize yourself with kubernetes components, presenting all Kubernetes components is beyond the scope of this tutorial, so we'll be focusing on a few components, that are a 'must' to get started with Kubernetes.

  

1.  **Cluster**: A cluster is a set of **node** machines for running **containerized** applications. It consists of at least one **control plane** and multiple compute machines, or nodes.

2.  **The control plane** : maintains the desired state of the cluster, such as which applications are running and which container images they use, while the nodes actually run the applications and workloads.

In simpler terms, a Kubernetes cluster is like a big computer made up of many smaller computers. These smaller computers are called nodes. Some nodes are in charge (control plane nodes) and tell the other nodes what to do. The other nodes (worker nodes) do the actual work, like running apps. This setup lets you manage lots of apps easily and keep them running smoothly.

  

3.  **Services**: An abstract way to expose an application running on a set of Pods as a network service.

4.  **Pods**: The smallest deployable units that can be created and managed in Kubernetes.

5.  **Deployments**: Provide declarative updates for Pods and ReplicaSets.

6.  **Nodes**: Worker machines in Kubernetes, managed by the Master.

7.  **Master**: The controlling unit in Kubernetes that manages the workload and directs communication across the system.

![Minikube Architecture](https://www.devopsschool.com/blog/wp-content/uploads/2022/12/minikube-architecture-4-1024x683.png)


  
  

## Step 3: Deploying Your First Application

1. Create a simple application container (e.g., a Hello World app) and package it into a Docker image, you can use the docker image provide in the repo.

2. Push the image to a container registry (e.g., Docker Hub).

3. Write a deployment YAML file for your application.

4. Deploy your application to the cluster with the following command :
    <summary><b>cmd command</b></summary>

    

    ```console
    kubectl apply -f your-app-deployment.yaml
    ```

5. Verify the deployment with the following command
    <summary><b>cmd command</b></summary>

    

    ```console
    kubectl get deployment
    ```

  
  

## Step 4: Exposing Your Application

1. Create a service YAML file to expose your application, you can see the example file provided in the repo.

2. Apply the service configuration with :

  

    <summary><b>cmd command</b></summary>

    

    ```console
    kubectl apply -f your-app-service.yaml
    ```

4. Access your application via the exposed service.

  

## Step 5: Scaling and Updating Your Application

  

- Scaling: Increase or decrease the number of replicas in your deployment with :

  

    <summary><b>cmd command</b></summary>

    

    ```console
    kubectl scale deployment/your-app --replicas=3.
    ```

- Updating: Update the application version by changing the image in your deployment and re-applying the configuration.

  

## Step 6: Monitoring and Logging

Set up monitoring and logging to keep track of your application's performance and troubleshoot issues.

  

- Use tools like Prometheus for monitoring.

  

- Use tools like Fluentd or ELK stack for logging.

  

## Step 7: Cleaning Up

When you're done, you can delete your resources or the entire cluster:

- Delete resources with the following command :
    <summary><b>cmd command</b></summary>

  

    ```console
    kubectl delete -f your-resource-file.yaml.
    ```

  
  

- Delete the Minikube cluster with .

  

    <summary><b>cmd command</b></summary>

    

    ```console
    minikube delete
    ```

  

- Or if you are using a Kind Cluster elete the Kind cluster with kind delete cluster.
    <summary><b>cmd command</b></summary>

    ```console
    Kind delete
    ```

  

## Additional Resources

For more detailed guides and tutorials, you can refer to the official [Kubernetes documentation](https://kubernetes.io/docs/tutorials/kubernetes-basics/) and other comprehensive beginner guides like those provided by [DevOpsCub](https://devopscube.com/kubernetes-tutorials-beginners/)

## Authors



<table border=0px>
  <tr>
    <td> <img src="https://github.com/hultime78.png" width="60px;"/><br/><sub><a href="https://github.com/hultime78">Aaron Mangbenza </a>
    </td>
    <td> <img src="https://github.com/gaeltan.png" width="60px;"/><br/><sub><a href="https://github.com/gaeltan">Gael Tanckwe </a>
    </td>
     <td> <img src="https://github.com/gabbryella.png" width="60px;"/><br/><sub><a href="https://github.com/gabryella">Gabriella Nshombo </a>
    </td>
   </tr> 
   <tr>
    <td> <img src="https://github.com/gabbryella.png" width="60px;"/><br/><sub><a href="https://github.com/hultime78">Joyce Mukadi</a>
    </td>
    <td> <img src="https://github.com/yakambicredo.png" width="60px;"/><br/><sub><a href="https://github.com/credoyakambi">Crédo Yakambi </a>
    </td>
    <td> <img src="https://github.com/aladin-le-prince.png" width="60px;"/><br/><sub><a href="https://github.com/hultime78">Candy Kashaka </a>
    </td>
   </tr> 
  </tr>
</table>