#!/bin/bash

apt-get remove --purge mysql*
apt-get purge mysql*
apt-get autoremove
apt-get autoclean
apt-get remove dbconfig-mysql

apt update
apt upgrade
apt install mysql-server
mysql_secure_installation