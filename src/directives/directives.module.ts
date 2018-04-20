import { NgModule } from '@angular/core';
import { HideHeaderDirective } from './scroll-hide/scroll-hide';
import { ElasticHeader } from './elastic-header/elastic-header';
@NgModule({
	declarations: [HideHeaderDirective,
		ElasticHeader],
	imports: [],
	exports: [HideHeaderDirective,
		ElasticHeader]
})
export class DirectivesModule {}
