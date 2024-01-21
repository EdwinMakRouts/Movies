import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  title: string = '';
  overview: string = '';
  release_date: string = '';
  poster_path: string = '';
  original_language: string = '';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    this.title = queryParams['title'];
    this.overview = queryParams['overview'];
    this.release_date = queryParams['release_date'];
    this.poster_path = queryParams['poster_path'];
    this.original_language = queryParams['original_language'];
  }

  returnHome() {
    this.navCtrl.back();
  }
}
