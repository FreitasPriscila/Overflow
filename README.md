# 📄| Documentação em Código: OverFlow💜
> Status do Projeto: Em Andamento...

[Licença (DEFINIR) do Projeto](./LICENSE) (alterar depois)

Colocar uma descriçãozinha aqui depois pra ficar bonito...

---
## ⚙️| Configurações do Projeto:
#### • Em relação ao Front-End:

<details>
 <summary>⚛️ | ReactJS: Passo a Passo Instalação e Configuração </summary>
 <br>

## 🚀 Rodando o Projeto React com Vite

Siga os passos abaixo para rodar o projeto localmente:

---

### 1. Abra o terminal na pasta do projeto

> A pasta que contem essa estrutura e onde estão o `package.json`, `vite.config.js`, etc.
```bash
src/
├── components/
│   └── Header.jsx
│   └── CourseCard.jsx
├── pages/
│   └── Home.jsx
│   └── Login.jsx
│   └── Courses.jsx
├── services/
│   └── api.js  ← onde consome APIs
├── context/
│   └── AuthContext.jsx
├── App.jsx
└── main.jsx
```

---

### 2. Instale as dependências

```bash
npm install
```

> Isso vai baixar todos os pacotes listados no `package.json`.

---

### 3. Rode o servidor de desenvolvimento

```bash
npm run dev
```

> Isso vai iniciar o Vite e abrir seu projeto localmente (normalmente em `http://localhost:5173` ou parecido). Ele até avisa no terminal.

---

### 4. (Opcional) Build para produção

```bash
npm run build
```

> Ele gera a versão final do site na pasta `dist`.

---

### 💡 Dica extra: problemas com dependências?

Se der erro ao instalar ou rodar, tente apagar `node_modules` e `package-lock.json`, depois reinstale:

```bash
rm -rf node_modules package-lock.json
npm install
```

---
  
</details>

#### • Em relação as APIs:

<details>
 <summary>👨‍⚖️ | Judge0 CE v1.13.1 (2024-04-18): Passo a Passo - (API de Verificação)</summary>
 <br>
    
  **Ambiente**: `PowerShell`

1. **Instalar o Docker**:

    Certifique-se de que o Docker está instalado no seu sistema. Se ainda não estiver, siga os passos abaixo:
    - Visite o [site oficial do Docker](https://www.docker.com/get-started) e baixe a versão correspondente ao seu sistema operacional.
    - Siga as instruções de instalação fornecidas pelo site.
    - Após a instalação, verifique se o Docker está funcionando corretamente executando o comando:
   <br>
   
    ```powershell
    docker --version
    ```

2. **Baixar o Arquivo do Judge0**:

    ```powershell
    Invoke-WebRequest -Uri "https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip" -OutFile ".\judge0-v1.13.1.zip"
    ```

3. **Descompactar o Arquivo**:

    ```powershell
    Expand-Archive -Path .\judge0-v1.13.1.zip -DestinationPath .\judge0-v1.13.1
    ```

4. **Gerar Senha para Redis**:

    Visite [este site](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) para gerar uma senha aleatória.

5. **Configurar Senha do Redis**:

    Use a senha gerada para atualizar a variável `REDIS_PASSWORD` no arquivo `judge0.conf`.

6. **Gerar Senha para PostgreSQL**:

    Visite novamente [este site](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) para gerar outra senha aleatória.

7. **Configurar Senha do PostgreSQL**:

    Use a nova senha gerada para atualizar a variável `POSTGRES_PASSWORD` no arquivo `judge0.conf`.

8. **Iniciar os Serviços**:

    Execute os comandos abaixo para iniciar os serviços e aguarde alguns segundos para garantir que tudo esteja pronto:

    ```powershell
    cd judge0-v1.13.1
    docker-compose up -d db redis
    Start-Sleep -Seconds 10
    docker-compose up -d
    Start-Sleep -Seconds 5
    ```

9. **Acessar a Instância do Judge0 CE**:

    Sua instância do Judge0 CE v1.13.1 está em funcionamento. Para acessar a documentação e testar a API, visite: [http://localhost:2358/docs](http://localhost:2358/docs).


</p> 
</details>

#### Configurações em relação ao Back-End: (Conversar depois...)

<details>
 <summary>🧱 | Framework Laravel - Passo a Passo Instalação e Configuração</summary>
 <br>
    
  ## Laravel:

1. **Iniciar os Serviços**:

    Execute os comandos abaixo para iniciar o servidor local e aguarde alguns segundos para garantir que tudo esteja pronto:

    ```powershell
    php artisan serve
    ```

</p> 
</details>


---

## 🌟| Contribuidores:
<div align="center">
 
|  [<img src="https://avatars.githubusercontent.com/u/168697328?v=4" width=115><br><sub>Priscila Freitas</sub>](https://github.com/FreitasPriscila) | [<img src="https://avatars.githubusercontent.com/u/49922915?v=4" width=115><br><sub>João Pedro</sub>](https://github.com/iaejotape) | [<img src="https://avatars.githubusercontent.com/u/91500212?v=4" width=115><br><sub>Isac B. Matos</sub>](https://github.com/IsacBM) | [<img src="https://avatars.githubusercontent.com/u/157860235?v=4" width=115><br><sub>Diogo Bruno</sub>](https://github.com/DiogoBramorim) |
| :---: | :---: | :---: | :---: |

</div>

<h4 align="center"><strong>#Overflow</strong>💜 <br></h4>
