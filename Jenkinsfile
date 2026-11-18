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

        stage('Set Up Development .env') {
            when {
                branch 'development'
            }

            steps {
                withCredentials([file(credentialsId: 'env-development', variable: 'secretFile')]) {
                    sh 'touch .env'
                    sh 'cat $secretFile > .env'
                }
            }
        }

        stage('Build for Development') {
            when {
                branch 'development'
            }

            steps {
                echo 'Building....'
                sh 'docker compose -f docker-compose.dev.yml build --no-cache'
            }
        }

        stage('Push Development Version') {
            when {
                branch 'development'
            }

            steps {
                echo 'Pushing....'
                sh 'docker compose -f docker-compose.dev.yml push'
            }
        }

        stage('Deploy to Development') {
            when {
                branch 'development'
            }

            steps {
                echo 'Deploying....'

                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.dev.yml down --rmi all'''
                sh '''DOCKER_HOST=ssh://${DEPLOY_USER}@${DEPLOY_HOST} docker compose -f docker-compose.dev.yml up -d'''
            }
        }
    }
}
