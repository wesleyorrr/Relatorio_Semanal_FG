document.getElementById("relatorioForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Captura os dados do formulário
    const nomeFG = document.getElementById("nomeFG").value;
    const servoLider = document.getElementById("servoLider").value;
    const servoTreinamento = document.getElementById("servoTreinamento").value;
    const data = document.getElementById("data").value;
    const diaSemana = document.getElementById("diaSemana").value;
    const presentesFG = document.getElementById("presentesFG").value;
    const criancasFG = document.getElementById("criancasFG").value;
    const visitantes = document.getElementById("visitantes").value;
    const palavraPregada = document.getElementById("palavraPregada").value;
    const oferta = document.getElementById("oferta").value;
    const supervisorPresente = document.getElementById("supervisorPresente").value;
    const informacoesPessoais = document.getElementById("informacoesPessoais").value.trim();
  
    // Formata a mensagem para o WhatsApp
    const mensagem = `
  *Relatório Semanal:*
  - *Nome do Family Group:* ${nomeFG}
  - *Nome do Servo Líder:* ${servoLider}
  - *Nome do Servo Líder em Treinamento:* ${servoTreinamento}
  - *Data:* ${data}
  - *Dia da Semana:* ${diaSemana}
  - *Total de Presentes no FG:* ${presentesFG}
  - *Total de Crianças no FG:* ${criancasFG}
  - *Quantidade de Visitantes:* ${visitantes}
  - *Palavra Pregada:* ${palavraPregada}
  - *Oferta:* ${oferta}
  - *Supervisor Presente:* ${supervisorPresente}
  - *Nome: Telefone: Aniversario*
  ${informacoesPessoais}
    `;
  
    // Cria o link do WhatsApp
    const numeroWhatsApp = "5538999894056"; // Substitua pelo número desejado com o código do país
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    // Abre o WhatsApp em uma nova aba
    window.open(url, "_blank");
  });

  document.getElementById("enviarGoogleDrive").addEventListener("click", () => {
    // Captura os dados do formulário
    const nomeFG = document.getElementById("nomeFG").value;
    const servoLider = document.getElementById("servoLider").value;
    const servoTreinamento = document.getElementById("servoTreinamento").value;
    const data = document.getElementById("data").value;
    const diaSemana = document.getElementById("diaSemana").value;
    const presentesFG = document.getElementById("presentesFG").value;
    const criancasFG = document.getElementById("criancasFG").value;
    const visitantes = document.getElementById("visitantes").value;
    const palavraPregada = document.getElementById("palavraPregada").value;
    const oferta = document.getElementById("oferta").value;
    const supervisorPresente = document.getElementById("supervisorPresente").value;
    const informacoesPessoais = document.getElementById("informacoesPessoais").value.trim();
  
    // Dados a serem enviados
    const dados = {
      nomeFG,
      servoLider,
      servoTreinamento,
      data,
      diaSemana,
      presentesFG,
      criancasFG,
      visitantes,
      palavraPregada,
      oferta,
      supervisorPresente,
      informacoesPessoais,
    };
  
    // URL do Google Apps Script (substitua pelo URL do seu script)
    const url = "https://script.google.com/macros/s/AKfycbyONL5X3NS8aFn3i3Wz_QkORY823DaM1HG_q37hPB2PAZ4IBasvh2bnEIcS_Tnx-Flb/exec";
  
    // Enviar dados usando fetch
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.text())
      .then((resultado) => {
        alert("Dados enviados para o Google Drive com sucesso!");
        console.log(resultado);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  });