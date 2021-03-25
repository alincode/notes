# Kubernetes

## 情境：GCP 帳號被刪掉，清除 GKE 舊的 context。

```
gcloud auth list
gcloud auth revoke your-email@ooxx.com
vi ~/.kube/config
```
