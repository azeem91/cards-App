import { Component, OnInit } from '@angular/core';
import { RestCallHandlerService } from './services/rest-call-handler/rest-call-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers : [RestCallHandlerService]
})
export class AppComponent implements OnInit {
  
	constructor(private restCallHandlerService : RestCallHandlerService) { }

	title = 'Cards App!';
	cards:any;
	campaigns:any;
	selectedCampaigns:any = 'All Campaigns';
	selectedCampaignId:any = 'all';

	getAllCampaigns(){
		let dataObj:any = {};
		dataObj.endPoint = 'campaigns';
		this.restCallHandlerService.apiCall(dataObj)
		.subscribe(res => {
				this.campaigns = res.json();
		}, error => {
				console.log(error)
		});
	}

	getAllCards(){
		let dataObj:any = {};
		dataObj.endPoint = 'cards';
		this.restCallHandlerService.apiCall(dataObj)
		.subscribe(res => {
				this.cards = res.json();
		}, error => {
				console.log(error)
		});
	}

	selectCamp($event, camp){
		if($event.target.id === 'all')
			this.selectedCampaignId = 'all';
		else
			this.selectedCampaignId = $event.target.id;

		if(camp)
			this.selectedCampaigns = camp.campaignName;
		else
			this.selectedCampaigns = 'All Campaigns';
	}
	
	ngOnInit() {
		this.getAllCampaigns();
		this.getAllCards();
	}
}
