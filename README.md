# Teste de PHP
##### Objetivo
Criar um sistema simples, totalmente desenvolvido em PHP, sem a utilização de nenhum framework, onde será possível Criar/Editar/Excluir/Listar usuários. O sistema também deve possuir a possibilidade de vincular/desvincular várias cores ao usuário.

##### Estrutura de banco de dados
A seguinte estrutura será utilizada para persistência dos dados, podendo ser alterada a qualquer momento para melhor funcionamento do sistema:

```sql
    tabela: users
        id      int not null auto_increment primary key
        name    varchar(100) not null
        email   varchar(100) not null
```
```sql
    tabela: colors
        id      int not null auto_increment primary key
        name    varchar(50) not null
```

##### Start
Para início das atividades, use como base o arquivo `connection.php`, este é apenas um arquivo exemplo onde é aberta conexão com o banco de dados e lista os usuários do banco.

##### Boa Sorte
Use seu conhecimento, consulte a documentação e o google, caso ainda houver dúvidas, nos pergunte :D. Boa sorte!
