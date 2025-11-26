function Vagas(titulo, empresa, descricao, linkParaVaga) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.descricao = descricao;
    this.linkParaVaga = linkParaVaga;
}

Vagas.prototype.exibirResumo = function () {
    return `${this.titulo} - ${this.empresa}`;
};

function Categoria(tipo) {
    this.tipo = tipo;
}

function VagaRemota(titulo, empresa, descricao, linkParaVaga, tipo) {
    Vagas.call(this, titulo, empresa, descricao, linkParaVaga);
    this.tipo = tipo;
}

VagaRemota.prototype = Object.create(Vagas.prototype);
VagaRemota.prototype.constructor = VagaRemota;
