# Usar a imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instalar extensões necessárias
RUN docker-php-ext-install pdo pdo_mysql

# Copiar o código da aplicação para o diretório do Apache
COPY . /var/www/html

# Copiar o script de entrada
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Expor a porta 80
EXPOSE 80

# Definir o comando de entrada
ENTRYPOINT ["entrypoint.sh"]