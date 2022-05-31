import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-barn-dropdownlist',
  templateUrl: './barn-dropdownlist.component.html',
  styleUrls: ['./barn-dropdownlist.component.css']
})
export class BarnDropdownlistComponent implements OnInit, OnChanges {
  @Input() id = "barn-remote";
  @Input() selectedValue: any;
  @Input() areaGuid: any;

  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() autoload = true;
  @Output() change = new EventEmitter<any>();
  @Output() ngModelChange = new EventEmitter<any>();
  @Output() selectedValueChange = new EventEmitter<any>();
  @ViewChild('barnRemote') public dropdownObj: DropDownListComponent
  @Output('onblur') onblurChange = new EventEmitter<any>();

  public data: DataManager;
  public query: Query ;
  public remoteFields: Object = { text: 'name', value: 'guid' };
  baseUrl = environment.apiUrl;
  take = 100;
  skip = 0;
  public onObarn(args) {
    // let start: number = this.take;
    // let end: number = 5;
    // let listElement: HTMLElement = (this.dropdownObj as any).list;
    // listElement.addEventListener('scroll', () => {
    //   console.log(listElement.scrollTop + listElement.offsetHeight,listElement.scrollHeight )
    //   if ((listElement.scrollTop + listElement.offsetHeight) >= listElement.scrollHeight) {

    //     let filterQuery = this.dropdownObj.query.clone();
    //     this.data.executeQuery(filterQuery.skip(start).take(end)).then((event: any) => {
    //       start = end;
    //       end += 5;
    //       // const unique = [...new Set(event.result.map(item => item.group))];
    //       this.dropdownObj.addItem(event.result as { [key: string]: Object }[]);
    //     }).catch((e: Object) => {
    //     });
    //   }
    // })
  }
  public onFiltering: any = (e: any) => {
    if (e.text === '') {
      e.updateData(this.data);
    } else {
      const query = this.dropdownObj.query.clone().search(e.text, ['barnName', 'barnNo']);
      e.updateData(this.data, query);
    }
  };
  public actionComplete(e: any): void {
    e.result = e.result.map(x => {
      let name = x.id === 0 ? this.trans.instant(x.name) : x.name;
      return {
        guid: x.guid,
        name: name
      }
    })
}
  constructor(public trans: TranslateService) {}

  ngOnInit() {
    if(this.autoload) {
      this.query = new Query()
      .skip(this.skip)
      .take(this.take)
      .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
      .where('status', 'equal', 1);
      this.data = new DataManager({
        url: `${this.baseUrl}Barn/GetDataDropdownlist`,
        adaptor: new UrlAdaptor,
        crossDomain: true,
      }, this.query.sortBy('barnNo'));
    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedValue = this.selectedValue || "";
    if (changes.hasOwnProperty("selectedValue")) {
      if (changes?.selectedValue.currentValue != changes?.selectedValue.previousValue && !changes?.selectedValue.firstChange) {
        this.ngModelChange.emit(this.selectedValue);
        this.selectedValueChange.emit(this.selectedValue);
      }
     }
    if (changes.hasOwnProperty("areaGuid")) {
      if (changes?.areaGuid.currentValue != changes?.areaGuid.previousValue) {
        this.query = new Query()
        .skip(this.skip)
        .take(this.take)
        .where('farmGuid', 'equal', localStorage.getItem('farmGuid'))
        .where('status', 'equal', 1)
        .where('areaGuid', 'equal', this.areaGuid);
        this.data = new DataManager({
          url: `${this.baseUrl}Barn/GetDataDropdownlist`,
          adaptor: new UrlAdaptor,
          crossDomain: true,
        }, this.query.sortBy('barnNo'));
      }
     }


  }
  onChange(args) {
    this.change.emit(args);
  }
  onNgModelChange(value) {
    this.ngModelChange.emit(value);
    this.selectedValueChange.emit(value);
  }
  onblur(e) {
    this.onblurChange.emit(e);
  }
}
