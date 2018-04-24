import { NgModule } from "@angular/core";
import { ExpandableHeader } from "./expandable-header/expandable-header";
import { AccordionList } from "./accordion-list/accordion-list";

@NgModule({
	declarations: [ExpandableHeader, AccordionList],
	imports: [],
	exports: [ExpandableHeader, AccordionList]
})
export class ComponentsModule {}
