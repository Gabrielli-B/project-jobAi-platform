# 💼 JobAi — Conectando talentos a oportunidades

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
[![Linguagem](https://img.shields.io/badge/JavaScript-ES6%2B-blue)]()
[![Front-end](https://img.shields.io/badge/Front--end-HTML%20%7C%20CSS-orange)]()
[![API](https://img.shields.io/badge/API-Arbeitnow-lightgrey)]()

---

## 👩‍💻 Equipe de Desenvolvimento

- **Gabrielli Borba** – Product Owner / Full Stack Developer  
- **Gabriela Lima** – Product Owner / Full Stack Developer  

---

## 🧠 Sobre o Projeto

O **JobAi** é uma plataforma web voltada para a **divulgação de vagas de emprego**, permitindo que os usuários explorem oportunidades e vejam detalhes de cada vaga de forma simples e intuitiva.

O projeto consome dados de uma **API pública real** e os exibe em **cards modernos e interativos**, aplicando os princípios da **Programação Orientada a Objetos em JavaScript** e **comunicação assíncrona com APIs**.

> 💡 *O objetivo do projeto é demonstrar como conceitos de POO, Promises e Async/Await podem ser usados na construção de aplicações reais e dinâmicas.*

---

## 🎯 Objetivos de Aprendizagem

- Aplicar **conceitos de POO em JavaScript**  
- Utilizar **Promises e async/await**  
- Consumir dados de uma **API externa real**  
- Manipular dados com JavaScript  
- Criar **interface interativa com cards animados**  
- Organizar código em módulos  

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|-------------|
| **Front-end** | HTML5, CSS3 |
| **Linguagem** | JavaScript |
| **Comunicação** | Fetch API, Promises, Async/Await |
| **API** | Arbeitnow Job Board API |

---

## 🌐 API Utilizada

📍 **URL:**  
https://www.arbeitnow.com/api/job-board-api

**Motivo da escolha:**  
A API é pública, gratuita e fornece dados reais sobre vagas de emprego. Ela retorna os dados em formato **JSON**, ideal para trabalhar com **requisições assíncronas**, **objetos** e **manipulação de dados no front-end**.

---

## 🧩 Conceitos de POO Aplicados

| Conceito | Aplicação |
|-----------|------------|
| **Objetos Literais** | Configuração da API e constantes do sistema |
| **Funções Construtoras / Classes** | Criação das entidades `Vaga`, `Categoria` e `VagaRemota` |
| **Herança** | `VagaRemota` herdando propriedades de `Vaga` |
| **Métodos de Classe** | Métodos como `exibirResumo()` |
| **Promises** | Controle de fluxo de carregamento |
| **Async/Await** | Requisições à API |

---

## 🧭 Estrutura do Projeto

```bash
/project-jobAi-platform
│
├── index.html
├── /css
│   └── style.css
├── /js
│   ├── api.js       → Comunicação com a API
│   ├── models.js   → Classes e conceitos de POO
│   └── main.js     → Lógica principal e manipulação do DOM
└── README.md
