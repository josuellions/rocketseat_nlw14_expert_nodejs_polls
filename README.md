### OmniStack - NLW 14 - Experts

#### Data: 05/02/2024 a 07/02/2024

#### RocketSeat

##### Educator: Diego Fernandes

##### Developer: Josuel A. Lopes

#### About

Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM, Docker para lidar com serviços de PostgreSQL e Redis, Zod para validação de dados e WebSocket para comunicação real-time.
Construindo aplicação que realiza enquetes com requisições e request em tempo real utilizando websocket, NodeJs, Postgres e Redis.

- NodeJS
- Websocket
- Postgres
- Redis

##### Inicio projeto

- Referencia versão node: https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
- Teste e Requestes API: Hoppscotch Browser Extension

```
npm init -y
npx tsc --init

```

##### Instalando e configurando

- pnpm (link simbólico para npm otimiza utilização de espaço ao instalar pacotes)

```
pnpm install typescript @types/node -D
pnpm i tsx -D
pnpm i fastify
pnpm i zod

```

- Configurar o banco dados POSTGRES e REDIS no DOCKER com Docker Composer
- - Arquivos de configuração `\docker-compose.yml`

- Instalando e configurando ORM Prisma

```
 pnpm i prisma -D
 npx prisma init
```

- Criando tabela no banco dados postgres com migration prisma

```
 npx prisma migrate dev
```

Acessando tabela do banco dados postgres prisma studio

```
 npx prisma studio
```

##### Instalando e configurando cookie

```
 pnpm i @fastify/cookie
```

##### Instalando e configurando redis

```
 pnpm i ioredis
```

##### Instalando e configurando websocket

```
 pnpm i @fastify/websocket
```
