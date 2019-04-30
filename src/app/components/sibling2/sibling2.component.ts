import { Component, OnInit } from "@angular/core";
import { StringService } from "src/app/services/StringService";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  data: string;
  subscription: Subscription;

  constructor(private ss: StringService) {}

  ngOnInit() {
    this.ss.current.subscribe(data => (this.data = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
