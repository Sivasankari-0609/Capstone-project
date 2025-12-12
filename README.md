**End-to-End DevOps Pipeline for a Capstonenode.js Web Application**

This project demonstrates a complete CI/CD pipeline using GitHub → Jenkins → Docker → Docker Hub → AWS EC2, with full monitoring using Prometheus, Node Exporter, and Grafana, plus system automation via Cron + Bash scripts.It represents a real-world DevOps environment including build automation, containerization, cloud deployment, observability, and infrastructure maintenance.

**Project Overview**

The goal of this project is to implement a fully automated pipeline that:

Fetches code from GitHub

Builds and tests the application using Jenkins

Creates & pushes Docker images to Docker Hub

Deploys the application automatically on AWS EC2

Monitors system & app metrics using Prometheus & Grafana

Runs automated backup/cleanup tasks using cron jobs

This pipeline eliminates manual deployment effort and ensures continuous, reliable delivery.

**Tech stack**

| Layer                  | Tools                              |
| ---------------------- | ---------------------------------- |
| Source Control         | Git + GitHub                       |
| CI/CD                  | Jenkins on AWS EC2                 |
| Application            | Node.js                            |
| Containerization       | Docker + Docker Hub                |
| Infrastructure         | AWS EC2 (Ubuntu)                   |
| Monitoring             | Prometheus, Grafana, Node Exporter |
| Scripting & Automation | Bash + Cron                        |
| Editor                 | VS Code                            |


**Commands to Run Locally**

**Clone the project:**

git clone https://github.com/Sivasankari-0609/Capstone-project.git

cd Capstone-project

**Install dependencies** : npm install

**Start the app :** npm start

**Docker Commands :** docker build -t capstone-app .

**Run container :** docker run -d -p 3000:3000 capstone-app

**CI/CD Pipeline (Jenkins)**

Your Jenkinsfile contains these stages:

**Checkout** – Pull code from GitHub

**Build** – Install dependencies using npm ci

**Test** – Run npm test

**Docker Build** – Build image tagged with BUILD_ID

**Docker Push** – Push image to Docker Hub

**Deploy** – SSH to EC2, pull latest image, run new container

**Cleanup** – Remove unused Docker resources

**Monitoring Setup**

**Node Exporter**

Installed on application EC2 → Exposes metrics on port 9100

**Prometheus**

Scrapes Node Exporter → Runs on port 9090

**Grafana**

Visualizes metrics → Runs on port 3001

**Dashboards include:**

CPU usage; Memory utilization; Disk space;

**Backup & Maintenance Automation**

**Bash scripts:**

backup_logs.sh – Creates timestamped backups

cleanup.sh – Removes old logs

**Cron jobs:**

Configured using crontab -e







