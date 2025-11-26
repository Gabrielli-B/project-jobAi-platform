function minhaPromiseSimples() {
    return new Promise((resolve, reject) => {
        let sucesso = true;

        if (sucesso) resolve("Promise resolvida!");
        else reject("Erro na Promise!");
    });
}

minhaPromiseSimples()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("Finalizado"));
