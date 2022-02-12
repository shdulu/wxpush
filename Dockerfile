# 设置基础镜像，如果本地没有该镜像，会从Docker.io 服务器pull 镜像 - 基础镜像
FROM node:10.13.0


# 设置时区
# 设置时区
RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata
    
# 这个是容器中的文件目录
RUN mkdir -p /usr/src/egg-server 

# 设置工做目录
WORKDIR /usr/src/egg-server 

COPY package.json /usr/src/egg-server/package.json 

# 安装npm依赖(使用淘宝的镜像源)
# 若是使用的境外服务器，无需使用淘宝的镜像源，即改成`RUN npm i`。
RUN npm i --production --registry=https://registry.npm.taobao.org 

# 拷贝全部源代码到工做目
COPY . /usr/src/egg-server

# 暴露容器端口
EXPOSE 7001

# 启动node应用
CMD npm start

# 通过目录下的 Dockerfile 构建一个 nginx:v3（镜像名称:镜像标签）
# . 上下文路径，docker在构建镜像，有时候想要使用本机的文件， docker build 命令得知这个路径后，会将路径下的所有内容打包。
# 构建镜像 docker build -t node-test:v1.0 .
# docker run -itd --name egg-server -p 7001:7001 node