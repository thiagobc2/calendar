<p align="center">
    <img src="https://avatars0.githubusercontent.com/u/66141744?s=200&v=4" width="100">
</p>

# Repositorio sub-modulo Agenda Incicle

Repositório destinado para entrega do modulo de agenda incicle.

## Endpoints 

| Endpoint        | Verbo | Descrição           |
| ------------- | ------------- |:-------------:|
| http://15.228.11.89:8080/api/v1/integration/user      | GET |Lista usuários do sistema |
| http://15.228.11.89:8080/api/v1/integration/user/<id_do_usuario>    | GET |Mostra as informações de um usuário especifico                  |
| http://15.228.11.89:8080/api/v1/integration/company | GET |Lista as empresas cadastradas no sistema      |
| http://15.228.11.89:8080/api/v1/integration/company/<id_da_empresa> | GET |Mostra as informações da empresa especificada |
| http://15.228.11.89:8080/api/v1/integration/person | GET | Lista as pessoas cadastradas no sistema |
| http://15.228.11.89:8080/api/v1/integration/person/<id_da_pessoa> | GET | Mostra as informações sobre a pessoa especificada. |

### Cadastro de novos usuários (pessoa fisica)
Para o cadastro de novos usuário utilizar o seguinte endpoint, com a requisção no tipo POST:

```
http://15.228.11.89:8080/api/v1/integration/register/person
```

com os seguintes campos:

```
{
	"name": "usuario da silva",
	"email": "seuemail@gmail.com",
	"password": "senha123",
	"born": "2000-01-01",
	"gender": "others",
	"phone": "(68)99199-9199",
	"cpf": "919.999.199-99",
	"work_company": "Incicle .inc",
	"work_department": "department",
	"work_job": "Analista de Sistemas",
	"is_working": true,
	"location": "brasil",
	"timezone": "America/Rio_Branco"
}
```

### Autenticação de usuários
Para autenticar um usuário previamente cadastrado realizar uma requisição do tipo POST a o seguinte endpoint 

com os seguintes parametros:

```
http://15.228.11.89:8080/api/v1/authenticate
```

com os seguintes parametros:

```
{
	"email": "seuemail@gmail.com",
	"password": "suasenha"
}
```

## Token pessoal:
Para acessar os endpoints acima incluir o seguinte cabeçalho a requisição do endpoint

```
ic-token
```

com valor:


```
IC2f049d4bef0debcddb910e669b4b6339
```
