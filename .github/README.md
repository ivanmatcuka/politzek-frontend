# GitHub Actions Deployment Workflow

This project sets up a GitHub Actions workflow that automates the deployment process whenever changes are merged into the `development` branch. The workflow is defined in the `.github/workflows/deploy-on-merge.yml` file.

## Workflow Overview

The workflow is triggered on merges to the `development` branch. It performs the following steps:

1. **SSH into the Server**: The workflow uses a secret variable to securely connect to the server.
2. **Pull Latest Changes**: Once connected, it pulls the latest changes from the `development` branch to ensure the server is up to date.
3. **Restart Docker Container**: Finally, it restarts the Docker container to apply the latest changes.

## Configuration

To set up the workflow, you need to configure the following secrets in your GitHub repository:

- `SSH_PRIVATE_KEY`: The private SSH key used for authenticating to your server.
- `SERVER_USER`: The username for SSH access to your server.
- `SERVER_IP`: The IP address or hostname of your server.

### Adding Secrets

1. Go to your GitHub repository.
2. Click on `Settings`.
3. In the left sidebar, click on `Secrets and variables`, then `Actions`.
4. Click on `New repository secret` to add each of the required secrets.

## Usage

Once the secrets are configured, any merge into the `development` branch will trigger the deployment workflow automatically. You can monitor the progress of the workflow in the "Actions" tab of your GitHub repository.

This setup ensures that your application is always running the latest code with minimal manual intervention.