export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(`Seletor ${seletor} não existe no DOM, verifique`);
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            let regex = /<script>[\s\S]*?<\/script>/;
            template = template.replace(regex, "");
        }
        this.elemento.innerHTML = template;
    }
}
