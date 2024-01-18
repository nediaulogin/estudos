## Instalação

   **Clonar o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-proje
```
   **Instalar Dependências:**

 ```bash
   yarn
```
   **Configurar Husky:**
   
  ```bash
    yarn prepare
```
## Scripts

`yarn prepare`
Instalação do Husky. Execute uma vez após clonar o repositório.

`yarn commit`
Gera um commit usando git-cz para facilitar mensagens de commit padronizadas.

`yarn dev`
Inicia o servidor em modo de desenvolvimento com reinicialização automática durante as alterações.

`yarn prod`
Inicia o servidor em modo de produção.

`yarn prebuild`
Executa o script Swagger antes de construir o projeto.

`yarn build`
Compila o projeto para produção, ignorando erros do TypeScript.

`yarn postbuild`
Instala dependências no diretório de construção para produção.

`yarn swagger`
Gera a documentação Swagger.

## Testes

   **Testes de Unidade:**

 ```bash
   yarn test:unit
```
   **Testes de Integração:**

 ```bash
   yarn test:integration
```
   **Testes End-to-End (E2E):**

 ```bash
   yarn test:e2e
```
   **Testes em Ambiente de CI:**

 ```bash
   yarn test-ci
```
`yarn coverage` 
Cobertura de Testes.

`yarn start` 
Inicia o servidor usando server.js.
