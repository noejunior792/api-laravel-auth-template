
FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_sqlite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www/html

RUN cp /var/www/html/.env.example /var/www/html/.env

WORKDIR /var/www/html

EXPOSE 80

CMD ["sh", "-c", "composer install && php artisan config:cache && php artisan migrate --force && apache2-foreground"]
