import chai from 'chai';
import homeworkController from "../controllers/homeworkController";

describe('getAjuda()', function () {
    it('should add two numbers', function () {
      
      const ajudaText = 'Bem vindo ao bot do crescer! \nFuncionalidades: \n Salvar tema: "!salvar tema" : <nome do tema>; <módulo do tema>; <descrição do tema>; <gist do tema>; <data-de-entrega>' +
      '\nBuscar temas: "!buscar tema \n Deletar tema: "!deletar tema ": <id do tema>';
      
      chai.expect(homeworkController.getAjuda()).to.be.equal(ajudaText);
    });
  });