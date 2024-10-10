# qr.Code 👨‍💻 

![image](https://github.com/user-attachments/assets/9d19c94b-55c9-4b0e-8112-350bb6236b2e)


This project is a QR Code generator using React, Vite, TypeScript and TailwindCSS, with integration of the QR Code generation API.

## 📝 #Description

This is a simple web application that allows the user to generate QR Codes from text or URLs and adjust the size of the generated QR Code. It uses the [QR Code Generation API](https://api.apgy.in/) to create the QR image based on user input.

---

## 🛠 Technologies Used

- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Rapid development tool for modern frontend applications.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset of JavaScript with optional static typing.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility CSS framework for styling.
- **[TanStack React Query](https://react-query.tanstack.com/)**: Asynchronous state management and data caching.

---

## ⚙️ Requirements

Before you start, you will need to have installed:

- **Node.js**: v14+ or higher
- **npm** or **yarn**

---

## 🚀 Installation and Execution

1. **Clone this repository**:

<!-- ```git clone https://github.com/brendondev/qr.Code``` -->

2. **Navigate to the project directory**:

```cd QR-Code-Generator```

3. **Install the dependencies**:

```npm install```

4. **Run the project**:

```npm run dev```

5. **Access the project in the browser**:

```http://localhost:5173```

---

## 🌐 QR Code API

The API used to generate QR Codes in this project is the **APGY QR Code API**.

### Endpoint

```GET https://api.apgy.in/qr/?data={data}&size={size}```

### Parameters

- `data` (String): The data to be encoded in the QR Code. Example: `https://mysite.com`.
- `size` (Number): The size of the QR Code in pixels. Example: `300`.

---

## ✏️ Customization

Changing the QR Code Size
To change the size of the generated QR Code, the default value is 300, but you can adjust it by modifying the logic in the QRCodeGenerator.tsx component:

```const [size, setSize] = useState<number>(300);```

---

## 🤝 Contributions

Contributions are always welcome! If you want to contribute improvements to the project, follow these steps:

1. Fork the project
2. Create a branch for your feature (git checkout -b my-feature)
3. Commit your changes (git commit -m 'Add my feature')
4. Push to the branch (git push origin my-feature)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.
