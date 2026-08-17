# Requisitos do Sistema

## 1. Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades que o sistema deverá oferecer aos seus usuários.

### RF01 Cadastro de Usuários

O sistema deverá permitir que o usuário realize seu cadastro utilizando **e-mail e senha**.

### RF02 Login e Logout

O sistema deverá permitir que o usuário:

- Realize login na plataforma;
- Encerre sua sessão quando desejar;
- Tenha suas credenciais armazenadas de forma segura no banco de dados.

### RF03 Cadastro, Edição e Exclusão de Dados (CRUD)

O sistema deverá permitir o **cadastro, consulta, edição e exclusão de dados**, de acordo com as permissões do usuário.

### RF04 Geração de Relatórios

O sistema deverá permitir a **geração de relatórios** e possibilitar que o usuário consulte os relatórios disponíveis.

### RF05 Busca por Informações

O sistema deverá disponibilizar uma ferramenta de busca que permita ao usuário encontrar informações na plataforma, como:

- 📚 Livros;
- ⭐ Avaliações;
- 💬 Comentários;
- 🏆 Rankings;
- 🔎 Outros conteúdos cadastrados no sistema.

### RF06 Recuperação de Senha

O sistema deverá permitir que o usuário **recupere sua senha por meio do e-mail cadastrado**, fornecendo as instruções necessárias para realizar a recuperação de acesso.

### RF07 Sistema de Avaliação

O sistema deverá disponibilizar um espaço para que os usuários possam:

- ⭐ Avaliar conteúdos;
- 💬 Publicar comentários;
- 📖 Compartilhar suas opiniões sobre os conteúdos disponíveis.

### RF08 Favoritos

O sistema deverá permitir que o usuário **salve itens como favoritos**, possibilitando o acesso rápido a esses conteúdos posteriormente.

### RF09 Histórico de Atividades

O sistema deverá permitir que o usuário consulte seu **histórico de atividades**, visualizando suas ações mais recentes realizadas na plataforma.

### RF10 Ordenação e Filtros

O sistema deverá permitir que o usuário **ordene e filtre informações** de acordo com diferentes critérios, como:

- 📂 Categoria;
- ⭐ Nota;
- 📅 Data;
- 🔤 Ordem alfabética;
- 🔎 Outros critérios disponíveis.

### RF11 Entrar em grupos

O sistema deve permitir que o usuário entre em um grupo público de forma livre, e em privados com uso de senha

### RF12 Criar grupos de leitura

O sistema deve garantir que o usuário seja capaz de criar grupos de leitura

### RF13 Alterar informações do grupo

O sistema deve permitir a um usuário com permissão suficiente que altere informações como nome do grupo ou estado da leitura atual

### RF14 Planejar reuniões

O sistema deve permitir que donos ou administradores de grupos de leitura agendem uma reunião, anunciando para os integrantes na página do grupo da sua ocorrência

---

## 2. Requisitos Não Funcionais

Os requisitos não funcionais definem características relacionadas à qualidade, desempenho, segurança e compatibilidade do sistema.

### RNF01 Desempenho

O sistema deverá atender aos seguintes requisitos de desempenho:

- ⚡ O tempo de resposta das operações deverá ser de, no máximo, **100 milissegundos**, quando aplicável;
- 👥 O sistema deverá suportar até **2.000 usuários acessando simultaneamente**.

### RNF02 Compatibilidade

O sistema deverá ser compatível com:

- 💻 Computadores e notebooks;
- 📱 Smartphones;
- 📲 Tablets;
- 🌐 Diferentes navegadores, como:
  - Google Chrome;
  - Mozilla Firefox;
  - Microsoft Edge;
  - Safari.

### RNF03 Segurança

O sistema deverá garantir a proteção das informações dos usuários.

Entre as medidas de segurança estão:

- 🔐 Armazenamento seguro das credenciais;
- 🔒 Senhas armazenadas utilizando técnicas adequadas de **hash e criptografia**;
- 🛡️ Proteção dos dados pessoais armazenados no banco de dados;
- 🔑 Controle de acesso às funcionalidades da plataforma.

> **Observação:** senhas não devem ser armazenadas diretamente no banco de dados em texto puro. Deve-se utilizar um algoritmo seguro de hash de senhas.

### RNF04 Responsividade

A interface do sistema deverá ser **responsiva**, adaptando-se automaticamente a diferentes tamanhos e resoluções de tela, garantindo uma boa experiência de uso em:

- 🖥️ Desktop;
- 💻 Notebook;
- 📱 Smartphone;
- 📲 Tablet.

---

## 📌 Resumo

| Categoria | Requisitos |
|-----------|------------|
| **Funcionais** | Cadastro, login, CRUD, relatórios, busca, recuperação de senha, avaliações, favoritos, histórico, filtros e ordenação |
| **Desempenho** | Resposta de até 100 ms e suporte a 2.000 usuários simultâneos |
| **Compatibilidade** | Desktop, notebook, smartphone, tablet e diferentes navegadores |
| **Segurança** | Proteção e armazenamento seguro das credenciais e dados dos usuários |
| **Responsividade** | Adaptação da interface a diferentes tamanhos de tela |

---

## 📋 Classificação dos Requisitos

### Requisitos Funcionais

| Código | Requisito |
|:------:|-----------|
| RF01 | Cadastro de usuários |
| RF02 | Login e logout |
| RF03 | Cadastro, edição e exclusão de dados (CRUD) |
| RF04 | Geração de relatórios |
| RF05 | Busca por informações |
| RF06 | Recuperação de senha |
| RF07 | Sistema de avaliação e comentários |
| RF08 | Favoritos |
| RF09 | Histórico de atividades |
| RF10 | Ordenação e filtros |

### Requisitos Não Funcionais

| Código | Requisito |
|:------:|-----------|
| RNF01 | Desempenho |
| RNF02 | Compatibilidade |
| RNF03 | Segurança |
| RNF04 | Responsividade |
