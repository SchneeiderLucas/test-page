Instruções de Instalação

criado com create-expo-app.

1- Ter o node.js instalado em sua máquina (essencial para rodar utilizando o expo)

2 - Digitar "npx create-expo-app@latest yoogav1" no CMD. - (A pasta geralmente é criada em c/users/)

3 - Substituir os arquivos da pasta criada pelos arquivos baixados no github.

4 - npm install - instalar dependências

5 - npx expo start (utilizado para rodar o projeto), nele você pode escolher rodar pelo
navegador (W), Emulador Android (A) ou utilizando o aplicativo Expo Go baixado em seu smartphone
abrindo a câmera e escaneando o QR code.


Considerações - 
-No projeto foi criado a pasta components para separar as partes do projeto, mas acabei optando somente por escrever
o código na pasta chamada header para evitar problemas de carregamento e cache em navegadores, mas mesmo assim mantendo 
as boas práticas de escrita de código. (Em alguns navegadores ao abrir o projeto ele pode trazer algumas pares fora de posição,
de um "F5" pois isso é relacionado ao cachê que os navegadores já possuem no uso diário que acaba precisando de um refresh para manter
o posicionamento correto) 

-A opção de utilizar um intra-css no código foi total para facilitar o desenvolvimento do mesmo e torna-lo de fácil modificação,
também diminuindo a possibilidade de erros no componente.

- O Layout responsivo foi pensado somente em smartphones como o pedido no projeto, por isso ignorem o comportamento do mesmo no ambiente Web.

Espero que gostem ;).
