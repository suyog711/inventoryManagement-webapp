import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MsgService {
    constructor(public toastr: ToastrService) {

    }
    showSucces(msg: string) {
        this.toastr.success(msg);
    }

    showInfo(msg: string) {
        this.toastr.info(msg);
    }
    showWarning(msg: string) {
        this.toastr.warning(msg)
    }

    showError(err: any) {
        debugger;
        this.toastr.error(err.error.message);
    }
}