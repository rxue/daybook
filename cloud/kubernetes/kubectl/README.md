# List all namespaces
`kubectl get namespaces`
# List pods in a given namespace
`kubectl get pods -n <namespace>`
# Log on a container by container name and pod id
`kubectl logs <pod_name> [-n <namespace>]`

# `delete` a pod is how you would restart an application
`kubectl delete pod <pod name>`
