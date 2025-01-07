
FROM php:8.2-apache


RUN docker-php-ext-install pdo pdo_sqlite


COPY . /var/www/html

WORKDIR /var/www/html

EXPOSE 80
CMD ["sh", "-c", "composer install && php artisan migrate --force && apache2-foreground && php artisan serve"]