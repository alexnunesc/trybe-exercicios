# Práticas comuns de middlewares

*Enviando mensagens de erros personalizadas na resposta*

  A aplicação realiza a validação dos inputs recebidos, e caso eles apresentem algum erro, a API responde com um código de erro. Entretanto estes códigos HTTP Status definem o tipo de erro, mas não trazem nenhuma informação mais precisa do qual seria o erro. Para resolver isso, pode se enviar na responta um json com um objeto por exemplo { message: 'Mensagem de erro personalizada'}. Vamos utilizar como exemplo o middleware validateTeam.

# código
  const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
      next(); // Chama o próximo middleware
    } else {
      res.sendStatus(400); // Ou já responde avisando que deu errado
    }
  };
# código

# Message pesonalizada.

# código
  const validateTeam = (req, res, next) => {
    const { nome, sigla } = req.body;
    if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
    if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório'});
    next();
  };
# código














