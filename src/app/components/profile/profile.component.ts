import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any[];
  userProfile: any[];
  username: string;
  sortedColumn: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  getUserDetails(profileUrl) {
    let userDetailsSections = document.body.getElementsByClassName("collapse show");
    if (typeof userDetailsSections != "undefined" && userDetailsSections != null && userDetailsSections.length != null
      && userDetailsSections.length > 0) {
      userDetailsSections[0].classList.remove('show');
    }
    this.profileService.sendCallBackUrl(profileUrl);
  }

  findProfile() {
    if (this.username !== "") {
      this.profileService.setUsername(this.username);
      this.profileService.getProfiles().subscribe((profiles) => {
        this.profiles = profiles;
      })
    }
  }

}
