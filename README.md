# Calculadora em React Native

Este é um projeto simples de **calculadora funcional** desenvolvido com **React Native**, como parte do meu aprendizado em desenvolvimento mobile. O objetivo foi explorar a criação de interfaces móveis nativas, interatividade e manipulação de estado.

---

## 🛠️ Funcionalidades

- **Operações básicas:** Adição, subtração, multiplicação e divisão.
- **Funções auxiliares:** Alternância de sinal (+/-), porcentagem (%), limpar entrada (AC).
- **Interface amigável:** Botões estilizados e layout organizado.
- **Modal interativo:** Informações sobre o desenvolvedor exibidas em uma janela modal.

---

## 🖥️ Tecnologias Utilizadas

- **React Native:** Framework para desenvolvimento de aplicativos móveis.
- **Expo:** Ferramenta para iniciar rapidamente projetos React Native.
- **JavaScript:** Linguagem principal para a lógica do aplicativo.

---

## 📂 Estrutura do Código

- **Componentes principais:**
  - `TouchableOpacity` para botões interativos.
  - `SafeAreaView` e `View` para layout responsivo.
  - `Modal` para exibição de informações extras.

- **Estados utilizados (`useState`):**
  - `input`: Entrada atual do usuário.
  - `operator`: Operação matemática selecionada.
  - `previousInput`: Entrada anterior para cálculos.
  - `isModalVisible`: Controle de visibilidade do modal.

- **Funções principais:**
  - `handlePress(value)`: Lida com ações de botão (números, operadores, funções auxiliares).
  - `calculate()`: Realiza o cálculo baseado nos operadores e entradas.

- **Estilos:** Definidos usando `StyleSheet` para uma aparência moderna e responsiva.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Junior36912/Calculadora-React-Native.git
   cd Calculadora-React-Native
   ```

2. **Instale as dependências:**

   Certifique-se de ter o Node.js e o npm instalados.

   ```bash
   npm install
   ```

3. **Inicie o projeto no Expo:**

   ```bash
   npm run web
   ```

   Você verá o seguinte:

   ```
   Metro Bundler iniciado
   › Metro esperando em exp://192.168.X.X:8081
   › Web esperando em http://localhost:8081
   ```

4. **Teste o projeto:**
   - Abra no navegador em `http://localhost:8081` para a versão web.
   - Ou escaneie o QR Code com o aplicativo Expo Go para testar no dispositivo móvel.

---

## 📖 Licença

Este projeto é **open-source** e está disponível sob a licença [MIT](LICENSE).

---

💡 **Dicas:** 
Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue no repositório.

---

### 📬 Contato

- **LinkedIn:** [Júnior Jackson](https://www.linkedin.com/in/junior-jackson)
- **GitHub:** [Junior36912](https://github.com/Junior36912)

😊 Obrigado por conferir o projeto!
