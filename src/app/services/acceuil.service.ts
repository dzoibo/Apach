import { Injectable } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  faHeart=faHeart; // we import it here because for now we can'timport two poperty with the same name in the home component.
  constructor() { }
}
