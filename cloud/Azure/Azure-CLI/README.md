# How to Install Azuere CLI in MacBook with `brew`
brew update && brew install azure-cli
# `az`
## `az login`
`az login` command will open a new tab in a broswer to try to force user to login to the Azure Cloud portal. The username is an email address ended with `.biz`, so note that it is different from the `.online` user e.g. for *OneDrive*

## `az acr`
### list all repositories of one registry
`az acr repository list --name <RegistryName>`
### list all images of a repository
`az acr repository show-tags --name registryname --repository reponame`
## Add an App Service to the free tier
### 1. Create a resource group
`az group create --name dictionary-rest-api_group --location swedencentral --subscription <subscription_id>`
But note that in order to be able to create the group, a user has to have a *Subscription*
### 2. create an App Service Plan
az appservice plan create \
  --name myDictionaryRESTAPIServicePlan \
  --resource-group dictionary-rest-api_group \
  --sku F1 \
  --is-linux

Here a resource group belongs to a subscription
