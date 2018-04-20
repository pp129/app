import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ListPage } from "./list";
import { ElasticHeader } from "../../directives/elastic-header/elastic-header";
import { HideHeaderDirective } from "../../directives/scroll-hide/scroll-hide";
@NgModule({
	declarations: [ListPage, ElasticHeader, HideHeaderDirective],
	imports: [IonicPageModule.forChild(ListPage)]
})
export class ListPageModule {}
