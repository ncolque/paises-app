import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisSvc: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisSvc.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });

    /* this.activatedRoute.params
    .subscribe(({id}) => {
      console.log(id);

      this.paisSvc.getPaisPorAlpha(id)
      .subscribe(pais => {
        console.log(pais);
      });
    }); */
  }
}
