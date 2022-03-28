import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEdit = false;
  markerOptions = {
    origin: {
      draggable: false,
    },
    destination: {
      draggable: false,
    },
  }
  renderOptions = {
    suppressMarkers: true,
  }

  
  lat: Number = 40.211657003508144
  lng: Number = -8.44309341946412

  origin = { lat: 40.211657003508144, lng: -8.44309341946412 }
  destination = { lat: 40.166210298703, lng: -8.87219589987565 }
  waypoints = [
    //  {location: { lat: 39.0921167, lng: -94.8559005 }},
    //  {location: { lat: 41.8339037, lng: -87.8720468 }}
  ]

  enableEdit() {
    this.isEdit = true;
    this.markerOptions = {
      ...this.markerOptions,
      origin: {
        draggable: true,
      },
      destination: {
        draggable: true,
      }
    };
  }

  onChange(event: any) {
    console.log(event);
    // You can do anything.
  }

  onOriginDrag(event: any) {
    console.log('origin', event);
  }

  onDestinationDrag(event: any) {
    console.log('destination', event);
  }
}
