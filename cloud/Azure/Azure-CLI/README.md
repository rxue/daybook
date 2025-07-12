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
Here a resource group belongs to a subscription

## Create an App registration
```
az ad app create --display-name dictionary-rest-api
```
## ~Role assignment~
```
az role assignment create --role contributor --subscription $subscriptionId \
--assignee-object-id  $assigneeObjectId \
--scope /subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.Web/sites/$webappName \
--assignee-principal-type ServicePrincipal
```

### The Web App you intend to deploy to the Azure App Service by means of Github Action `azure/webapps-deploy@v2` must exist. Otherwise there will be error: `Error: Deployment Failed, Error: Resource xxx of type Microsoft.Web/Sites doesn't exist.`
#### So need to start the App Service before deployment with Github Action `azure/webapps-deploy`
##### 1. create an App Service Plan for the app
```
az appservice plan create \
  --name $planName \
  --resource-group $existingResourceGroupName \
  --subscription $existingSubcriptionId \
  --sku F1 \
  --is-linux
```
note that the `F1` means the free tier
##### 2. Create the Web App
```

az webapp create \
  --resource-group `$resourceGroupName \
  --plan $appServicePlanName \
  --name $appName \
  --deployment-container-image-name $dockerImageName

```
 
## 20250711 When updating something in Azure portal, the queried result in Azure CLI might not be synchronized immediately. In order to make Azure CLI get the synchronized result, `az logout` and then `az login` again 
