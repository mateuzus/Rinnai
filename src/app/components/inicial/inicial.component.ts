import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ThfMenuItem,
  ThfModalAction,
  ThfModalComponent,
  ThfTableColumn,
  ThfTableComponent,
} from "@totvs/thf-ui";
import { TabelasService } from "src/app/services/tabelas.service";

@Component({
  selector: "app-inicial",
  templateUrl: "./inicial.component.html",
  styleUrls: ["./inicial.component.css"],
})
export class InicialComponent implements OnInit {
  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent;
  @ViewChild(ThfTableComponent, { static: true }) thfTable: ThfTableComponent;

  constructor(private tabService: TabelasService) {}

  ngOnInit() {
    this.loadColumnsTabs();
  }

  modal_type: any;
  title: string;
  data: Array<any> = [];
  columnsTab1: Array<ThfTableColumn>;
  columnsTab2: Array<ThfTableColumn>;
  returnTab2;
  thousandMaxlength: number = 7

  //modal digitação
  index
  serie
  status
  statusNu

  dataTab1: Array<any> = [
    {
      serie: "321312BX1232O31",
      status: "Pendente",
      statusnu: "Reportado",
    },
    {
      serie: "31232NI312321MV",
      status: "Em analise",
      statusnu: "Pendente",
    },
    {
      serie: "0909DACA0SDA70",
      status: "Aprovado",
      statusnu: "Reportado",
    },
  ];

  dataTab2: Array<any> = [
    {
      serie: "321312BX1232O31",
      status: "Pendente",
      statusnu: "Reportado",
    },
    {
      serie: "31232NI312321MV",
      status: "Em analise",
      statusnu: "Pendente",
    },
    {
      serie: "0909DACA0SDA70",
      status: "Aprovado",
      statusnu: "Reportado",
    },
    {
      serie: "0909DACA0SDA70",
      status: "Rejeitado",
      statusnu: "null",
    },
    {
      serie: "0909DACA0SDA70",
      status: "Reportado",
      statusnu: "Rejeitado",
    },
    {
      serie: "0909DACA0SDA70",
      status: "Aprovado",
      statusnu: "Aprovado",
    },
    {
      serie: "321312BX1232O31",
      status: "Pendente",
      statusnu: "Pendente",
    },
    {
      serie: "321312BX1232O31",
      status: "Aprovado",
      statusnu: "Aprovado",
    },
    {
      serie: "321312BX1232O31",
      status: "Pendente",
      statusnu: "Reportado",
    },
  ];

  menuItemSelected: string = "Consulta Ordem";

  menus: Array<ThfMenuItem> = [
    { label: "Home", icon: "thf-icon-home", shortLabel: "Home" },
  ];

  private modal_action_digitacao: ThfModalAction = {
    label: "Confirmar",
    danger: false,
    action: () => {
      let obj = this.returnTab2[this.index + 1]
      this.serie = obj['serie']
      this.status = obj['status']
      this.statusNu = obj['statusnu']
      this.index = this.returnTab2.indexOf(obj)
    },
  };

  private modal_secondary_action_filter: ThfModalAction = {
    label: "Cancelar",
    danger: true,
    action: () => {
      this.thfModal.close();
    },
  };

  primaryActionsModal() {
    let actions = {
      texto: this.modal_action_digitacao,
      faixa: this.modal_action_digitacao,
      numerico: this.modal_action_digitacao,
    };
    return actions[this.modal_type];
  }

  secondaryActionsModal() {
    let actions = {
      texto: this.modal_secondary_action_filter,
      faixa: this.modal_secondary_action_filter,
      numerico: this.modal_secondary_action_filter,
    };
    return actions[this.modal_type];
  }

  loadColumnsTabs(): this {
    this.columnsTab1 = this.tabService.columnsTab1();
    this.columnsTab2 = this.tabService.columnsTab2(this);
    return this;
  }

  abrirModalDigitacao(row) {
    this.modal_type = "texto";
    this.index = this.returnTab2.indexOf(row)
    this.serie = row['serie']
    this.status = row['status']
    this.statusNu = row['statusnu']
    this.thfModal.open();
  }

  addActionsOnItens() {
    this.returnTab2 = this.returnTab2.map((item) => {
      item["actions"] = ["digitar"];
      return item;
    });
  }

  filterArray(row) {
    let series = row["serie"];

    this.returnTab2 = this.dataTab2.filter((serie) => {
      return serie["serie"] === series;
    });
    this.addActionsOnItens();
  }

  clearFilterArray() {
    this.returnTab2 = [];
  }
}
