import chai from 'chai';
import homeworkService from "../services/homeworkService";

describe('getAjuda()', function () {
    it('should add two numbers', function () {
      
      const ajudaText = 'Bem vindo ao bot do crescer!\nFuncionalidades: \nSalvar tema: "!salvar tema" : <nome do tema>; <módulo do tema>; <descrição do tema>; <gist do tema>; <data-de-entrega>' +
      '\nBuscar temas: "!buscar tema \nDeletar tema: "!deletar tema": <id do tema>';
      
      chai.expect(homeworkService.getAjuda()).to.be.equal(ajudaText);
    });
  });