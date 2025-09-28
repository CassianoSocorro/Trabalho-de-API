Histórico de Desenvolvimento Simplificado:
O projeto foi construído em nove etapas, focando na progressão lógica das funcionalidades e culminando em uma refatoração de arquitetura no final.

Commit 1: Configuração Inicial. Este commit inclui a inicialização do projeto, a instalação de dependências essenciais (npm install), a configuração do tsconfig.json e a criação do .gitignore.

Commit 2: Implementação do Exercício 1. O foco foi na rota GET /users/:id, implementando a busca de usuário por ID nas camadas Controller e Business.

Commit 3: Implementação do Exercício 2. Este commit adicionou o endpoint GET /users/age-range, completando a funcionalidade de filtro por faixa etária, usando Query Parameters.

Commit 4: Implementação do Exercício 3. Foi adicionada a funcionalidade POST /posts, incluindo a criação de posts com todas as validações necessárias para title, content e authorId.

Commit 5: Implementação do Exercício 4. Este commit finalizou o endpoint PUT /users/:id, implementando a regra de atualização completa de um usuário, exigindo todos os campos.

Commit 6: Implementação do Exercício 5. Foi adicionado o endpoint PATCH /posts/:id, implementando a regra de atualização parcial de post e a validação para permitir apenas campos específicos.

Commit 7: Implementação do Exercício 6. O foco foi no endpoint DELETE /posts/:id, implementando a regra de segurança de remoção que verifica a autorização do usuário via Header (User-Id).

Commit 8: Implementação do Exercício 7. Este commit finalizou o último exercício, DELETE /users/cleanup-inactive, implementando a lógica de remoção em lote de usuários inativos.

Commit 9: Refatoração de Arquitetura. Este último commit consolidou os arquivos de inicialização do projeto (app.ts, bd.ts, index.ts) em um único arquivo, server.ts, para simplificar o ponto de entrada e o processo de deploy, visando também atender às ordens que foram determinadas.
