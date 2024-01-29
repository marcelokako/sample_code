# Symphone.IA por Sample Code

## Visão Geral

Symphone.IA é um projeto desenvolvido pelo grupo Sample Code. Uma plataforma de minijogos musicais, onde apresentamos o protótivo do seu primeiro jogo, 'Refrão'. Este README fornece informações essenciais sobre a configuração e execução do projeto localmente.

## Começando

Para executar o código localmente, siga estas etapas:

1. Navegue até o diretório `front-end` no terminal.

   ```bash
   cd front-end
   ```

2. Instale as dependências do projeto usando o npm. Execute o seguinte comando:

   ```bash
   npm install
   ```

   (Observação: Isso é necessário pelo menos uma vez, ou sempre que as dependências forem atualizadas.)

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Este comando iniciará a aplicação localmente.

## Configuração do Banco de Dados

Symphone.IA depende de um banco de dados local. Insira a seguinte consulta para criar as tabelas necessárias.

```sql
CREATE TABLE public.users (
	userid int4 NOT NULL,
	trecho_base_pai_id int8 NULL,
	roomid int8 NULL,
	hostid int8 NULL,
	sessionstatus varchar NULL,
	CONSTRAINT users_unique UNIQUE (userid)
);
```
```sql
CREATE TABLE public.trecho_base (
	id int8 NOT NULL,
	trecho_base_pai_id int8 NULL DEFAULT 0,
	file_name varchar NULL,
	file_url varchar NULL,
	file_type int4 NULL,
	CONSTRAINT trecho_base_id PRIMARY KEY (id)
);
```

## Configuração

O projeto inclui um arquivo de configuração que contém informações sensíveis. Infelizmente, este arquivo não está incluído no repositório público para garantir a segurança. Como resultado, tentar executar o programa sem o arquivo de configuração pode resultar em erros.

No momento, este arquivo foi disponibilizado no link abaixo, para poder utilizar o arquivo de configuração dotenv, lembre-se de renomeá-lo para ".env" quando importar o repositório.

[Link para arquivo de configuração env.txt](https://github.com/marcelokako/sample_code/blob/main/Back-end/env.txt)
