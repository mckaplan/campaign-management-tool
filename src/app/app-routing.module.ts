import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import(
      '../components/campaign-type/container/campaign-type-cont.module'
    ).then((m) => m.CampaignTypeContModule),
  },
  {
    path: 'campaign-type',
    loadChildren: () =>
      import(
        '../components/campaign-type/container/campaign-type-cont.module'
      ).then((m) => m.CampaignTypeContModule),
  },
  {
    path: 'campaign-detail',
    loadChildren: () =>
      import(
        '../components/campaign-detail/container/campaign-detail-cont.module'
      ).then((m) => m.CampaignDetailContModule),
  },
  {
    path: 'products-and-ad-group',
    loadChildren: () =>
      import(
        '../components/products-and-ad-group/container/products-and-ad-group-cont.module'
      ).then((m) => m.ProductsAndAdGroupContModule),
  },
  {
    path: 'keyword-list',
    loadChildren: () =>
      import(
        '../components/keyword-list/container/keyword-list-cont.module'
      ).then((m) => m.KeywordListContModule),
  },
  {
    path: 'campaign-list',
    loadChildren: () =>
      import(
        '../components/campaign-list/container/campaign-list-cont.module'
      ).then((m) => m.CampaignListContModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
