## Comandos docker

Para executar os comandos abaixo é necessário que o terminal esteja na página estudo-angular-a

sudo docker image build --rm -f Dockerfile -t img-angular-a .

sudo docker container run --rm -p 80:80 -d --name ctn-angular-a img-angular-a