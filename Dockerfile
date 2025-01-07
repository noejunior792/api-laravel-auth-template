FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_sqlite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

RUN a2enmod rewrite

COPY . /var/www/html
WORKDIR /var/www/html
EXPOSE 80
CMD ["sh", "-c", "composer install && php artisan key:generate && php artisan migrate --force && apache2-foreground"]
