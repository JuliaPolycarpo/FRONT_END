const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImages");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

//Solicitar Acesso a Câmera 
navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    })

//Atribuir uma função para o botão de captura
botao.addEventListener("click", () => {
    //Desenhar o quadro atual do vídeo no canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    //Obter a imagem como URL de dados
    const imageDataURL = canvas.toDataURL("image/png");
    //Converter a URL de dados para uma string base64
    enviarImagemParaServidor(imageDataURL);
})
//Função para enviar a imagem para o servidor
function enviarImagemParaServidor(imageDataURL){
    //Simular o envio para o servidor 
    console.log("Enviando imagem para o servidor... ", imageDataURL);
    const base64String = imageDataURL.split(',')[1];

    fetch("http://DOP3080-1247456:8000/images",{
        method: "POST",
        body: JSON.stringify({ image: base64String, mime_type: 'image/png' }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(resposta => resposta.json())
        .then (dados =>{
            console.log("Resposta do servidor: ", dados);
        })
        .catch(erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        });


}
