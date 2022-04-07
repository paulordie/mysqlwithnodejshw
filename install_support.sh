#!/bin/bash

echo "/*************************************************************************/"
echo "/**************** Instalação para o suporte do tutorial ******************/"
echo "/*************************************************************************/"

# apt-get remove --purge mysql*
# apt-get purge mysql*
# apt-get remove mysql*
# apt-get autoremove
# apt-get autoclean
# apt-get remove dbconfig-mysql

apt update
apt upgrade
apt-get install mysql-server
mysql_secure_installation

apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

apt -y install nodejs

apt -y  install gcc g++ make
