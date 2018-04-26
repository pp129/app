import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-form",
	templateUrl: "form.html"
})
export class FormPage {
	myForm: FormGroup;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private formBuilder: FormBuilder
	) {
		this.myForm = this.formBuilder.group({
			text: [""],
			myDate: this.formBuilder.group(
				{
					start: [""],
					end: [""]
				},
				{ validator: this.dateLessThan("start", "end") }
			),
			datetime: [""],
			gender: [""],
			gaming: [""],
			toopings: [""],
			rating: [""]
		});
	}

	ionViewDidLoad() {}

	dateLessThan(from: string, to: string) {
		return (group: FormGroup): { [key: string]: any } => {
			let f = group.controls[from];
			let t = group.controls[to];
			if (f.value && t.value) {
				if (f.value > t.value) {
					return {
						dates: "Date from should be less than Date to"
					};
				}
			}
			return {};
		};
	}

	onSubmit() {
		console.log(this.myForm);
		if (this.myForm.valid) {
			this.navCtrl.push("ResPage", { param: this.myForm.value });
		} else {
			console.log(this.myForm.errors);
		}
	}
}
