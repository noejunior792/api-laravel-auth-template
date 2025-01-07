# Usar a imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instalar extensões necessárias e dependências do sistema
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_sqlite

# Instalar o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar o código da aplicação para o diretório do Apache
COPY . /var/www/html

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Expor a porta 80
EXPOSE 80

# Instalar as dependências do Composer e executar as migrações
CMD ["sh", "-c", "composer install && php artisan migrate --force && apache2-foreground"]
