# qr.Code

Este projeto é um gerador de QR Codes usando React, Vite, TypeScript e TailwindCSS, com integração da API de geração de QR Codes.

## 📋 Índice
- [Descrição](#-descrição)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Requisitos](#%EF%B8%8F-requisitos)
- [Instalação e Execução](#-instala%C3%A7%C3%A3o-e-execu%C3%A7%C3%A3o)
- [API QR Code](#-api-qr-code)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Personalização](#%EF%B8%8F-personaliza%C3%A7%C3%A3o)
- [Contribuições](#-contribuições)
- [Licença](#-licença)

## 📝 #Descrição

Este é um aplicativo web simples que permite ao usuário gerar QR Codes a partir de texto ou URLs e ajustar o tamanho do QR Code gerado. Ele utiliza a [API de geração de QR Code](https://api.apgy.in/) para criar a imagem QR com base nas entradas do usuário.

---

## 🛠 Tecnologias Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta rápida de desenvolvimento para aplicações modernas em frontend.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript com tipagem estática opcional.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- **[TanStack React Query](https://react-query.tanstack.com/)**: Gerenciamento de estado assíncrono e cache de dados.

---

## ⚙️ Requisitos

Antes de começar, você precisará ter instalado:

- **Node.js**: v14+ ou superior
- **npm** ou **yarn**

---

## 🚀 Instalação e Execução

1. **Clone este repositório**:

   <!-- ```git clone https://github.com/brendondev/qr.Code``` -->

2. **Navegue até o diretório do projeto**:

   ```cd QR-Code-Generator```

3. **Instale as dependências**:

   ```npm install```

4. **Execute o projeto**:

   ```npm run dev```

5. **Acesse o projeto no navegador**:

  ```http://localhost:5173```

---

## 🌐 API QR Code

A API utilizada para a geração de QR Codes neste projeto é a **API APGY QR Code**.

### Endpoint

```GET https://api.apgy.in/qr/?data={data}&size={size}```

### Parâmetros

- `data` (String): O dado a ser codificado no QR Code. Exemplo: `https://meusite.com`.
- `size` (Number): O tamanho do QR Code em pixels. Exemplo: `300`.

---

## 📸 Exemplos de Uso

Aqui estão alguns exemplos de uso do QR Code Generator:

...

---

## ✏️ Personalização

Alterando o tamanho do QR Code
Para alterar o tamanho do QR Code gerado, o valor padrão é 300, mas você pode ajustá-lo modificando a lógica no componente QRCodeGenerator.tsx:

```const [size, setSize] = useState<number>(300);```

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você deseja contribuir com melhorias para o projeto, siga estas etapas:

1. Faça um fork do projeto
2. Crie um branch para sua feature (git checkout -b minha-feature)
3. Faça o commit de suas alterações (git commit -m 'Adiciona minha feature')
4. Faça o push para o branch (git push origin minha-feature)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
