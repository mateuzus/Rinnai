import { Injectable } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Injectable({
  providedIn: 'root'
})
export class TabelasService {

  constructor() { }

  columnsTab1(): Array<ThfTableColumn> {
    return [
      { property: 'serie', label: 'Serie', width: '33%', type: 'string' },
      { property: 'status', label: 'Status CQ', width: '33%', type: 'string' },
      { property: 'statusnu', label: 'Status NU', width: '33%', type: 'string' }
    ]
  }

  columnsTab2(component_instance): Array<ThfTableColumn> {
    return [
      {
        property: "actions",
        label: "Ações",
        type: "icon",
        icons: [
          {
            action: (value, row) => {
              component_instance.abrirModalDigitacao(
                value,
                row
              )
            },
            color: "primary",
            icon: "thf-icon thf-icon-edit",
            tooltip: "Clique aqui para digitar",
            value: "digitar"
          }
        ]
      },
      { property: 'serie', label: 'Serie' },
      { property: 'status', label: 'Status CQ' },
      { property: 'statusnu', label: 'Status NU' }
    ]
  }
}
