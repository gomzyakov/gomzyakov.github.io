---
layout: post
title:  "Основы Docker"
categories: [ Jekyll, tutorial ]
image: assets/images/6.jpg
---

<!-- TODO Rename file & title -->

List all containers (only IDs)
docker ps -aq

Stop all running containers

```sh
$ docker stop $(docker ps -aq)
```

Remove all containers

```sh
$ docker rm $(docker ps -aq)
```

Remove all images
docker rmi $(docker images -q)
