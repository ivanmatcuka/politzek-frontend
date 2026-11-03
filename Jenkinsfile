pipeline {
    agent any

    tools {
        nodejs '22.13'
    }

    environment {
        DEPLOY_USER = credentials('deploy-user')
        DEPLOY_HOST = credentials('deploy-host')

        DOCKERHUB_PASSWORD = credentials('dockerhub-password')
        DOCKERHUB_USER = credentials('dockerhub-username')
    }

    stages {
        stage('Lint') {
            steps {
                echo 'Linting....'
                sh 'npm i'
                sh 'npm run lint'
            }
        }

        stage('Set Up Docker') {
            steps {
                sh '''docker login -u ${DOCKERHUB_USER} -p ${DOCKERHUB_PASSWORD}'''
            }
        }

        stage('Set Up .env') {
            steps {
                withCredentials([file(credentialsId: 'env-development', variable: 'secretFile')]) {
                    sh 'touch .env'
                    sh 'cat $secretFile > .env'
                }
            }
        }

        stage('Build for Development') {
            steps {
                echo 'Building....'
                sh 'docker compose -f docker-compose.yml build'
            }
        }

        stage('Push Development Version') {
            steps {
                echo 'Pushing....'
                sh 'docker compose -f docker-compose.yml push'
            }
        }

        stage('Deploy to Development') {
            steps {
                echo 'Deploying....'

                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.yml down'''
                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.yml up -d'''

                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.server.yml down'''
                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.server.yml up -d'''
            }
        }
    }
}
