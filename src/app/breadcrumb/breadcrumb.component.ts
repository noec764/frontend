import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {topic} from "../topics/topics.component";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private breadcrumbs: Array<any> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

  }

//
//   buildBreadCrumb(){
//     let routerUrl: string, routerList: Array<any>, target: any;
//
//     this._router.events.subscribe((router: any) => {
//       routerUrl = router.urlAfterRedirects;
//
//       if (routerUrl && typeof routerUrl === 'string') {
//         target = this.menu;
//         this.breadcrumbList.length = 0;
//         routerList = routerUrl.slice(1).split('/');
//         routerList.forEach((router, index) => {
//           target = target.find(page => page.path.slice(2) === router);
//           this.breadcrumbList.push({
//             name: target.name,
//             path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
//           });
//
//           if (index + 1 !== routerList.length) {
//             target = target.children;
//           }
//         });
//
//         console.log(this.breadcrumbList);
//       }
//     }
//
//   }
// }
}

export interface BreadcrumbData {
  nom: string,
  route: string
}
