import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ListPage } from "./list";
import { HideHeaderDirective } from "../../directives/scroll-hide/scroll-hide";
import { AccordionList } from '../../components/accordion-list/accordion-list';

@NgModule({
	declarations: [ListPage, HideHeaderDirective,AccordionList],
	imports: [IonicPageModule.forChild(ListPage)]
})
export class ListPageModule {}
