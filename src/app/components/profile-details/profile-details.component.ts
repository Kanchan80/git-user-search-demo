import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  userProfile: any;
  profileUrl: string = "";

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserDetails().subscribe((profileUrl) => {
      this.getDetailedProfile(profileUrl);
    })
  }

  getDetailedProfile(profileUrl) {
    this.profileService.fetchDetails(profileUrl).subscribe((profile) => {
      this.profileService.fetchDetails(profile.repos_url).subscribe((reposDetails) => {
        this.userProfile = reposDetails;
      })
    })
  }

}
