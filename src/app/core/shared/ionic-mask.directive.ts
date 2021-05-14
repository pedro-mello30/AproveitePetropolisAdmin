import { Directive, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IConfig, MaskDirective, config } from 'ngx-mask';
import { MaskService } from 'ngx-mask';

@Directive({
  selector: 'ion-input[mask]',
  providers: [MaskService]
})
export class IonicMaskDirective extends MaskDirective {
  constructor(
    @Inject(DOCUMENT) private ionDocument: any,
    private _ionMaskService: MaskService,
    @Inject(config) protected _config: IConfig
  ) {
    super(ionDocument, _ionMaskService, _config);
  }
}
