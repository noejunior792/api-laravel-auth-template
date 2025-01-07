# api-laravel-auth-template

<p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
    </a>
</p>

## Sobre o Projeto

O **api-laravel-auth-template** é um template de API construído com o framework Laravel, focado em fornecer um sistema de autenticação robusto e fácil de usar. Este projeto permite que os desenvolvedores integrem rapidamente funcionalidades de autenticação em suas aplicações, utilizando o Laravel Sanctum para gerenciamento de tokens de acesso.

### Funcionalidades de Autenticação

- **Registro de Usuário**: Permite que novos usuários se registrem na aplicação.
- **Login**: Usuários podem se autenticar usando suas credenciais.
- **Logout**: Usuários podem se desconectar, revogando seus tokens de acesso.
- **Gerenciamento de Tokens**: Os tokens de acesso são gerenciados de forma segura, permitindo que os usuários mantenham suas sessões ativas.

## Requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes requisitos instalados:

- PHP >= 8.2
- Composer
- Laravel 11.x
- MySQL ou outro banco de dados suportado pelo Laravel

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/api-laravel-auth-template.git
   cd api-laravel-auth-template
   ```

2. **Instale as dependências**:

   ```bash
   composer install
   ```

3. **Crie um arquivo `.env`**:

   Copie o arquivo `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

4. **Configure o banco de dados**:

   Abra o arquivo `.env` e configure as credenciais do seu banco de dados:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=nome_do_banco
   DB_USERNAME=usuario
   DB_PASSWORD=senha
   ```

5. **Gere a chave da aplicação**:

   ```bash
   php artisan key:generate
   ```

6. **Execute as migrações**:

   ```bash
   php artisan migrate
   ```

7. **Inicie o servidor**:

   ```bash
   php artisan serve
   ```

   A aplicação estará disponível em `http://localhost:8000`.

## Rodando o Projeto com Docker

Para rodar o projeto usando Docker com SQLite, siga os passos abaixo:

1. **Certifique-se de ter o Docker e o Docker Compose instalados** em sua máquina.

2. **Crie um arquivo `.env`** com as configurações do banco de dados, se ainda não o fez. O arquivo deve conter:

   ```env
   DB_CONNECTION=sqlite
   DB_DATABASE=/var/www/html/database/database.sqlite
   ```

3. **Crie o arquivo SQLite**:

   ```bash
   touch database/database.sqlite
   ```

4. **Construa e inicie os containers**:

   ```bash
   docker-compose up --build
   ```

   Este comando irá construir a imagem e iniciar os containers. O script `entrypoint.sh` será executado automaticamente, instalando as dependências e executando as migrações.

5. **A aplicação estará disponível em** `http://localhost:8000`.   

## Rotas

As seguintes rotas estão disponíveis para autenticação:

- `POST /register`: Registra um novo usuário.
- `POST /login`: Autentica um usuário e retorna um token de acesso.
- `POST /logout`: Desconecta o usuário, revogando o token de acesso.

## Gerenciamento de Tokens

Os tokens de acesso são gerados durante o login e podem ser usados para autenticar requisições subsequentes. O token deve ser incluído no cabeçalho `Authorization` das requisições, no formato:

```
Authorization: Bearer seu_token_aqui
```

Ao fazer logout, todos os tokens do usuário são revogados, garantindo que não possam mais ser utilizados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.