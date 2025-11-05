# 💼 JobAi — Conectando talentos a oportunidades

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
[![Linguagem](https://img.shields.io/badge/JavaScript-ES6%2B-blue)]()
[![Front-end](https://img.shields.io/badge/Front--end-HTML%20%7C%20CSS-orange)]()
[![API](https://img.shields.io/badge/API-Arbeitnow-lightgrey)]()

---

## 👩‍💻 Equipe de Desenvolvimento

- **Gabrielli Borba** – Product Owner / Back-end Developer  
- **[Adicione aqui os nomes dos colegas do grupo]**

---

## 🧠 Sobre o Projeto

O **JobAi** é uma plataforma web voltada para a **divulgação de vagas de emprego**, permitindo que os usuários explorem oportunidades e vejam detalhes de cada vaga de forma simples e intuitiva.  

O projeto consome dados de uma **API pública real** e os exibe em **cards responsivos**, aplicando os princípios da **Programação Orientada a Objetos em JavaScript**.

> 💡 *Nosso objetivo é demonstrar como conceitos de POO e comunicação assíncrona com APIs podem ser usados para construir aplicações reais e dinâmicas.*

---

## 🎯 Objetivos de Aprendizagem

- Aplicar **conceitos de POO em JavaScript** (objetos, herança e funções construtoras)  
- Utilizar **Promises e async/await** em requisições assíncronas  
- Manipular dados obtidos de uma **API externa real**  
- Implementar **responsividade e interatividade** na interface  
- Demonstrar boas práticas de organização de código e modularização  

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|-------------|
| **Front-end** | HTML5, CSS3 (ou Tailwind/Bootstrap) |
| **Linguagem** | JavaScript (ES6+) |
| **Comunicação** | Fetch API, Promises, Async/Await |
| **API** | [Arbeitnow Job Board API](https://www.arbeitnow.com/api/job-board-api) |

---

## 🌐 API Utilizada

📍 **URL:** [https://www.arbeitnow.com/api/job-board-api](https://www.arbeitnow.com/api/job-board-api)

**Motivo da escolha:**  
A API é pública, gratuita e fornece informações reais sobre vagas de emprego. Ela retorna os dados em **JSON**, facilitando a integração com o front-end e a aplicação prática dos conceitos de **requisições assíncronas** e **manipulação de objetos**.

---

## 🧩 Conceitos de POO Aplicados

| Conceito | Aplicação |
|-----------|------------|
| **Objetos Literais** | Configuração da API e constantes globais |
| **Funções Construtoras** | Criação das entidades `Vaga` e `Usuario` |
| **Herança Prototípica** | Implementação de `VagaFavorita` herdando propriedades de `Vaga` |
| **Promises** | Simulação de carregamento e controle de requisições |
| **Async/Await** | Comunicação com a API de vagas |

---

## 🧭 Estrutura do Projeto

/project-jobAi-platform
│
├── index.html
├── /css
│ └── style.css
├── /js
│ ├── api.js → Comunicação com a API
│ ├── models.js → Classes e funções construtoras (POO)
│ └── main.js → Manipulação do DOM e lógica principal
└── README.md

## 🖥️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabrielli-B/project-jobAi-platform.git

   
