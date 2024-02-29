export abstract class View<T> {
  protected elemento: HTMLElement;
  // faz com que o elemento não seja visualizado na instancia
  // assim o desenvolvedor não tem acesso a esse elemento da classeF
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) this.elemento = elemento as HTMLElement;
    else throw Error(`Seletor ${seletor} não existe no DOM, verifique`);

    if (escapar) this.escapar = escapar;
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      let regex = /<script>[\s\S]*?<\/script>/;
      template = template.replace(regex, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
