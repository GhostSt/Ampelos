FROM php:5.6-fpm
MAINTAINER Victor Diditskiy <victor.diditskiy@yandex.ru>

RUN apt-get update -y && \
    apt-get upgrade -y

RUN apt-get install -y libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libssl-dev \
        wget \
    && docker-php-ext-install -j$(nproc) iconv mcrypt mbstring \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install -j$(nproc) mysql \
    && docker-php-ext-install -j$(nproc) pdo \
    && docker-php-ext-install -j$(nproc) pdo_mysql \
    && docker-php-ext-install -j$(nproc) bcmath

RUN mkdir /docker-entrypoint-initdb.d

WORKDIR /code

#RUN composer install
