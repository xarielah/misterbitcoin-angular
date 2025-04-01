import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin/bitcoin.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  userService: UserService = inject(UserService);
  user: User = this.userService.getUser();

  bitcoinService: BitcoinService = inject(BitcoinService);
  rate$: Observable<number> = this.bitcoinService.getRate();
}
