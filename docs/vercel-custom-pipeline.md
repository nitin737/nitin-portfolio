# Custom Vercel Pipeline with GitHub Actions

While Vercel provides excellent zero-config deployments, you may want more control over your pipeline (e.g., to run tests, linting, or custom scripts before deploying).

You can achieve this using **GitHub Actions**.

## Prerequisites

1.  **Vercel Token**:

    - Go to [Vercel Account Tokens](https://vercel.com/account/tokens).
    - Create a token.
    - Go to your GitHub Repository > **Settings** > **Secrets and variables** > **Actions**.
    - Add a New Repository Secret named `VERCEL_TOKEN` with your token value.

2.  **Vercel Project ID & Org ID**:
    - You can link your project locally to get these:
      ```bash
      npm i -g vercel
      vercel link
      ```
    - Check the generated `.vercel/project.json` for `projectId` and `orgId`.
    - Add these as secrets in GitHub: `VERCEL_PROJECT_ID` and `VERCEL_ORG_ID`.

## Example Workflow

Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Vercel Production Deployment

on:
  push:
    branches:
      - main

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install Dependencies
        run: npm ci

      - name: Run Linting
        run: npm run lint
        # Fails the pipeline if linting errors exist

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## How it Works

1.  **Linting**: The pipeline runs `npm run lint` first. If this fails, the deployment is stopped.
2.  **Vercel CLI**: Uses the official CLI to pull config, build, and deploy.
3.  **--prebuilt**: Tells Vercel to use the artifacts we built in the previous step, ensuring what we tested is what gets deployed.
