# Docker 

https://creatop.readbook.tw/season3/docker/windows/install.html
https://philipzheng.gitbooks.io/docker_practice/content/

建置、發佈、運行

* toolbars

DevOps
----
docker container run httpd:2.4
docker container run -p 80:80 httpd:2.4

- docker componse
	- docker up

- swarm

container 可以 commit 後成 image

```
docker run hello-world
docker images // 存在 vistrbox 裡面
docker run --name ghost -p 2368:2368 -d ghost
```
-d : Run container in background and print container ID

[localhost Ghost](http://localhost:2368/)

```
docker pull ubuntu
docker pull ubuntu:14.04
```

```
docker images
```


```
docker rm container-name 
docker rmi image-name
```


```
docker ps
docker ps -a
```

-a, --all             Show all containers (default shows just running)

```
docker inspect ubuntu
docker run -it ubuntu
```

-t, --tty                                   Allocate a pseudo-TTY
-i, --interactive                     Keep STDIN open even if not attached


```
docker run ubuntu echo 12345
docker exec ubuntu echo 12345
docker attach ubuntu (幾乎沒在用)
```


exec 新增一個 process 的形式來 run
attach  在同個 process 的形式來  run

---
第二週

* docker volume 檔案結構
* docker network
* docker image

**問題 1**
docker engine vs docker container

**問題二**

找不到 docker-machine folder why?

**問題三**
沒有安裝 docker-machine 也可以用，docker-container，為什麼要安裝 docker-machine？

```
// 建立 engine
docker-machine create —driver virtual box docker-vm
docker-machine create docker-vm

// 設定環境
docker-machine env docker-vm

// 進入 docker-machine
docker-machine ssh docker-vm

// pull responsitiy
docker pull hello-world

// run image 
docker run hello-world

// 進入 container 裡面
docker run -it ubuntu /bin/bash 

// 有幾個 container 在執行中
docker ps 

//  有幾個 container，包含停止的
docker ps -a

// docker image
docker rmi hello-world
docker rmi hello-world -f

// process
docker exec ubuntu echo 12345
```

[Releases · docker/machine · GitHub](https://github.com/docker/machine/releases)

// why iOS don’t need docker-machine???

## volume
https://docs.docker.com/engine/tutorials/dockervolumes/#important-tips-on-using-shared-volumes

```
// volume
docker volume create --name mysql-data
docker volume ls
docker volume inspect mysql-data
docker volume rm 
```

```
// container
docker run -d -p "3306:3306" -e MYSQL_ADMIN_PASS="pass" -e MYSQL_USER_DB="testdb" -e CREATE_MYSQL_BASIC_USER_AND_DB=true -v mysql-data:/var/lib/mysql/ dgraziotin/mysql
docker ls
docker exec -it [CONTAINER ID SHA CODE] /bin/bash
```

https://docs.docker.com/machine/reference/create/

// Host
// VM  / docker-machine
// docker container

volume:path

在 docker-machine 可以有多台 docker engine

---

[chinese_docker/mac.md at master · widuu/chinese_docker · GitHub](https://github.com/widuu/chinese_docker/blob/master/installation/mac.md)
